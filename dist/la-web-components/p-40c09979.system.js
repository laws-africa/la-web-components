var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?t(e.value):a(e.value).then(l,s)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(r){return o([e,r])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=r.call(e,t)}catch(e){l=[6,e];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var n=0,a=r.length,i;n<a;n++){if(i||!(n in r)){if(!i)i=Array.prototype.slice.call(r,0,n);i[n]=r[n]}}return e.concat(i||Array.prototype.slice.call(r))};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="la-web-components";var a;var i;var l=false;var s=false;var o=false;var f=false;var $=false;var u=typeof window!=="undefined"?window:{};var c=u.document||{head:{}};var v={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}};var d=e("p",(function(e){return Promise.resolve(e)}));var h=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var p=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var l=e;var s=m(r,i);var o=g(n);v.ael(l,a,s,o);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return v.rel(l,a,s,o)}))}))}};var m=function(e,r){return function(t){try{{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}catch(e){xe(e)}}};var g=function(e){return(e&2)!==0};var y="{visibility:hidden}.hydrated{visibility:inherit}";var b="http://www.w3.org/1999/xlink";var w=function(e,r){if(r===void 0){r=""}{return function(){return}}};var N=function(e,r){{return function(){return}}};var R=new WeakMap;var _=function(e,r,t){var n=Ce.get(e);if(h&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Ce.set(e,n)};var S=function(e,r,t,n){var a=k(r);var i=Ce.get(a);e=e.nodeType===11?e:c;if(i){if(typeof i==="string"){e=e.head||e;var l=R.get(e);var s=void 0;if(!l){R.set(e,l=new Set)}if(!l.has(a)){{{s=c.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[i],false)}}return a};var x=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=w("attachStyles",r.$tagName$);S(t.getRootNode(),r);n()};var k=function(e,r){return"sc-"+e.$tagName$};var T={};var C=function(e){e=typeof e;return e==="object"||e==="function"};var L=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var l=null;var s=false;var o=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!C(a)){a=String(a)}if(s&&o){f[f.length-1].$text$+=a}else{f.push(s?P(null,a):a)}o=s}}};$(t);if(r){if(r.key){i=r.key}if(r.name){l=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=P(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=l}return c}));var P=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var A=e("H",{});var E=function(e){return e&&e.$tag$===A};var j=function(e,r,t,n,a,i){if(t!==n){var l=Se(e,r);var s=r.toLowerCase();if(r==="class"){var o=e.classList;var f=I(t);var $=I(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var c in t){if(!n||n[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in n){if(!t||n[c]!==t[c]){if(c.includes("-")){e.style.setProperty(c,n[c])}else{e.style[c]=n[c]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Se(u,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(t){v.rel(e,r,t,false)}if(n){v.ael(e,r,n,false)}}else{var d=C(n);if((l||d&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(r==="list"){l=false}else if(t==null||e[r]!=h){e[r]=h}}else{e[r]=n}}catch(e){}}var p=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){r=s;p=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){if(p){e.removeAttributeNS(b,r)}else{e.removeAttribute(r)}}}else if((!l||i&4||a)&&!d){n=n===true?"":n;if(p){e.setAttributeNS(b,r,n)}else{e.setAttribute(r,n)}}}}};var M=/\s/;var I=function(e){return!e?[]:e.split(M)};var O=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||T;var l=r.$attrs$||T;{for(n in i){if(!(n in l)){j(a,n,i[n],undefined,t,r.$flags$)}}}for(n in l){j(a,n,i[n],l[n],t,r.$flags$)}};var B=function(e,r,t,n){var s=r.$children$[t];var $=0;var u;var v;var d;if(!l){o=true;if(s.$tag$==="slot"){s.$flags$|=s.$children$?2:1}}if(s.$text$!==null){u=s.$elm$=c.createTextNode(s.$text$)}else if(s.$flags$&1){u=s.$elm$=c.createTextNode("")}else{u=s.$elm$=c.createElement(s.$flags$&2?"slot-fb":s.$tag$);{O(null,s,f)}if(s.$children$){for($=0;$<s.$children$.length;++$){v=B(e,s,$);if(v){u.appendChild(v)}}}}{u["s-hn"]=i;if(s.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=s.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===s.$tag$&&e.$elm$){z(e.$elm$,false)}}}return u};var z=function(e,r){v.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==i&&a["s-ol"]){D(a).insertBefore(a,W(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(r){z(a,r)}}v.$flags$&=~1};var q=function(e,r,t,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var s;for(;a<=i;++a){if(n[a]){s=B(null,t,a);if(s){n[a].$elm$=s;l.insertBefore(s,W(r))}}}};var U=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;X(n);{s=true;if(a["s-ol"]){a["s-ol"].remove()}else{z(a,true)}}a.remove()}}};var H=function(e,r,t,n){var a=0;var i=0;var l=0;var s=0;var o=r.length-1;var f=r[0];var $=r[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(V(f,c)){F(f,c);f=r[++a];c=n[++i]}else if(V($,v)){F($,v);$=r[--o];v=n[--u]}else if(V(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){z(f.$elm$.parentNode,false)}F(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(V($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){z($.$elm$.parentNode,false)}F($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--o];c=n[++i]}else{l=-1;{for(s=a;s<=o;++s){if(r[s]&&r[s].$key$!==null&&r[s].$key$===c.$key$){l=s;break}}}if(l>=0){h=r[l];if(h.$tag$!==c.$tag$){d=B(r&&r[i],t,l)}else{F(h,c);r[l]=undefined;d=h.$elm$}c=n[++i]}else{d=B(r&&r[i],t,i);c=n[++i]}if(d){{D(f.$elm$).insertBefore(d,W(f.$elm$))}}}}if(a>o){q(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){U(r,a,o)}};var V=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var W=function(e){return e&&e["s-ol"]||e};var D=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var F=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var l=r.$text$;var s;if(l===null){{if(i==="slot");else{O(e,r,f)}}if(n!==null&&a!==null){H(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}q(t,null,r,a,0,a.length-1)}else if(n!==null){U(n,0,n.length-1)}}else if(s=t["s-cr"]){s.parentNode.textContent=l}else if(e.$text$!==l){t.data=l}};var G=function(e){var r=e.childNodes;var t;var n;var a;var i;var l;var s;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){l=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){s=r[i].nodeType;if(r[i]["s-hn"]!==t["s-hn"]||l!==""){if(s===1&&l===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}G(t)}}};var J=[];var K=function(e){var r;var t;var n;var a;var i;var l;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;a=r["s-sn"];for(l=n.length-1;l>=0;l--){t=n[l];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(Q(t,a)){i=J.find((function(e){return e.$nodeToRelocate$===t}));s=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{J.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){J.map((function(e){if(Q(e.$nodeToRelocate$,t["s-sn"])){i=J.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!J.some((function(e){return e.$nodeToRelocate$===t}))){J.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){K(r)}}};var Q=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var X=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(X)}};var Y=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||P(null,null);var $=E(r)?r:L(null,null,r);i=t.tagName;if(n.$attrsToReflect$){$.$attrs$=$.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return $.$attrs$[n]=t[r]}))}$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=f.$elm$=t;{a=t["s-cr"];l=(n.$flags$&1)!==0;s=false}F(f,$);{v.$flags$|=1;if(o){K($.$elm$);var u=void 0;var d=void 0;var h=void 0;var p=void 0;var m=void 0;var g=void 0;var y=0;for(;y<J.length;y++){u=J[y];d=u.$nodeToRelocate$;if(!d["s-ol"]){h=c.createTextNode("");h["s-nr"]=d;d.parentNode.insertBefore(d["s-ol"]=h,d)}}for(y=0;y<J.length;y++){u=J[y];d=u.$nodeToRelocate$;if(u.$slotRefNode$){p=u.$slotRefNode$.parentNode;m=u.$slotRefNode$.nextSibling;h=d["s-ol"];while(h=h.previousSibling){g=h["s-nr"];if(g&&g["s-sn"]===d["s-sn"]&&p===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){m=g;break}}}if(!m&&p!==d.parentNode||d.nextSibling!==m){if(d!==m){if(!d["s-hn"]&&d["s-ol"]){d["s-hn"]=d["s-ol"].parentNode.nodeName}p.insertBefore(d,m)}}}else{if(d.nodeType===1){d.hidden=true}}}}if(s){G($.$elm$)}v.$flags$&=~1;J.length=0}};var Z=e("g",(function(e){return Ne(e).$hostElement$}));var ee=e("c",(function(e,r,t){var n=Z(e);return{emit:function(e){return re(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var re=function(e,r,t){var n=v.ce(r,t);e.dispatchEvent(n);return n};var te=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ne=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}te(e,e.$ancestorComponent$);var t=function(){return ae(e,r)};return Ie(t)};var ae=function(e,r){var t=w("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return fe(n,r,t)}));e.$queuedListeners$=null}}{a=fe(n,"componentWillLoad")}}t();return $e(a,(function(){return ie(e,n,r)}))};var ie=function(e,r,n){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,s,o;return __generator(this,(function(f){t=e.$hostElement$;a=w("update",e.$cmpMeta$.$tagName$);i=t["s-rc"];if(n){x(e)}l=w("render",e.$cmpMeta$.$tagName$);{le(e,r)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}l();a();{s=t["s-p"];o=function(){return se(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}return[2]}))}))};var le=function(e,r,t){try{r=r.render&&r.render();{e.$flags$&=~16}{e.$flags$|=2}{{{Y(e,r)}}}}catch(r){xe(r,e.$hostElement$)}return null};var se=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=w("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{fe(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ue(t)}{fe(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){oe()}}}else{n()}{e.$onInstanceResolve$(t)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Me((function(){return ne(e,false)}))}e.$flags$&=~(4|512)}};var oe=function(e){{ue(c.documentElement)}Me((function(){return re(u,"appload",{detail:{namespace:n}})}))};var fe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(e){xe(e)}}return undefined};var $e=function(e,r){return e&&e.then?e.then(r):r()};var ue=function(e){return e.classList.add("hydrated")};var ce=function(e,r){if(e!=null&&!C(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var ve=function(e,r){return Ne(e).$instanceValues$.get(r)};var de=function(e,r,t,n){var a=Ne(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=ce(t,n.$members$[r][0]);if((!(s&8)||l===undefined)&&t!==l){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var f=n.$watchers$[r];if(f){f.map((function(e){try{o[e](t,l,r)}catch(e){xe(e,i)}}))}}if((s&(2|16))===2){ne(a,false)}}}};var he=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ve(this,n)},set:function(e){de(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=Ne(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;v.jmp((function(){var r=i.get(e);if(n.hasOwnProperty(r)){t=n[r];delete n[r]}else if(a.hasOwnProperty(r)&&typeof n[r]==="number"&&n[r]==t){return}n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var pe=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,s,o,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=Te(n);if(!i.then)return[3,2];e=N();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}he(i,n,2);i.isProxied=true}t=w("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(e){xe(e)}{r.$flags$&=~8}{r.$flags$|=128}t();if(i.style){a=i.style;l=k(n);if(!Ce.has(l)){s=w("registerStyles",n.$tagName$);_(l,a,!!(n.$flags$&1));s()}}$.label=3;case 3:o=r.$ancestorComponent$;f=function(){return ne(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var me=function(e){if((v.$flags$&1)===0){var r=Ne(e);var t=r.$cmpMeta$;var n=w("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){ge(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){te(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{pe(e,r,t)}}else{p(e,r,t.$listeners$)}n()}};var ge=function(e){var r=e["s-cr"]=c.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var ye=function(e){if((v.$flags$&1)===0){var r=Ne(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}{fe(t,"disconnectedCallback")}}};var be=e("b",(function(e,r){if(r===void 0){r={}}var t=w();var n=[];var a=r.exclude||[];var i=u.customElements;var l=c.head;var s=l.querySelector("meta[charset]");var o=c.createElement("style");var f=[];var $;var d=true;Object.assign(v,r);v.$resourcesUrl$=new URL(r.resourcesUrl||"./",c.baseURI).href;e.map((function(e){e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}var l=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;_e(r,t);return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(d){f.push(this)}else{v.jmp((function(){return me(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;v.jmp((function(){return ye(e)}))};r.prototype.componentOnReady=function(){return Ne(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,he(s,t,1))}}))}));{o.innerHTML=n+y;o.setAttribute("data-styles","");l.insertBefore(o,s?s.nextSibling:l.firstChild)}d=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{v.jmp((function(){return $=setTimeout(oe,30)}))}}t()}));var we=new WeakMap;var Ne=function(e){return we.get(e)};var Re=e("r",(function(e,r){return we.set(r.$lazyInstance$=e,r)}));var _e=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}p(e,t,r.$listeners$);return we.set(e,t)};var Se=function(e,r){return r in e};var xe=function(e,r){return(0,console.error)(e,r)};var ke=new Map;var Te=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=ke.get(i);if(l){return l[a]}return r.import("./".concat(i,".entry.js").concat("")).then((function(e){{ke.set(i,e)}return e[a]}),xe)};var Ce=new Map;var Le=[];var Pe=[];var Ae=function(e,r){return function(t){e.push(t);if(!$){$=true;if(r&&v.$flags$&4){Me(je)}else{v.raf(je)}}}};var Ee=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(e){xe(e)}}e.length=0};var je=function(){Ee(Le);{Ee(Pe);if($=Le.length>0){v.raf(je)}}};var Me=function(e){return d().then(e)};var Ie=Ae(Pe,true)}}}));