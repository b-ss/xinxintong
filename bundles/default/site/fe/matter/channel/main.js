!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=105)}({105:function(e,t,n){e.exports=n(47)},2:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(e){return{restrict:"EA",replace:!0,link:function(t,n,i){t.$watch(i.dynamicHtml,function(i){i&&i.length&&(n.html(i),e(n.contents())(t))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(e){var t,n;t=document.createElement("style"),t.innerHTML=e,n=document.querySelector("head"),n.appendChild(t)},this.loadExtCss=function(e){var t,n;t=document.createElement("link"),t.href=e,t.rel="stylesheet",n=document.querySelector("head"),n.appendChild(t)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(e){var t,n,i=$q.defer();return n=function(){var o;o=document.createElement("script"),o.src=e[t],o.onload=function(){t++,t<e.length?n():i.resolve()},document.body.appendChild(o)},e&&(angular.isString(e)&&(e=[e]),e.length&&(t=0,n())),i.promise},this.loadExtJs=function(e,t){var n,i=this,o=$q.defer(),r=t.ext_js.length;return n=function(n){var s;s=document.createElement("script"),s.src=n.url,s.onload=function(){0===--r&&(t.js&&t.js.length&&i.loadJs(e,t.js),o.resolve())},document.body.appendChild(s)},t.ext_js&&t.ext_js.length&&t.ext_js.forEach(n),o.promise},this.loadCode=function(e,t){var n=this,i=$q.defer();return t.ext_css&&t.ext_css.length&&t.ext_css.forEach(function(e){n.loadExtCss(e.url)}),t.css&&t.css.length&&this.loadCss(t.css),t.ext_js&&t.ext_js.length?n.loadExtJs(e,t).then(function(){i.resolve()}):(t.js&&t.js.length&&n.loadJs(e,t.js),i.resolve()),i.promise},this.openPlugin=function(e){var t,n,i,o,r=$q.defer();return document.documentElement.clientWidth>768?document.documentElement.scrollTop=0:document.body.scrollTop=0,o=document.getElementsByTagName("body")[0],o.style.cssText="overflow-y:hidden",t=document.createDocumentFragment(),n=document.createElement("div"),n.setAttribute("id","frmPlugin"),i=document.createElement("iframe"),n.appendChild(i),n.onclick=function(){n.parentNode.removeChild(n),o.style.cssText="overflow-y:auto"},t.appendChild(n),document.body.appendChild(t),0===e.indexOf("http")?(window.onClosePlugin=function(e){n.parentNode.removeChild(n),o.style.cssText="overflow-y:auto",r.resolve(e)},i.setAttribute("src",e)):i.contentDocument&&i.contentDocument.body&&(i.contentDocument.body.innerHTML=e),r.promise}}])},47:function(e,t,n){"use strict";n(2),n(9),angular.module("app",["ui.bootstrap","infinite-scroll","page.ui.xxt","snsshare.ui.xxt"]).config(["$locationProvider",function(e){e.html5Mode(!0)}]).controller("ctrl",["$scope","$location","$http","$q","tmsDynaPage","tmsSnsShare",function(e,t,n,i,o,r){function s(e){return-1!==Object.keys(e).indexOf("pic")&&null==e.pic?e.src=e.pic="":-1!==Object.keys(e).indexOf("thumbnail")&&null==e.thumbnail?e.src=e.thumnail="":e.src=e.pic?e.pic:e.thumbnail,e}var c,a,l,u;c=t.search().site,a=t.search().id,l=t.search().inviteToken,u=t.search().shareby?t.search().shareby:"";var d=function(){var t,i;t=e.user.uid+"_"+1*new Date,r.config({siteId:c,logger:function(i){var o="/rest/site/fe/matter/logShare";o+="?shareid="+t,o+="&site="+c,o+="&id="+a,o+="&type=channel",o+="&title="+e.channel.title,o+="&shareto="+i,o+="&shareby="+u,n.get(o)},jsApiList:["hideOptionMenu","onMenuShareTimeline","onMenuShareAppMessage"]}),e.channel.invite?i=location.protocol+"//"+location.host+"/i/"+e.channel.invite.code:(i=location.href,/shareby=/.test(i)?i=i.replace(/shareby=[^&]*/,"shareby="+t):i+="&shareby="+t),r.set(e.channel.title,i,e.channel.summary,e.channel.pic)};e.Matter={matters:[],busy:!1,page:1,orderby:"time",changeOrderby:function(){this.reset()},reset:function(){this.matters=[],this.busy=!1,this.end=!1,this.page=1,this.nextPage()},nextPage:function(){var e,t=this;this.end||(this.busy=!0,e="/rest/site/fe/matter/channel/mattersGet",e+="?site="+c,e+="&id="+a,e+="&orderby="+this.orderby,e+="&page="+this.page,e+="&size=10",n.get(e).success(function(e){if(e.data.matters.length){for(var n=e.data.matters,i=0,o=n.length;i<o;i++)s(n[i]),t.matters.push(n[i]);t.page++}else t.end=!0;t.busy=!1}))}},e.elSiteCard=angular.element(document.querySelector("#site-card")),e.siteCardToggled=function(e){var t;e&&(t=document.querySelector("#site-card>.dropdown-menu"))&&(t.style.left="auto",t.style.right=0)},e.open=function(t){e.channel.invite?location.href=t.url+"&inviteToken="+l:location.href=t.url},e.siteUser=function(e){var t=location.protocol+"//"+location.host;t+="/rest/site/fe/user",t+="?site="+c,location.href=t},e.invite=function(e,t){e.loginExpire?location.href="/rest/site/fe/invite?matter=channel,"+t.id+"&inviteToken="+l:o.openPlugin(location.protocol+"//"+location.host+"/rest/site/fe/user/access?site=platform#login").then(function(n){e.loginExpire=n.loginExpire,location.href="/rest/site/fe/invite?matter=channel,"+t.id+"&inviteToken="+l})};var h=function(){var t=i.defer();return n.get("/rest/site/home/get?site="+c).success(function(t){e.siteInfo=t.data}),n.get("/rest/site/fe/matter/channel/get?site="+c+"&id="+a).success(function(i){e.user=i.data.user,e.channel=i.data.channel,e.qrcode="/rest/site/fe/matter/channel/qrcode?site="+c+"&url="+encodeURIComponent(location.href),/MicroMessenge|Yixin/i.test(navigator.userAgent)&&d(),t.resolve(),n.post("/rest/site/fe/matter/logAccess?site="+c+"&id="+a+"&type=channel&title="+e.channel.title+"&shareby="+u,{search:location.search.replace("?",""),referer:document.referrer})}).error(function(e,t){if(401===t){var n=document.createElement("iframe");n.setAttribute("id","frmAuth"),n.onload=function(){this.height=document.documentElement.clientHeight},document.body.appendChild(n),0===e.indexOf("http")?(window.onAuthSuccess=function(){n.style.display="none",h()},n.setAttribute("src",e),n.style.display="block"):n.contentDocument&&n.contentDocument.body&&(n.contentDocument.body.innerHTML=e,n.style.display="block")}else alert(e)}),t.promise};h()}])},9:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("snsshare.ui.xxt",[]);ngMod.service("tmsSnsShare",["$http",function($http){function setWxShare(e,t,n,i,o){window.wx.onMenuShareTimeline({title:o.descAsTitle?n:e,link:t,imgUrl:i,success:function(){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareT: fail")}}),window.wx.onMenuShareAppMessage({title:e,desc:n,link:t,imgUrl:i,success:function(){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}},cancel:function(){},fail:function(){alert("shareF: fail")}})}function setYxShare(e,t,n,i,o){var r={img_url:i,link:t,title:e,desc:n};window.YixinJSBridge.on("menu:share:appmessage",function(e){try{o.logger&&o.logger("F")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("sendAppMessage",r,function(e){})}),window.YixinJSBridge.on("menu:share:timeline",function(e){try{o.logger&&o.logger("T")}catch(e){alert("share failed:"+e.message)}window.YixinJSBridge.invoke("shareTimeline",r,function(e){})})}var _isReady=!1;this.config=function(e){this.options=e},this.set=function(title,link,desc,img,fnOther){var _this=this;if(img&&-1===img.indexOf(location.protocol)&&(img=location.protocol+"//"+location.host+img),_isReady)/MicroMessenger/i.test(navigator.userAgent)?setWxShare(title,link,desc,img,_this.options):/Yixin/i.test(navigator.userAgent)?setYxShare(title,link,desc,img,_this.options):fnOther&&"function"==typeof fnOther&&fnOther(title,link,desc,img);else if(/MicroMessenger/i.test(navigator.userAgent)){var script;script=document.createElement("script"),script.src=location.protocol+"//res.wx.qq.com/open/js/jweixin-1.0.0.js",script.onload=function(){var xhr,url;xhr=new XMLHttpRequest,url="/rest/site/fe/wxjssdksignpackage?site="+_this.options.siteId+"&url="+encodeURIComponent(location.href.split("#")[0]),xhr.open("GET",url,!0),xhr.onreadystatechange=function(){if(4==xhr.readyState)if(xhr.status>=200&&xhr.status<400){var signPackage;try{eval("("+xhr.responseText+")"),signPackage&&(signPackage.debug=!1,signPackage.jsApiList=_this.options.jsApiList,wx.config(signPackage),wx.ready(function(){setWxShare(title,link,desc,img,_this.options),_isReady=!0}),wx.error(function(e){alert(JSON.stringify(e))}))}catch(e){alert("local error:"+e.toString())}}else alert("http error:"+xhr.statusText)},xhr.send()},document.body.appendChild(script)}else/Yixin/i.test(navigator.userAgent)?void 0===window.YixinJSBridge?document.addEventListener("YixinJSBridgeReady",function(){setYxShare(title,link,desc,img,_this.options),_isReady=!0},!1):(setYxShare(title,link,desc,img,_this.options),_isReady=!0):fnOther&&"function"==typeof fnOther&&(fnOther(title,link,desc,img),_isReady=!0)}}])}});