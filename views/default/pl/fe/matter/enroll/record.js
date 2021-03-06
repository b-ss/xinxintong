define(['frame'], function (ngApp) {
  'use strict'
  ngApp.provider.controller('ctrlRecord', [
    '$scope',
    '$parse',
    '$timeout',
    '$uibModal',
    'srvEnrollApp',
    'srvEnrollRound',
    'tkEnrollRound',
    'srvEnrollRecord',
    '$filter',
    'http2',
    'noticebox',
    'tmsRowPicker',
    function (
      $scope,
      $parse,
      $timeout,
      $uibModal,
      srvEnlApp,
      srvEnlRnd,
      tkEnlRnd,
      srvEnlRec,
      $filter,
      http2,
      noticebox,
      tmsRowPicker
    ) {
      function fnSum4Schema() {
        var sum4SchemaAtPage
        $scope.sum4SchemaAtPage = sum4SchemaAtPage = {}
        if ($scope.bRequireSum) {
          srvEnlRec.sum4Schema().then(function (oResult) {
            $scope.sum4Schema = oResult
            for (var schemaId in oResult) {
              if ($scope.records.length) {
                $scope.records.forEach(function (oRecord) {
                  var recValue, sumValue
                  if ((recValue = oRecord.data[schemaId])) {
                    if (angular.isObject(recValue)) {
                      // 打分题的情况
                      sumValue = 0
                      angular.forEach(recValue, function (v) {
                        sumValue += parseFloat(v)
                      })
                    } else {
                      sumValue = parseFloat(recValue)
                    }
                    if (sum4SchemaAtPage[schemaId]) {
                      sum4SchemaAtPage[schemaId] += sumValue
                    } else {
                      sum4SchemaAtPage[schemaId] = sumValue
                    }
                  }
                })
                if (sum4SchemaAtPage[schemaId]) {
                  sum4SchemaAtPage[schemaId] = $filter('number')(
                    sum4SchemaAtPage[schemaId],
                    2
                  ).replace('.00', '')
                }
              } else {
                sum4SchemaAtPage[schemaId] = 0
              }
            }
          })
        }
      }

      function fnScore4Schema() {
        var score4SchemaAtPage
        $scope.score4SchemaAtPage = score4SchemaAtPage = {
          sum: 0,
        }
        if ($scope.bRequireScore) {
          srvEnlRec.score4Schema().then(function (result) {
            $scope.score4Schema = result
            for (var schemaId in result) {
              if ($scope.records.length) {
                $scope.records.forEach(function (oRecord) {
                  if (oRecord.score) {
                    if (score4SchemaAtPage[schemaId]) {
                      score4SchemaAtPage[schemaId] += parseFloat(
                        oRecord.score[schemaId] || 0
                      )
                    } else {
                      score4SchemaAtPage[schemaId] = parseFloat(
                        oRecord.score[schemaId] || 0
                      )
                    }
                  }
                })
                if (score4SchemaAtPage[schemaId]) {
                  score4SchemaAtPage[schemaId] = $filter('number')(
                    score4SchemaAtPage[schemaId],
                    2
                  ).replace('.00', '')
                }
              } else {
                score4SchemaAtPage[schemaId] = 0
              }
            }
          })
        }
      }
      $scope.clickAdvCriteria = function (event) {
        event.preventDefault()
        event.stopPropagation()
      }
      $scope.shiftOrderBy = function () {
        if ($scope.criteria.order.orderby == 'sum') {
          $scope.criteria.order.schemaId = ''
        }
      }
      $scope.doSearch = function (pageNumber) {
        $scope.rows.reset()
        srvEnlRec.search(pageNumber).then(function () {
          $scope.bRequireSum && fnSum4Schema()
          $scope.bRequireScore &&
            $timeout(function () {
              fnScore4Schema()
            })
        })
      }
      $scope.$on('search-tag.xxt.combox.done', function (event, aSelected) {
        $scope.criteria.tags = $scope.criteria.tags.concat(aSelected)
        $scope.doSearch()
      })
      $scope.$on('search-tag.xxt.combox.del', function (event, removed) {
        var i = $scope.criteria.tags.indexOf(removed)
        $scope.criteria.tags.splice(i, 1)
        $scope.doSearch()
      })
      $scope.filter = function () {
        srvEnlRec.filter().then(function () {
          $scope.rows.reset()
          $scope.bRequireSum && fnSum4Schema()
          $scope.bRequireScore &&
            $timeout(function () {
              fnScore4Schema()
            })
        })
      }
      // 解决member.xxx的问题
      $scope.parseRecordData = function (oRecData, oSchema) {
        return $parse(oSchema.id)(oRecData)
      }
      $scope.editRecord = function (record) {
        var newUrl =
          '/rest/pl/fe/matter/enroll/editor?site=' +
          $scope.app.siteid +
          '&id=' +
          $scope.app.id +
          '&ek='
        newUrl += record ? record.enroll_key : ''
        window.open(newUrl, '_blank')
      }
      $scope.batchTag = function () {
        if ($scope.rows.count) {
          srvEnlRec.batchTag($scope.rows)
        }
      }
      $scope.removeRecord = function (record) {
        srvEnlRec.remove(record)
      }
      $scope.batchRemove = function () {
        if ($scope.rows.count) {
          noticebox.confirm('删除选中的记录，确定？').then(function () {
            srvEnlRec.batchRemove($scope.rows)
          })
        }
      }
      $scope.empty = function () {
        srvEnlRec.empty()
      }
      $scope.verifyAll = function () {
        srvEnlRec.verifyAll()
      }
      $scope.batchVerify = function () {
        if ($scope.rows.count) {
          srvEnlRec.batchVerify($scope.rows)
        }
      }
      $scope.export = function () {
        $uibModal
          .open({
            templateUrl: 'exportXlsx.html',
            controller: [
              '$scope',
              '$uibModalInstance',
              function ($scope2, $mi) {
                $scope2.config = {
                  joinDirs: 'N',
                }
                $scope2.cancel = function () {
                  $mi.dismiss()
                }
                $scope2.ok = function () {
                  $mi.close($scope2.config)
                }
              },
            ],
          })
          .result.then(function (result) {
            srvEnlRec.export(result.joinDirs)
          })
      }
      // 按轮次导出图片
      $scope.exportImage = function () {
        tkEnlRnd.pick($scope.app).then(function (oResult) {
          if (
            oResult &&
            oResult.rid &&
            angular.isString(oResult.rid) &&
            oResult.rid.length
          ) {
            srvEnlRec.exportImage(oResult.rid)
          }
        })
      }
      $scope.renewScoreByRound = function () {
        srvEnlRnd.list().then(function (oResult) {
          var rounds = oResult.rounds

          function renewScoreByRound(i) {
            var oRound
            if (i < rounds.length) {
              srvEnlApp.renewScoreByRound(rounds[i].rid).then(function () {
                renewScoreByRound(++i)
              })
            } else {
              noticebox.success('完成【' + i + '】个轮次数据的更新')
              $scope.doSearch(1)
            }
          }
          renewScoreByRound(0)
        })
      }
      $scope.renewScore = function () {
        srvEnlRec.renewScore($scope.rows).then(function () {
          $scope.rows.reset()
          $scope.doSearch()
        })
      }
      $scope.importByOther = function () {
        srvEnlRec.importByOther().then(function () {
          $scope.rows.reset()
        })
      }
      $scope.exportToOther = function () {
        srvEnlRec.exportToOther($scope.app, $scope.rows)
      }
      $scope.transferVotes = function () {
        srvEnlRec.transferVotes($scope.app)
      }
      $scope.transferSchemaAndVotes = function () {
        srvEnlRec.transferSchemaAndVotes($scope.app)
      }
      $scope.transferGroupAndMarks = function () {
        srvEnlRec.transferGroupAndMarks($scope.app)
      }
      $scope.fillByOther = function () {
        srvEnlRec.fillByOther($scope.app)
      }
      $scope.openFileUrl = function (file) {
        var url
        url =
          '/rest/site/fe/matter/enroll/attachment/download?app=' + $scope.app.id
        url += '&file=' + JSON.stringify(file)
        window.open(url)
      }
      $scope.syncMissionUser = function () {
        http2
          .post('/rest/script/time', {
            html: {
              rounds:
                '/views/default/pl/fe/matter/enroll/component/roundPicker',
            },
          })
          .then(function (rsp) {
            $uibModal
              .open({
                templateUrl:
                  '/views/default/pl/fe/matter/enroll/component/roundPicker.html?_=' +
                  rsp.data.html.rounds.time,
                controller: [
                  '$scope',
                  '$uibModalInstance',
                  'tkEnrollRound',
                  function ($scope2, $mi, tkEnlRnd) {
                    var _oPage, _oResult
                    $scope2.page = _oPage = {}
                    $scope2.result = _oResult = {}
                    $scope2.doSearch = function () {
                      tkEnlRnd
                        .list($scope.app, _oPage)
                        .then(function (oResult) {
                          $scope2.rounds = oResult.rounds
                        })
                    }
                    $scope2.dismiss = function () {
                      $mi.dismiss()
                    }
                    $scope2.ok = function () {
                      if (_oResult.rid) {
                        http2
                          .get(
                            '/rest/pl/fe/matter/enroll/record/syncMissionUser?app=' +
                              $scope.app.id +
                              '&round=' +
                              _oResult.rid
                          )
                          .then(function (rsp) {
                            rsp.data > 0 ? $mi.close() : $mi.dismiss()
                          })
                      }
                    }
                    $scope2.doSearch()
                  },
                ],
              })
              .result.then(function () {
                $scope.doSearch(1)
              })
          })
      }
      $scope.syncWithDataSource = function () {
        http2
          .post('/rest/script/time', {
            html: {
              rounds:
                '/views/default/pl/fe/matter/enroll/component/roundPicker',
            },
          })
          .then(function (rsp) {
            $uibModal
              .open({
                templateUrl:
                  '/views/default/pl/fe/matter/enroll/component/roundPicker.html?_=' +
                  rsp.data.html.rounds.time,
                controller: [
                  '$scope',
                  '$q',
                  '$uibModalInstance',
                  'tkEnrollRound',
                  'noticebox',
                  function ($scope2, $q, $mi, tkEnlRnd, noticebox) {
                    var _oPage, _oResult
                    $scope2.page = _oPage = {}
                    $scope2.result = _oResult = {}
                    $scope2.doSearch = function () {
                      tkEnlRnd
                        .list($scope.app, _oPage)
                        .then(function (oResult) {
                          $scope2.rounds = oResult.rounds
                        })
                    }
                    $scope2.dismiss = function () {
                      $mi.dismiss()
                    }
                    $scope2.ok = function () {
                      var fnSync, url
                      if (_oResult.rid) {
                        url =
                          '/rest/pl/fe/matter/enroll/record/syncWithDataSource?app=' +
                          $scope.app.id +
                          '&round=' +
                          _oResult.rid
                        fnSync = function (step) {
                          var defer
                          defer = $q.defer()
                          http2.get(url + '&step=' + step).then(function (rsp) {
                            if (rsp.data.left > 0) {
                              noticebox.progress(
                                rsp.data.left + '/' + rsp.data.steps
                              )
                              fnSync(rsp.data.step + 1).then(function (rsp) {
                                defer.resolve(rsp)
                              })
                            } else {
                              defer.resolve(rsp)
                            }
                          })
                          return defer.promise
                        }
                        fnSync(1).then(function () {
                          noticebox.close()
                          $mi.close()
                        })
                      }
                    }
                    $scope2.doSearch()
                  },
                ],
              })
              .result.then(function () {
                $scope.doSearch(1)
              })
          })
      }
      $scope.syncWithGroupApp = function () {
        $uibModal
          .open({
            templateUrl: 'syncWithGroupApp.html',
            controller: [
              '$scope',
              '$uibModalInstance',
              'tkEnrollRound',
              function ($scope2, $mi, tkEnlRnd) {
                var _oPage
                $scope2.page = _oPage = {}
                $scope2.doSearch = function () {
                  tkEnlRnd.list($scope.app, _oPage).then(function (oResult) {
                    $scope2.rounds = oResult.rounds
                  })
                }
                $scope2.config = {
                  $overwrite: 'N',
                }
                $scope2.ok = function () {
                  $mi.close($scope2.config)
                }
                $scope2.cancel = function () {
                  $mi.dismiss('cancel')
                }
                $scope2.doSearch()
              },
            ],
            backdrop: 'static',
          })
          .result.then(function (oConfig) {
            var url
            if (oConfig.rid) {
              url =
                '/rest/pl/fe/matter/enroll/record/syncGroup?app=' +
                $scope.app.id +
                '&rid=' +
                oConfig.rid +
                '&overwrite=' +
                oConfig.overwrite
              http2.get(url).then(function (rsp) {
                $scope.doSearch(1)
              })
            }
          })
      }
      $scope.syncWithMschema = function () {
        $uibModal
          .open({
            templateUrl: 'syncWithMschema.html',
            controller: [
              '$scope',
              '$uibModalInstance',
              'tkEnrollRound',
              function ($scope2, $mi, tkEnlRnd) {
                var _oPage
                $scope2.page = _oPage = {}
                $scope2.doSearch = function () {
                  tkEnlRnd.list($scope.app, _oPage).then(function (oResult) {
                    $scope2.rounds = oResult.rounds
                  })
                }
                $scope2.config = {
                  $overwrite: 'N',
                }
                $scope2.ok = function () {
                  $mi.close($scope2.config)
                }
                $scope2.cancel = function () {
                  $mi.dismiss('cancel')
                }
                $scope2.doSearch()
              },
            ],
            backdrop: 'static',
          })
          .result.then(function (oConfig) {
            var url
            if (oConfig.rid) {
              url =
                '/rest/pl/fe/matter/enroll/record/syncMschema?app=' +
                $scope.app.id +
                '&rid=' +
                oConfig.rid +
                '&overwrite=' +
                oConfig.overwrite
              http2.get(url).then(function (rsp) {
                $scope.doSearch(1)
              })
            }
          })
      }
      $scope.copyToUser = function () {
        var oCopiedRecord
        if ($scope.rows.count === 1) {
          oCopiedRecord = $scope.records[$scope.rows.indexes()[0]]
        }
        if (!oCopiedRecord) {
          return
        }
        http2
          .post('/rest/script/time', {
            html: {
              enrollee:
                '/views/default/pl/fe/matter/enroll/component/assignedPicker',
            },
          })
          .then(function (rsp) {
            $uibModal
              .open({
                templateUrl:
                  '/views/default/pl/fe/matter/enroll/component/assignedPicker.html?_=' +
                  rsp.data.html.enrollee.time,
                controller: [
                  '$scope',
                  '$uibModalInstance',
                  'tmsRowPicker',
                  'facListFilter',
                  function ($scope2, $mi, tmsRowPicker, facListFilter) {
                    var _oRows
                    $scope2.tmsTableWrapReady = 'Y'
                    $scope2.rows = _oRows = new tmsRowPicker()
                    $scope2.doSearch = function (pageAt) {
                      var url
                      _oRows.reset()
                      url =
                        '/rest/pl/fe/matter/enroll/user/assigned?app=' +
                        $scope.app.id
                      http2.get(url).then(function (rsp) {
                        $scope2.users = rsp.data.users
                      })
                    }
                    $scope2.execute = function (bClose) {
                      var picked
                      if (_oRows.count) {
                        picked = []
                        for (var i in _oRows.selected) {
                          picked.push($scope2.users[i])
                        }
                        if (bClose) {
                          $mi.close(picked)
                        }
                      }
                    }
                    $scope2.cancel = function () {
                      $mi.dismiss('cancel')
                    }
                    $scope2.doSearch(1)
                  },
                ],
                windowClass: 'auto-height',
                backdrop: 'static',
                size: 'lg',
              })
              .result.then(function (users) {
                if (users && users.length === 1) {
                  http2
                    .get(
                      '/rest/pl/fe/matter/enroll/record/copy?ek=' +
                        oCopiedRecord.enroll_key +
                        '&owner=' +
                        users[0].userid
                    )
                    .then(function () {
                      $scope.doSearch()
                    })
                }
              })
          })
      }
      $scope.listCowork = function (oSchema, pageNumber) {
        $scope.currentSchema = oSchema
        srvEnlRec.listCowork(oSchema, pageNumber).then(function (data) {
          $scope.coworks = data.recordDatas
          $scope.category = 'cowork'
        })
      }
      $scope.toggleRecord = function () {
        $scope.category = 'record'
        $scope.doSearch(1)
      }
      // 选中的记录
      $scope.rows = new tmsRowPicker()
      $scope.$watch('rows.allSelected', function (checked) {
        $scope.rows.setAllSelected(checked, $scope.records.length)
      })
      $scope.page = {} // 分页条件
      $scope.criteria = {} // 过滤条件
      $scope.records = [] // 登记记录
      $scope.category = 'record'
      $scope.tmsTableWrapReady = 'N'
      srvEnlApp.get().then(function (oApp) {
        http2
          .get('/rest/pl/fe/matter/enroll/schema/get?app=' + oApp.id)
          .then(function (rsp) {
            rsp.data.forEach(function (oSchema) {
              oApp._unionSchemasById[oSchema.id] = oSchema
            })
            srvEnlRec.init(oApp, $scope.page, $scope.criteria, $scope.records)
            // schemas
            var recordSchemas = [],
              recordSchemasExt = [],
              coworkSchemasExt = [],
              enrollDataSchemas = [],
              coworkSchemas = [],
              bRequireSum = false,
              bRequireScore = false,
              groupDataSchemas = []

            rsp.data.forEach(function (oSchema) {
              if (/html|image/.test(oSchema.type)) {
                return
              }
              recordSchemas.push(oSchema)
              recordSchemasExt.push(oSchema)

              if (oSchema.type === 'multitext' && oSchema.cowork === 'Y') {
                coworkSchemas.push(oSchema)
              } else {
                coworkSchemasExt.push(oSchema)
              }

              if (oSchema.supplement && oSchema.supplement === 'Y')
                recordSchemasExt.push({
                  type: 'supplement',
                  title: '补充说明',
                  id: oSchema.id,
                })
              if (oSchema.requireScore && oSchema.requireScore === 'Y') {
                recordSchemasExt.push({
                  type: 'calcScore',
                  title: '数据分',
                  id: oSchema.id,
                })
                bRequireScore = true
                if (oSchema.type === 'score') {
                  bRequireSum = true
                }
              }
              if (oSchema.format && oSchema.format === 'number') {
                bRequireSum = true
              }
              if (oSchema.type === 'voice') {
                recordSchemasExt.push({
                  type: 'voiceText',
                  title: '语音文本',
                  id: oSchema.id,
                })
              }
            })

            $scope.bRequireNickname =
              oApp.assignedNickname.valid !== 'Y' ||
              !oApp.assignedNickname.schema
            if (oApp.entryRule.group) {
              $scope.bRequireGroup = oApp._schemasById['_round_id']
                ? false
                : true
            } else {
              $scope.bRequireGroup = false
            }
            $scope.bRequireSum = bRequireSum
            $scope.bRequireScore = bRequireScore
            $scope.coworkSchemas = coworkSchemas
            $scope.recordSchemas = recordSchemas
            $scope.recordSchemasExt = recordSchemasExt
            $scope.coworkSchemasExt = coworkSchemasExt
            if (oApp._schemasFromEnrollApp) {
              oApp._schemasFromEnrollApp.forEach(function (schema) {
                if (schema.type !== 'html') {
                  enrollDataSchemas.push(schema)
                }
              })
            }
            $scope.enrollDataSchemas = enrollDataSchemas
            if (oApp._schemasFromGroupApp) {
              oApp._schemasFromGroupApp.forEach(function (schema) {
                if (schema.type !== 'html') {
                  groupDataSchemas.push(schema)
                }
              })
            }
            $scope.groupDataSchemas = groupDataSchemas
            $scope.tmsTableWrapReady = 'Y'
            $scope.doSearch(1)
          })
      })
    },
  ])
})
