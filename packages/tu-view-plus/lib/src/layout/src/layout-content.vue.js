"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=require("@tu-view-plus/hooks");require("../style/layout.css");const s=e.defineComponent({name:"TuLayoutContent"}),u=e.defineComponent({...s,setup(r){const t=o.useNamespace("layout");return(n,a)=>(e.openBlock(),e.createElementBlock("main",{class:e.normalizeClass(e.unref(t).e("content"))},[e.renderSlot(n.$slots,"default")],2))}});exports.default=u;