<?php
namespace op\merchant;

require_once dirname(dirname(dirname(__FILE__))) . '/member_base.php';
/**
 * 订单
 */
class order extends \member_base {
	/**
	 *
	 */
	public function get_access_rule() {
		$rule_action['rule_type'] = 'black';
		$rule_action['actions'] = array();

		return $rule_action;
	}
	/**
	 *
	 */
	public function index_action($mpid = null, $shop = null, $order = null) {
		\TPL::output('/op/merchant/order');
		exit;
	}
	/**
	 *
	 */
	public function pageGet_action($mpid, $shop) {
		// current visitor
		$user = $this->getUser($mpid);
		// page
		$page = $this->model('app\merchant\page')->byType($shop, 'op.order');
		if (empty($page)) {
			return new \ResponseError('没有获得订单页定义');
		}
		$page = $page[0];

		$params = array(
			'user' => $user,
			'page' => $page,
		);

		return new \ResponseData($params);
	}
	/**
	 * 查看订单
	 */
	public function get_action($mpid, $order) {
		//$fan = $this->getCookieOAuthUser($mpid);
		//if (empty($fan->openid))
		//    return new \ResponseError('无法获得当前用户身份信息');
		//
		$order = $this->model('app\merchant\order')->byId($order);
		//
		$sku = $this->model('app\merchant\sku')->byId($order->product_sku);
		if ($sku === false) {
			return new \ResponseError('指定的库存不存在');
		}

		$modelProd = $this->model('app\merchant\product');
		$prod = $modelProd->byId($sku->prod_id);
		$cascaded = $modelProd->cascaded($prod->id);

		$prodPropValues = array();
		foreach ($cascaded->catelog->properties as $prop) {
			$prodPropValues[] = array(
				'name' => $prop->name,
				'value' => $cascaded->propValue2->{$prop->id}->name,
			);
		}
		$prod->propValues = $prodPropValues;

		return new \ResponseData(array('order' => $order, 'sku' => $sku, 'product' => $prod, 'catelog' => $cascaded->catelog, 'propValues' => $cascaded->propValue2));
	}
}