!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=32)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),c=null,l=0,m=[],p=e(11);function u(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(h(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(h(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function v(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),m.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,e);e.insertBefore(n,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=m.indexOf(t);n>=0&&m.splice(n,1)}function A(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return e.nc}();r&&(t.attrs.nonce=r)}return C(n,t.attrs),v(t,n),n}function C(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function h(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=l++;e=c||(c=A(n)),r=_.bind(null,e,a,!1),o=_.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",C(n,t.attrs),v(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),o=function(){d(e),e.href&&URL.revokeObjectURL(e.href)}):(e=A(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){d(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=f(t,n);return u(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}t&&u(f(t,n),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,g=(b=[],function(t,n){return b[t]=n,b.filter(Boolean).join("\n")});function _(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){var r=e(10);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"main.css"}])},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,n,e){},function(t,n,e){var r=e(14);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,'.hvr-overline-from-center {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.hvr-overline-from-center:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 51%;\r\n    right: 51%;\r\n    top: 0;\r\n    background: #f9d10d;\r\n    height: 2px;\r\n    -webkit-transition-property: left, right;\r\n    transition-property: left, right;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n    left: 0;\r\n    right: 0;\r\n}\r\n',"",{version:3,sources:["overline-from-center.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,UAAU;IACV,MAAM;IACN,mBAAmB;IACnB,WAAW;IACX,wCAAwC;IACxC,gCAAgC;IAChC,iCAAiC;IACjC,yBAAyB;IACzB,4CAA4C;IAC5C,oCAAoC;AACxC;AACA;IACI,OAAO;IACP,QAAQ;AACZ",file:"overline-from-center.css",sourcesContent:['.hvr-overline-from-center {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.hvr-overline-from-center:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 51%;\r\n    right: 51%;\r\n    top: 0;\r\n    background: #f9d10d;\r\n    height: 2px;\r\n    -webkit-transition-property: left, right;\r\n    transition-property: left, right;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n    left: 0;\r\n    right: 0;\r\n}\r\n']}])},function(t,n,e){var r=e(16);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,".hvr-hollow {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-property: background;\r\n    transition-property: background;\r\n}\r\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\r\n    background: white;\r\n}\r\n","",{version:3,sources:["hollow.css"],names:[],mappings:"AAAA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,iCAAiC;IACjC,yBAAyB;IACzB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,iBAAiB;AACrB",file:"hollow.css",sourcesContent:[".hvr-hollow {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-property: background;\r\n    transition-property: background;\r\n}\r\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\r\n    background: white;\r\n}\r\n"]}])},function(t,n,e){var r=e(18);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,".hvr-icon-back {\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-transition-duration: 0.1s;\r\n    transition-duration: 0.1s;\r\n}\r\n.hvr-icon-back .hvr-icon {\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-transition-duration: 0.1s;\r\n    transition-duration: 0.1s;\r\n    -webkit-transition-property: transform;\r\n    transition-property: transform;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-back:hover .hvr-icon, .hvr-icon-back:focus .hvr-icon, .hvr-icon-back:active .hvr-icon {\r\n    -webkit-transform: translateX(-4px);\r\n    transform: translateX(-4px);\r\n}\r\n","",{version:3,sources:["icon-back.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,oCAAoC;IACpC,iCAAiC;IACjC,yBAAyB;AAC7B;AACA;IACI,gCAAgC;IAChC,wBAAwB;IACxB,iCAAiC;IACjC,yBAAyB;IACzB,sCAAsC;IACtC,8BAA8B;IAC9B,4CAA4C;IAC5C,oCAAoC;AACxC;AACA;IACI,mCAAmC;IACnC,2BAA2B;AAC/B",file:"icon-back.css",sourcesContent:[".hvr-icon-back {\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-transition-duration: 0.1s;\r\n    transition-duration: 0.1s;\r\n}\r\n.hvr-icon-back .hvr-icon {\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-transition-duration: 0.1s;\r\n    transition-duration: 0.1s;\r\n    -webkit-transition-property: transform;\r\n    transition-property: transform;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n}\r\n.hvr-icon-back:hover .hvr-icon, .hvr-icon-back:focus .hvr-icon, .hvr-icon-back:active .hvr-icon {\r\n    -webkit-transform: translateX(-4px);\r\n    transform: translateX(-4px);\r\n}\r\n"]}])},function(t,n,e){var r=e(20);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,".hvr-glow {\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-property: box-shadow;\r\n    transition-property: box-shadow;\r\n}\r\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\r\n    box-shadow: 0 0 8px rgba(17, 21, 24, 0.6);\r\n}\r\n","",{version:3,sources:["glow.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,oCAAoC;IACpC,iCAAiC;IACjC,yBAAyB;IACzB,uCAAuC;IACvC,+BAA+B;AACnC;AACA;IACI,yCAAyC;AAC7C",file:"glow.css",sourcesContent:[".hvr-glow {\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-property: box-shadow;\r\n    transition-property: box-shadow;\r\n}\r\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\r\n    box-shadow: 0 0 8px rgba(17, 21, 24, 0.6);\r\n}\r\n"]}])},function(t,n,e){var r=e(22);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,"@-webkit-keyframes hvr-bob {\r\n    0% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n    50% {\r\n        -webkit-transform: translateY(-4px);\r\n        transform: translateY(-4px);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n@keyframes hvr-bob {\r\n    0% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n    50% {\r\n        -webkit-transform: translateY(-4px);\r\n        transform: translateY(-4px);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n@-webkit-keyframes hvr-bob-float {\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n@keyframes hvr-bob-float {\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n.hvr-bob {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n}\r\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\r\n    -webkit-animation-name: hvr-bob-float, hvr-bob;\r\n    animation-name: hvr-bob-float, hvr-bob;\r\n    -webkit-animation-duration: .3s, 1.5s;\r\n    animation-duration: .3s, 1.5s;\r\n    -webkit-animation-delay: 0s, .3s;\r\n    animation-delay: 0s, .3s;\r\n    -webkit-animation-timing-function: ease-out, ease-in-out;\r\n    animation-timing-function: ease-out, ease-in-out;\r\n    -webkit-animation-iteration-count: 1, infinite;\r\n    animation-iteration-count: 1, infinite;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-direction: normal, alternate;\r\n    animation-direction: normal, alternate;\r\n}\r\n","",{version:3,sources:["bob.css"],names:[],mappings:"AAAA;IACI;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;IACA;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;IACA;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;AACJ;AACA;IACI;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;IACA;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;IACA;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;AACJ;AACA;IACI;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;AACJ;AACA;IACI;QACI,mCAAmC;QACnC,2BAA2B;IAC/B;AACJ;AACA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,oCAAoC;AACxC;AACA;IACI,8CAA8C;IAC9C,sCAAsC;IACtC,qCAAqC;IACrC,6BAA6B;IAC7B,gCAAgC;IAChC,wBAAwB;IACxB,wDAAwD;IACxD,gDAAgD;IAChD,8CAA8C;IAC9C,sCAAsC;IACtC,qCAAqC;IACrC,6BAA6B;IAC7B,8CAA8C;IAC9C,sCAAsC;AAC1C",file:"bob.css",sourcesContent:["@-webkit-keyframes hvr-bob {\r\n    0% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n    50% {\r\n        -webkit-transform: translateY(-4px);\r\n        transform: translateY(-4px);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n@keyframes hvr-bob {\r\n    0% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n    50% {\r\n        -webkit-transform: translateY(-4px);\r\n        transform: translateY(-4px);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n@-webkit-keyframes hvr-bob-float {\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n@keyframes hvr-bob-float {\r\n    100% {\r\n        -webkit-transform: translateY(-8px);\r\n        transform: translateY(-8px);\r\n    }\r\n}\r\n.hvr-bob {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n}\r\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\r\n    -webkit-animation-name: hvr-bob-float, hvr-bob;\r\n    animation-name: hvr-bob-float, hvr-bob;\r\n    -webkit-animation-duration: .3s, 1.5s;\r\n    animation-duration: .3s, 1.5s;\r\n    -webkit-animation-delay: 0s, .3s;\r\n    animation-delay: 0s, .3s;\r\n    -webkit-animation-timing-function: ease-out, ease-in-out;\r\n    animation-timing-function: ease-out, ease-in-out;\r\n    -webkit-animation-iteration-count: 1, infinite;\r\n    animation-iteration-count: 1, infinite;\r\n    -webkit-animation-fill-mode: forwards;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-direction: normal, alternate;\r\n    animation-direction: normal, alternate;\r\n}\r\n"]}])},function(t,n,e){var r=e(24);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,n,e){(t.exports=e(0)(!0)).push([t.i,".hvr-bounce-in {\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    -webkit-transition-duration: 0.5s;\r\n    transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n    z-index: 5;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n        -webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\n    }\r\n}\r\n","",{version:3,sources:["bounce-in.css"],names:[],mappings:"AAAA;IACI,sBAAsB;IACtB,iDAAiD;IACjD,yCAAyC;IACzC,iCAAiC;IACjC,yBAAyB;AAC7B;AACA;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,yEAAyE;IACzE,iEAAiE;IACjE,UAAU;AACd;;AAEA;IACI;QACI,6BAA6B;QAC7B,qBAAqB;IACzB;AACJ",file:"bounce-in.css",sourcesContent:[".hvr-bounce-in {\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    -webkit-transition-duration: 0.5s;\r\n    transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n    z-index: 5;\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n    .hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n        -webkit-transform: scale(1.1);\r\n        transform: scale(1.1);\r\n    }\r\n}\r\n"]}])},function(t,n,e){"use strict";var r=e(2);e.n(r).a},function(t,n,e){"use strict";var r=e(3);e.n(r).a},function(t,n,e){"use strict";var r=e(4);e.n(r).a},function(t,n,e){"use strict";var r=e(5);e.n(r).a},function(t,n,e){"use strict";var r=e(6);e.n(r).a},function(t,n,e){"use strict";var r=e(7);e.n(r).a},function(t,n,e){"use strict";var r=e(8);e.n(r).a},function(t,n,e){"use strict";e.r(n);e(9),e(12),e(13),e(15),e(17),e(19),e(21),e(23);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[e("a",{staticClass:"navbar-brand hvr-bob",on:{click:function(n){return t.go("Greeting")}}},[e("img",{attrs:{src:"assets/img/logo.png",alt:"logo"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[e("div",{staticClass:"navbar-nav"},[e("a",{staticClass:"nav-item nav-link hvr-overline-from-center",on:{click:function(n){return t.go("CommentForm")}}},[t._v("Write comment")]),t._v(" "),e("a",{staticClass:"nav-item nav-link hvr-overline-from-center",on:{click:function(n){return t.go("CommentsList")}}},[t._v("Comments")])])])])]),t._v(" "),e("transition",{attrs:{name:"flip",mode:"out-in",appear:""}},[e(t.component,{tag:"component"})],1),t._v(" "),e("Footer")],1)};r._withStripped=!0;var o=function(){var t=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;e(25);function i(t,n,e,r,o,i,a,s){var c,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var m=l.render;l.render=function(t,n){return c.call(n),m(t,n)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}var a=i({},o,[function(){var t=this.$createElement,n=this._self._c||t;return n("footer",[n("div",{staticClass:"footer-wrapper"},[n("p",{staticClass:"footer-wrapper__contact"},[this._v("mail@mailtest.com +30-6977664062")]),this._v(" "),n("p",{staticClass:"footer-wrapper__copyright"},[this._v("Copyright © 2019 Test All Rights Reserved.")])])])}],!1,null,"40ab164b",null);a.options.__file="src/components/Footer.vue";var s=a.exports,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"comments-list"},[e("h1",{staticClass:"comments-list__title"},[t._v("Comments")]),t._v(" "),e("div",{staticClass:"comments-list__list grid"}),t._v(" "),e("p",{staticClass:"comment__conclusion"},[t._v("Lorem Ipsum is text of the typesetting industry")]),t._v(" "),e("a",{staticClass:"hvr-icon-back",on:{click:function(n){return t.go("Greeting")}}},[e("i",{staticClass:"fa fa-arrow-left hvr-icon",attrs:{"aria-hidden":"true"}}),t._v("Back to Homepage")])])};c._withStripped=!0;var l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid-item hvr-bounce-in"},[e("p",{staticClass:"item-title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"item-comment"},[t._v(t._s(t.body))]),t._v(" "),e("a",{staticClass:"item-link hvr-glow",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"preventDefault",void 0,n.key,void 0)?null:t.get(n)}}},[t._v("Read more")]),t._v(" "),e("span",{staticStyle:{display:"none"}},[t._v(t._s(t.id))])])};l._withStripped=!0;var m=new Vuex.Store({state:{component:"Greeting",list:[]},mutations:{add:function(t,n){t.list.length&&(t.list=[]),t.list.push(n)},update:function(t,n){var e=t.list[0].findIndex(function(t){return t.id===n.id});t.list[0][e].body=n.body,t.list[0][e].title=n.title},changeComponent:function(t,n){t.component=n}}}),p={props:["title","body","id"],methods:{get:function(t){m.commit("changeComponent","Comment"),"undefined"!=typeof Storage?(sessionStorage.title=$(t.target).prev().prev().text(),sessionStorage.comment=$(t.target).prev().text(),sessionStorage.id=$(t.target).next().text()):$(".comment__title").append("Your browser does not support storage")}}},u=(e(26),i(p,l,[],!1,null,"56603c95",null));u.options.__file="src/components/CommentsListItem.vue";var f=u.exports,v={components:{CommentsListItem:f},mounted:function(){var t=this,n={url:"https://5cbef81d06a6810014c66193.mockapi.io/api/comments",method:"GET",timeout:0,beforeSend:function(){$('<div class="comments-list__loader"><i class="fa fa-cog" aria-hidden="true"></i></div>').insertAfter(".grid")},complete:function(){$(".comments-list__loader").remove()}};$.ajax(n).done(function(n){$(document).ready(function(){if($.trim(n)){t.$store.commit("add",n);var e='<div class="comments-list__list grid">';t.$store.state.list[0].forEach(function(t,n,r){e+="<CommentsListItem title='".concat(t.title,"' body='").concat(t.body,"' id='").concat(t.id,"'></CommentsListItem>")}),e+="</div>";var r=Vue.compile(e);new Vue({render:r.render,staticRenderFns:r.staticRenderFns,components:{CommentsListItem:f}}).$mount(".grid")}else $("<p class='comments-list__conclusion' style='text-align: center'>Nothing to show</p>").insertAfter(".grid");$(".grid").masonry({itemSelector:".grid-item",gutter:10})})})},go:function(t){this.$store.commit("changeComponent",t)}},d=(e(27),i(v,c,[],!1,null,null,null));d.options.__file="src/components/CommentsList.vue";var A=d.exports,C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"comment"},[e("a",{staticClass:"comment__link hvr-icon-back",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"preventDefault",void 0,n.key,void 0)?null:t.go("CommentsList")}}},[e("i",{staticClass:"fa fa-arrow-left hvr-icon",attrs:{"aria-hidden":"true"}}),t._v("\n        Back to Comments\n    ")]),t._v(" "),e("div",{staticClass:"comment__btn-wrapper"},[e("button",{staticClass:"comment__delete",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"preventDefault",void 0,n.key,void 0)?null:t.remove(n)}}}),t._v(" "),e("button",{staticClass:"comment__edit",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"preventDefault",void 0,n.key,void 0)?null:t.edit(n)}}}),t._v(" "),e("button",{staticClass:"comment__save",attrs:{disabled:""},on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"preventDefault",void 0,n.key,void 0)?null:t.save(n)}}})]),t._v(" "),e("h1",{staticClass:"comment__title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"comment__text"},[t._v(t._s(t.text))]),t._v(" "),e("p",{staticClass:"comment__conclusion"},[t._v("Lorem Ipsum is text of the typesetting industry")]),t._v(" "),e("a",{staticClass:"comment__link hvr-icon-back",on:{click:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"preventDefault",void 0,n.key,void 0)?null:t.go("Greeting")}}},[e("i",{staticClass:"fa fa-arrow-left hvr-icon",attrs:{"aria-hidden":"true"}}),t._v("\n        Back to Homepage\n    ")])])};C._withStripped=!0;var h={data:function(){return{title:sessionStorage.title,text:sessionStorage.comment}},methods:{edit:function(t){$(t.target).parent().nextAll(".comment__title, .comment__text").attr("contenteditable",!0).css("box-shadow","inset 0px 0px 5px 0px #60e3a1"),$(t.target).attr("disabled",!0),$(t.target).next().removeAttr("disabled")},save:function(t){$.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/"+sessionStorage.id,{method:"PUT",timeout:0,headers:{"Content-Type":"application/json"},data:'{\n    "created_at": '+Date.now()+',\n    "title": "'+$(t.target).parent().nextAll(".comment__title").text()+'",\n    "body": "'+$(t.target).parent().nextAll(".comment__text").text()+'"\n}',beforeSend:function(){$(t.target).parent().nextAll(".comment__title, .comment__text").removeAttr("contenteditable").css("box-shadow","none"),$('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;background-color: white; opacity: 0.8; padding-top: 100px"><i class="fa fa-cog" aria-hidden="true"></i></div>').insertBefore(".comment__link")},complete:function(){$(".comments-list__loader").remove(),$(t.target).attr("disabled",!0),$(t.target).prev().removeAttr("disabled"),sessionStorage.title=$(t.target).parent().next().text(),sessionStorage.comment=$(t.target).parent().nextAll(".comment__text").text(),m.commit("update",{title:sessionStorage.title,body:sessionStorage.comment,id:sessionStorage.id})}})},remove:function(){$.ajax("https://5cbef81d06a6810014c66193.mockapi.io/api/comments/"+sessionStorage.id,{method:"DELETE",timeout:0,beforeSend:function(){$('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;background-color: white; opacity: 0.8; padding-top: 100px"><i class="fa fa-cog" aria-hidden="true"></i></div>').insertBefore(".comment__link")},complete:function(){$(".comments-list__loader").replaceWith('<div class="comments-list__loader" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background-color: white; opacity: 0.8; padding-top: 100px"><i class="fa fa-check" aria-hidden="true" style="animation: none; color: #60e3a1"></i></div>')}}).done(function(){setTimeout(function(){m.commit("changeComponent","CommentsList")},3e3)})},go:function(t){m.commit("changeComponent",t)}}},b=(e(28),i(h,C,[],!1,null,null,null));b.options.__file="src/components/Comment.vue";var g=b.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"comment-form",attrs:{id:"comment-form"}},[t.errors.length?e("p",[e("b",[t._v("Please correct next error:")])]):t._e(),t._v(" "),t.sent?e("p",{staticStyle:{color:"white"}},[t._v("Comment sent")]):t._e(),t._v(" "),e("div",{staticClass:"comment-form__wrapper"},[e("h2",{staticClass:"comment-form__title"},[t._v(t._s(t.header))]),t._v(" "),e("form",{on:{submit:function(n){return n.preventDefault(),n.stopPropagation(),t.sendForm(n)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(n){n.target.composing||(t.title=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{placeholder:"Your comment",rows:"6"},domProps:{value:t.comment},on:{input:function(n){n.target.composing||(t.comment=n.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn hvr-hollow",attrs:{type:"submit"}},[t._v("Send")])])])])};_._withStripped=!0;var x={data:function(){return{errors:[],comment:"",header:"Write comment",title:"",sent:!1}},methods:{sendForm:function(){if(this.title&&this.comment){var t=$("input").val(),n=$("textarea").val(),e={url:"https://5cbef81d06a6810014c66193.mockapi.io/api/comments",method:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:'{\n    "created_at": '+Date.now()+',\n    "title": "'+t+'",\n    "body": "'+n+'"\n}'};return $.ajax(e).done(function(){app.sent=!0}),!0}this.errors=[],this.title||this.errors.push("Enter title"),this.comment||this.errors.push("Enter comment")}}},w=(e(29),i(x,_,[],!1,null,"7a92cc43",null));w.options.__file="src/components/CommentForm.vue";var y=w.exports,k=function(){var t=this.$createElement;this._self._c;return this._m(0)};k._withStripped=!0;e(30);var I=i({},k,[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"greeting"},[e("h1",{staticClass:"greeting__title"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry")]),t._v(" "),e("img",{staticClass:"d-none d-md-inline-block",attrs:{src:"assets/img/main-photo.jpg",alt:"main photo"}}),t._v(" "),e("section",{staticClass:"about-us",attrs:{id:"about-us"}},[e("div",{staticClass:"about-us__item"},[e("img",{attrs:{src:"assets/img/people.png",alt:"people"}}),t._v(" "),e("h2",[t._v("Who we are")]),t._v(" "),e("ul",[e("li",[t._v("It is a long established fact that a reader will be distracted")]),t._v(" "),e("li",[t._v("The readable content of a page when looking at its layout")]),t._v(" "),e("li",[t._v("The point of using Lorem Ipsum")]),t._v(" "),e("li",[t._v("As opposed to using 'Content here, content here'.")])])]),t._v(" "),e("div",{staticClass:"about-us__item"},[e("img",{attrs:{src:"assets/img/monitor.png",alt:"monitor"}}),t._v(" "),e("h2",[t._v("What we do")]),t._v(" "),e("ul",[e("li",[t._v("Many desktop publishing packages and web page")]),t._v(" "),e("li",[t._v("There are many variations of passages of Lorem Ipsum available, but the majority have")]),t._v(" "),e("li",[t._v("Various versions have evolved over the years, sometimes by accident")])])]),t._v(" "),e("div",{staticClass:"about-us__item"},[e("img",{attrs:{src:"assets/img/cog.png",alt:"cog"}}),t._v(" "),e("h2",[t._v("Technology")]),t._v(" "),e("ul",[e("li",[t._v("The point of using Lorem Ipsum")]),t._v(" "),e("li",[t._v("As opposed to using 'Content here, content here'")]),t._v(" "),e("li",[t._v("Contrary to popular belief, Lorem Ipsum is not simply random text")]),t._v(" "),e("li",[t._v("A Latin professor at Hampden-Sydney College in Virginia")])])])])])}],!1,null,"17cc482e",null);I.options.__file="src/components/Greeting.vue";var B=I.exports,S={computed:Vuex.mapState(["component"]),name:"App",components:{Footer:s,CommentsList:A,CommentsListItem:f,Comment:g,CommentForm:y,Greeting:B},methods:{go:function(t){m.commit("changeComponent",t)}}},j=(e(31),i(S,r,[function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null));j.options.__file="src/App.vue";var E=j.exports,D=new Vue({store:m,render:function(t){return t(E)}}).$mount("#app");n.default=D}]);