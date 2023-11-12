"use strict";var a=function(e,o){return function(){return o||e((o={exports:{}}).exports,o),o.exports}};var s=a(function(w,i){
var g=Object.prototype.toString;function j(e){return g.call(e)}i.exports=j
});var c=a(function(C,l){
var n;function q(){var e="";return e+="try {",e+="return this === global;",e+="} catch ( err ) {",e+="return false;",e+="}",new Function(e)()}n=q();l.exports=n
});var f=a(function(E,p){
var r=require("process"),S=require('@stdlib/utils-global/dist'),u=require('@stdlib/utils-native-class/dist'),b=require('@stdlib/assert-is-plain-object/dist'),v=require('@stdlib/assert-is-string/dist').isPrimitive,y=s(),d=c(),t=S(),m=/node|io\.js/;function x(){return typeof global=="object"&&global===t&&t===t.global&&(u(t)==="[object global]"||u(t)==="[object Object]")&&d===!0&&typeof require=="function"&&typeof r=="object"&&y(r)==="[object process]"&&b(r.versions)&&v(r.versions.node)&&(typeof r.release=="undefined"||b(r.release)&&v(r.release.name)&&m.test(r.release.name))}p.exports=x
});var G=f(),O=G();module.exports=O;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
