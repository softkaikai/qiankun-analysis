(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["vue-app-app"]=t():e["vue-app-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,u,a=t[0],i=t[1],p=t[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp_vue-app"]=window["webpackJsonp_vue-app"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var p=0;p<a.length;p++)t(a[p]);var s=i;return c.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("cd49")},"227d":function(e,t,n){"use strict";n("68d0")},"54db":function(e,t,n){"use strict";n("5d99")},"5d99":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"68d0":function(e,t,n){},7354:function(e,t,n){"use strict";n("f7f9")},"76e7":function(e,t,n){},c894:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return C})),n.d(t,"mount",(function(){return z})),n.d(t,"unmount",(function(){return J})),n.d(t,"update",(function(){return q}));n("96cf");var r=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23")),c=n("6c02");function u(e,t,n,r,c,u){var a=Object(o["u"])("router-view");return Object(o["n"])(),Object(o["d"])(a)}var a=Object(o["f"])({name:"App",components:{}});n("64be");a.render=u;var i=a,p=(n("b0c0"),Object(o["z"])("data-v-68e0c7d2"));Object(o["q"])("data-v-68e0c7d2");var s=Object(o["e"])("div",null,"this is vue-app",-1);Object(o["o"])();var f=p((function(e,t,n,r,c,u){var a=Object(o["u"])("router-view");return Object(o["n"])(),Object(o["d"])(o["a"],null,[s,Object(o["e"])("nav",null,[(Object(o["n"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(e.pages,(function(t){return Object(o["n"])(),Object(o["d"])("a",{key:t.name,onClick:function(n){return e.jump(t.router)},class:"a"},Object(o["w"])(t.name),9,["onClick"])})),128))]),Object(o["e"])("div",null,[Object(o["e"])(a)])],64)})),d=Object(o["f"])({name:"Main",data:function(){return{pages:[{name:"Product",router:"/product"},{name:"Contract",router:"/contract"},{name:"My",router:"/my"}]}},methods:{jump:function(e){this.$router.push(e)}}});n("7354");d.render=f,d.__scopeId="data-v-68e0c7d2";var l=d,b=Object(o["z"])("data-v-cf153e50"),v=b((function(e,t,n,r,c,u){return Object(o["n"])(),Object(o["d"])("div",null,"this is Product Page")})),j=Object(o["f"])({name:"Product"});n("227d");j.render=v,j.__scopeId="data-v-cf153e50";var O=j,m=Object(o["z"])("data-v-210d760b"),h=m((function(e,t,n,r,c,u){return Object(o["n"])(),Object(o["d"])("div",null,"this is Contract Page")})),y=Object(o["f"])({name:"Contract"});n("54db");y.render=h,y.__scopeId="data-v-210d760b";var g=y,w=Object(o["z"])("data-v-e06778f6"),_=w((function(e,t,n,r,c,u){return Object(o["n"])(),Object(o["d"])("div",null,"this is My Page")})),x=Object(o["f"])({name:"My",methods:{}});n("dec3");x.render=_,x.__scopeId="data-v-e06778f6";var P=x,k=[{path:"/",component:l,children:[{path:"product",component:O},{path:"contract",component:g},{path:"my",component:P}]}],M=Object(o["c"])(i),R=Object(c["a"])({history:Object(c["b"])(),routes:k});function C(e){return S.apply(this,arguments)}function S(){return S=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("vue app bootstrap props: ",t);case 1:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function z(e){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("vue app mount"),M.mount(t.container?"#"+t.container:"#app");case 2:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function J(e){return T.apply(this,arguments)}function T(){return T=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("vue app unmount"),M.unmount(t.container?"#"+t.container:"#app");case 2:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function q(e){return A.apply(this,arguments)}function A(){return A=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("vue app update props: ",t);case 1:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}M.use(R)},dec3:function(e,t,n){"use strict";n("76e7")},f7f9:function(e,t,n){}})}));
//# sourceMappingURL=app.d972cee9.js.map