"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=require("./select.js"),g=require("@tu-view-plus/hooks"),b=require("../../trigger/index.js"),h=require("../../input/index.js"),_=require("./select-dropdown.vue.js"),C=require("../../scrollbar/index.js");require("../../form/index.js");require("../style/select.css");const q=require("../../form/src/hooks/use-form-props.js"),n=require("../../form/src/hooks/use-form-item.js"),v=e.defineComponent({name:"TuSelect",inheritAttrs:!1}),I=e.defineComponent({...v,props:r.selectProps,emits:r.selectEmits,setup(u,{emit:i}){const o=u,s=e.useAttrs(),{popupVisible:l}=e.toRefs(o),p=e.ref(null),a=q.useFormDisabled(),{form:P,formItem:c}=n.useFormItem(),{inputId:d}=n.useFormItemInputId(o,{formItemContext:c}),{computedPopupVisible:f,handlePopupVisibleChange:m}=g.useTrigger({popupVisible:l,emit:i});return(t,V)=>(e.openBlock(),e.createBlock(e.unref(b.TuTrigger),{ref_key:"triggerRef",ref:p,trigger:"click",position:"bl","hide-empty":"","auto-fit-popup-width":"","auto-fit-transform-origin":"","animation-name":"slide-dynamic-origin",disabled:e.unref(a),"popup-offset":4,"popup-visible":e.unref(f),"unmount-on-close":t.unmountOnClose,"click-to-close":!(t.allowSearch||t.allowCreate),"popup-container":t.popupContainer,onPopupVisibleChange:e.unref(m)},{default:e.withCtx(()=>[e.createElementVNode("div",e.normalizeProps(e.guardReactiveProps(e.unref(s))),[e.createVNode(e.unref(h.TuInput),{ref:"inputRef",type:"text",id:e.unref(d),name:t.name,autocomplete:t.autocomplete},null,8,["id","name","autocomplete"])],16)]),content:e.withCtx(()=>[e.createVNode(_.default,null,{default:e.withCtx(()=>[e.createVNode(e.unref(C.TuScrollbar),{ref:"scrollbarRef",tag:"ul"},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default")]),_:3},512)]),_:3})]),_:3},8,["disabled","popup-visible","unmount-on-close","click-to-close","popup-container","onPopupVisibleChange"]))}});exports.default=I;