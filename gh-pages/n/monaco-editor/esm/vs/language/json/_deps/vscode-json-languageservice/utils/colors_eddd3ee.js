define("node_modules/monaco-editor/esm/vs/language/json/_deps/vscode-json-languageservice/utils/colors",function(e,r){"use strict";function o(e){return c>e?0:d>=e?e-c:(h>e&&(e+=h-n),e>=h&&u>=e?e-h+10:0)}function a(e){if("#"!==e[0])return null;switch(e.length){case 4:return{red:17*o(e.charCodeAt(1))/255,green:17*o(e.charCodeAt(2))/255,blue:17*o(e.charCodeAt(3))/255,alpha:1};case 5:return{red:17*o(e.charCodeAt(1))/255,green:17*o(e.charCodeAt(2))/255,blue:17*o(e.charCodeAt(3))/255,alpha:17*o(e.charCodeAt(4))/255};case 7:return{red:(16*o(e.charCodeAt(1))+o(e.charCodeAt(2)))/255,green:(16*o(e.charCodeAt(3))+o(e.charCodeAt(4)))/255,blue:(16*o(e.charCodeAt(5))+o(e.charCodeAt(6)))/255,alpha:1};case 9:return{red:(16*o(e.charCodeAt(1))+o(e.charCodeAt(2)))/255,green:(16*o(e.charCodeAt(3))+o(e.charCodeAt(4)))/255,blue:(16*o(e.charCodeAt(5))+o(e.charCodeAt(6)))/255,alpha:(16*o(e.charCodeAt(7))+o(e.charCodeAt(8)))/255}}return null}function t(e,r,o,a){return void 0===a&&(a=1),{red:e/255,green:r/255,blue:o/255,alpha:a}}Object.defineProperty(r,"__esModule",{value:!0});var c=48,d=57,n=65,h=97,u=102;r.hexDigit=o,r.colorFromHex=a,r.colorFrom256RGB=t});