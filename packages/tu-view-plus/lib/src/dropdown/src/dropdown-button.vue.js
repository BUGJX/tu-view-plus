"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=require("./dropdown-button.js"),u=require("@tu-view-plus/hooks"),t=require("../../button/index.js"),C=require("../../icon/index.js"),g=require("@tu-view-plus/icons-vue"),w=require("../index.js");require("../style/dropdown.css");const V=e.defineComponent({name:"TuDropdownButton"}),m=e.defineComponent({...V,props:s.dropdownButtonProps,emits:s.dropdownButtonEmits,setup(p,{emit:n}){const l=p,d=u.useNamespace("dropdown-button"),{defaultPopupVisible:a,popupVisible:c}=e.toRefs(l),{computedPopupVisible:i,handlePopupVisibleChange:f}=u.useTrigger({defaultPopupVisible:a,popupVisible:c,emit:n}),b=o=>{n("click",o)},h=(o,r)=>{n("select",o,r)};return(o,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(d).b())},[e.createVNode(e.unref(t.TuButtonGroup),null,{default:e.withCtx(()=>[e.createVNode(e.unref(t.TuButton),e.mergeProps(o.buttonProps,{size:o.size,type:o.type,disabled:o.disabled,onClick:b}),{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},16,["size","type","disabled"]),e.createVNode(e.unref(w.default),{"popup-visible":e.unref(i),trigger:o.trigger,position:o.position,"popup-container":o.popupContainer,"hide-on-select":o.hideOnSelect,onSelect:h,onPopupVisibleChange:e.unref(f)},{content:e.withCtx(()=>[e.renderSlot(o.$slots,"content")]),default:e.withCtx(()=>[e.createVNode(e.unref(t.TuButton),{size:o.size,type:o.type,disabled:o.disabled},{icon:e.withCtx(()=>[e.renderSlot(o.$slots,"icon",{popupVisible:e.unref(i)},()=>[e.createVNode(e.unref(C.TuIcon),null,{default:e.withCtx(()=>[e.createVNode(e.unref(g.ArrowDown))]),_:1})])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onPopupVisibleChange"])]),_:3})],2))}});exports.default=m;
