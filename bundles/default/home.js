!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=60)}({0:function(t,e,r){(function(e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e){var o=n(i);return[r].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+new e(JSON.stringify(t)).toString("base64")+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}}).call(e,r(3).Buffer)},1:function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(c(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(c(n.parts[o],e));d[n.id]={id:n.id,refs:1,parts:s}}}}function i(t){for(var e=[],r={},n=0;n<t.length;n++){var i=t[n],o=i[0],s=i[1],a=i[2],u=i[3],f={css:s,media:a,sourceMap:u};r[o]?r[o].parts.push(f):e.push(r[o]={id:o,parts:[f]})}return e}function o(t,e){var r=m(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return t.attrs.type="text/css",f(e,t.attrs),o(t,e),e}function u(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",f(e,t.attrs),o(t,e),e}function f(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function c(t,e){var r,n,i;if(e.singleton){var o=y++;r=v||(v=a(e)),n=h.bind(null,r,o,!1),i=h.bind(null,r,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=u(e),n=p.bind(null,r,e),i=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(e),n=l.bind(null,r),i=function(){s(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}function h(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function l(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function p(t,e,r){var n=r.css,i=r.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(n=b(n)),i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var d={},g=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(t){var e={};return function(r){return void 0===e[r]&&(e[r]=t.call(this,r)),e[r]}}(function(t){return document.querySelector(t)}),v=null,y=0,w=[],b=r(6);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},void 0===e.singleton&&(e.singleton=g()),void 0===e.insertInto&&(e.insertInto="head"),void 0===e.insertAt&&(e.insertAt="bottom");var r=i(t);return n(r,e),function(t){for(var o=[],s=0;s<r.length;s++){var a=r[s],u=d[a.id];u.refs--,o.push(u)}if(t){n(i(t),e)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete d[u.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},2:function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var e,r,i,o,s,a,u=t.length;s=n(t),a=new h(3*u/4-s),i=s>0?u-4:u;var f=0;for(e=0,r=0;e<i;e+=4,r+=3)o=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],a[f++]=o>>16&255,a[f++]=o>>8&255,a[f++]=255&o;return 2===s?(o=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,a[f++]=255&o):1===s&&(o=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,a[f++]=o>>8&255,a[f++]=255&o),a}function s(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function a(t,e,r){for(var n,i=[],o=e;o<r;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(s(n));return i.join("")}function u(t){for(var e,r=t.length,n=r%3,i="",o=[],s=0,u=r-n;s<u;s+=16383)o.push(a(t,s,s+16383>u?u:s+16383));return 1===n?(e=t[r-1],i+=f[e>>2],i+=f[e<<4&63],i+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],i+=f[e>>10],i+=f[e>>4&63],i+=f[e<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=i,e.toByteArray=o,e.fromByteArray=u;for(var f=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)f[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},24:function(t,e,r){"use strict";r(48),r(9);var n=angular.module("app",["ngSanitize","ui.bootstrap","ui.tms","page.ui.xxt"]);n.config(["$locationProvider","$controllerProvider","$uibTooltipProvider",function(t,e,r){t.html5Mode(!0),n.provider={controller:e.register},r.setTriggers({show:"hide"})}]),n.provider("srvUser",function(){var t,e;this.$get=["$q","http2",function(r,n){return{getSiteAdmin:function(){return t?t.promise:(t=r.defer(),n.get("/rest/pl/fe/user/get",function(e){t.resolve(e.data)}),t.promise)},getSiteUser:function(t){return e?e.promise:(e=r.defer(),n.get("/rest/site/fe/user/get?site="+t,function(t){e.resolve(t.data)}),e.promise)}}}]}),n.controller("ctrlMain",["$scope","$timeout","$q","$uibModal","http2","srvUser","tmsDynaPage",function(t,e,r,i,o,s,a){function u(){var t=r.defer(),e="/rest/pl/fe/site/create?_="+1*new Date;return o.get(e,function(e){t.resolve(e.data)}),t.promise}function f(t,e){var r="/rest/pl/fe/template/purchase?template="+e.id;r+="&site="+t.id,o.get(r,function(r){o.get("/rest/pl/fe/matter/enroll/createByOther?site="+t.id+"&template="+e.id,function(e){location.href="/rest/pl/fe/matter/enroll?id="+e.data.id+"&site="+t.id})})}function c(){var t,e=r.defer();return window.localStorage&&(t=window.localStorage.getItem("xxt.site.home.user.role")),"person"===t?s.getSiteUser("platform").then(function(t){t.loginExpire?(l.nickname=t.nickname,l.role="person",l.isLogin=!0,l.account=t,e.resolve(l)):(s.getSiteAdmin().then(function(t){t?(l.nickname=t.nickname,l.role="admin",l.isLogin=!0,l.account=t):l.isLogin=!1}),e.resolve(l))}):s.getSiteAdmin().then(function(t){!1===t?s.getSiteUser("platform").then(function(t){t.loginExpire?(l.nickname=t.nickname,l.role="person",l.isLogin=!0,l.account=t):l.isLogin=!1,e.resolve(l)}):(l.nickname=t.nickname,l.role="admin",l.isLogin=!0,l.account=t,e.resolve(l))}),e.promise}var h,l,p={},d=!1,g=!1;t.user=l={},t.subView="",$("body").click(function(){d&&($("#popoverUseTempateAsAdmin").trigger("hide"),d=!1),g&&($("#popoverFavorTempateAsAdmin").trigger("hide"),g=!1)}),t.favorTemplate=function(r,n){if("admin"!==l.role){if(!n)return $("#popoverFavorTempateAsAdmin").trigger("show"),void e(function(){g=!0});t.shiftAsAdmin({name:"favorTemplate",args:[r]}).then(function(e){t.favorTemplate(r)})}if(l.isLogin&&"admin"===l.role){var s="/rest/pl/fe/template/siteCanFavor?template="+r.id+"&_="+1*new Date;o.get(s,function(t){var e=t.data;i.open({templateUrl:"favorTemplateSite.html",dropback:"static",controller:["$scope","$uibModalInstance",function(t,r){t.mySites=e,t.ok=function(){var t=[];e.forEach(function(e){"Y"===e._selected&&t.push(e)}),t.length?r.close(t):r.dismiss()},t.cancel=function(){r.dismiss()}}]}).result.then(function(t){var e="/rest/pl/fe/template/favor?template="+r.id,n=[];t.forEach(function(t){n.push(t.id)}),e+="&site="+n.join(","),o.get(e,function(t){})})})}},t.useTemplate=function(r,n){if("admin"!==l.role){if(!n)return $("#popoverUseTempateAsAdmin").trigger("show"),void e(function(){d=!0});t.shiftAsAdmin({name:"useTemplate",args:[r]}).then(function(e){t.useTemplate(r)})}if(l.isLogin&&"admin"===l.role){var s="/rest/pl/fe/site/list?_="+1*new Date;o.get(s,function(t){var e=t.data;1===e.length?f(e[0],r):0===e.length?u().then(function(t){f(t,r)}):i.open({templateUrl:"useTemplateSite.html",dropback:"static",controller:["$scope","$uibModalInstance",function(t,r){var n;t.mySites=e,t.data=n={},t.ok=function(){void 0!==n.index?r.close(e[n.index]):r.dismiss()},t.cancel=function(){r.dismiss()}}]}).result.then(function(t){f(t,r)})})}},t.subscribeByPerson=function(e){if(!1===l.isLogin){if(window.sessionStorage){var r=JSON.stringify({name:"subscribeByPerson",args:[e]});window.sessionStorage.setItem("xxt.home.auth.pending",r)}t.shiftAsPerson()}else{var n="/rest/site/fe/user/site/subscribe?site=platform&target="+e.siteid;o.get(n,function(t){e._subscribed="Y"})}},t.unsubscribeByPerson=function(t){var e="/rest/site/fe/user/site/unsubscribe?site=platform&target="+t.siteid;o.get(e,function(e){t._subscribed="N"})},t.subscribeByTeam=function(e){if(!1===l.isLogin){if(window.sessionStorage){var r=JSON.stringify({name:"subscribeByTeam",args:[e]});window.sessionStorage.setItem("xxt.home.auth.pending",r)}t.shiftAsAdmin()}else{var n="/rest/pl/fe/site/canSubscribe?site="+e.siteid+"&_="+1*new Date;o.get(n,function(t){var r=t.data;i.open({templateUrl:"subscribeByTeam.html",dropback:"static",controller:["$scope","$uibModalInstance",function(t,e){t.mySites=r,t.ok=function(){var t=[];r.forEach(function(e){"Y"===e._selected&&t.push(e)}),t.length?e.close(t):e.dismiss()},t.cancel=function(){e.dismiss()}}]}).result.then(function(t){var n="/rest/pl/fe/site/subscribe?site="+e.id;r=[],t.forEach(function(t){r.push(t.id)}),n+="&subscriber="+r.join(","),o.get(n,function(t){})})})}},t.shiftPage=function(e){t.subView!==e&&(void 0===p[e]?a.loadCode(n,h[e+"_page"]).then(function(){p[e]=h[e+"_page"],t.page=p[e]||{html:"<div></div>"},t.subView=e,history.replaceState({},"","/rest/home/"+e)}):(t.page=p[e]||{html:"<div></div>"},t.subView=e,history.replaceState({},"","/rest/home/"+e)))},t.shiftAsAdmin=function(t){var e=r.defer();return s.getSiteAdmin().then(function(r){window.localStorage&&window.localStorage.setItem("xxt.site.home.user.role","admin"),r?(l.nickname=r.nickname,l.role="admin",l.isLogin=!0,l.account=r,e.resolve(l)):(t&&window.sessionStorage&&window.sessionStorage.setItem("xxt.home.auth.pending",JSON.stringify(t)),location.href="/rest/pl/fe/user/auth")}),e.promise},t.shiftAsPerson=function(){s.getSiteUser("platform").then(function(t){window.localStorage&&window.localStorage.setItem("xxt.site.home.user.role","person"),t.loginExpire?(l.nickname=t.nickname,l.role="person",l.isLogin=!0,l.account=t):location.href="/rest/site/fe/user/login?site=platform"})},t.openSite=function(t){location.href="/rest/site/home?site="+t.siteid},t.openTemplate=function(t){location.href="/rest/site/fe/matter/template?template="+t.id},o.get("/rest/home/get",function(e){h=e.data.platform,!1===h.home_page?location.href="/rest/pl/fe":(t.platform=h,/\/site/.test(location.href)?t.shiftPage("site"):/\/template/.test(location.href)?t.shiftPage("template"):t.shiftPage("home")),c().then(function(e){if(window.sessionStorage){var r;(r=window.sessionStorage.getItem("xxt.home.auth.pending"))&&(window.sessionStorage.removeItem("xxt.home.auth.pending"),e.isLogin&&(r=JSON.parse(r),t[r.name].apply(t,r.args||[])))}})})}]),t.exports=n},3:function(t,e,r){"use strict";(function(t){function n(){return o.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return o.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=o.prototype):(null===t&&(t=new o(e)),t.length=e),t}function o(t,e,r){if(!(o.TYPED_ARRAY_SUPPORT||this instanceof o))return new o(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,r,n):"string"==typeof e?c(t,e,r):p(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,e,r,n){return a(e),e<=0?i(t,e):void 0!==r?"string"==typeof n?i(t,e).fill(r,n):i(t,e).fill(r):i(t,e)}function f(t,e){if(a(e),t=i(t,e<0?0:0|d(e)),!o.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!o.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|m(e,r);t=i(t,n);var s=t.write(e,r);return s!==n&&(t=t.slice(0,s)),t}function h(t,e){var r=e.length<0?0:0|d(e.length);t=i(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function l(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),o.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=o.prototype):t=h(t,e),t}function p(t,e){if(o.isBuffer(e)){var r=0|d(e.length);return t=i(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||X(e.length)?i(t,0):h(t,e);if("Buffer"===e.type&&Q(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),o.alloc(+t)}function m(t,e){if(o.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return F(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return H(t).length;default:if(n)return F(t).length;e=(""+e).toLowerCase(),n=!0}}function v(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return k(this,e,r);case"utf8":case"utf-8":return U(this,e,r);case"ascii":return B(this,e,r);case"latin1":case"binary":return C(this,e,r);case"base64":return T(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function w(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=o.from(e,n)),o.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,o.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){function o(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,r/=2}var f;if(i){var c=-1;for(f=r;f<a;f++)if(o(t,f)===o(e,-1===c?0:f-c)){if(-1===c&&(c=f),f-c+1===u)return c*s}else-1!==c&&(f-=f-c),c=-1}else for(r+u>a&&(r=a-u),f=r;f>=0;f--){for(var h=!0,l=0;l<u;l++)if(o(t,f+l)!==o(e,l)){h=!1;break}if(h)return f}return-1}function x(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[r+s]=a}return s}function A(t,e,r,n){return G(F(e,t.length-r),t,r,n)}function _(t,e,r,n){return G(z(e),t,r,n)}function E(t,e,r,n){return _(t,e,r,n)}function S(t,e,r,n){return G(H(e),t,r,n)}function R(t,e,r,n){return G(V(e,t.length-r),t,r,n)}function T(t,e,r){return 0===e&&r===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(e,r))}function U(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(i+a<=r){var u,f,c,h;switch(a){case 1:o<128&&(s=o);break;case 2:u=t[i+1],128==(192&u)&&(h=(31&o)<<6|63&u)>127&&(s=h);break;case 3:u=t[i+1],f=t[i+2],128==(192&u)&&128==(192&f)&&(h=(15&o)<<12|(63&u)<<6|63&f)>2047&&(h<55296||h>57343)&&(s=h);break;case 4:u=t[i+1],f=t[i+2],c=t[i+3],128==(192&u)&&128==(192&f)&&128==(192&c)&&(h=(15&o)<<18|(63&u)<<12|(63&f)<<6|63&c)>65535&&h<1114112&&(s=h)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=a}return P(n)}function P(t){var e=t.length;if(e<=W)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=W));return r}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function C(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function k(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=J(t[o]);return i}function L(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function I(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function O(t,e,r,n,i,s){if(!o.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function M(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Y(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function j(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function D(t,e,r,n,i){return i||j(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,e,r,n,23,4),r+4}function N(t,e,r,n,i){return i||j(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,e,r,n,52,8),r+8}function $(t){if(t=q(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function J(t){return t<16?"0"+t.toString(16):t.toString(16)}function F(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function z(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function V(t,e){for(var r,n,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function H(t){return Z.toByteArray($(t))}function G(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function X(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var Z=r(2),K=r(4),Q=r(5);e.Buffer=o,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50,o.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),o.poolSize=8192,o._augment=function(t){return t.__proto__=o.prototype,t},o.from=function(t,e,r){return s(null,t,e,r)},o.TYPED_ARRAY_SUPPORT&&(o.prototype.__proto__=Uint8Array.prototype,o.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&o[Symbol.species]===o&&Object.defineProperty(o,Symbol.species,{value:null,configurable:!0})),o.alloc=function(t,e,r){return u(null,t,e,r)},o.allocUnsafe=function(t){return f(null,t)},o.allocUnsafeSlow=function(t){return f(null,t)},o.isBuffer=function(t){return!(null==t||!t._isBuffer)},o.compare=function(t,e){if(!o.isBuffer(t)||!o.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,s=Math.min(r,n);i<s;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(t,e){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return o.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=o.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var s=t[r];if(!o.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},o.byteLength=m,o.prototype._isBuffer=!0,o.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},o.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},o.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},o.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?U(this,0,t):v.apply(this,arguments)},o.prototype.equals=function(t){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===o.compare(this,t)},o.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},o.prototype.compare=function(t,e,r,n,i){if(!o.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var s=i-n,a=r-e,u=Math.min(s,a),f=this.slice(n,i),c=t.slice(e,r),h=0;h<u;++h)if(f[h]!==c[h]){s=f[h],a=c[h];break}return s<a?-1:a<s?1:0},o.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},o.prototype.indexOf=function(t,e,r){return w(this,t,e,r,!0)},o.prototype.lastIndexOf=function(t,e,r){return w(this,t,e,r,!1)},o.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return x(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return E(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var W=4096;o.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n;if(o.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=o.prototype;else{var i=e-t;n=new o(i,void 0);for(var s=0;s<i;++s)n[s]=this[s+t]}return n},o.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},o.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},o.prototype.readUInt8=function(t,e){return e||I(t,1,this.length),this[t]},o.prototype.readUInt16LE=function(t,e){return e||I(t,2,this.length),this[t]|this[t+1]<<8},o.prototype.readUInt16BE=function(t,e){return e||I(t,2,this.length),this[t]<<8|this[t+1]},o.prototype.readUInt32LE=function(t,e){return e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},o.prototype.readUInt32BE=function(t,e){return e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},o.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},o.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||I(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},o.prototype.readInt8=function(t,e){return e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},o.prototype.readInt16LE=function(t,e){e||I(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(t,e){e||I(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(t,e){return e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},o.prototype.readInt32BE=function(t,e){return e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},o.prototype.readFloatLE=function(t,e){return e||I(t,4,this.length),K.read(this,t,!0,23,4)},o.prototype.readFloatBE=function(t,e){return e||I(t,4,this.length),K.read(this,t,!1,23,4)},o.prototype.readDoubleLE=function(t,e){return e||I(t,8,this.length),K.read(this,t,!0,52,8)},o.prototype.readDoubleBE=function(t,e){return e||I(t,8,this.length),K.read(this,t,!1,52,8)},o.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){O(this,t,e,r,Math.pow(2,8*r)-1,0)}var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},o.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){O(this,t,e,r,Math.pow(2,8*r)-1,0)}var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},o.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,1,255,0),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},o.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},o.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,65535,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},o.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):Y(this,t,e,!0),e+4},o.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,4294967295,0),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},o.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);O(this,t,e,r,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<r&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},o.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);O(this,t,e,r,i-1,-i)}var o=r-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+r},o.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,1,127,-128),o.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},o.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):M(this,t,e,!0),e+2},o.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,2,32767,-32768),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):M(this,t,e,!1),e+2},o.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,2147483647,-2147483648),o.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):Y(this,t,e,!0),e+4},o.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||O(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),o.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},o.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},o.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},o.prototype.writeDoubleLE=function(t,e,r){return N(this,t,e,!0,r)},o.prototype.writeDoubleBE=function(t,e,r){return N(this,t,e,!1,r)},o.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,s=n-r;if(this===t&&r<e&&e<n)for(i=s-1;i>=0;--i)t[i+e]=this[i+r];else if(s<1e3||!o.TYPED_ARRAY_SUPPORT)for(i=0;i<s;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+s),e);return s},o.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var s;if("number"==typeof t)for(s=e;s<r;++s)this[s]=t;else{var a=o.isBuffer(t)?t:F(new o(t,n).toString()),u=a.length;for(s=0;s<r-e;++s)this[s+e]=a[s%u]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(7))},36:function(t,e,r){e=t.exports=r(0)(void 0),e.push([t.i,'body,html{height:100%;width:100%}body{background-color:#fff;position:relative}.navbar{border:0;margin-bottom:0}.navbar-default{border-bottom:2px solid #ccc}.navbar-brand{height:58px;padding:6px}.navbar-nav>li>a{line-height:28px}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{background-color:#fff}.navbar-nav .active:after{content:" ";position:absolute;left:0;right:0;bottom:-1px;height:3px;background:#388dbf}@media screen and (min-width:768px){.navbar-nav{margin:0 0 0 45px}}.popover.bottom{margin-top:0}.popover-content{padding:0}.site_fe_home_icon{display:inline-block;width:18px;height:13px;margin-right:5px;background-repeat:no-repeat}.xxt_team{background-position:-112px -74px}.xxt_person{background-position:-110px -32px}.xxt_setting{background-position:-115px -117px}.xxt_quite{background-position:-110px -167px}.user-login a,.user-register a,.user-subscribe a{position:relative;display:block;padding:5px 20px;clear:both;font-weight:400;line-height:1.5;color:#333;white-space:nowrap}.user-login a:hover,.user-register a:hover,.user-subscribe a:hover{color:#fff;text-decoration:none;background-color:#388dbf}.dropdown-menu>li>a:hover .xxt_team,.user-login a:hover .xxt_team,.user-register a:hover .xxt_team,.user-subscribe a:hover .xxt_team{background-position:-40px -74px}.dropdown-menu>li>a:hover .xxt_person,.user-login a:hover .xxt_person,.user-register a:hover .xxt_person,.user-subscribe a:hover .xxt_person{background-position:-40px -31px}.dropdown-menu{padding:0}.dropdown-menu>li>a{padding:10px 20px}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{text-decoration:none;color:#fff;background-color:#388dbf}.dropdown-menu>li>a:hover .xxt_quite{background-position:-43px -168px}.dropdown-menu>li>a:hover .xxt_setting{background-position:-43px -117px}@media screen and (min-width:768px){.navbar-nav{margin:0}}',""])},4:function(t,e){e.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,f=u>>1,c=-7,h=r?i-1:0,l=r?-1:1,p=t[e+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=a;c>0;o=256*o+t[e+h],h+=l,c-=8);for(s=o&(1<<-c)-1,o>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=l,c-=8);if(0===o)o=1-f;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=f}return(p?-1:1)*s*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var s,a,u,f=8*o-i-1,c=(1<<f)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+h>=1?l/u:l*Math.pow(2,1-h),e*u>=2&&(s++,u/=2),s+h>=c?(a=0,s=c):s+h>=1?(a=(e*u-1)*Math.pow(2,i),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,f+=i;f>0;t[r+p]=255&s,p+=d,s/=256,f-=8);t[r+p-d]|=128*g}},48:function(t,e,r){var n=r(36);"string"==typeof n&&(n=[[t.i,n,""]]);r(1)(n,{});n.locals&&(t.exports=n.locals)},5:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},6:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var o;return o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},60:function(t,e,r){t.exports=r(24)},7:function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},9:function(module,exports,__webpack_require__){"use strict";var ngMod=angular.module("page.ui.xxt",[]);ngMod.directive("dynamicHtml",["$compile",function(t){return{restrict:"EA",replace:!0,link:function(e,r,n){e.$watch(n.dynamicHtml,function(n){n&&n.length&&(r.html(n),t(r.contents())(e))})}}}]),ngMod.service("tmsDynaPage",["$q",function($q){this.loadCss=function(t){var e,r;e=document.createElement("style"),e.innerHTML=t,r=document.querySelector("head"),r.appendChild(e)},this.loadExtCss=function(t){var e,r;e=document.createElement("link"),e.href=t,e.rel="stylesheet",r=document.querySelector("head"),r.appendChild(e)},this.loadJs=function(ngApp,js){!function(ngApp){eval(js)}(ngApp)},this.loadScript=function(t){var e,r,n=$q.defer();return r=function(){var i;i=document.createElement("script"),i.src=t[e],i.onload=function(){e++,e<t.length?r():n.resolve()},document.body.appendChild(i)},t&&(angular.isString(t)&&(t=[t]),t.length&&(e=0,r())),n.promise},this.loadExtJs=function(t,e){var r,n=this,i=$q.defer(),o=e.ext_js.length;return r=function(r){var s;s=document.createElement("script"),s.src=r.url,s.onload=function(){0===--o&&(e.js&&e.js.length&&n.loadJs(t,e.js),i.resolve())},document.body.appendChild(s)},e.ext_js&&e.ext_js.length&&e.ext_js.forEach(r),i.promise},this.loadCode=function(t,e){var r=this,n=$q.defer();return e.ext_css&&e.ext_css.length&&e.ext_css.forEach(function(t){r.loadExtCss(t.url)}),e.css&&e.css.length&&this.loadCss(e.css),e.ext_js&&e.ext_js.length?r.loadExtJs(t,e).then(function(){n.resolve()}):(e.js&&e.js.length&&r.loadJs(t,e.js),n.resolve()),n.promise},this.openPlugin=function(t){var e,r,n,i=$q.defer();return e=document.createDocumentFragment(),r=document.createElement("div"),r.setAttribute("id","frmPlugin"),n=document.createElement("iframe"),r.appendChild(n),r.onclick=function(){r.parentNode.removeChild(r)},e.appendChild(r),document.body.appendChild(e),0===t.indexOf("http")?(window.onClosePlugin=function(){r.parentNode.removeChild(r),i.resolve()},n.setAttribute("src",t)):n.contentDocument&&n.contentDocument.body&&(n.contentDocument.body.innerHTML=t),i.promise},this.cookieLogin=function(t){var e,r,n,i,o;return e=document.cookie,r="_site_"+t+"_fe_login",e.length>0&&-1!==(n=e.indexOf(r+"="))&&(n=n+r.length+1,i=e.indexOf(";",n),-1===i&&(i=e.length),o=e.substring(n,i),JSON.parse(decodeURIComponent(o)))}}])}});