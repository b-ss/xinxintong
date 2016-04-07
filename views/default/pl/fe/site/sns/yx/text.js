'use strict';
(function() {
	ngApp.provider.controller('ctrlText', ['$scope', 'http2', 'mattersgallery', function($scope, http2, mattersgallery) {
		var editCall = function(call) {
			if (/text/i.test(call.matter.type))
				call.matter.title = call.matter.content;
			$scope.editing = call;
		};
		$scope.matterTypes = [{
			value: 'article',
			title: '单图文',
			url: '/rest/pl/fe/matter'
		}, {
			value: 'news',
			title: '多图文',
			url: '/rest/pl/fe/matter'
		}, {
			value: 'channel',
			title: '频道',
			url: '/rest/pl/fe/matter'
		}];;
		$scope.create = function() {
			mattersgallery.open($scope.siteId, function(matters, type) {
				if (matters.length === 1) {
					matters[0].type = type;
					http2.post('/rest/pl/fe/site/sns/yx/text/create?site=' + $scope.siteId, matters[0], function(rsp) {
						$scope.calls.splice(0, 0, rsp.data);
						$scope.edit($scope.calls[0]);
					});
				}
			}, {
				matterTypes: $scope.matterTypes,
				hasParent: false,
				singleMatter: true
			});
		};
		$scope.remove = function() {
			http2.get('/rest/pl/fe/site/sns/yx/text/delete?site=' + $scope.siteId + '&id=' + $scope.editing.id, function(rsp) {
				var index = $scope.calls.indexOf($scope.editing);
				$scope.calls.splice(index, 1);
				if ($scope.calls.length === 0)
					window.alert('empty');
				else if (index === $scope.calls.length)
					$scope.edit($scope.calls[--index]);
				else
					$scope.edit($scope.calls[index]);
			});
		};
		$scope.edit = function(call) {
			if (call.matter === undefined) {
				http2.get('/rest/pl/fe/site/sns/yx/text/cascade?site=' + $scope.siteId + '&id=' + call.id, function(rsp) {
					call.matter = rsp.data.matter;
					call.acl = rsp.data.acl;
					editCall(call);
				});
			} else {
				editCall(call);
			}
		};
		$scope.update = function(name) {
			var p = {};
			p[name] = $scope.editing[name];
			http2.post('/rest/pl/fe/site/sns/yx/text/update?site=' + $scope.siteId + '&id=' + $scope.editing.id, p);
		};
		$scope.setReply = function() {
			mattersgallery.open($scope.siteId, function(matters, type) {
				if (matters.length === 1) {
					var p = {
						rt: type,
						rid: matters[0].id
					};
					http2.post('/rest/pl/fe/site/sns/yx/text/setreply?site=' + $scope.siteId + '&id=' + $scope.editing.id, p, function(rsp) {
						if (/text/i.test(matters[0].type))
							matters[0].title = matters[0].content;
						$scope.editing.matter = matters[0];
					});
				}
			}, {
				matterTypes: $scope.matterTypes,
				hasParent: false,
				singleMatter: true
			});
		};
		http2.get('/rest/pl/fe/site/sns/yx/text/list?site=' + $scope.siteId + '&cascade=n', function(rsp) {
			$scope.calls = rsp.data;
			if ($scope.calls.length > 0)
				$scope.edit($scope.calls[0]);
		});
	}]);
})();