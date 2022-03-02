var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function s(e){try{i(n.next(e))}catch(e){o(e)}}function l(e){try{i(n["throw"](e))}catch(e){o(e)}}function i(e){e.done?r(e.value):a(e.value).then(s,l)}i((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return i([e,t])}}function i(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(o=s[0]&2?a["return"]:s[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;if(a=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++){if(o||!(n in t)){if(!o)o=Array.prototype.slice.call(t,0,n);o[n]=t[n]}}return e.concat(o||Array.prototype.slice.call(t))};var NAMESPACE="la-web-components";var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var queuePending=false;var win=typeof window!=="undefined"?window:{};var doc=win.document||{head:{}};var plt={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}};var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructibleStylesheets=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var addHostEventListeners=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],o=r[2];var s=e;var l=hostListenerProxy(t,o);var i=hostListenerOpts(n);plt.ael(s,a,l,i);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return plt.rel(s,a,l,i)}))}))}};var hostListenerProxy=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(e){consoleError(e)}}};var hostListenerOpts=function(e){return(e&2)!==0};var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var XLINK_NS="http://www.w3.org/1999/xlink";var createTime=function(e,t){if(t===void 0){t=""}{return function(){return}}};var uniqueTime=function(e,t){{return function(){return}}};var rootAppliedStyles=new WeakMap;var registerStyle=function(e,t,r){var n=styles.get(e);if(supportsConstructibleStylesheets&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}styles.set(e,n)};var addStyle=function(e,t,r,n){var a=getScopeId(t);var o=styles.get(a);e=e.nodeType===11?e:doc;if(o){if(typeof o==="string"){e=e.head||e;var s=rootAppliedStyles.get(e);var l=void 0;if(!s){rootAppliedStyles.set(e,s=new Set)}if(!s.has(a)){{{l=doc.createElement("style");l.innerHTML=o}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(o)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[o],false)}}return a};var attachStyles=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=createTime("attachStyles",t.$tagName$);addStyle(r.getRootNode(),t);n()};var getScopeId=function(e,t){return"sc-"+e.$tagName$};var EMPTY_OBJ={};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};var h=function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var o=null;var s=null;var l=false;var i=false;var c=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!isComplexType(a)){a=String(a)}if(l&&i){c[c.length-1].$text$+=a}else{c.push(l?newVNode(null,a):a)}i=l}}};f(r);if(t){if(t.key){o=t.key}if(t.name){s=t.name}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var $=newVNode(e,null);$.$attrs$=t;if(c.length>0){$.$children$=c}{$.$key$=o}{$.$name$=s}return $};var newVNode=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var Host={};var isHost=function(e){return e&&e.$tag$===Host};var setAccessor=function(e,t,r,n,a,o){if(r!==n){var s=isMemberInElement(e,t);var l=t.toLowerCase();if(t==="class"){var i=e.classList;var c=parseClassList(r);var f=parseClassList(n);i.remove.apply(i,c.filter((function(e){return e&&!f.includes(e)})));i.add.apply(i,f.filter((function(e){return e&&!c.includes(e)})))}else if(t==="style"){{for(var u in r){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!r||n[u]!==r[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!s&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(isMemberInElement(win,l)){t=l.slice(2)}else{t=l[2]+t.slice(3)}if(r){plt.rel(e,t,r,false)}if(n){plt.ael(e,t,n,false)}}else{var $=isComplexType(n);if((s||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){s=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(e){}}var v=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){t=l;v=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(v){e.removeAttributeNS(XLINK_NS,t)}else{e.removeAttribute(t)}}}else if((!s||o&4||a)&&!$){n=n===true?"":n;if(v){e.setAttributeNS(XLINK_NS,t,n)}else{e.setAttribute(t,n)}}}}};var parseClassListRegex=/\s/;var parseClassList=function(e){return!e?[]:e.split(parseClassListRegex)};var updateElement=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var o=e&&e.$attrs$||EMPTY_OBJ;var s=t.$attrs$||EMPTY_OBJ;{for(n in o){if(!(n in s)){setAccessor(a,n,o[n],undefined,r,t.$flags$)}}}for(n in s){setAccessor(a,n,o[n],s[n],r,t.$flags$)}};var createElm=function(e,t,r,n){var a=t.$children$[r];var o=0;var s;var l;var i;if(!useNativeShadowDom){checkSlotRelocate=true;if(a.$tag$==="slot"){a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){s=a.$elm$=doc.createTextNode(a.$text$)}else if(a.$flags$&1){s=a.$elm$=doc.createTextNode("")}else{s=a.$elm$=doc.createElement(a.$flags$&2?"slot-fb":a.$tag$);{updateElement(null,a,isSvgMode)}if(a.$children$){for(o=0;o<a.$children$.length;++o){l=createElm(e,a,o);if(l){s.appendChild(l)}}}}{s["s-hn"]=hostTagName;if(a.$flags$&(2|1)){s["s-sr"]=true;s["s-cr"]=contentRef;s["s-sn"]=a.$name$||"";i=e&&e.$children$&&e.$children$[r];if(i&&i.$tag$===a.$tag$&&e.$elm$){putBackInOriginalLocation(e.$elm$,false)}}}return s};var putBackInOriginalLocation=function(e,t){plt.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==hostTagName&&a["s-ol"]){parentReferenceNode(a).insertBefore(a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=undefined;checkSlotRelocate=true}if(t){putBackInOriginalLocation(a,t)}}plt.$flags$&=~1};var addVnodes=function(e,t,r,n,a,o){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=o;++a){if(n[a]){l=createElm(null,r,a);if(l){n[a].$elm$=l;s.insertBefore(l,referenceNode(t))}}}};var removeVnodes=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;callNodeRefs(n);{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}};var updateChildren=function(e,t,r,n){var a=0;var o=0;var s=0;var l=0;var i=t.length-1;var c=t[0];var f=t[i];var u=n.length-1;var $=n[0];var d=n[u];var v;var p;while(a<=i&&o<=u){if(c==null){c=t[++a]}else if(f==null){f=t[--i]}else if($==null){$=n[++o]}else if(d==null){d=n[--u]}else if(isSameVnode(c,$)){patch(c,$);c=t[++a];$=n[++o]}else if(isSameVnode(f,d)){patch(f,d);f=t[--i];d=n[--u]}else if(isSameVnode(c,d)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(c.$elm$.parentNode,false)}patch(c,d);e.insertBefore(c.$elm$,f.$elm$.nextSibling);c=t[++a];d=n[--u]}else if(isSameVnode(f,$)){if(c.$tag$==="slot"||d.$tag$==="slot"){putBackInOriginalLocation(f.$elm$.parentNode,false)}patch(f,$);e.insertBefore(f.$elm$,c.$elm$);f=t[--i];$=n[++o]}else{s=-1;{for(l=a;l<=i;++l){if(t[l]&&t[l].$key$!==null&&t[l].$key$===$.$key$){s=l;break}}}if(s>=0){p=t[s];if(p.$tag$!==$.$tag$){v=createElm(t&&t[o],r,s)}else{patch(p,$);t[s]=undefined;v=p.$elm$}$=n[++o]}else{v=createElm(t&&t[o],r,o);$=n[++o]}if(v){{parentReferenceNode(c.$elm$).insertBefore(v,referenceNode(c.$elm$))}}}}if(a>i){addVnodes(e,n[u+1]==null?null:n[u+1].$elm$,r,n,o,u)}else if(o>u){removeVnodes(t,a,i)}};var isSameVnode=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var parentReferenceNode=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var patch=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var o=t.$tag$;var s=t.$text$;var l;if(s===null){{if(o==="slot");else{updateElement(e,t,isSvgMode)}}if(n!==null&&a!==null){updateChildren(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}addVnodes(r,null,t,a,0,a.length-1)}else if(n!==null){removeVnodes(n,0,n.length-1)}}else if(l=r["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){r.data=s}};var updateFallbackSlotVisibility=function(e){var t=e.childNodes;var r;var n;var a;var o;var s;var l;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){s=r["s-sn"];r.hidden=false;for(o=0;o<a;o++){l=t[o].nodeType;if(t[o]["s-hn"]!==r["s-hn"]||s!==""){if(l===1&&s===t[o].getAttribute("slot")){r.hidden=true;break}}else{if(l===1||l===3&&t[o].textContent.trim()!==""){r.hidden=true;break}}}}updateFallbackSlotVisibility(r)}}};var relocateNodes=[];var relocateSlotContent=function(e){var t;var r;var n;var a;var o;var s;var l=0;var i=e.childNodes;var c=i.length;for(;l<c;l++){t=i[l];if(t["s-sr"]&&(r=t["s-cr"])&&r.parentNode){n=r.parentNode.childNodes;a=t["s-sn"];for(s=n.length-1;s>=0;s--){r=n[s];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if(isNodeLocatedInSlot(r,a)){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===r}));checkSlotFallbackVisibility=true;r["s-sn"]=r["s-sn"]||a;if(o){o.$slotRefNode$=t}else{relocateNodes.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){relocateNodes.map((function(e){if(isNodeLocatedInSlot(e.$nodeToRelocate$,r["s-sn"])){o=relocateNodes.find((function(e){return e.$nodeToRelocate$===r}));if(o&&!e.$slotRefNode$){e.$slotRefNode$=o.$slotRefNode$}}}))}}else if(!relocateNodes.some((function(e){return e.$nodeToRelocate$===r}))){relocateNodes.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){relocateSlotContent(t)}}};var isNodeLocatedInSlot=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var callNodeRefs=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(callNodeRefs)}};var renderVdom=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var a=e.$vnode$||newVNode(null,null);var o=isHost(t)?t:h(null,null,t);hostTagName=r.tagName;if(n.$attrsToReflect$){o.$attrs$=o.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return o.$attrs$[n]=r[t]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=a.$elm$=r;{contentRef=r["s-cr"];useNativeShadowDom=(n.$flags$&1)!==0;checkSlotFallbackVisibility=false}patch(a,o);{plt.$flags$|=1;if(checkSlotRelocate){relocateSlotContent(o.$elm$);var s=void 0;var l=void 0;var i=void 0;var c=void 0;var f=void 0;var u=void 0;var $=0;for(;$<relocateNodes.length;$++){s=relocateNodes[$];l=s.$nodeToRelocate$;if(!l["s-ol"]){i=doc.createTextNode("");i["s-nr"]=l;l.parentNode.insertBefore(l["s-ol"]=i,l)}}for($=0;$<relocateNodes.length;$++){s=relocateNodes[$];l=s.$nodeToRelocate$;if(s.$slotRefNode$){c=s.$slotRefNode$.parentNode;f=s.$slotRefNode$.nextSibling;i=l["s-ol"];while(i=i.previousSibling){u=i["s-nr"];if(u&&u["s-sn"]===l["s-sn"]&&c===u.parentNode){u=u.nextSibling;if(!u||!u["s-nr"]){f=u;break}}}if(!f&&c!==l.parentNode||l.nextSibling!==f){if(l!==f){if(!l["s-hn"]&&l["s-ol"]){l["s-hn"]=l["s-ol"].parentNode.nodeName}c.insertBefore(l,f)}}}else{if(l.nodeType===1){l.hidden=true}}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(o.$elm$)}plt.$flags$&=~1;relocateNodes.length=0}};var getElement=function(e){return getHostRef(e).$hostElement$};var createEvent=function(e,t,r){var n=getElement(e);return{emit:function(e){return emitEvent(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}};var emitEvent=function(e,t,r){var n=plt.ce(t,r);e.dispatchEvent(n);return n};var attachToAncestor=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var scheduleUpdate=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}attachToAncestor(e,e.$ancestorComponent$);var r=function(){return dispatchHooks(e,t)};return writeTask(r)};var dispatchHooks=function(e,t){var r=createTime("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return safeCall(n,t,r)}));e.$queuedListeners$=null}}{a=safeCall(n,"componentWillLoad")}}r();return then(a,(function(){return updateComponent(e,n,t)}))};var updateComponent=function(e,t,r){return __awaiter(void 0,void 0,void 0,(function(){var n,a,o,s,l,i;return __generator(this,(function(c){n=e.$hostElement$;a=createTime("update",e.$cmpMeta$.$tagName$);o=n["s-rc"];if(r){attachStyles(e)}s=createTime("render",e.$cmpMeta$.$tagName$);{callRender(e,t)}if(o){o.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{l=n["s-p"];i=function(){return postUpdateComponent(e)};if(l.length===0){i()}else{Promise.all(l).then(i);e.$flags$|=4;l.length=0}}return[2]}))}))};var callRender=function(e,t,r){try{t=t.render&&t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{renderVdom(e,t)}}}}catch(t){consoleError(t,e.$hostElement$)}return null};var postUpdateComponent=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=createTime("postUpdate",t);var a=e.$lazyInstance$;var o=e.$ancestorComponent$;{safeCall(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{addHydratedFlag(r)}{safeCall(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!o){appDidLoad()}}}else{n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){nextTick((function(){return scheduleUpdate(e,false)}))}e.$flags$&=~(4|512)}};var appDidLoad=function(e){{addHydratedFlag(doc.documentElement)}nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){consoleError(e)}}return undefined};var then=function(e,t){return e&&e.then?e.then(t):t()};var addHydratedFlag=function(e){return e.classList.add("hydrated")};var parsePropertyValue=function(e,t){if(e!=null&&!isComplexType(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var getValue=function(e,t){return getHostRef(e).$instanceValues$.get(t)};var setValue=function(e,t,r,n){var a=getHostRef(e);var o=a.$hostElement$;var s=a.$instanceValues$.get(t);var l=a.$flags$;var i=a.$lazyInstance$;r=parsePropertyValue(r,n.$members$[t][0]);if((!(l&8)||s===undefined)&&r!==s){a.$instanceValues$.set(t,r);if(i){if(n.$watchers$&&l&128){var c=n.$watchers$[t];if(c){c.map((function(e){try{i[e](r,s,t)}catch(e){consoleError(e,o)}}))}}if((l&(2|16))===2){scheduleUpdate(a,false)}}}};var proxyComponent=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],o=e[1][0];if(o&31||r&2&&o&32){Object.defineProperty(a,n,{get:function(){return getValue(this,n)},set:function(e){setValue(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&o&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=getHostRef(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var o=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;plt.jmp((function(){var t=o.get(e);if(n.hasOwnProperty(t)){r=n[t];delete n[t]}else if(a.hasOwnProperty(t)&&typeof n[t]==="number"&&n[t]==r){return}n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;o.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var initializeComponent=function(e,t,r,n,a){return __awaiter(void 0,void 0,void 0,(function(){var e,n,o,s,l,i,c;return __generator(this,(function(f){switch(f.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;a=loadModule(r);if(!a.then)return[3,2];e=uniqueTime();return[4,a];case 1:a=f.sent();e();f.label=2;case 2:if(!a.isProxied){{r.$watchers$=a.watchers}proxyComponent(a,r,2);a.isProxied=true}n=createTime("createInstance",r.$tagName$);{t.$flags$|=8}try{new a(t)}catch(e){consoleError(e)}{t.$flags$&=~8}{t.$flags$|=128}n();if(a.style){o=a.style;s=getScopeId(r);if(!styles.has(s)){l=createTime("registerStyles",r.$tagName$);registerStyle(s,o,!!(r.$flags$&1));l()}}f.label=3;case 3:i=t.$ancestorComponent$;c=function(){return scheduleUpdate(t,true)};if(i&&i["s-rc"]){i["s-rc"].push(c)}else{c()}return[2]}}))}))};var connectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var r=t.$cmpMeta$;var n=createTime("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{if(r.$flags$&(4|8)){setContentReference(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){attachToAncestor(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{initializeComponent(e,t,r)}}else{addHostEventListeners(e,t,r.$listeners$)}n()}};var setContentReference=function(e){var t=e["s-cr"]=doc.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var disconnectedCallback=function(e){if((plt.$flags$&1)===0){var t=getHostRef(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{safeCall(r,"disconnectedCallback")}}};var bootstrapLazy=function(e,t){if(t===void 0){t={}}var r=createTime();var n=[];var a=t.exclude||[];var o=win.customElements;var s=doc.head;var l=s.querySelector("meta[charset]");var i=doc.createElement("style");var c=[];var f;var u=true;Object.assign(plt,t);plt.$resourcesUrl$=new URL(t.resourcesUrl||"./",doc.baseURI).href;e.map((function(e){e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var s=r.$tagName$;var l=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;registerHost(t,r);return n}t.prototype.connectedCallback=function(){var e=this;if(f){clearTimeout(f);f=null}if(u){c.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}))};t.prototype.componentOnReady=function(){return getHostRef(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(s)&&!o.get(s)){n.push(s);o.define(s,proxyComponent(l,r,1))}}))}));{i.innerHTML=n+HYDRATED_CSS;i.setAttribute("data-styles","");s.insertBefore(i,l?l.nextSibling:s.firstChild)}u=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}))}}r()};var hostRefs=new WeakMap;var getHostRef=function(e){return hostRefs.get(e)};var registerInstance=function(e,t){return hostRefs.set(t.$lazyInstance$=e,t)};var registerHost=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}addHostEventListeners(e,r,t.$listeners$);return hostRefs.set(e,r)};var isMemberInElement=function(e,t){return t in e};var consoleError=function(e,t){return(0,console.error)(e,t)};var cmpModules=new Map;var loadModule=function(e,t,r){var n=e.$tagName$.replace(/-/g,"_");var a=e.$lazyBundleId$;var o=cmpModules.get(a);if(o){return o[n]}return import("./".concat(a,".entry.js").concat("")).then((function(e){{cmpModules.set(a,e)}return e[n]}),consoleError)};var styles=new Map;var queueDomReads=[];var queueDomWrites=[];var queueTask=function(e,t){return function(r){e.push(r);if(!queuePending){queuePending=true;if(t&&plt.$flags$&4){nextTick(flush)}else{plt.raf(flush)}}}};var consume=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){consoleError(e)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){plt.raf(flush)}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);export{Host as H,bootstrapLazy as b,createEvent as c,getElement as g,h,promiseResolve as p,registerInstance as r};