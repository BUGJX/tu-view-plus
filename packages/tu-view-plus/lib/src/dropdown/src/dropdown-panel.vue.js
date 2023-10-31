"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./dropdown-panel.js"),m=require("@tu-view-plus/hooks"),l=require("@tu-view-plus/utils"),f=require("../../empty/index.js"),w=require("../../scrollbar/index.js"),y=require("./constants.js"),v=e.defineComponent({name:"TuDropdownPanel"}),k=e.defineComponent({...v,props:s.dropdownPanelProps,emits:s.dropdownPanelEmits,setup(C,{emit:a}){const r=m.useNamespace("dropdown"),c=a,i=e.ref(),t=e.inject(y.dropdownInjectionKey,{}),d=e.computed(()=>({[r.b()]:!0,[r.m(t.size)]:t.size})),u=e.computed(()=>{const{popupMaxHeight:o}=t;if(l.isNumber(o))return{maxHeight:l.addUnit(o)};if(!o)return{maxHeight:"none",overflowY:"hidden"}}),p=({scrollTop:o,scrollLeft:n})=>{c("scroll",{scrollTop:o,scrollLeft:n})};return(o,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(d.value)},[o.isEmpty?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(r).e("empty"))},[e.renderSlot(o.$slots,"empty",{},()=>[e.createVNode(e.unref(f.TuEmpty))])],2)):e.createCommentVNode("",!0),e.createVNode(e.unref(w.TuScrollbar),{ref_key:"wrapRef",ref:i,tag:"ul","wrap-class":e.unref(r).e("wrap"),"view-class":e.unref(r).e("list"),"wrap-style":u.value,onScroll:p},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},8,["wrap-class","view-class","wrap-style"]),o.$slots.footer&&!o.isEmpty?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(e.unref(r).e("footer"))},[e.renderSlot(o.$slots,"footer")],2)):e.createCommentVNode("",!0)],2))}});exports.default=k;
