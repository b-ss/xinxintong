<?php
namespace matter;

require_once dirname(__FILE__) . '/app_base.php';
/**
 * 登记类活动基类
 */
abstract class enroll_base extends app_base {
	/**
	 * 根据用户指定的规则设置
	 */
	protected function setEntryRuleByProto($oSite, &$oEntryRule, $oProtoEntryRule) {
		$oEntryRule->scope = $oProtoEntryRule->scope;
		switch ($oEntryRule->scope) {
		case 'group':
			if (!empty($oProtoEntryRule->group->id) && !empty($oProtoEntryRule->group->round->id)) {
				$oEntryRule->group = (object) ['id' => $oProtoEntryRule->group->id];
				$oEntryRule->group->round = (object) ['id' => $oProtoEntryRule->group->round->id];
			}
			break;
		case 'member':
			if (isset($oProtoEntryRule->mschemas)) {
				$oEntryRule->member = new \stdClass;
				foreach ($oProtoEntryRule->mschemas as $oMschema) {
					$oRule = new \stdClass;
					$oRule->entry = isset($oEntryRule->otherwise->entry) ? $oEntryRule->otherwise->entry : '';
					$oEntryRule->member->{$oMschema->id} = $oRule;
				}
				$oEntryRule->other = new \stdClass;
				$oEntryRule->other->entry = '$memberschema';
			}
			break;
		case 'sns':
			$oRule = new \stdClass;
			$oRule->entry = isset($oEntryRule->otherwise->entry) ? $oEntryRule->otherwise->entry : '';
			$oSns = new \stdClass;
			if (isset($oProtoEntryRule->sns)) {
				foreach ($oProtoEntryRule->sns as $snsName => $bValid) {
					if ($bValid) {
						$oSns->{$snsName} = $oRule;
					}
				}
			} else {
				$modelWx = $this->model('sns\wx');
				$wxOptions = ['fields' => 'joined'];
				if (($wx = $modelWx->bySite($oSite->id, $wxOptions)) && $wx->joined === 'Y') {
					$oSns->wx = $oRule;
				} else if (($wx = $modelWx->bySite('platform', $wxOptions)) && $wx->joined === 'Y') {
					$oSns->wx = $oRule;
				}
				$yxOptions = ['fields' => 'joined'];
				if ($yx = $this->model('sns\yx')->bySite($oSite->id, $yxOptions)) {
					if ($yx->joined === 'Y') {
						$oSns->yx = $oRule;
					}
				}
				if ($qy = $this->model('sns\qy')->bySite($oSite->id, ['fields' => 'joined'])) {
					if ($qy->joined === 'Y') {
						$oSns->qy = $oRule;
					}
				}
			}
			$oEntryRule->sns = $oSns;
			$oEntryRule->other = new \stdClass;
			$oEntryRule->other->entry = '$mpfollow';
			break;
		}

		return $oEntryRule;
	}
	/**
	 * 根据项目指定的规则设置
	 */
	protected function setEntryRuleByMission(&$oEntryRule, $oMisEntryRule) {
		if (isset($oMisEntryRule->scope) && $oMisEntryRule->scope !== 'none') {
			$oEntryRule->scope = $oMisEntryRule->scope;
			switch ($oEntryRule->scope) {
			case 'member':
				if (isset($oMisEntryRule->member)) {
					$oEntryRule->member = $oMisEntryRule->member;
					foreach ($oEntryRule->member as &$oRule) {
						$oRule->entry = isset($oEntryRule->otherwise->entry) ? $oEntryRule->otherwise->entry : '';
					}
					$oEntryRule->other = new \stdClass;
					$oEntryRule->other->entry = '$memberschema';
				}
				break;
			case 'sns':
				$oEntryRule->sns = new \stdClass;
				if (isset($oMisEntryRule->sns)) {
					foreach ($oMisEntryRule->sns as $snsName => $oRule) {
						if (isset($oRule->entry) && $oRule->entry === 'Y') {
							$oEntryRule->sns->{$snsName} = new \stdClass;
							$oEntryRule->sns->{$snsName}->entry = isset($oEntryRule->otherwise->entry) ? $oEntryRule->otherwise->entry : '';
						}
					}
					$oEntryRule->other = new \stdClass;
					$oEntryRule->other->entry = '$mpfollow';
				}
				break;
			}
		}

		return $oEntryRule;
	}
	/**
	 * 根据关联的分组活动设置题目
	 * 1.添加分组的轮次
	 * 2.关联姓名
	 */
	protected function setSchemaByGroupApp($groupAppId, &$oTemplateConfig) {
		$oGroupApp = $this->model('matter\group')->byId($groupAppId, ['cascaded' => 'Y']);
		if (false === $oGroupApp) {
			return $oTemplateConfig;
		}
		/* 关联姓名字段 */
		if (!empty($oTemplateConfig->schema)) {
			foreach ($oGroupApp->dataSchemas as $oGrpSchema) {
				if (($oGrpSchema->id === 'name' && $oGrpSchema->type === 'shorttext') || ($oGrpSchema->id === 'member.name' && in_array($oGrpSchema->type, ['member', 'shorttext']))) {
					$oGrpNameSchema = $oGrpSchema;
					break;
				}
			}
			if (isset($oGrpNameSchema)) {
				/* 替换模板中包含的姓名题 */
				foreach ($oTemplateConfig->schema as $oTmplSchema) {
					if (($oTmplSchema->id === 'name' && $oTmplSchema->type === 'shorttext') || ($oTmplSchema->id === 'member.name' && $oTmplSchema->type === 'member')) {
						$oTmplSchema->fromApp = $groupAppId;
						$oTmplSchema->requireCheck = 'Y';
						if ($oTmplSchema->type === 'member') {
							$oTmplSchema->type = 'shorttext';
							unset($oTmplSchema->schema_id);
						}
						if ($oTmplSchema->id === 'member.name') {
							$oTmplSchema->id = 'name';
						}
						$oTmplNameSchema = $oTmplSchema;
						break;
					}
				}
				if (isset($oTmplNameSchema)) {
					/* 替换页面中包含的姓名题 */
					foreach ($oTemplateConfig->pages as $oTmplPage) {
						if (!empty($oTmplPage->data_schemas)) {
							foreach ($oTmplPage->data_schemas as $oTmplPageWrap) {
								$oTmplPageSchema = $oTmplPageWrap->schema;
								if ($oTmplPageSchema->id === $oTmplNameSchema) {
									$oTmplPageSchema->fromApp = $groupAppId;
									$oTmplPageSchema->requireCheck = 'Y';
									if ($oTmplPageSchema->type === 'member') {
										$oTmplPageSchema->type = 'shorttext';
										unset($oTmplPageSchema->schema_id);
									}
									if ($oTmplPageSchema->id === 'member.name') {
										$oTmplPageSchema->id = 'name';
									}
									break;
								}
							}
						}
					}
				} else {
					/* 模板中没有姓名题，添加 */
					$oNameSchema = new \stdClass;
					$oNameSchema->id = $oGrpNameSchema->id;
					$oNameSchema->type = $oGrpNameSchema->type;
					$oNameSchema->title = $oGrpNameSchema->title;
					$oNameSchema->format = 'name';
					$oNameSchema->required = 'Y';
					$oNameSchema->fromApp = $groupAppId;
					$oNameSchema->requireCheck = 'Y';
					if (empty($oTemplateConfig->schema)) {
						$oTemplateConfig->schema = [$oNameSchema];
					} else {
						array_splice($oTemplateConfig->schema, 0, 0, [$oNameSchema]);
					}
					/**
					 * 处理页面数据定义
					 */
					foreach ($oTemplateConfig->pages as $oAppPage) {
						if (!empty($oAppPage->data_schemas)) {
							/* 自动添加项目阶段定义 */
							if ($oAppPage->type === 'I') {
								$newPageSchema = new \stdClass;
								$schemaPhaseConfig = new \stdClass;
								$schemaPhaseConfig->showname = 'label';
								$newPageSchema->schema = $oNameSchema;
								$newPageSchema->config = $schemaPhaseConfig;
								array_splice($oAppPage->data_schemas, 0, 0, [$newPageSchema]);
							} else if ($oAppPage->type === 'V') {
								$newPageSchema = new \stdClass;
								$schemaPhaseConfig = new \stdClass;
								$schemaPhaseConfig->id = 'V' . time();
								$schemaPhaseConfig->pattern = 'record';
								$schemaPhaseConfig->splitLine = 'Y';
								$newPageSchema->schema = $oNameSchema;
								$newPageSchema->config = $schemaPhaseConfig;
								array_splice($oAppPage->data_schemas, 0, 0, [$newPageSchema]);
							}
						}
					}
				}
			}
		}
		/* 分组活动轮次 */
		$oRoundSchema = new \stdClass;
		$oRoundSchema->id = '_round_id';
		$oRoundSchema->type = 'single';
		$oRoundSchema->title = '分组名称';
		$oRoundSchema->required = 'Y';
		$oRoundSchema->fromApp = $groupAppId;
		$oRoundSchema->requireCheck = 'Y';
		$oRoundSchema->ops = [];
		if (!empty($oGroupApp->rounds)) {
			foreach ($oGroupApp->rounds as $oRound) {
				$op = new \stdClass;
				$op->v = $oRound->round_id;
				$op->l = $oRound->title;
				$oRoundSchema->ops[] = $op;
			}
		}
		if (empty($oTemplateConfig->schema)) {
			$oTemplateConfig->schema = [$oRoundSchema];
		} else {
			array_splice($oTemplateConfig->schema, 0, 0, [$oRoundSchema]);
		}
		/**
		 * 处理页面数据定义
		 */
		foreach ($oTemplateConfig->pages as $oAppPage) {
			if (!empty($oAppPage->data_schemas)) {
				/* 自动添加项目阶段定义 */
				if ($oAppPage->type === 'I') {
					$newPageSchema = new \stdClass;
					$schemaPhaseConfig = new \stdClass;
					$schemaPhaseConfig->component = 'R';
					$schemaPhaseConfig->align = 'V';
					$newPageSchema->schema = $oRoundSchema;
					$newPageSchema->config = $schemaPhaseConfig;
					array_splice($oAppPage->data_schemas, 0, 0, [$newPageSchema]);
				} else if ($oAppPage->type === 'V') {
					$newPageSchema = new \stdClass;
					$schemaPhaseConfig = new \stdClass;
					$schemaPhaseConfig->id = 'V' . time();
					$schemaPhaseConfig->pattern = 'record';
					$schemaPhaseConfig->splitLine = 'Y';
					$newPageSchema->schema = $oRoundSchema;
					$newPageSchema->config = $schemaPhaseConfig;
					array_splice($oAppPage->data_schemas, 0, 0, [$newPageSchema]);
				}
			}
		}

		return $oTemplateConfig;
	}
	/**
	 * 根据关联的通讯录设置题目
	 */
	protected function setSchemaByMschema($mschemaId, &$oTemplateConfig) {
		/* 通讯录关联题目 */
		$oMschema1st = $this->model('site\user\memberschema')->byId($mschemaId, ['fields' => 'id,attr_name,attr_mobile,attr_email', 'cascaded' => 'N']);
		/* 应用的题目 */
		foreach ($oTemplateConfig->schema as $oSchema) {
			if ($oSchema->type === 'shorttext' && in_array($oSchema->id, ['name', 'email', 'mobile'])) {
				if (false === $oMschema1st->attrs->{$oSchema->id}->hide) {
					$oSchema->type = 'member';
					$oSchema->schema_id = $oMschema1st->id;
					$oSchema->id = 'member.' . $oSchema->id;
				}
			}
		}
		/* 页面的题目 */
		foreach ($oTemplateConfig->pages as $oAppPage) {
			if (!empty($oAppPage->data_schemas)) {
				foreach ($oAppPage->data_schemas as $oSchemaConfig) {
					$oSchema = $oSchemaConfig->schema;
					if ($oSchema->type === 'shorttext' && in_array($oSchema->id, ['name', 'email', 'mobile'])) {
						if (false === $oMschema1st->attrs->{$oSchema->id}->hide) {
							$oSchema->type = 'member';
							$oSchema->schema_id = $oMschema1st->id;
							$oSchema->id = 'member.' . $oSchema->id;
						}
					}
				}
			}
		}

		return $oTemplateConfig;
	}
	/**
	 * 查找能用作记录昵称的题目
	 */
	public function findAssignedNicknameSchema($schemas) {
		$oNicknameSchema = null;
		foreach ($schemas as $oSchema) {
			if (isset($oSchema->required) && $oSchema->required === 'Y') {
				if (in_array($oSchema->type, ['shorttext', 'member'])) {
					if ($oSchema->title === '姓名') {
						$oNicknameSchema = $oSchema;
						break;
					}
					if (strpos($oSchema->title, '姓名')) {
						if (!isset($oNicknameSchema) || strlen($oSchema->title) < strlen($oNicknameSchema->title)) {
							$oNicknameSchema = $oSchema;
						}
					} else if (isset($oSchema->format) && $oSchema->format === 'name') {
						$oNicknameSchema = $oSchema;
					}
				}
			}
		}

		return $oNicknameSchema;
	}
	/**
	 * 获得进入规则中指定的通讯录
	 */
	public function getEntryMemberSchema($oEntryRule) {
		$aMatterMschemas = [];
		if (isset($oEntryRule->member)) {
			$modelMsc = $this->model('site\user\memberschema');
			foreach (array_keys((array) $oEntryRule->member) as $mschemaId) {
				$oMschema = $modelMsc->byId($mschemaId, ['cascaded' => 'N']);
				if (!empty($oMschema->matter_type)) {
					$aMatterMschemas[] = $oMschema;
				}
			}
		}

		return $aMatterMschemas;
	}
	/**
	 * 替换应用中的通讯录题型
	 */
	public function replaceMemberSchema(&$aDataSchemas, $oMschema = null, $bKeepSchemaId = false) {
		foreach ($aDataSchemas as $oSchema) {
			/* 和通讯录解除关联 */
			if ($oSchema->type === 'member' && (empty($oMschema) || $oSchema->schema_id === $oMschema->id)) {
				$oSchema->type = 'shorttext';
				$memberProp = str_replace('member.', '', $oSchema->id);
				if (!$bKeepSchemaId) {
					$oSchema->id = $memberProp;
				}
				if (in_array($memberProp, ['name', 'mobile', 'email'])) {
					$oSchema->format = $memberProp;
				} else {
					$oSchema->format = '';
				}
				unset($oSchema->schema_id);
			}
		}

		return [true];
	}
	/**
	 * 替换应用中的关联登记或分组活动题型
	 */
	public function replaceAssocSchema(&$aDataSchemas, $aAssocAppIds = null) {
		foreach ($aDataSchemas as $oSchema) {
			/* 和分组活动解除关联 */
			if (isset($oSchema->fromApp) && (empty($aAssocAppIds) || in_array($oSchema->fromApp, $aAssocAppIds))) {
				unset($oSchema->fromApp);
				unset($oSchema->requieCheck);
			}
		}

		return [true];
	}
	/**
	 * 解除和项目的关联
	 */
	public function quitMission($oApp) {
		$modelPg = $this->model('matter\\' . $this->getTypeName() . '\\page');
		$oUpdatedApp = new \stdClass; // 要更新的活动数据
		$aUpdatedPages = []; // 要更新的页面数据
		$aDataSchemas = $oApp->dataSchemas;
		$bDataSchemasModified = false;
		$oEntryRule = $oApp->entry_rule;
		$bEntryRuleModified = false;

		/* 移除和项目中其他活动的关联 */
		$aAssocApps = [];
		if (!empty($oApp->group_app_id)) {
			$aAssocApps[] = $oApp->group_app_id;
			$oUpdatedApp->group_app_id = $oApp->group_app_id = '';
		}
		if (!empty($oApp->enroll_app_id)) {
			$aAssocApps[] = $oApp->enroll_app_id;
			$oUpdatedApp->enroll_app_id = $oApp->enroll_app_id = '';
		}
		if (count($aAssocApps)) {
			/* 页面的题目 */
			foreach ($oApp->pages as $oPage) {
				$rst = $modelPg->replaceAssocSchema($oPage, $aAssocApps);
				if (true === $rst[0]) {
					$aUpdatedPages[$oPage->id] = $oPage;
				}
			}
			/* 应用的题目 */
			$rst = $this->replaceAssocSchema($aDataSchemas, $aAssocApps);
			if (true === $rst[0]) {
				$bDataSchemasModified = true;
			}
		}

		/* 移除和项目通讯录的关联 */
		if (isset($oEntryRule->scope) && $oEntryRule->scope === 'member') {
			$aMatterMschemas = $this->getEntryMemberSchema($oEntryRule);
			foreach ($aMatterMschemas as $oMschema) {
				if (!empty($oMschema->matter_type)) {
					/* 页面的题目 */
					foreach ($oApp->pages as $oPage) {
						$rst = $modelPg->replaceMemberSchema($oPage, $oMschema);
						if (true === $rst[0]) {
							$aUpdatedPages[$oPage->id] = $oPage;
						}
					}
					/* 应用的题目 */
					$rst = $this->replaceMemberSchema($aDataSchemas, $oMschema);
					if (true === $rst[0]) {
						$bDataSchemasModified = true;
					}
					unset($oEntryRule->member->{$oMschema->id});
					$bEntryRuleModified = true;
				}
			}
			if (count((array) $oEntryRule->member) === 0) {
				$oEntryRule->scope = 'none';
				unset($oEntryRule->member);
			}
		}

		/* 设置更新的属性 */
		$oUpdatedApp->mission_id = $oApp->mission_id = 0;
		$oUpdatedApp->mission_phase_id = $oApp->mission_phase_id = '';
		if ($bDataSchemasModified) {
			$oUpdatedApp->data_schemas = $this->escape($this->toJson($aDataSchemas));
		}if ($bEntryRuleModified) {
			$oUpdatedApp->entry_rule = json_encode($oEntryRule);
		}
		if (count($aUpdatedPages)) {
			$oUpdatedApp->pages = $aUpdatedPages;
		}

		return [true, $oUpdatedApp];
	}
}