(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/formula-builder/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034b":function(e,t,r){},"2d68":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"moveInUp"}},[r("router-view")],1),r("Modal")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:"\n    fixed\n    inset-0\n    bg-gray-600 bg-opacity-50\n    overflow-y-auto\n    h-full\n    w-full\n  "},[r("div",{staticClass:"\n      flex flex-col\n      m-auto\n      h-60\n      p-4\n      center\n      rounded-lg\n      bg-white\n      shadow-lg\n    "},[r("div",{staticClass:"\n      bg-blue-900\n      w-full\n      h-16\n      text-yellow-300\n      font-semibold\n      uppercase\n      text-center\n      py-5\n      mb-5\n      rounded\n      shadow-lg\n    "},[e._v(" "+e._s(e.selected.value)+" ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"mb-4 rounded"},[r("div",{staticClass:"font-semibold text-gray-800"},[e._v(" Edit ")]),r("div",{staticClass:"py-2 overflow-auto"},[r("span",{staticClass:"bg-orange-400 px-2 rounded inline-block"},[e._v(" "+e._s(e.activeNodeValue)+" ")])])]),r("div",{staticClass:"flex flex-wrap gap-1 mb-2"},e._l(e.optFormulas,(function(t){return r("div",{key:t.value,staticClass:"cursor-pointer bg-gray-400 px-2 py-1 rounded",on:{click:function(r){return e.handleSelect(t)}}},[r("span",{staticClass:"font-semibold text-pink-700"},[e._v(e._s(t.value.charAt(0).toUpperCase()))]),r("span",[e._v(e._s(t.value.substr(1)))])])})),0),r("div",{staticClass:"flex mb-5"},[r("div",{staticClass:"mr-2"},[r("div",{staticClass:"flex flex-wrap gap-1 mb-1"},e._l(e.optNumbers,(function(t){return r("div",{key:t.value,staticClass:"bg-gray-400 px-4 py-1 rounded font-semibold",class:e.cursorDisplay,attrs:{disabled:e.disabledNumber},on:{click:function(r){return e.handleSelect(t)}}},[r("span",[e._v(" "+e._s(t.value)+" ")])])})),0)])]),r("div",{staticClass:"justify-start flex gap-1"},[r("button",{staticClass:"p-2 bg-pink-600 text-white rounded mr-auto",on:{click:function(t){return t.preventDefault(),e.close.apply(null,arguments)}}},[e._v(" CANCEL ")]),r("button",{staticClass:"p-2 bg-orange-400 text-white rounded",on:{click:function(t){return t.preventDefault(),e.undo.apply(null,arguments)}}},[e._v(" UNDO ")]),r("button",{staticClass:"p-2 bg-blue-400 text-white rounded",on:{click:function(t){return t.preventDefault(),e.confirm.apply(null,arguments)}}},[e._v(" CONFIRM ")])])])]):e._e()},i=[],l=r("5530"),u=(r("d81d"),r("99af"),r("a15b"),r("2909")),c=(r("d3b7"),r("25f0"),r("7db0"),[{open:["bg-gray-400","text-gray-700"],close:["bg-gray-400"],border:["border-gray-400"],hover:["hover:bg-gray-200"]},{open:["bg-red-400","text-gray-700"],close:["bg-red-400"],border:["border-red-400"],hover:["hover:bg-red-200"]},{open:["bg-orange-400","text-gray-700"],close:["bg-orange-400"],border:["border-orange-400"],hover:["hover:bg-orange-200"]},{open:["bg-yellow-400","text-gray-700"],close:["bg-yellow-400"],border:["border-yellow-400"],hover:["hover:bg-yellow-200"]},{open:["bg-green-400","text-gray-700"],close:["bg-green-400"],border:["border-green-400"],hover:["hover:bg-green-200"]},{open:["bg-teal-400","text-gray-700"],close:["bg-teal-400"],border:["border-teal-400"],hover:["hover:bg-teal-200"]},{open:["bg-blue-400","text-gray-700"],close:["bg-blue-400"],border:["border-blue-400"],hover:["hover:bg-blue-200"]},{open:["bg-indigo-400","text-gray-700"],close:["bg-indigo-400"],border:["border-indigo-400"],hover:["hover:bg-indigo-200"]},{open:["bg-purple-400","text-gray-700"],close:["bg-purple-400"],border:["border-purple-400"],hover:["hover:bg-purple-200"]},{open:["bg-pink-400","text-gray-700"],close:["bg-pink-400"],border:["border-pink-400"],hover:["hover:bg-pink-200"]}]),d=function(){var e=["multiply","addition","subtraction","division"];return e.map((function(e){return{type:"formula",value:e}}))}(),f=function(){var e=[0,1,2,3,4,5,6,7,8,9];return e.map((function(e){return{type:"number",value:e}}))}(),p=function(e){var t=d.map((function(e){var t=e.value.substr(0,1);return Object(l["a"])(Object(l["a"])({},e),{},{key:t})})),r=Object(u["a"])(f).map((function(e){var t=e.value.toString();return Object(l["a"])(Object(l["a"])({},e),{},{key:t})})),n=[{type:"action",value:"Enter",key:"Enter"},{type:"action",value:"Escape",key:"Escape"},{type:"action",value:"Backspace",key:"Backspace"}];return t.find((function(t){return t.key===e}))||r.find((function(t){return t.key===e}))||n.find((function(t){return t.key===e}))},v={name:"Modal",data:function(){return{showKBKey:!0,optFormulas:d,optNumbers:f,selected:{type:"",value:""},show:!1,editMode:!1,activeNode:null}},computed:{disabledNumber:function(){return this.editMode?!this.activeNode.parentId:!this.$store.getters.existFormula},cursorDisplay:function(){return this.disabledNumber?["text-gray-500","pointer-events-none"]:["cursor-pointer","hover:bg-gray-300","text-pink-700"]},activeNodeValue:function(){if(!this.editMode)return"";var e=this.activeNode;if("formula"===this.activeNode.type){var t=e.items.map((function(e){return"formula"===e.type?"".concat(e.value,"(...)"):e.value}));return"".concat(e.value,"(").concat(t.join(", "),")")}return e.value}},mounted:function(){var e=this;this.$bus.$on("show-panel",this.open),this.$bus.$on("close-panel",this.close),this.$once("hook:beforeDestroy",(function(){e.$bus.$off("show-panel",e.open),e.$bus.$off("close-panel",e.close)}))},methods:{open:function(e){this.show=!0,null!==e&&void 0!==e&&e.edit&&(this.editMode=!0),this.activeNode=null===e||void 0===e?void 0:e.activeNode,document.addEventListener("keydown",this.keyboardHandler)},close:function(){this.selected.type="",this.selected.value="",this.editMode=!1,this.show=!1,document.removeEventListener("keydown",this.keyboardHandler)},undo:function(){if(this.selected.type){if("number"===this.selected.type){var e=this.selected.value;this.selected.value=e.substr(0,e.length-1)}"operator"===this.selected.type&&(this.selected.value="")}},keyboardHandler:function(e){var t=p(e.key);if(t){if("number"===t.type&&!this.disabledNumber){var r={type:t.type,value:t.value};this.handleSelect(r)}if("formula"===t.type){var n={type:t.type,value:t.value};this.handleSelect(n)}if("action"===t.type)switch(t.key){case"Enter":this.confirm();break;case"Escape":this.close();break;case"Backspace":this.undo();break}}},confirm:function(){var e;if(this.selected.type||this.selected.value){var t=(new Date).getTime(),r=null===(e=this.activeNode)||void 0===e?void 0:e.id;this.editMode&&(t=this.activeNode.id,r=this.activeNode.parentId);var n=Object(l["a"])(Object(l["a"])({},this.selected),{},{id:t,parentId:r});"formula"===this.selected.type&&(n.items=[]),this.editMode?this.$store.commit("editNode",n):this.$store.commit("addNode",n),this.$bus.$emit("newMutation"),this.close()}else this.close()},handleSelect:function(e){this.selected&&"number"===this.selected.type?this.selected.value+=""+e.value:(this.selected.type=e.type,this.selected.value=e.value)}}},m=v,b=r("2877"),h=Object(b["a"])(m,s,i,!1,null,"87a321d8",null),g=h.exports,y={name:"App",components:{Modal:g}},x=y,w=Object(b["a"])(x,o,a,!1,null,null,null),k=w.exports,C=(r("c740"),r("a434"),r("2f62")),_=r("b85c"),N=(r("b64b"),r("159b"),r("caad"),r("2532"),r("ac1f"),r("5319"),r("1276"),r("b680"),function(e){return!!e&&0===Object.keys(e).length&&e.constructor===Object}),$=function e(t,r){if(t.id===r)return t;var n,o=Object(_["a"])(t.items);try{for(o.s();!(n=o.n()).done;){var a=n.value;if("formula"===a.type){var s=e(a,r);if(s)return s}}}catch(i){o.e(i)}finally{o.f()}},S=function(e){return e.reduce((function(e,t){return e*=t,e}),1)},j=function(e){return e.reduce((function(e,t){return e+t}))},O=function(e){return e.reduce((function(e,t){return e-t}))},F=function(e){return e.reduce((function(e,t){return e/t}))},D={multiply:S,addition:j,subtraction:O,division:F},M=function e(t){if(!(t.items&&t.items.length<2)){if(t.items.every((function(e){return"number"===e.type})))return D[t.value](E(t.items,"value"));var r=[];return t.items.forEach((function(t){"formula"===t.type?r.push(e(t)):r.push(+t.value)})),r.length===t.items.length?(console.log(t.value,r),console.log("total: ",D[t.value](r)),D[t.value](r)):void 0}},E=function(e,t){return e.map((function(e){return+e[t]}))},P=function(e,t){if(isNaN(e))throw"NumberFormatException: not a number";t&&"string"===typeof t||(t="0,000");var r=",",n=".",o=!1,a=e<0;e=Math.abs(e),"/i"===t.substr(t.length-2)&&(t=t.substr(0,t.length-2),o=!0,r=".",n=",");var s=t.includes(r),i=o?t.replace(/[^\d,]/g,""):t.replace(/[^\d.]/g,"");if(i=i.split(n),i.length>1)e=e.toFixed(i[1].length);else{if(i.length>2)throw"NumberFormatException: invalid format, formats should have no more than 1 period: "+t;e=e.toFixed(0)}var l=e.toString();if(i=l.split("."),s){var u,c=i[0],d=[],f=c.length,p=(Math.floor(f/3),c.length%3||3);for(u=0;u<f;u+=p)0!==u&&(p=3),d[d.length]=c.substr(u,p),1;l=d.join(r),i[1]&&(l+=n+i[1])}else i[1]&&(l=i[0]+n+i[1]);return(a?"-":"")+t.replace(/[\d,?.]+/,l)},I=r("cd3f");n["a"].use(C["a"]);var T=new C["a"].Store({state:{formula:{}},mutations:{addNode:function(e,t){if(N(e.formula))e.formula=t;else{var r=I(e.formula),n=$(r,t.parentId);n.items.push(t),e.formula=r}},editNode:function(e,t){if(t.parentId){var r=I(e.formula),n=$(r,t.parentId),o=n.items.findIndex((function(e){return e.id===t.id}));n.items.splice(o,1,t),e.formula=r}else e.formula=t},deleteNode:function(e,t){if(t.parentId){var r=I(e.formula),n=$(r,t.parentId),o=n.items.findIndex((function(e){return e.id===t.id}));n.items.splice(o,1),e.formula=r}else e.formula={}},resetFormula:function(){this.replaceState({formula:{}})}},actions:{},getters:{existFormula:function(e){return!N(e.formula)}}}),L=r("8c4f"),J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full h-screen overflow-auto bg-blue-200 py-4"},[r("div",{staticClass:"w-1/2 mx-auto h-64"},[r("div",{staticClass:"mb-2 text-center text-3xl text-teal-700"},[e._v(" Formula Builder ")]),r("div",{staticClass:"flex justify-between items-center py-2"},[r("div",{staticClass:"flex gap-2 mr-auto"},[r("button",{staticClass:"px-4 py-1 text-white rounded uppercase",class:e.existFormula?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.existFormula},on:{click:e.getResult}},[e._v(" View result ")]),r("p",{staticClass:"py-1 text-gray-700 font-bold"},[e._v(" "+e._s(e.result)+" ")])]),r("div",[r("div",{staticClass:"flex gap-2"},[r("button",{staticClass:"p-2 text-gray-300 rounded",class:e.existFormula?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.existFormula},on:{click:function(t){e.showJsonData=!e.showJsonData}}},[e._v(" Show Json data ")]),r("button",{staticClass:"p-2 text-gray-300 rounded",class:e.canUndo?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.canUndo},on:{click:e.undo}},[e._v(" UNDO ")]),r("button",{staticClass:"p-2 text-gray-300 rounded",class:e.canRedo?["bg-blue-600 cursor-pointer"]:["bg-blue-300 cursor-not-allowed"],attrs:{disabled:!e.canRedo},on:{click:e.redo}},[e._v(" REDO ")])])])]),r("div",{staticClass:"bg-gray-200 py-4 px-2 shadow-lg border overflow-x-auto",staticStyle:{"max-height":"600px"}},[e.existFormula?e._e():r("div",{staticClass:"cursor-pointer bg-blue-500 text-white py-1 px-2 rounded w-40 mx-auto",on:{click:e.showPanel}},[e._v(" Add Something... ")]),e.existFormula?r("div",{staticClass:"text-teal-700 font-semibold text-xl mb-2"},[e._v(" Nested capsule 💊 ")]):e._e(),r("nested-capsule-formula",{attrs:{formula:e.formula}}),e.existFormula?r("div",{staticClass:"text-teal-700 mt-10 font-semibold text-xl mb-2"},[e._v(" Tree view 🌲 ")]):e._e(),r("tree-view",{attrs:{formula:e.formula}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showJsonData,expression:"showJsonData"}],staticClass:"mt-5"},[r("div",{staticClass:"text-gray-700 font-semibold text-xl"},[e._v(" Json Data ")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonData,expression:"jsonData"}],staticClass:"w-full",attrs:{rows:"10"},domProps:{value:e.jsonData},on:{input:function(t){t.target.composing||(e.jsonData=t.target.value)}}})])])])},R=[],B=(r("e9c4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("formula-render-less",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.addChild,o=t.editNode,a=t.deleteNode;return[e.formula&&e.formula.value?r("div",{ref:"ref-formula-"+e.formula.id,staticClass:"\n        capsule-enter\n        inline-flex\n        align-baseline\n        border-t border-b\n        rounded-2xl\n        cursor-pointer\n        h-7\n        leading-7\n        ml-1\n      ",class:[e.bracket.border],on:{mouseenter:function(t){return t.target!==t.currentTarget?null:(t.stopPropagation(),t.preventDefault(),e.addHoverStyle.apply(null,arguments))},mouseleave:function(t){return t.target!==t.currentTarget?null:(t.stopPropagation(),t.preventDefault(),e.removeHoverStyle.apply(null,arguments))}}},[r("div",{staticClass:"\n          operator-name\n          cursor-pointer\n          hover:text-gray-800\n          pl-2\n          pr-1\n          rounded-l-2xl\n          font-semibold\n          uppercase\n          relative\n        ",class:e.bracket.open,on:{click:function(t){return o(e.formula)}}},[e._v(" "+e._s(e.formula.value)+" "),r("div",{staticClass:"\n            operator-delete\n            text-red-600\n            z-20\n            font-bold\n            text-2xl\n            inline\n            absolute\n          ",on:{click:function(t){if(t.target!==t.currentTarget)return null;t.stopPropagation(),t.preventDefault(),e.handleDeleteFormula(e.formula),a(e.formula)}}},[e._v(" × ")])]),r("div",{staticClass:"operator-items bg-white flex items-center px-1"},[e._l(e.formula.items,(function(t){return["number"===t.type?r("div",{key:t.id,ref:"ref-number-"+t.id,refInFor:!0,staticClass:"\n              number\n              capsule-enter\n              inline\n              h-6\n              font-semibold\n              text-gray-700\n              px-1\n              mx-1\n              rounded\n              bg-orange-400\n              hover:bg-orange-300\n              relative\n            ",on:{click:function(e){return o(t)}}},[e._v(" "+e._s(t.value)+" "),r("div",{staticClass:"\n                number-delete\n                text-red-600\n                z-20\n                font-bold\n                text-2xl\n                inline\n                absolute\n              ",on:{click:function(r){if(r.target!==r.currentTarget)return null;r.stopPropagation(),r.preventDefault(),e.handleDeleteNumber(t),a(t)}}},[e._v(" × ")])]):r("nested-capsule-formula",{key:t.id,attrs:{formula:t}})]}))],2),r("div",{staticClass:"\n          w-4\n          text-center\n          rounded-r-2xl\n          cursor-pointer\n          text-gray-600\n          hover:text-gray-800\n          font-bold\n        ",class:e.bracket.close,on:{click:function(t){return n(e.formula)}}},[e._v(" + ")])]):e._e()]}}])})}),H=[],U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._t("default",null,null,{addChild:e.addChild,editNode:e.editNode,deleteNode:e.deleteNode})],2)},A=[],K={name:"FormulaRenderLess",data:function(){return{}},methods:{addChild:function(e){this.$bus.$emit("show-panel",{activeNode:e})},editNode:function(e){this.$bus.$emit("show-panel",{edit:!0,activeNode:e})},deleteNode:function(e){var t=this;this.$bus.$emit("newMutation"),setTimeout((function(){t.$store.commit("deleteNode",e)}),500)}}},V=K,q=Object(b["a"])(V,U,A,!1,null,null,null),z=q.exports,G={name:"NestedCapsuleFormula",components:{FormulaRenderLess:z},props:{formula:{type:Object,default:function(){}}},computed:{bracket:function(){var e=Math.floor(Math.random()*c.length);return c[e]}},methods:{addHoverStyle:function(e){e.stopPropagation(),e.target.classList.add("hover:shadow-lg"),e.target.querySelector(".operator-items").style.background="transparent",e.target.classList.add(this.bracket.hover)},removeHoverStyle:function(e){e.stopPropagation(),e.target.classList.remove("hover:shadow-lg"),e.target.querySelector(".operator-items").style="",e.target.classList.remove(this.bracket.remove)},handleDeleteFormula:function(e){var t="ref-formula-".concat(e.id);this.$refs[t].classList.add("capsule-leave")},handleDeleteNumber:function(e){var t="ref-number-".concat(e.id);this.$refs[t][0].classList.add("capsule-leave")}}},Q=G,W=(r("5e0d"),Object(b["a"])(Q,B,H,!1,null,"5546a45a",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("formula-render-less",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.editNode,o=t.deleteNode,a=t.addChild;return[e.formula&&e.formula.value?r("div",{ref:"ref-formula-"+e.formula.id,staticClass:"node-enter relative"},[r("div",{staticClass:"formula-name inline flex mb-1"},[r("span",{staticClass:"uppercase rounded-full font-semibold px-2 mr-1 cursor-pointer bg-orange-700 text-gray-200 hover:bg-orange-600",on:{click:function(t){e.showChildren=!e.showChildren}}},[e._v(" "+e._s(e.formula.value.charAt(0))+" ")]),r("div",{staticClass:"font-semibold text-gray-700 hover:text-gray-500 cursor-pointer",on:{click:function(t){return n(e.formula)}}},[e._v(" "+e._s(e.formula.value)+" ")]),r("div",{staticClass:"formula-action"},[r("span",{staticClass:"mx-1 px-1 text-xs font-semibold hover:text-gray-500 text-gray-700 rounded bg-gray-400 cursor-pointer",on:{click:function(t){return o(e.formula)}}},[e._v(" remove ")]),r("span",{staticClass:"mx-1 px-1 text-xs font-semibold hover:text-gray-500 text-gray-700 rounded bg-gray-400 cursor-pointer",on:{click:function(t){return a(e.formula)}}},[e._v(" add ")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showChildren,expression:"showChildren"}],ref:"children-"+e.formula.id,staticClass:"flex flex-col gap-1 ml-3 rounded border-l-4 border-orange-700"},e._l(e.formula.items,(function(t){return r("div",{key:t.id,staticClass:"inline"},["number"===t.type?r("div",{staticClass:"number node-enter flex max-w-sm items-center"},[r("div",{staticClass:"w-4 h-1 bg-orange-700 inline mr-1 rounded-r"}),r("div",{staticClass:"rounded-xl bg-green-500 px-1 text-gray-700 font-medium cursor-pointer hover:text-gray-600 hover:bg-green-400",on:{click:function(e){return n(t)}}},[e._v(" "+e._s(t.value)+" ")]),r("span",{staticClass:"number-action font-semibold hover:text-gray-500 text-gray-700 mx-1 px-1 text-xs text-gray-700 rounded bg-gray-400 cursor-pointer",on:{click:function(e){return o(t)}}},[e._v(" remove ")])]):r("div",{staticClass:"flex max-w-sm items-baseline"},[r("div",{staticClass:"w-4 h-1 bg-orange-700 inline mr-1 rounded-r"}),r("tree-view",{attrs:{formula:t}})],1)])})),0)]):e._e()]}}])})},Z=[],ee={name:"TreeView",components:{FormulaRenderLess:z},props:{formula:{type:Object,default:function(){}}},data:function(){return{showChildren:!0}}},te=ee,re=(r("a300"),Object(b["a"])(te,Y,Z,!1,null,"a32a2db4",null)),ne=re.exports,oe={name:"FormulaBuilder",components:{TreeView:ne,NestedCapsuleFormula:X},filters:{number:P},data:function(){return{result:"",undoStack:[],redoStack:[],showJsonData:!1}},computed:{formula:function(){return this.$store.state.formula},existFormula:function(){return this.$store.getters.existFormula},canUndo:function(){return this.undoStack.length},canRedo:function(){return this.redoStack.length},jsonData:function(){var e=function(e,t){return"undefined"===typeof t?null:t};return JSON.stringify(this.formula,e,4)}},created:function(){var e=this;this.$store.subscribe((function(t){"resetFormula"!==t.type&&e.undoStack.push(t)})),this.$bus.$on("newMutation",(function(){e.redoStack=[]}))},methods:{getResult:function(){try{var e=M(this.formula);this.result=this.$options.filters.number(e)}catch(t){console.error(t),this.result="There is formula that missing arguments..."}},showPanel:function(){this.$bus.$emit("show-panel")},undo:function(){var e=this;this.$store.commit("resetFormula");var t=this.undoStack.pop();this.redoStack.push(I(t)),this.undoStack.forEach((function(t){e.$store.commit("".concat(t.type),I(t.payload)),e.undoStack.pop()}))},redo:function(){var e=this.redoStack.pop();this.$store.commit("".concat(e.type),I(e.payload))}}},ae=oe,se=Object(b["a"])(ae,J,R,!1,null,"fe61c7ba",null),ie=se.exports;n["a"].use(L["a"]);var le=[{path:"/",component:ie},{path:"/formula",component:ie}],ue=new L["a"]({routes:le,base:"/formula-builder/",mode:"history",linkExactActiveClass:"active"}),ce=(r("034b"),new n["a"]),de=ce;n["a"].directive("keyboardKey",{bind:function(e,t,r){var n=t.modifiers,o=t.value;console.log(n),console.log(o),n.showKBKey&&o&&(console.log(t),console.log(r))}}),n["a"].prototype.$bus=de,n["a"].config.productionTip=!1,new n["a"]({store:T,router:ue,render:function(e){return e(k)}}).$mount("#app")},"5e0d":function(e,t,r){"use strict";r("2d68")},a300:function(e,t,r){"use strict";r("d9f4")},d9f4:function(e,t,r){}});
//# sourceMappingURL=app.0808c9cd.js.map