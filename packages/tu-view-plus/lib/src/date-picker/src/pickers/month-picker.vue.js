"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=require("./month-picker.js"),n=e.defineComponent({name:"TuMonthPicker"}),r=e.defineComponent({...n,props:o.monthPickerProps,setup(c){return(t,u)=>(e.openBlock(),e.createElementBlock("div",null,[e.createTextVNode(" month-picker "),e.renderSlot(t.$slots,"default")]))}});exports.default=r;