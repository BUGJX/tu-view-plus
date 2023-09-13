"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./dropdown-item.js"),f=require("@tu-view-plus/hooks"),p=require("./constants.js"),k=e.defineComponent({name:"TuDropdownItem"}),C=e.defineComponent({...k,props:r.dropdownItemProps,emits:r.dropdownItemEmits,setup(c,{emit:i}){const n=c,l=e.ref(),a=e.useSlots(),s=f.useNamespace("dropdown-item"),u=e.computed(()=>({[s.b()]:!0,[s.m("suffix")]:a.suffix,[s.is("disabled")]:n.disabled,[s.is("active")]:n.active})),t=n.uninjectContext?void 0:e.inject(p.dropdownInjectionKey,void 0),d=e.computed(()=>{var o;return n.value??((o=l.value)==null?void 0:o.textContent)??void 0}),m=o=>{n.disabled||(i("click",o),t==null||t.onOptionClick(d.value,o))};return(o,v)=>(e.openBlock(),e.createElementBlock("li",{ref_key:"liRef",ref:l,class:e.normalizeClass(e.unref(u)),onClick:m},[o.$slots.icon?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(s).e("icon"))},[e.renderSlot(o.$slots,"icon")],2)):e.createCommentVNode("",!0),e.createElementVNode("span",{class:e.normalizeClass(e.unref(s).e("content"))},[e.renderSlot(o.$slots,"default")],2),o.$slots.suffix?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(e.unref(s).e("suffix"))},[e.renderSlot(o.$slots,"suffix")],2)):e.createCommentVNode("",!0)],2))}});exports.default=C;
