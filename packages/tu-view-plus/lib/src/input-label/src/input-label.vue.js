"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),V=require("./input-label.js"),M=require("@tu-view-plus/hooks"),h=require("@tu-view-plus/utils"),g=require("@tu-view-plus/constants");require("../../form/index.js");require("../style/input-label.css");const _=require("../../form/src/hooks/use-form-props.js"),A=require("../../form/src/hooks/use-form-item.js"),R=e.createElementVNode("br",null,null,-1),j=["value","readonly","placeholder","disabled"],z=e.defineComponent({name:"TuInputLabel"}),U=e.defineComponent({...z,props:V.inputLabelProps,emits:V.inputLabelEmits,setup(C,{emit:I}){let r;const u=C,n=I,m=e.useAttrs(),N=e.useSlots(),{disabled:O,inputValue:c,uninjectFormItemContext:$}=e.toRefs(u),s=M.useNamespace("input-label");_.useFormSize();const k=_.useFormDisabled();A.useFormItem();const l=e.ref(),E=e.ref(!1),i=e.ref(!1),v=e.ref(""),p=e.ref(""),f=e.ref(!1),T=e.computed(()=>h.omit(m,g.INPUT_EVENTS)),q=e.computed(()=>h.pick(m,g.INPUT_EVENTS)),F=e.computed(()=>u.enabledInput&&E.value||!u.modelValue),o=e.computed(()=>(c==null?void 0:c.value)??p.value),S=e.computed(()=>u.enabledInput&&u.modelValue?u.modelValue.label:u.placeholder),y=e.computed(()=>({[s.b()]:!0})),L=e.computed(()=>({[s.b()]:!0,[s.is("hidden")]:!F.value})),P=t=>{l.value&&t.target!==l.value&&(t.preventDefault(),l.value.focus())},x=t=>{const{value:a}=t.target;i.value||b(a,t),e.nextTick(()=>{l.value&&o.value!==l.value.value&&(l.value.value=o.value)})},D=t=>{f.value=!0,r=o.value,n("focus",t)},w=t=>{f.value=!1,n("blur",t),B(t)},B=t=>{o.value!==r&&(r=o.value,n("change",o.value,t))},d=t=>{const{value:a}=t.target;t.type==="compositionend"?(i.value=!1,v.value="",b(a,t),e.nextTick(()=>{l.value&&o.value!==l.value.value&&(l.value.value=o.value)})):(i.value=!0,v.value=o.value+(t.data??""))},b=(t,a)=>{debugger;console.log("updateValue",t),p.value=t,n("update:modelValue",t),n("input",t,a)};return e.watch(o,t=>{l.value&&t!==l.value.value&&(l.value.value=t)}),(t,a)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createTextVNode(" computedValue: "+e.toDisplayString(o.value)+" ",1),R,e.createTextVNode(" inputLabelValue: "+e.toDisplayString(p.value)+" ",1),e.createElementVNode("div",e.mergeProps(T.value,{class:y.value,onMousedown:P}),[e.unref(N).prefix?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(s).e("prefix"))},[e.renderSlot(t.$slots,"prefix")],2)):e.createCommentVNode("",!0),e.createElementVNode("input",e.mergeProps({ref_key:"inputRef",ref:l},q.value,{class:L.value,value:o.value,readonly:!t.enabledInput,placeholder:S.value,disabled:e.unref(k),onInput:x,onFocus:D,onBlur:w,onCompositionstart:d,onCompositionupdate:d,onCompositionend:d}),null,16,j)],16)],64))}});exports.default=U;