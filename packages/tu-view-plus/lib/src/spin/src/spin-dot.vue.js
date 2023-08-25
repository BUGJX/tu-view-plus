"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("./spin-dot.js"),d=require("@tu-view-plus/hooks"),n=require("@tu-view-plus/utils");require("../style/spin.css");const a=e.defineComponent({name:"TuSpinDot"}),p=e.defineComponent({...a,props:c.spinDotProps,setup(s){const t=s,r=3,o=d.useNamespace("spin"),i=e.computed(()=>({width:n.addUnit(t.size*(r+1)),height:n.addUnit(t.size)})),l=e.computed(()=>({width:n.addUnit(t.size),height:n.addUnit(t.size)}));return(m,f)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([e.unref(o).b(),e.unref(o).e("dot")]),style:e.normalizeStyle(e.unref(i))},[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(r,u=>e.createElementVNode("div",{key:u,class:e.normalizeClass(e.unref(o).e("dot-item")),style:e.normalizeStyle(e.unref(l))},null,6)),64))],6))}});exports.default=p;