"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./select.js"),l=require("@tu-view-plus/hooks"),c=e.defineComponent({name:"TuSelectDropDown"}),u=e.defineComponent({...c,props:r.selectProps,setup(a){const t=e.useSlots(),o=l.useNamespace("select-dropdown"),s=e.computed(()=>({[o.b()]:!0,[o.e("header")]:!!t.header,[o.e("footer")]:!!t.footer}));return(n,d)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(s))},[e.renderSlot(n.$slots,"default")],2))}});exports.default=u;
