define(['frame'], function(ngApp) {
	'use strict';
	ngApp.provider.controller('ctrlPublish', ['$scope', 'mediagallery', 'srvApp', function($scope, mediagallery, srvApp) {
		$scope.setPic = function() {
			var options = {
				callback: function(url) {
					$scope.app.pic = url + '?_=' + (new Date() * 1);
					srvApp.update('pic');
				}
			};
			mediagallery.open($scope.siteId, options);
		};
		$scope.removePic = function() {
			$scope.app.pic = '';
			srvApp.update('pic');
		};
		$scope.summaryOfRecords().then(function(data) {
			$scope.summary = data;
		});
	}]);
	ngApp.provider.controller('ctrlPreview', ['$scope', function($scope) {
		var previewURL = '/rest/site/fe/matter/signin/preview?site=' + $scope.siteId + '&app=' + $scope.id + '&start=Y',
			params = {
				pageAt: -1,
				hasPrev: false,
				hasNext: false,
				openAt: 'ontime'
			};
		$scope.nextPage = function() {
			params.pageAt++;
			params.hasPrev = true;
			params.hasNext = params.pageAt < $scope.app.pages.length - 1;
		};
		$scope.prevPage = function() {
			params.pageAt--;
			params.hasNext = true;
			params.hasPrev = params.pageAt > 0;
		};
		$scope.$watch('app.pages', function(pages) {
			if (pages) {
				params.pageAt = 0;
				params.hasPrev = false;
				params.hasNext = !!pages.length;
				$scope.params = params;
			}
		});
		$scope.$watch('params', function(params) {
			if (params) {
				$scope.previewURL = previewURL + '&openAt=' + params.openAt + '&page=' + $scope.app.pages[params.pageAt].name;
			}
		}, true);
	}]);
	/**
	 * 访问控制规则
	 */
	ngApp.provider.controller('ctrlAccessRule', ['$scope', 'srvApp', function($scope, srvApp) {
		$scope.rule = {};
		$scope.update = function() {
			srvApp.update('entry_rule');
		};
		$scope.reset = function() {
			srvApp.resetEntryRule();
		};
		$scope.changeUserScope = function() {
			srvApp.changeUserScope($scope.rule.scope, $scope.sns, $scope.memberSchemas, $scope.jumpPages.defaultInput);
		};
		$scope.$watch('app', function(app) {
			if (!app) return;
			$scope.jumpPages = srvApp.jumpPages();
			$scope.rule.scope = app.entry_rule.scope || 'none';
		}, true);
	}]);
	/**
	 * 签到轮次
	 */
	ngApp.provider.controller('ctrlRound', ['$scope', 'srvRound', function($scope, srvRound) {
		$scope.batch = function() {
			srvRound.batch($scope.app).then(function(rounds) {
				$scope.rounds = rounds;
			});
		};
		$scope.$on('xxt.tms-datepicker.change', function(event, data) {
			data.obj[data.state] = data.value;
			$scope.update(data.obj, data.state);
		});
		$scope.add = function() {
			srvRound.add($scope.rounds);
		};
		$scope.update = function(round, prop) {
			srvRound.update(round, prop);
		};
		$scope.remove = function(round) {
			srvRound.remove(round, $scope.rounds);
		};
		$scope.qrcode = function(round) {
			srvRound.qrcode(round, $scope.url);
		};
		$scope.$watch('app', function(app) {
			if (app) {
				$scope.rounds = app.rounds;
			}
		});
	}]);
	/**
	 * 微信二维码
	 */
	ngApp.provider.controller('ctrlWxQrcode', ['$scope', 'http2', function($scope, http2) {
		$scope.create = function() {
			var url;

			url = '/rest/pl/fe/site/sns/wx/qrcode/create?site=' + $scope.siteId;
			url += '&matter_type=signin&matter_id=' + $scope.id;
			url += '&expire=864000';

			http2.get(url, function(rsp) {
				$scope.qrcode = rsp.data;
			});
		};
		$scope.download = function() {
			$('<a href="' + $scope.qrcode.pic + '" download="微信签到二维码.jpeg"></a>')[0].click();
		};
		http2.get('/rest/pl/fe/matter/signin/wxQrcode?site=' + $scope.siteId + '&app=' + $scope.id, function(rsp) {
			var qrcodes = rsp.data;
			$scope.qrcode = qrcodes.length ? qrcodes[0] : false;
		});
	}]);
});