System.register(["./p-40c09979.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.c}],execute:function(){var a="la-gutter-item{display:block}";var i=t("la_gutter_item",function(){function t(t){e(this,t);this.laItemChanged=n(this,"laItemChanged",7);this.active=false}t.prototype.activeChanged=function(){this.laItemChanged.emit()};t.prototype.anchorChanged=function(){this.laItemChanged.emit()};t.prototype.onClick=function(){this.active=true};Object.defineProperty(t,"watchers",{get:function(){return{active:["activeChanged"],anchor:["anchorChanged"]}},enumerable:false,configurable:true});return t}());i.style=a}}}));