!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=105)}({0:function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},1:function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=m[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(u(i.parts[o],e))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(u(i.parts[o],e));m[i.id]={id:i.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=e.base?o[0]+e.base:o[0],s=o[1],c=o[2],l=o[3],u={css:s,media:c,sourceMap:l};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}function o(t,e){var n=h(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=w[w.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),o(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),o(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,i,r,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var l=b++;n=v||(v=s(e)),i=d.bind(null,n,l,!1),r=d.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),i=f.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),i=p.bind(null,n),r=function(){a(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function d(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e,n){var i=n.css,r=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=x(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),h=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),v=null,b=0,w=[],x=n(3);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=g()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return i(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,o.push(c)}if(t){i(r(t,e),e)}for(var a=0;a<o.length;a++){var c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},105:function(t,e,n){t.exports=n(50)},11:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,'.dialog.mask{position:fixed;background:rgba(0,0,0,.3);top:0;left:0;bottom:0;right:0;overflow:auto;z-index:1060}.dialog.dlg{position:absolute;background:#fff;left:0;right:0;bottom:0;margin:15px}.dialog .dlg-body,.dialog .dlg-header{padding:15px 15px 0}.dialog .dlg-footer{text-align:right;padding:15px}.dialog .dlg-footer button{border-radius:0}div[wrap=filter] .detail{background:#ccc}div[wrap=filter] .detail .options .label{display:inline-block;margin:.5em;padding-top:.3em;font-size:100%}div[wrap=filter] .detail .actions .btn{border-radius:0}.tms-act-toggle{position:fixed;right:15px;bottom:8px;width:48px;height:48px;line-height:48px;box-shadow:0 2px 6px rgba(18,27,32,.425);color:#fff;background:#ff8018;border:1px solid #ff8018;border-radius:24px;font-size:20px;text-align:center;cursor:pointer;z-index:1050}.tms-nav-target>*+*{margin-top:.5em}#frmPlugin{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;border:none;z-index:1060;box-sizing:border-box;padding-bottom:48px;background:#fff}#frmPlugin iframe{width:100%;height:100%;border:0}#frmPlugin:after{content:"\\5173\\95ED";position:absolute;width:100px;text-align:center;left:50%;margin-left:-50px;bottom:4px;padding:5px 6px 3px;border:1px solid #ccc;border-radius:4px}div[wrap]>.description{word-wrap:break-word}',""])},12:function(t,e,n){var i=n(11);"string"==typeof i&&(i=[[t.i,i,""]]);var r={};r.transform=void 0;n(1)(i,r);i.locals&&(t.exports=i.locals)},13:function(t,e,n){"use strict";window.__util={},window.__util.makeDialog=function(t,e){var n,i;return i=document.createElement("div"),i.setAttribute("id",t),i.classList.add("dialog","mask"),n="<div class='dialog dlg'>",e.header&&e.header.length&&(n+="<div class='dlg-header'>"+e.header+"</div>"),n+="<div class='dlg-body'>"+e.body+"</div>",e.footer&&e.footer.length&&(n+="<div class='dlg-footer'>"+e.footer+"</div>"),n+="</div>",i.innerHTML=n,document.body.appendChild(i),i.children};var i=angular.module("directive.enroll",[]);i.directive("tmsAppNav",["$templateCache",function(t){var e;return e="<div class='tms-nav-target'>",e+="<div ng-if=\"navs.repos\"><button class='btn btn-default btn-block' ng-click=\"goto($event,'repos')\">共享页</button></div>",e+="<div ng-if=\"navs.rank\"><button class='btn btn-default btn-block' ng-click=\"goto($event,'rank')\">排行页</button></div>",e+='<div ng-if="navs.action"><button class=\'btn btn-default btn-block\' ng-click="goto($event,\'action\')">动态页<span class=\'notice-count\' ng-if="noticeCount" ng-bind="noticeCount"></span></button></div>',e+="</div>",t.put("appNavTemplate.html",e),{restrict:"A",replace:!0,transclude:!0,scope:{navs:"=appNavs",noticeCount:"=noticeCount"},template:'<span><span ng-if="!navs"><span ng-transclude></span></span><span ng-if="navs" uib-popover-template="\'appNavTemplate.html\'" popover-placement="bottom" popover-trigger="\'outsideClick\'"><span ng-transclude></span><span class=\'notice-count\' ng-if="noticeCount" ng-bind="noticeCount"></span><span class="caret"></span></span></span>',controller:["$scope",function(t){t.goto=function(e,n){t.$parent.gotoPage(e,n)}}]}}]),i.directive("tmsAppAct",["$templateCache",function(t){var e;return e="<div>",e+="<div ng-if=\"acts.addRecord\"><button class='btn btn-default' ng-click=\"goto($event,'addRecord')\">添加记录</button></div>",e+="<div ng-if=\"acts.save\"><button class='btn btn-default' ng-click=\"goto($event,'save')\">保存</button></div>",e+="</div>",t.put("appActTemplate.html",e),{restrict:"A",replace:!0,scope:{acts:"=appActs"},template:'<button uib-popover-template="\'appActTemplate.html\'" popover-placement="top-right" popover-trigger="\'outsideClick\'" popover-append-to-body="true" class="tms-act-toggle" popover-class="tms-act-popover"><span class=\'glyphicon glyphicon-option-vertical\'></span></button>',controller:["$scope",function(t){t.back=function(){history.back()},t.historyLen=function(){return history.length},t.goto=function(e,n){switch(n){case"addRecord":t.$parent.addRecord(e);break;case"save":t.$parent.save();break;default:t.$parent.gotoPage(e,n)}}}]}}]),i.directive("tmsDate",["$compile",function(t){return{restrict:"A",scope:{value:"=tmsDateValue"},controller:["$scope",function(t){t.close=function(){var e;e=document.querySelector("#"+t.dialogID),document.body.removeChild(e),t.opened=!1},t.ok=function(){var e;e=new Date,e.setTime(0),e.setFullYear(t.data.year),e.setMonth(t.data.month-1),e.setDate(t.data.date),e.setHours(t.data.hour),e.setMinutes(t.data.minute),t.value=parseInt(e.getTime()/1e3),t.close()}}],link:function(e,n,i){var r,o,a,s;void 0===e.value&&(e.value=1*new Date/1e3),o=new Date,o.setTime(1e3*e.value),e.options={years:[2014,2015,2016,2017,2018,2019,2020],months:[1,2,3,4,5,6,7,8,9,10,11,12],dates:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],hours:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],minutes:[0,5,10,15,20,25,30,35,40,45,50,55]},a=5*Math.round(o.getMinutes()/5),e.data={year:o.getFullYear(),month:o.getMonth()+1,date:o.getDate(),hour:o.getHours(),minute:a},-1===e.options.minutes.indexOf(a)&&e.options.minutes.push(a),s='<div class="form-group"><select class="form-control" ng-model="data.year" ng-options="y for y in options.years"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.month" ng-options="m for m in options.months"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.date" ng-options="d for d in options.dates"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.hour" ng-options="h for h in options.hours"></select></div>',s+='<div class="form-group"><select class="form-control" ng-model="data.minute" ng-options="mi for mi in options.minutes"></select></div>',r=function(n){if(n.preventDefault(),n.stopPropagation(),!e.opened){var i,r;r="_dlg-"+1*new Date,i={header:"",body:s,footer:'<button class="btn btn-default" ng-click="close()">关闭</button><button class="btn btn-success" ng-click="ok()">确定</button>'},i=__util.makeDialog(r,i),e.opened=!0,e.dialogID=r,t(i)(e)}},n[0].querySelector("[ng-bind]").addEventListener("click",r)}}}]),i.directive("flexImg",function(){return{restrict:"A",replace:!0,template:"<img ng-src='{{img.imgSrc}}'>",link:function(t,e,n){angular.element(e).on("load",function(){var t,e,n=this.clientWidth,i=this.clientHeight;n>i?(t=n/i*80,angular.element(this).css({height:"100%",width:t+"px",top:"0",left:"50%","margin-left":-1*t/2+"px"})):(e=i/n*80,angular.element(this).css({width:"100%",height:e+"px",left:"0",top:"50%","margin-top":-1*e/2+"px"}))})}}}),i.directive("tmsHideParentHeight",function(){return{restrict:"A",link:function(t,e,n){var i,r;if(n.tmsHideParentHeight){i=n.tmsHideParentHeight;for(var o=0,a=e.length;o<a;o++)r=e[o],r.parentElement&&window.addEventListener("resize",function(){console.log("clientHeight2",r.parentElement.clientHeight),r.classList.toggle("hidden",r.parentElement.clientHeight<i)})}}}})},20:function(t,e,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.image={options:{},choose:function(t,e){var n,i=[];if(n=t.promise,window.YixinJSBridge)window.YixinJSBridge.invoke("pickImage",{type:e,quality:100},function(e){var n;e.data&&e.data.length&&(n={imgSrc:"data:"+e.mime+";base64,"+e.data},i.push(n)),t.resolve(i)});else{var r=document.createElement("input");r.setAttribute("type","file"),r.addEventListener("change",function(e){var n,o,a,s;for(o=e.target.files.length,n=0;n<o;n++){a=e.target.files[n],s={".jp":"image/jpeg",".pn":"image/png",".gi":"image/gif"}[a.name.match(/\.(\w){2}/g)[0]||".jp"],a.type2=a.type||s;var c=new FileReader;c.onload=function(e){return function(n){var o={};o.imgSrc=n.target.result.replace(/^.+(,)/,"data:"+e.type2+";base64,"),i.push(o),document.body.removeChild(r),t.resolve(i)}}(a),c.readAsDataURL(a)}},!1),r.style.opacity=0,document.body.appendChild(r),r.click()}return n},wxUpload:function(t,e){var n;return n=t.promise,0===e.imgSrc.indexOf("weixin://")||0===e.imgSrc.indexOf("wxLocalResource://")?window.wx.uploadImage({localId:e.imgSrc,isShowProgressTips:1,success:function(n){e.serverId=n.serverId,t.resolve(e)}}):t.resolve(e),n}}},21:function(t,e,n){"use strict";var i={};i.isEmpty=function(t,e){if(void 0===e)return!0;switch(t.type){case"multiple":for(var n in e)if(!0===e[n])return!1;return!0;default:return 0===e.length}},i.checkRequire=function(t,e){return void 0!==e&&!this.isEmpty(t,e)||"请填写必填题目［"+t.title+"］"},i.checkFormat=function(t,e){if("number"===t.format){if(!/^-{0,1}[0-9]+(.[0-9]+){0,1}$/.test(e))return"题目［"+t.title+"］请输入数值"}else if("name"===t.format){if(/^-{0,1}[0-9]+(.[0-9]+){0,1}$/.test(e))return"题目［"+t.title+"］请输入字母或者汉字，并不少于2个字符";if(e.length<2)return"题目［"+t.title+"］请输入正确的姓名（不少于2个字符）"}else if("mobile"===t.format){if(!/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(e))return"题目［"+t.title+"］请输入正确的手机号（11位数字）"}else if("email"===t.format&&!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e))return"题目［"+t.title+"］请输入正确的邮箱";return!0},i.checkCount=function(t,e){return!(void 0!==t.count&&e.length>t.count)||"［"+t.title+"］超出上传数量（"+t.count+"）限制"},i.checkValue=function(t,e){var n;if(t.required&&"Y"===t.required&&!0!==(n=this.checkRequire(t,e)))return n;if(e){if("shorttext"===t.type&&t.format&&!0!==(n=this.checkFormat(t,e)))return n;if("multiple"===t.type&&"Y"===t.limitChoice&&t.range){var i=0;for(var r in e)e[r]&&i++;if(i<t.range[0]||i>t.range[1])return"【"+t.title+"】中最多只能选择("+t.range[1]+")项，最少需要选择("+t.range[0]+")项"}if(/image|file/.test(t.type)&&t.count&&!0!==(n=this.checkCount(t,e)))return n}return!0},i.loadRecord=function(t,e,n){if(!n)return!1;var r,o,a;for(r in n)if("member"===r)e.member=angular.extend(e.member,n.member);else if(o=t[r])if(/score|url/.test(o.type))e[r]=n[r],"url"===o.type&&(e[r]._text=i.urlSubstitute(e[r]));else if(n[r].length)if("image"===o.type){a=n[r].split(","),e[r]=[];for(var s in a)e[r].push({imgSrc:a[s]})}else if("multiple"===o.type){a=n[r].split(","),e[r]={};for(var s in a)e[r][a[s]]=!0}else e[r]=n[r];return!0},i.autoFillDefault=function(t,e){angular.forEach(t,function(t){t.defaultValue&&void 0===e[t.id]&&(e[t.id]=t.defaultValue)})},i.autoFillMember=function(t,e,n){e.members&&angular.forEach(t,function(t){if(t.schema_id&&e.members[t.schema_id]){var i,r,o;if(i=e.members[t.schema_id],r=t.id.split("."),2===r.length)n[r[1]]=i[r[1]];else if(3===r.length&&i.extattr)switch(n.extattr||(n.extattr={}),t.type){case"multiple":if(o=i.extattr[r[2]],angular.isObject(o)){n.extattr[r[2]]={};for(var a in o)o[a]&&(n.extattr[r[2]][a]=!0)}break;default:n.extattr[r[2]]=i.extattr[r[2]]}}})},i.txtSubstitute=function(t){return t.replace(/\n/g,"<br>")},i.urlSubstitute=function(t){var e;return e="",t&&(t.title&&(e+="【"+t.title+"】"),t.description&&(e+=t.description)),e+='<a href="'+t.url+'">网页链接</a>'},t.exports=i},22:function(t,e,n){"use strict";void 0===window.xxt&&(window.xxt={}),window.xxt.geo={options:{},getAddress:function(t,e,n){var i;if(i=e.promise,window.wx)window.wx.getLocation({success:function(i){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+i.latitude,r+="&lng="+i.longitude,t.get(r).then(function(t){e.resolve({errmsg:"ok",lat:i.latitude,lng:i.longitude,address:t.data.address})})}});else try{var r=window.navigator;if(null!==r){var o=r.geolocation;null!==o?o.getCurrentPosition(function(i){var r="/rest/site/fe/matter/enroll/locationGet";r+="?site="+n,r+="&lat="+i.coords.latitude,r+="&lng="+i.coords.longitude,t.get(r).then(function(t){e.resolve({errmsg:"ok",lat:i.coords.latitude,lng:i.coords.longitude,address:t.data.address})})},function(){e.resolve({errmsg:"获取地理位置失败"})}):e.resolve({errmsg:"无法获取地理位置"})}else e.resolve({errmsg:"无法获取地理位置"})}catch(t){alert("exception:"+t.message)}return i}}},27:function(t,e,n){"use strict";var i={};i.state={modified:!1,state:"waiting",_cacheKey:!1,start:function(t,e,n){var i;if(t&&(i=t.target,("BUTTON"===i.tagName||(i=i.parentNode)&&"BUTTON"===i.tagName)&&/submit\(.*\)/.test(i.getAttribute("ng-click")))){var r;this.button=i,r=i.querySelector("span"),r.setAttribute("data-label",r.innerHTML),r.innerHTML="正在提交数据...",this.button.classList.add("submit-running")}this.state="save"==n?"waiting":"running",this._cacheKey=e||1*new Date},finish:function(t){if(this.state="waiting",this.modified=!1,this.button){var e;e=this.button.querySelector("span"),e.innerHTML=e.getAttribute("data-label"),e.removeAttribute("data-label"),this.button.classList.remove("submit-running"),this.button=null}window.localStorage&&!t&&window.localStorage.removeItem(this._cacheKey)},isRunning:function(){return"running"===this.state},cache:function(t){if(window.localStorage){var e,n;e=this._cacheKey,n=angular.copy(t),n._cacheAt=1*new Date,n=JSON.stringify(n),window.localStorage.setItem(e,n)}},fromCache:function(t){if(window.localStorage){var e,n;e=this._cacheKey,n=window.localStorage.getItem(e),t||window.localStorage.removeItem(e),n&&(n=JSON.parse(n))}return n}},t.exports=i},3:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var o;return o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},4:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(t,e,n,i,r){window.wx.onMenuShareTimeline({title:r.descAsTitle?n:t,link:e,imgUrl:i,success:function(){try{r.logger&&r.logger("T")}catch(t){alert("share failed:"+t.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:t,desc:n,link:e,imgUrl:i,success:function(){try{r.logger&&r.logger("F")}catch(t){alert("share failed:"+t.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(t,e,n,i,r){var o={img_url:i,link:e,title:t,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(t){try{r.logger&&r.logger("F")}catch(t){alert("share failed:"+t.message)}window.YixinJSBridge.invoke("sendAppMessage",o,function(t){})}),window.YixinJSBridge.on("menu:share:timeline",function(t){try{r.logger&&r.logger("T")}catch(t){alert("share failed:"+t.message)}window.YixinJSBridge.invoke("shareTimeline",o,function(t){})})}this.config=function(t){this.options=t},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options)}),wx.error(function(t){alert(JSON.stringify(t))}))}catch(t){alert("local error:"+t.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options)},!1):setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img)}}])},50:function(t,e,n){"use strict";n(83),n(8),n(7),n(57),n(4),n(20),n(22),n(12),n(13);var i=angular.module("app",["ngSanitize","ngRoute","ui.bootstrap","directive.enroll","notice.ui.xxt","http.ui.xxt","date.ui.xxt","snsshare.ui.xxt"]);i.oUtilSchema=n(21),i.oUtilSubmit=n(27),i.factory("Input",["$q","$timeout","http2","tmsLocation",function(t,e,n,r){var o,a;return o=function(){},o.prototype.check=function(t,e){var n,r,o,a,s,c;if(t.actions&&t.actions.length)for(var l=0,u=t.actions.length;l<u;l++)if(n=t.actions[l],n.checkSchemas&&n.checkSchemas.length){o=n.checkSchemas,r=e[n.id];for(var d=0,p=o.length;d<p;d++)if(a=o[d],a.type&&"html"!==a.type&&(s=r?r[a.id]:"",!0!==(c=i.oUtilSchema.checkValue(a,s))))return c}return!0},o.prototype.submit=function(t,e,i){var o,a,s;o={data:angular.copy(e),supplement:i},s="/rest/site/fe/matter/plan/task/submit?site="+r.s().site+"&task="+t.id;for(var c in o.data)a=o.data[c],angular.isArray(a)&&a.length&&void 0!==a[0].imgSrc&&void 0!==a[0].serverId&&a.forEach(function(t){delete t.imgSrc});return n.post(s,o,{autoNotice:!1,autoBreak:!1})},{ins:function(){return a||(a=new o),a}}}]),i.directive("tmsImageInput",["$compile","$q","noticebox",function(t,e,n){var i;return i=[],{restrict:"A",controller:["$scope","$timeout",function(t,r){t.chooseImage=function(o,a,s){var c,l,u;if(c=o.id+"."+a.id,-1===i.indexOf(c)&&i.push(c),void 0===t.data[o.id]&&(t.data[o.id]={}),void 0===t.data[o.id][a.id]&&(t.data[o.id][a.id]=[]),l=t.data[o.id][a.id],u=parseInt(a.count)||1,l.length===u)return void n.warn("最多允许上传（"+u+"）张图片");window.xxt.image.choose(e.defer(),s).then(function(e){var n;n=t.$root.$$phase,"$digest"===n||"$apply"===n?t.data[o.id][a.id]=l.concat(e):t.$apply(function(){t.data[o.id][a.id]=l.concat(e)}),r(function(){var n,i,r,o;for(n=0,i=e.length;n<i;n++)r=e[n],(o=document.querySelector('ul[name="'+c+'"] li:nth-last-child(2) img'))&&o.setAttribute("src",r.imgSrc);t.$broadcast("xxt.plan.image.choose.done",c)})})},t.removeImage=function(e,n,i){t.data[e.id][n.id].splice(i,1)}}]}}]),i.directive("tmsFileInput",["$q","tmsLocation",function(t,e){function n(e){var n;return n=t.defer(),i.files&&0!==i.files.length||n.resolve("empty"),i.on("progress",function(){var t,n;n=i.progress();var t=e.$root.$$phase;"$digest"===t||"$apply"===t?e.progressOfUploadFile=Math.ceil(100*n):e.$apply(function(){e.progressOfUploadFile=Math.ceil(100*n)})}),i.on("complete",function(){var t=e.$root.$$phase;"$digest"===t||"$apply"===t?e.progressOfUploadFile="完成":e.$apply(function(){e.progressOfUploadFile="完成"}),i.cancel(),n.resolve("ok")}),i.upload(),n.promise}var i;return i=new Resumable({target:"/rest/site/fe/matter/plan/task/uploadFile?site="+e.s().site+"&app="+e.s().app,testChunks:!1,chunkSize:524288}),{restrict:"A",controller:["$scope",function(t){t.progressOfUploadFile=0,t.beforeSubmit(function(){return n(t)}),t.chooseFile=function(e,n,r){var o,a;o=e.id+"."+n.id,a=document.createElement("input"),a.setAttribute("type","file"),void 0!==r&&a.setAttribute("accept",r),a.addEventListener("change",function(r){var a,s,c;for(void 0===t.data[e.id]&&(t.data[e.id]={}),void 0===t.data[e.id][n.id]&&(t.data[e.id][n.id]=[]),s=r.target.files.length,a=0;a<s;a++)c=r.target.files[a],i.addFile(c),t.data[e.id][n.id].push({uniqueIdentifier:i.files[i.files.length-1].uniqueIdentifier,name:c.name,size:c.size,type:c.type,url:""});t.$apply("data",function(){t.$broadcast("xxt.plan.file.choose.done",o)})},!1),a.click()}}]}}]),i.config(["$compileProvider","$routeProvider","$locationProvider","tmsLocationProvider",function(t,e,n,i){t.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|sms|wxLocalResource):/);var r=function(t){this.templateUrl=t+".html",this.controller="ctrl"+t[0].toUpperCase()+t.substr(1),this.reloadOnSearch=!1};e.when("/rest/site/fe/matter/plan/task",new r("task")).when("/rest/site/fe/matter/plan/rank",new r("rank")).otherwise(new r("plan")),n.html5Mode(!0),i.config("/rest/site/fe/matter/plan")}]),i.controller("ctrlMain",["$scope","$location","http2","tmsLocation","tmsSnsShare",function(t,e,n,i,r){var o,a;t.subView="",t.$on("$locationChangeSuccess",function(e,n){var i=n.match(/([^\/]+?)\?/);t.subView="plan"===i[1]?"plan":i[1]}),t.toggleView=function(t,n){var i=angular.copy(e.search());switch(delete i.task,t){case"rank":e.path("/rest/site/fe/matter/plan/rank").search(i);break;case"task":i.task=n.id,e.path("/rest/site/fe/matter/plan/task").search(i);break;default:e.path("/rest/site/fe/matter/plan").search(i)}},t.siteUser=function(){var t;t="/rest/site/fe/user",t+="?site="+i.s().site,location.href=t},t.invite=function(){a.loginExpire?location.href="/rest/site/fe/invite?matter=plan,"+o.id:tmsDynaPage.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(t){a.loginExpire=t.loginExpire,location.href="/rest/site/fe/invite?matter=plan,"+o.id})},n.get(i.j("get","site","app")).then(function(e){t.app=o=e.data.app,t.user=a=e.data.user,o._taskSchemasById={},o.tasks.forEach(function(t){o._taskSchemasById[t.id]=t}),/MicroMessenger|Yixin/i.test(navigator.userAgent)&&(r.config({siteId:o.siteid,logger:function(t){},jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage","chooseImage","uploadImage","getLocation"]}),r.set(o.title,o.entryUrl,o.summary,o.pic)),n.post("/rest/site/fe/matter/logAccess?site="+o.siteid+"&id="+o.id+"&type=plan&title="+o.title,{});var i;(i=document.querySelector(".loading"))&&i.parentNode.removeChild(i)})}]),i.controller("ctrlPlan",["$scope","$filter","http2","tmsLocation",function(t,e,n,i){function r(){n.get(i.j("overview","site","app")).then(function(r){t.overview=a=r.data,n.get(i.j("task/listByUser","site","app")).then(function(t){var n,i;n=t.data.tasks,i=t.data.mocks,n.forEach(function(t){t.bornAt=e("tmsDate")(1e3*t.born_at,"yy-MM-dd HH:mm,EEE"),o._taskSchemasById[t.task_schema_id]&&(o._taskSchemasById[t.task_schema_id].userTask=t)}),i&&i.forEach(function(t){t.bornAt=e("tmsDate")(1e3*t.born_at,"yy-MM-dd HH:mm,EEE"),o._taskSchemasById[t.id]&&(o._taskSchemasById[t.id].mockTask=t)}),o.tasks.forEach(function(t){"N"===t.as_placeholder&&!t.userTask&&t.mockTask&&(a.nowTaskSchema&&t.task_seq<a.nowTaskSchema.task_seq?t.isDelayed="Y":a.lastUserTask&&t.task_seq<a.lastUserTask.task_seq&&(t.isDelayed="Y"))})})})}var o,a;t.$on("xxt.tms-datepicker.change",function(t,e){n.post(i.j("config","site","app"),{start_at:e.value}).then(function(t){r()})}),t.$watch("app",function(t){t&&(o=t,r())})}]),i.controller("ctrlTask",["$scope","$filter","noticebox","http2","Input","tmsLocation",function(t,e,n,r,o,a){function s(){l.submit(t.activeTask,t.data,t.supplement).then(function(e){u.finish(),n.success("完成提交"),t.$emit("xxt.app.plan.submit.done",e.data)},function(t){return u.finish(),t&&"string"==typeof t?void n.error(t):t&&t.err_msg?void n.error(t.err_msg):void n.error("网络异常，提交失败")},function(t){u.finish()})}function c(t){(0,d[t])().then(function(e){t++,t<d.length?c(t):s()})}window.onbeforeunload=function(){u.modified&&u.cache(t.data)};var l,u,d;d=[],l=o.ins(),t.data={},t._oSubmitState=u=i.oUtilSubmit.state,t.beforeSubmit=function(t){-1===d.indexOf(t)&&d.push(t)},t.submit=function(e){var i;u.isRunning()||(u.start(e),!0===(i=l.check(t.activeTask,t.data))?d.length?c(0):s():(u.finish(),n.error(i)))},r.get(a.j("task/get","site","task")).then(function(n){var r;r=n.data,r.actions&&r.actions.forEach(function(n){if(t.app.checkSchemas.length){var o=0;t.app.checkSchemas.forEach(function(t){n.checkSchemas.splice(o++,0,t)})}if(r.userTask){var a,s;s=r.userTask,s.bornAt=e("tmsDate")(1e3*s.born_at,"yy-MM-dd HH:mm,EEE"),s.patch_at>0&&(s.patchAt=e("tmsDate")(1e3*s.patch_at,"yy-MM-dd HH:mm,EEE")),s.data[n.id]&&(a={},n.checkSchemas.forEach(function(t){a[t.id]=t}),t.data[n.id]={},i.oUtilSchema.loadRecord(a,t.data[n.id],s.data[n.id]))}}),r.userTask&&r.userTask.supplement?t.supplement=r.userTask.supplement:t.supplement={},t.activeTask=r,t.userTask=r.userTask})}]),i.controller("ctrlRank",["$scope","http2","$q","tmsLocation",function(t,e,n,i){function r(){var t=n.defer();switch(a.criteria.obj){case"user":e.post(i.j("rank/byUser","site","app"),a.criteria).then(function(e){t.resolve(e.data)})}return t.promise}t.doSearch=function(){r().then(function(e){switch(a.criteria.obj){case"user":e&&e.users.forEach(function(e){t.users.push(e)})}a.page.total=e.total})},t.changeCriteria=function(){t.users=[],t.groups=[],t.doSearch(1)};var o,a;t.rankView={obj:"user"},a||(a={criteria:{obj:"user",orderby:"task_num"},page:{at:1,size:12}}),t.appState=a,t.$watch("appState.criteria.obj",function(e,n){if(e&&n&&e!==n){switch(e){case"user":a.criteria.orderby="task_num"}t.changeCriteria()}}),t.$watch("app",function(e){e&&(o=e,t.changeCriteria())})}])},57:function(t,e,n){"use strict";var i=angular.module("date.ui.xxt",[]);i.filter("tmsDate",["$filter",function(t){var e={weekday:{Mon:"星期一",Tue:"星期二",Wed:"星期三",Thu:"星期四",Fri:"星期五",Sat:"星期六",Sun:"星期日"}};return function(n,i){var r,o;return i?(r=t("date")(n,i),-1!==i.indexOf("EEE")&&(o=t("date")(n,"EEE"),r=r.replace(o,e.weekday[o])),r):n}}]),i.directive("tmsDatepicker",function(){return{restrict:"EA",scope:{date:"=tmsData",defaultDate:"@tmsDefaultData",mask:"@tmsMask",title:"@tmsTitle",state:"@tmsState",obj:"=tmsObj"},templateUrl:"/static/template/datepicker.html?_=7",controller:["$scope","$uibModal",function(t,e){var n;void 0===t.mask?(n={y:!0,m:!0,d:!0,h:!0,i:!0},t.format="yy-MM-dd HH:mm"):n=function(e){var n,e=e.split(",");return n={y:"y"===e[0]||e[0],m:"m"===e[1]||e[1],d:"d"===e[2]||e[2]},t.format="yy-MM-dd",5===e.length?"h"===e[3]?(n.h=!0,t.format+=" HH","i"===e[4]?(n.i=!0,t.format+=":mm"):n.i=e[4]):(n.h=e[3],n.i="i"===e[4]||e[4]):(n.h=0,n.i=0),n}(t.mask),t.open=function(){e.open({templateUrl:"tmsModalDatepicker.html",resolve:{date:function(){return t.date},defaultDate:function(){return t.defaultDate},mask:function(){return n}},controller:["$scope","$filter","$uibModalInstance","date","defaultDate","mask",function(t,e,n,i,r,o){i=function(){var t=new Date;return r?t.setTime(r?1e3*r:t.getTime()):t.setTime(i?1e3*i:t.getTime()),t.setMilliseconds(0),t.setSeconds(0),!0!==o.i&&t.setMinutes(o.i),!0!==o.h&&t.setHours(o.h),t}(),t.mask=o,t.years=[2015,2016,2017,2018,2019,2020],t.months=[],t.days=[],t.hours=[],t.minutes=[],t.date={year:i.getFullYear(),month:i.getMonth()+1,mday:i.getDate(),hour:i.getHours(),minute:i.getMinutes()};for(var a=1;a<=12;a++)t.months.push(a);for(var a=1;a<=31;a++)t.days.push(a);for(var a=0;a<=23;a++)t.hours.push(a);for(var a=0;a<=59;a++)t.minutes.push(a);t.today=function(){var e=new Date;t.date={year:e.getFullYear(),month:e.getMonth()+1,mday:e.getDate(),hour:e.getHours(),minute:e.getMinutes()}},t.reset=function(e){t.date[e]=0},t.next=function(e,n){var i=n[n.length-1];t.date[e]<i&&t.date[e]++},t.prev=function(e,n){var i=n[0];t.date[e]>i&&t.date[e]--},t.ok=function(){n.close(t.date)},t.empty=function(){n.close(null)},t.cancel=function(){n.dismiss("cancel")}}],backdrop:"static",size:"sm"}).result.then(function(e){var n;n=null===e?0:Date.parse(e.year+"/"+e.month+"/"+e.mday+" "+e.hour+":"+e.minute)/1e3,t.date=n,t.$emit("xxt.tms-datepicker.change",{obj:t.obj,state:t.state,value:n})})}}],replace:!0}})},68:function(t,e,n){e=t.exports=n(0)(void 0),e.push([t.i,".ng-cloak{display:none}body,html{height:100%;width:100%;background:#efefef;font-family:Microsoft Yahei,Arial}body{position:relative;font-size:16px}ul{list-style:none}li,ul{margin:0;padding:0}.panel-body .form-group:last-child{margin-bottom:0}@media screen and (min-width:768px){.navbar-nav>li>a{padding:17.5px 30px;font-size:18px;line-height:1}}@media screen and (max-width:768px){.navbar-brand{width:100%;text-align:center}.navbar-brand>.icon-note{display:inline-block;width:124px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.navbar-nav{margin:8px 0;position:absolute;top:0;right:0}.nav>li>a{padding:10px}}#plan .matter-pic{width:100%}#plan .matter-pic>div{width:100%;height:0;padding-bottom:56%;background-size:contain;background-repeat:no-repeat;background-position:50%}ul.img-tiles li{position:relative;display:inline-block;overflow:hidden;width:80px;height:80px;margin:0;padding:0;float:left}ul.img-tiles li.img-thumbnail img{display:inline-block;position:absolute;max-width:none}ul.img-tiles li.img-thumbnail button{position:absolute;top:0;right:0}ul.img-tiles li.img-picker button{position:auto;width:100%;height:100%}ul.img-tiles li.img-picker button span{font-size:36px}div[wrap].wrap-splitline{padding-bottom:.5em;border-bottom:1px solid #fff}div[wrap].wrap-inline>*{display:inline-block;vertical-align:middle;margin:0 1em 0 0}div[wrap].wrap-inline>label{width:6em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}div[wrap=matter]>span{cursor:pointer;text-decoration:underline}#frmPopup{position:absolute;top:0;left:0;right:0;bottom:0;border:none;width:100%;z-index:999;box-sizing:border-box}.result{margin-top:10px}.result li,.result ul{overflow:hidden;margin-bottom:10px}",""])},7:function(t,e,n){"use strict";var i=angular.module("http.ui.xxt",[]);i.provider("tmsLocation",function(){var t;this.config=function(e){t=e||location.pathname},this.$get=["$location",function(e){return t||(t=location.pathname),{s:function(){return e.search()},j:function(n){var i=t,r=[];n&&n.length&&(i+="/"+n);for(var o=1,a=arguments.length;o<a;o++)r.push(arguments[o]+"="+(e.search()[arguments[o]]||""));return r.length&&(i+="?"+r.join("&")),i}}}]}),i.service("http2",["$rootScope","$http","$timeout","$q","$sce","$compile",function(t,e,n,i,r,o){function a(e,n,i){var a;return a=angular.element("<div></div>"),a.attr({class:"tms-notice alert alert-"+(n||"info"),"ng-style":"{'z-index':1099}"}).html(r.trustAsHtml(e)),i||a[0].addEventListener("click",function(){document.body.removeChild(a[0])},!0),o(a)(t),document.body.appendChild(a[0]),a[0]}function s(t){t&&document.body.removeChild(t)}this.get=function(t,r){var o,c,l=i.defer();return r=angular.extend({headers:{accept:"application/json"},autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},r),!0===r.showProgress&&(c=n(function(){c=null,o=a(r.showProgressText,"info")},r.showProgressDelay)),e.get(t,r).success(function(t){if(!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),angular.isString(t)){if(r.autoNotice&&a(t,"warning"),r.autoBreak)return;l.reject(t)}else if(0!=t.err_code){if(r.autoNotice){var e;e=angular.isString(t.err_msg)?t.err_msg:angular.isArray(t.err_msg)?t.err_msg.join("<br>"):JSON.stringify(t.err_msg),a(e,"warning")}if(r.autoBreak)return;l.reject(t)}else l.resolve(t)}).error(function(t,e){!0===r.showProgress&&(c&&n.cancel(c),o&&(s(o),o=null)),a(null===t?"网络不可用":t,"danger")}),l.promise},this.post=function(t,r,o){var c,l,u=i.defer();return o=angular.extend({headers:{accept:"application/json"},autoBreak:!0,autoNotice:!0,showProgress:!0,showProgressDelay:500,showProgressText:"正在获取数据..."},o),!0===o.showProgress&&(l=n(function(){l=null,c=a(o.showProgressText,"info")},o.showProgressDelay)),e.post(t,r,o).success(function(t){if(!0===o.showProgress&&(l&&n.cancel(l),c&&(s(c),c=null)),angular.isString(t)){if(o.autoNotice&&(a(t,"warning"),c=null),o.autoBreak)return;u.reject(t)}else if(0!=t.err_code){if(o.autoNotice){var e;e=angular.isString(t.err_msg)?t.err_msg:angular.isArray(t.err_msg)?t.err_msg.join("<br>"):JSON.stringify(t.err_msg),a(e,"warning")}if(o.autoBreak)return;u.reject(t)}else u.resolve(t)}).error(function(t,e){!0===o.showProgress&&(l&&n.cancel(l),c&&(s(c),c=null)),a(null===t?"网络不可用":t,"danger")}),u.promise}}])},8:function(t,e,n){"use strict";angular.module("notice.ui.xxt",["ngSanitize"]).service("noticebox",["$timeout","$q",function(t,e){var n="tmsbox"+1*new Date,i={type:"",timer:null},r=function(t,e){var r;return r=document.querySelector("#"+n),null===r?(r=document.createElement("div"),r.setAttribute("id",n),r.classList.add("notice-box"),r.classList.add("alert"),r.classList.add("alert-"+t),r.innerHTML="<div>"+e+"</div>",document.body.appendChild(r),i.type=t):(i.type!==t&&(r.classList.remove("alert-"+t),i.type=t),r.childNodes[0].innerHTML=e),r};this.close=function(){var t;(t=document.querySelector("#"+n))&&document.body.removeChild(t)},this.error=function(e){var n,o;i.timer&&(t.cancel(i.timer),i.timer=null),n=r("danger",e),o=document.createElement("button"),o.classList.add("close"),o.innerHTML="<span>&times;</span>",n.insertBefore(o,n.childNodes[0]),o.addEventListener("click",function(){document.body.removeChild(n)})},this.warn=function(e){var n,o;i.timer&&(t.cancel(i.timer),i.timer=null),n=r("warning",e),o=document.createElement("button"),o.classList.add("close"),o.innerHTML="<span>&times;</span>",n.insertBefore(o,n.childNodes[0]),o.addEventListener("click",function(){document.body.removeChild(n)})},this.success=function(e){var n;i.timer&&t.cancel(i.timer),n=r("success",e),i.timer=t(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null},2e3)},this.info=function(e){var n;i.timer&&t.cancel(i.timer),n=r("info",e),i.timer=t(function(){n.parentNode&&n.parentNode===document.body&&document.body.removeChild(n),i.timer=null},2e3)},this.progress=function(t){r("progress",t)},this.confirm=function(n,o){var a,s,c;return a=e.defer(),i.timer&&(t.cancel(i.timer),i.timer=null),s=r("warning",n),o&&o.length?o.forEach(function(t){c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML=t.label,s.appendChild(c,s.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(s),a.resolve(t.value)})}):(c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="是",s.appendChild(c,s.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(s),a.resolve()}),c=document.createElement("button"),c.classList.add("btn","btn-default","btn-sm"),c.innerHTML="否",s.appendChild(c,s.childNodes[0]),c.addEventListener("click",function(){document.body.removeChild(s),a.reject()})),a.promise}}])},83:function(t,e,n){var i=n(68);"string"==typeof i&&(i=[[t.i,i,""]]);var r={};r.transform=void 0;n(1)(i,r);i.locals&&(t.exports=i.locals)}});