"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=require("./space.js");require("../style/space.css");const r=e.defineComponent({name:"TuSpace"}),n=e.defineComponent({...r,props:o.spaceProps,setup(u){return(t,s)=>(e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")]))}});exports.default=n;
