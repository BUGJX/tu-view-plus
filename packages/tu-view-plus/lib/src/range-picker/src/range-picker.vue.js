"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),E=require("./range-picker.js"),R=require("@tu-view-plus/hooks"),u=require("@tu-view-plus/utils"),j=require("@tu-view-plus/icons-vue");require("../../form/index.js");require("../style/range-picker.css");const w=require("../../form/src/hooks/use-form-props.js"),M=["disabled","placeholder","value"],A=["disabled","placeholder","value"],O=e.defineComponent({name:"TuRangePicker"}),U=e.defineComponent({...O,props:E.rangePickerProps,emits:E.rangePickerEmits,setup(z,{expose:q,emit:S}){const _=z,o=S,{focused:d,disabled:p,value:c,format:m,focusedIndex:n,inputValue:l}=e.toRefs(_),r=R.useNamespace("range-picker"),B=e.useSlots(),i=w.useFormDisabled(),C=w.useFormSize(),f=e.ref(),v=e.ref(),D=e.computed(()=>g(0)),K=e.computed(()=>g(1)),F=e.computed(()=>b(0)),I=e.computed(()=>b(1)),T=e.computed(()=>({[r.b()]:!0,[r.m(C.value)]:C.value,[r.is("focused")]:d==null?void 0:d.value,[r.is("disabled")]:i.value,[r.is("has-prefix")]:B.prefix})),g=s=>i.value?i.value:u.isArray(p.value)?p.value[s]:p.value,b=s=>{var a,V;if(l!=null&&l.value)return(a=l==null?void 0:l.value)==null?void 0:a[s];const t=(V=c==null?void 0:c.value)==null?void 0:V[s];if(t&&u.isDayjs(t))return u.isFunction(m.value)?m.value(t):t.format(m.value)},h=s=>{o("focused-index-change",s),o("update:focusedIndex",s)},k=s=>({[r.e("input-wrap")]:!0,[r.is("active")]:s===(n==null?void 0:n.value)}),y=s=>{s.stopPropagation(),o("change",s)},P=()=>{o("press-enter")},N=s=>{s.preventDefault()},$=s=>{o("clear",s)};return q({focus:s=>{const t=u.isNumber(s)?s:n==null?void 0:n.value,a=t===0?f.value:v.value;!u.isUndefined(t)&&!g(t)&&a&&a.focus&&a.focus()},blur:()=>{const s=(n==null?void 0:n.value)===0?f.value:v.value;s&&s.blur&&s.blur()}}),(s,t)=>{const a=e.resolveComponent("tu-icon");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(T.value)},[s.$slots.prefix?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(e.unref(r).e("prefix"))},[e.renderSlot(s.$slots,"perfix")],2)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(k(0))},[e.createElementVNode("input",e.mergeProps({ref_key:"refInput0",ref:f,class:e.unref(r).e("input"),disabled:D.value,placeholder:s.placeholder[0],value:F.value},s.readonly?{readonly:!0}:{},{onInput:y,onKeydown:[e.withKeys(P,["enter"]),e.withKeys(N,["tab"])],onClick:t[0]||(t[0]=()=>h(0))}),null,16,M)],2),e.createElementVNode("span",{class:e.normalizeClass(e.unref(r).e("separator"))},[e.renderSlot(s.$slots,"separator",{},()=>[e.createTextVNode("~")])],2),e.createElementVNode("div",{class:e.normalizeClass(k(1))},[e.createElementVNode("input",e.mergeProps({ref_key:"refInput1",ref:v,class:e.unref(r).e("input"),disabled:K.value,placeholder:s.placeholder[1],value:I.value},s.readonly?{readonly:!0}:{},{onInput:y,onKeydown:[e.withKeys(P,["enter"]),e.withKeys(N,["tab"])],onClick:t[1]||(t[1]=()=>h(1))}),null,16,A)],2),e.createElementVNode("div",{class:e.normalizeClass(e.unref(r).e("suffix"))},[s.allowClear&&!e.unref(i)&&e.unref(c).length===2?(e.openBlock(),e.createBlock(a,{key:0,class:e.normalizeClass([e.unref(r).e("icon"),e.unref(r).em("icon","clear")]),onClick:$},{default:e.withCtx(()=>[e.createVNode(e.unref(j.Close))]),_:1},8,["class"])):e.createCommentVNode("",!0),e.createVNode(a,{class:e.normalizeClass(e.unref(r).e("icon"))},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"suffix-icon")]),_:3},8,["class"])],2)],2)}}});exports.default=U;