var t=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e="object"==typeof self&&self&&self.Object===Object&&self,o="object"==typeof n&&n&&n.Object===Object&&n||e||Function("return this")(),r=function(){return o.Date.now()},i=/\s/,u=/^\s+/,f=function(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(u,""):t},c=o.Symbol,a=Object.prototype,d=a.hasOwnProperty,l=a.toString,v=c?c.toStringTag:void 0,b=Object.prototype.toString,s=c?c.toStringTag:void 0,p=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?function(t){var n=d.call(t,v),e=t[v];try{t[v]=void 0;var o=!0}catch(t){}var r=l.call(t);return o&&(n?t[v]=e:delete t[v]),r}(t):function(t){return b.call(t)}(t)},y=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,m=/^0o[0-7]+$/i,T=parseInt,h=function(n){if("number"==typeof n)return n;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==p(t)}(n))return NaN;if(t(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=t(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=f(n);var o=j.test(n);return o||m.test(n)?T(n.slice(2),o?2:8):y.test(n)?NaN:+n},g=Math.max,w=Math.min,N=function(n,e,o){var i,u,f,c,a,d,l=0,v=!1,b=!1,s=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function p(t){var e=i,o=u;return i=u=void 0,l=t,c=n.apply(o,e)}function y(t){return l=t,a=setTimeout(m,e),v?p(t):c}function j(t){var n=t-d;return void 0===d||n>=e||n<0||b&&t-l>=f}function m(){var t=r();if(j(t))return T(t);a=setTimeout(m,function(t){var n=e-(t-d);return b?w(n,f-(t-l)):n}(t))}function T(t){return a=void 0,s&&i?p(t):(i=u=void 0,c)}function N(){var t=r(),n=j(t);if(i=arguments,u=this,d=t,n){if(void 0===a)return y(d);if(b)return clearTimeout(a),a=setTimeout(m,e),p(d)}return void 0===a&&(a=setTimeout(m,e)),c}return e=h(e)||0,t(o)&&(v=!!o.leading,f=(b="maxWait"in o)?g(h(o.maxWait)||0,e):f,s="trailing"in o?!!o.trailing:s),N.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=d=u=a=void 0},N.flush=function(){return void 0===a?c:T(r())},N};export{N as d}