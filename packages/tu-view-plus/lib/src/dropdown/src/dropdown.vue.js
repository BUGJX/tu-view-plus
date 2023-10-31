"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),p=require("./dropdown.js"),w=require("../../trigger/index.js"),C=require("./dropdown-panel.vue.js"),s=require("@tu-view-plus/hooks"),_=require("./constants.js");require("../style/dropdown.css");const b=e.defineComponent({name:"TuDropdown"}),v=e.defineComponent({...b,props:p.dropdownProps,emits:p.dropdownEmits,setup(u,{emit:l}){const n=u,t=l,{defaultPopupVisible:a,popupVisible:d,popupMaxHeight:c,size:f}=e.toRefs(n),g=s.useNamespace("dropdown"),{computedPopupVisible:m,handlePopupVisibleChange:i}=s.useTrigger({defaultPopupVisible:a,popupVisible:d,emit:t}),h=(o,r)=>{t("select",o,r),n.hideOnSelect&&i(!1)};return e.provide(_.dropdownInjectionKey,e.reactive({popupMaxHeight:c,size:f,onOptionClick:h})),(o,r)=>(e.openBlock(),e.createBlock(e.unref(w.TuTrigger),{"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"","popup-visible":e.unref(m),"popup-offset":10,trigger:o.trigger,position:o.position,"opened-class":e.unref(g).e("open"),"popup-container":o.popupContainer,onPopupVisibleChange:e.unref(i)},{content:e.withCtx(()=>[e.createVNode(C.default,null,e.createSlots({default:e.withCtx(()=>[e.renderSlot(o.$slots,"content")]),_:2},[o.$slots.footer?{name:"footer",fn:e.withCtx(()=>[e.renderSlot(o.$slots,"footer")]),key:"0"}:void 0]),1024)]),default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},8,["popup-visible","trigger","position","opened-class","popup-container","onPopupVisibleChange"]))}});exports.default=v;
