/*!
 Lo-Dash 0.4.2 lodash.com/license
 Underscore.js 1.3.3 github.com/documentcloud/underscore/blob/master/LICENSE
*/
;(function(e,t){function s(e){var t,n=[];if(!e)return n;var r="function"==typeof e&&ct.call(e,"prototype");for(t in e)(!r||"prototype"!=t)&&ft.call(e,t)&&n.push(e[t]);return n}function o(e){var t,n=[];if(!e)return n;var r="function"==typeof e&&ct.call(e,"prototype");for(t in e)r&&"prototype"==t||pt.call(e[t])==Et&&n.push(t);return n.sort(),n}function u(e){var t,n=e;if(!e)return e;for(var r=1,i=arguments.length;r<i;r++){var n=arguments[r],s="function"==typeof n&&ct.call(n,"prototype");
for(t in n)s&&"prototype"==t||(e[t]=n[t])}return e}function a(e,t,r){if(!e)return i;t?r&&(t=N(t,r)):t=q;var s=e.length,r=-1;if(s===s>>>0){for(;++r<s;)if(t(e[r],r,e))return n}else for(r in s="function"==typeof e&&ct.call(e,"prototype"),e)if((!s||"prototype"!=r)&&ft.call(e,r)&&t(e[r],r,e))return n;return i}function f(e,t,n,r){var s,o=n;if(!e)return o;var u=3>arguments.length;r&&(t=N(t,r));var a=e.length;s=-1;if(a===a>>>0)for(u&&(o=e[++s]);++s<a;)o=t(o,e[s],s,e);else for(s in a="function"==typeof e&&
ct.call(e,"prototype"),e)(!a||"prototype"!=s)&&ft.call(e,s)&&(o=u?(u=i,e[s]):t(o,e[s],s,e));return o}function l(e,t){var n,r;if(!e)return[];var i=e.length;n=-1;if(i===i>>>0)for(r=Array(i);++n<i;)r[n]=e[n][t];else for(n in i="function"==typeof e&&ct.call(e,"prototype"),r=[],e)(!i||"prototype"!=n)&&ft.call(e,n)&&r.push(e[n][t]);return r}function c(e,t,n){var r;if(!e)return[];t?n&&(t=N(t,n)):t=q;var i=e.length,n=-1;if(i===i>>>0)for(r=Array(i);++n<i;)r[n]=t(e[n],n,e);else for(n in i="function"==typeof 
e&&ct.call(e,"prototype"),r=[],e)(!i||"prototype"!=n)&&ft.call(e,n)&&r.push(t(e[n],n,e));return r}function h(e,t,n){if(!e)return e;n&&(t=N(t,n));var r=e.length,n=-1;if(r===r>>>0)for(;++n<r;)t(e[n],n,e);else for(n in r="function"==typeof e&&ct.call(e,"prototype"),e)(!r||"prototype"!=n)&&ft.call(e,n)&&t(e[n],n,e);return e}function p(e,t,n){if(e){n&&(t=N(t,n));var r=e.length,n=-1;if(r===r>>>0){for(;++n<r;)if(t(e[n],n,e))return e[n]}else for(n in r="function"==typeof e&&ct.call(e,"prototype"),e)if((!
r||"prototype"!=n)&&ft.call(e,n)&&t(e[n],n,e))return e[n]}}function d(e,t,n){var r=[];if(!e)return r;t?n&&(t=N(t,n)):t=q;var i=e.length,n=-1;if(i===i>>>0)for(;++n<i;)t(e[n],n,e)&&r.push(e[n]);else for(n in i="function"==typeof e&&ct.call(e,"prototype"),e)(!i||"prototype"!=n)&&ft.call(e,n)&&t(e[n],n,e)&&r.push(e[n]);return r}function v(e,t,r){if(!e)return n;t?r&&(t=N(t,r)):t=q;var s=e.length,r=-1;if(s===s>>>0){for(;++r<s;)if(!t(e[r],r,e))return i}else for(r in s="function"==typeof e&&ct.call(e,"prototype"
),e)if((!s||"prototype"!=r)&&ft.call(e,r)&&!t(e[r],r,e))return i;return n}function m(e,t){var r;if(!e)return i;var s=e.length;r=-1;if(s===s>>>0){if(pt.call(e)==Tt)return-1<e.indexOf(t);for(;++r<s;)if(e[r]===t)return n}else for(r in s="function"==typeof e&&ct.call(e,"prototype"),e)if((!s||"prototype"!=r)&&ft.call(e,r)&&e[r]===t)return n;return i}function g(e){var t,n=[];if(!e||!At[typeof e])throw TypeError();var r="function"==typeof e&&ct.call(e,"prototype");for(t in e)(!r||"prototype"!=t)&&ft.call
(e,t)&&n.push(t);return n}function y(e){return new b(e)}function b(e){if(e&&e._wrapped)return e;this._wrapped=e}function w(e,t,n){t||(t=0);var r=e.length,i=r-t>=(n||30),s=i?{}:e;if(i)for(var o=t-1;++o<r;)n=e[o]+"",(ft.call(s,n)?s[n]:s[n]=[]).push(e[o]);return function(e){if(i){var n=e+"";return ft.call(s,n)&&-1<D(s[n],e)}return-1<D(s,e,t)}}function E(e,n){return e=e.a,n=n.a,e===t?1:n===t?-1:e<n?-1:e>n?1:0}function S(e,t){return ut[t]}function x(e){return"\\"+Ot[e]}function T(e){return Lt[e]}function N
(e,t){return function(n,r,i){return e.call(t,n,r,i)}}function C(){}function k(e,t){if(G.test(t))return"<e%-"+t+"%>";var n=ut.length;return ut[n]="'+__e("+t+")+'",ot+n}function L(e,t,n,r){return e=ut.length,t?ut[e]="';"+t+";__p+='":n?ut[e]="'+__e("+n+")+'":r&&(ut[e]="'+((__t=("+r+"))==null?'':__t)+'"),ot+e}function A(e,t){if(G.test(t))return"<e%="+t+"%>";var n=ut.length;return ut[n]="'+((__t=("+t+"))==null?'':__t)+'",ot+n}function O(e,t,n,r){if(!e)return n;var i=e.length,s=3>arguments.length;r&&(t=
N(t,r));if(i===i>>>0){for(i&&s&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}var o=_t(e);for((i=o.length)&&s&&(n=e[o[--i]]);i--;)s=o[i],n=t(n,e[s],s,e);return n}function M(e,t,n){if(e)return t==r||n?e[0]:ht.call(e,0,t)}function _(e,t){var n=[];if(!e)return n;for(var r,i=-1,s=e.length;++i<s;)r=e[i],Mt(r)?lt.apply(n,t?r:_(r)):n.push(r);return n}function D(e,t,n){if(!e)return-1;var r=-1,i=e.length;if(n){if("number"!=typeof n)return r=B(e,t),e[r]===t?r:-1;r=(0>n?Math.max(0,i+n):n)-1}for(;++r<i;)if(e[r]===
t)return r;return-1}function P(e,t,n){var r=-Infinity,i=r;if(!e)return i;var s=-1,o=e.length;if(!t){for(;++s<o;)e[s]>i&&(i=e[s]);return i}for(n&&(t=N(t,n));++s<o;)n=t(e[s],s,e),n>r&&(r=n,i=e[s]);return i}function H(e,t,n){return e?ht.call(e,t==r||n?1:t):[]}function B(e,t,n,r){if(!e)return 0;var i=0,s=e.length;if(n){r&&(n=F(n,r));for(t=n(t);i<s;)r=i+s>>>1,n(e[r])<t?i=r+1:s=r}else for(;i<s;)r=i+s>>>1,e[r]<t?i=r+1:s=r;return i}function j(e,t,n,r){var s=[];if(!e)return s;var o=-1,u=e.length,a=[];"function"==typeof 
t&&(r=n,n=t,t=i);for(n?r&&(n=N(n,r)):n=q;++o<u;)if(r=n(e[o],o,e),t?!o||a[a.length-1]!==r:0>D(a,r))a.push(r),s.push(e[o]);return s}function F(e,t){function n(){var o=arguments,u=t;return i||(e=t[r]),s.length&&(o=o.length?at.apply(s,o):s),this instanceof n?(C.prototype=e.prototype,u=new C,(o=e.apply(u,o))&&At[typeof o]?o:u):e.apply(u,o)}var r,i=pt.call(e)==Et;if(i){if(kt||dt&&2<arguments.length)return dt.call.apply(dt,arguments)}else r=t,t=e;var s=ht.call(arguments,2);return n}function I(e,t,s){s||
(s=[]);if(e===t)return 0!==e||1/e==1/t;if(e==r||t==r)return e===t;e._chain&&(e=e._wrapped),t._chain&&(t=t._wrapped);if(e.isEqual&&pt.call(e.isEqual)==Et)return e.isEqual(t);if(t.isEqual&&pt.call(t.isEqual)==Et)return t.isEqual(e);var o=pt.call(e);if(o!=pt.call(t))return i;switch(o){case Tt:return e==""+t;case St:return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case bt:case wt:return+e==+t;case xt:return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof 
e||"object"!=typeof t)return i;for(var u=s.length;u--;)if(s[u]==e)return n;var u=n,a=0;s.push(e);if(o==yt){if(a=e.length,u=a==t.length)for(;a--&&(u=I(e[a],t[a],s)););}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return i;for(var f in e)if(ft.call(e,f)&&(a++,!(u=ft.call(t,f)&&I(e[f],t[f],s))))break;if(u){for(f in t)if(ft.call(t,f)&&!(a--))break;u=!a}}return s.pop(),u}function q(e){return e}function R(e){h(o(e),function(t){var r=y[t]=e[t];b.prototype[t]=function(){var e=
[this._wrapped];return arguments.length&&lt.apply(e,arguments),e=r.apply(y,e),this._chain&&(e=new b(e),e._chain=n),e}})}var n=!0,r=null,i=!1,U,z,W,X,V="object"==typeof exports&&exports&&("object"==typeof global&&global&&global==global.global&&(e=global),exports),$=Array.prototype,J=Object.prototype,K=0,Q=e._,G=/[-+=!~*%&^<>|{(\/]|\[\D|\b(?:delete|in|instanceof|new|typeof|void)\b/,Y=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,et=/(__e\(.*?\)|\b__t\))\+'';/g,tt=/(?:__e|__t=)\(\s*(?![\d\s"']|this\.)/g,nt=RegExp
("^"+(J.valueOf+"").replace(/[.*+?^=!:${}()|[\]\/\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),rt=/__token__(\d+)/g,it=/[&<"']/g,st=/['\n\r\t\u2028\u2029\\]/g,ot="__token__",ut=[],at=$.concat,ft=J.hasOwnProperty,lt=$.push,ct=J.propertyIsEnumerable,ht=$.slice,pt=J.toString,dt=nt.test(dt=ht.bind)&&dt,vt=nt.test(vt=Array.isArray)&&vt,mt=e.isFinite,gt=nt.test(gt=Object.keys)&&gt,yt="[object Array]",bt="[object Boolean]",wt="[object Date]",Et="[object Function]",St="[object Number]",xt="[object RegExp]"
,Tt="[object String]",Nt=e.clearTimeout,Ct=e.setTimeout,kt=dt&&/\n|Opera/.test(dt+pt.call(e.opera)),Lt={"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#x27;"},At={"boolean":i,"function":n,object:n,number:i,string:i,"undefined":i},Ot={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};y.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,variable:"obj"},h({Arguments:"[object Arguments]",Date:wt,Function:Et,Number:St,RegExp:xt
,String:Tt},function(e,t){y["is"+t]=function(t){return pt.call(t)==e}});var Mt=vt||function(e){return pt.call(e)==yt},_t=gt?function(e){return"function"==typeof e&&ct.call(e,"prototype")?g(e):gt(e)}:g;y.VERSION="0.4.2",y.after=function(e,t){return 1>e?t():function(){if(1>--e)return t.apply(this,arguments)}},y.bind=F,y.bindAll=function(e){var t,n=e,r=e;if(!e)return r;var i=arguments,s=i.length;if(1<s){for(t=1;t<s;t++)r[i[t]]=F(r[i[t]],r);return r}i="function"==typeof n&&ct.call(n,"prototype");for(
t in n)i&&"prototype"==t||pt.call(r[t])==Et&&(r[t]=F(r[t],r));return r},y.chain=function(e){return e=new b(e),e._chain=n,e},y.clone=function(e){return e&&At[typeof e]?Mt(e)?e.slice():u({},e):e},y.compact=function(e){var t=[];if(!e)return t;for(var n=-1,r=e.length;++n<r;)e[n]&&t.push(e[n]);return t},y.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length;n--;)t=[e[n].apply(this,t)];return t[0]}},y.contains=m,y.debounce=function(e,t,n){function i(){a=r,n||e.apply(u,s)}
var s,o,u,a;return function(){var r=n&&!a;return s=arguments,u=this,Nt(a),a=Ct(i,t),r&&(o=e.apply(u,s)),o}},y.defaults=function(e){var t,n=e;if(!e)return e;for(var i=1,s=arguments.length;i<s;i++){var n=arguments[i],o="function"==typeof n&&ct.call(n,"prototype");for(t in n)o&&"prototype"==t||e[t]==r&&(e[t]=n[t])}return e},y.defer=function(e){var n=ht.call(arguments,1);return Ct(function(){return e.apply(t,n)},1)},y.delay=function(e,n){var r=ht.call(arguments,2);return Ct(function(){return e.apply(
t,r)},n)},y.difference=function(e){var t=[];if(!e)return t;for(var n=-1,r=e.length,i=at.apply(t,arguments),i=w(i,r);++n<r;)i(e[n])||t.push(e[n]);return t},y.escape=function(e){return e==r?"":(e+"").replace(it,T)},y.every=v,y.extend=u,y.filter=d,y.find=p,y.first=M,y.flatten=_,y.forEach=h,y.forIn=function(e,t,n){var r;if(!e)return e;n&&(t=N(t,n)),n="function"==typeof e&&ct.call(e,"prototype");for(r in e)n&&"prototype"==r||t(e[r],r,e);return e},y.forOwn=function(e,t,n){var r;if(!e)return e;n&&(t=N(t
,n)),n="function"==typeof e&&ct.call(e,"prototype");for(r in e)(!n||"prototype"!=r)&&ft.call(e,r)&&t(e[r],r,e);return e},y.functions=o,y.groupBy=function(e,t,n){var r={};if(!e)return r;var i,s="function"==typeof t;s&&n&&(t=N(t,n));var o=e.length,n=-1;if(o===o>>>0)for(;++n<o;)i=s?t(e[n],n,e):e[n][t],(ft.call(r,i)?r[i]:r[i]=[]).push(e[n]);else for(n in o="function"==typeof e&&ct.call(e,"prototype"),e)(!o||"prototype"!=n)&&ft.call(e,n)&&(i=s?t(e[n],n,e):e[n][t],(ft.call(r,i)?r[i]:r[i]=[]).push(e[n])
);return r},y.has=function(e,t){return ft.call(e,t)},y.identity=q,y.indexOf=D,y.initial=function(e,t,n){return e?ht.call(e,0,-(t==r||n?1:t)):[]},y.intersection=function(e){var t=[];if(!e)return t;for(var n,r=-1,i=e.length,s=ht.call(arguments,1),o=[];++r<i;)n=e[r],0>D(t,n)&&v(s,function(e,t){return(o[t]||(o[t]=w(e)))(n)})&&t.push(n);return t},y.invoke=function(e,t){var n,r=e,i;if(!e)return[];var s=ht.call(arguments,2),o="function"==typeof t,u=r.length;n=-1;if(u===u>>>0)for(i=Array(u);++n<u;)i[n]=(
o?t:r[n][t]).apply(r[n],s);else for(n in u="function"==typeof r&&ct.call(r,"prototype"),i=[],r)(!u||"prototype"!=n)&&ft.call(r,n)&&i.push((o?t:r[n][t]).apply(r[n],s));return i},y.isArray=Mt,y.isBoolean=function(e){return e===n||e===i||pt.call(e)==bt},y.isElement=function(e){return!!e&&1==e.nodeType},y.isEmpty=function(e){var t;if(!e)return n;var r=pt.call(e);if(r==yt||r==Tt)return!e.length;r="function"==typeof e&&ct.call(e,"prototype");for(t in e)if((!r||"prototype"!=t)&&ft.call(e,t))return i;return n
},y.isEqual=I,y.isFinite=function(e){return mt(e)&&pt.call(e)==St},y.isNaN=function(e){return pt.call(e)==St&&e!=+e},y.isNull=function(e){return e===r},y.isObject=function(e){return e&&At[typeof e]},y.isUndefined=function(e){return e===t},y.keys=_t,y.last=function(e,t,n){if(e){var i=e.length;return t==r||n?e[i-1]:ht.call(e,-t||i)}},y.lastIndexOf=function(e,t,n){if(!e)return-1;var r=e.length;for(n&&"number"==typeof n&&(r=(0>n?Math.max(0,r+n):Math.min(n,r-1))+1);r--;)if(e[r]===t)return r;return-1},
y.map=c,y.max=P,y.memoize=function(e,t){var n={};return function(){var r=t?t.apply(this,arguments):arguments[0];return ft.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}},y.min=function(e,t,n){var r=Infinity,i=r;if(!e)return i;var s=-1,o=e.length;if(!t){for(;++s<o;)e[s]<i&&(i=e[s]);return i}for(n&&(t=N(t,n));++s<o;)n=t(e[s],s,e),n<r&&(r=n,i=e[s]);return i},y.mixin=R,y.noConflict=function(){return e._=Q,this},y.once=function(e){var t,r=i;return function(){return r?t:(r=n,t=e.apply(this,arguments))}},
y.partial=function(e){var t=ht.call(arguments,1),n=t.length;return function(){var r;return r=arguments,r.length&&(t.length=n,lt.apply(t,r)),r=1==t.length?e.call(this,t[0]):e.apply(this,t),t.length=n,r}},y.pick=function(e){for(var t,n=0,r=at.apply($,arguments),i=r.length,s={};++n<i;)t=r[n],t in e&&(s[t]=e[t]);return s},y.pluck=l,y.range=function(e,t,n){n||(n=1),t==r&&(t=e||0,e=0);for(var i=-1,t=Math.max(0,Math.ceil((t-e)/n)),s=Array(t);++i<t;)s[i]=e,e+=n;return s},y.reduce=f,y.reduceRight=O,y.reject=
function(e,t,n){var r=[];if(!e)return r;t?n&&(t=N(t,n)):t=q;var i=e.length,n=-1;if(i===i>>>0)for(;++n<i;)!t(e[n],n,e)&&r.push(e[n]);else for(n in i="function"==typeof e&&ct.call(e,"prototype"),e)(!i||"prototype"!=n)&&ft.call(e,n)&&!t(e[n],n,e)&&r.push(e[n]);return r},y.rest=H,y.result=function(e,t){if(!e)return r;var n=e[t];return pt.call(n)==Et?e[t]():n},y.shuffle=function(e){if(!e)return[];for(var t,n=-1,r=e.length,i=Array(r);++n<r;)t=Math.floor(Math.random()*(n+1)),i[n]=i[t],i[t]=e[n];return i
},y.size=function(e){if(!e)return 0;var t=e.length;return t===t>>>0?e.length:_t(e).length},y.some=a,y.sortBy=function(e,t,n){var r;if(!e)return[];if("string"==typeof t)var i=t,t=function(e){return e[i]};else n&&(t=N(t,n));var s=e.length,n=-1;if(s===s>>>0)for(r=Array(s);++n<s;)r[n]={a:t(e[n],n,e),b:e[n]};else for(n in s="function"==typeof e&&ct.call(e,"prototype"),r=[],e)(!s||"prototype"!=n)&&ft.call(e,n)&&r.push({a:t(e[n],n,e),b:e[n]});r.sort(E);for(s=r.length;s--;)r[s]=r[s].b;return r},y.sortedIndex=
B,y.tap=function(e,t){return t(e),e},y.template=function(e,t,n){n||(n={});var i,s;i=n.escape;var o=n.evaluate,u=n.interpolate,a=y.templateSettings,n=n.variable;i==r&&(i=a.escape),o==r&&(o=a.evaluate),u==r&&(u=a.interpolate),i&&(e=e.replace(i,k)),u&&(e=e.replace(u,A)),o!=U&&(U=o,X=RegExp((o?o.source:"($^)")+"|<e%-([\\s\\S]+?)%>|<e%=([\\s\\S]+?)%>","g")),i=ut.length,e=e.replace(X,L),i=i!=ut.length,e="__p += '"+e.replace(st,x).replace(rt,S)+"';",ut.length=0,n||(n=a.variable||z||"obj",i?e="with("+n+"){"+
e+"}":(n!=z&&(z=n,W=RegExp("(\\(\\s*)"+n+"\\."+n+"\\b","g")),e=e.replace(tt,"$&"+n+".").replace(W,"$1__d"))),e=(i?e.replace(Y,""):e).replace(Z,"$1").replace(et,"$1;"),e="function("+n+"){"+n+"||("+n+"={});var __t,__p='',__e=_.escape"+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":",__d="+n+"."+n+"||"+n+";")+e+"return __p}";try{s=Function("_","return "+e)(y)}catch(f){s=function(){throw f}}return t?s(t):(s.source=e,s)},y.throttle=function(e,t){function n(){a=new Date,u=
r,e.apply(o,i)}var i,s,o,u,a=0;return function(){var r=new Date,f=t-(r-a);return i=arguments,o=this,0>=f?(a=r,s=e.apply(o,i)):u||(u=Ct(n,f)),s}},y.times=function(e,t,n){var r=-1;if(n)for(;++r<e;)t.call(n,r);else for(;++r<e;)t(r)},y.toArray=function(e){if(!e)return[];if(e.toArray&&pt.call(e.toArray)==Et)return e.toArray();var t=e.length;return t===t>>>0?"string"==typeof e?e.split(""):ht.call(e):s(e)},y.union=function(){for(var e=-1,t=[],n=at.apply(t,arguments),r=n.length;++e<r;)0>D(t,n[e])&&t.push
(n[e]);return t},y.uniq=j,y.uniqueId=function(e){var t=K++;return e?e+t:t},y.values=s,y.without=function(e){var t=[];if(!e)return t;for(var n=-1,r=e.length,i=w(arguments,1,20);++n<r;)i(e[n])||t.push(e[n]);return t},y.wrap=function(e,t){return function(){var n=[e];return arguments.length&&lt.apply(n,arguments),t.apply(this,n)}},y.zip=function(e){if(!e)return[];for(var t=-1,n=P(l(arguments,"length")),r=Array(n);++t<n;)r[t]=l(arguments,t);return r},y.zipObject=function(e,t){if(!e)return{};var n=-1,r=
e.length,i={};for(t||(t=[]);++n<r;)i[e[n]]=t[n];return i},y.all=v,y.any=a,y.collect=c,y.detect=p,y.each=h,y.foldl=f,y.foldr=O,y.head=M,y.include=m,y.inject=f,y.methods=o,y.select=d,y.tail=H,y.take=M,y.unique=j,b.prototype=y.prototype,R(y),b.prototype.chain=function(){return this._chain=n,this},b.prototype.value=function(){return this._wrapped},h("pop push reverse shift sort splice unshift".split(" "),function(e){var t=$[e];b.prototype[e]=function(){var e=this._wrapped;return t.apply(e,arguments),
this._chain&&(e=new b(e),e._chain=n),e}}),h(["concat","join","slice"],function(e){var t=$[e];b.prototype[e]=function(){var e=t.apply(this._wrapped,arguments);return this._chain&&(e=new b(e),e._chain=n),e}}),typeof define=="function"&&typeof define.amd=="object"&&define.amd?(e._=y,define(function(){return y})):V?"object"==typeof module&&module&&module.c==V?(module.c=y)._=y:V._=y:e._=y})(this);