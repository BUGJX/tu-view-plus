"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),p=require("./dropdown.js"),m=require("../../trigger/index.js"),w=require("./dropdown-panel.vue.js"),s=require("@tu-view-plus/hooks"),C=require("./constants.js");require("../style/dropdown.css");const _=e.defineComponent({name:"TuDropdown"}),b=e.defineComponent({..._,props:p.dropdownProps,emits:p.dropdownEmits,setup(u,{emit:n}){const t=u,{defaultPopupVisible:l,popupVisible:a,popupMaxHeight:d,size:c}=e.toRefs(t),f=s.useNamespace("dropdown"),{computedPopupVisible:g,handlePopupVisibleChange:i}=s.useTrigger({defaultPopupVisible:l,popupVisible:a,emit:n}),h=(o,r)=>{n("select",o,r),t.hideOnSelect&&i(!1)};return e.provide(C.dropdownInjectionKey,e.reactive({popupMaxHeight:d,size:c,onOptionClick:h})),(o,r)=>(e.openBlock(),e.createBlock(e.unref(m.TuTrigger),{"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"","popup-visible":e.unref(g),"popup-offset":10,trigger:o.trigger,position:o.position,"opened-class":e.unref(f).e("open"),"popup-container":o.popupContainer,onPopupVisibleChange:e.unref(i)},{content:e.withCtx(()=>[e.createVNode(w.default,null,e.createSlots({default:e.withCtx(()=>[e.renderSlot(o.$slots,"content")]),_:2},[o.$slots.footer?{name:"footer",fn:e.withCtx(()=>[e.renderSlot(o.$slots,"footer")])}:void 0]),1024)]),default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},8,["popup-visible","trigger","position","opened-class","popup-container","onPopupVisibleChange"]))}});exports.default=b;