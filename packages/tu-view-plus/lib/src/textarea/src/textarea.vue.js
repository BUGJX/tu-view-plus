"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),_=require("@vueuse/core"),F=require("./textarea.js"),I=require("@tu-view-plus/hooks"),ee=require("../../icon/index.js"),te=require("./use-textarea.js"),M=require("@tu-view-plus/utils"),re=require("@tu-view-plus/icons-vue");require("../../form/index.js");require("../style/textarea.css");const N=require("../../form/src/hooks/use-form-props.js"),R=require("../../form/src/hooks/use-form-item.js"),ne=["role"],oe=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],ae=e.defineComponent({name:"TuTextarea",inheritAttrs:!1}),se=e.defineComponent({...ae,props:F.textareaProps,emits:F.textareaEmits,setup(D,{expose:P,emit:L}){const o=D,u=e.shallowRef(),a=I.useNamespace("textarea"),c=N.useFormSize(),l=N.useFormDisabled(),i=I.useComponentAttrs({excludeKeys:e.computed(()=>Object.keys(A.value))}),m=e.ref(),{form:W,formItem:s}=R.useFormItem(),{inputId:K}=R.useFormItemInputId(o,{formItemContext:s}),{textareaRef:O,isHovering:j,isFocused:p,textareaCalcStyle:H,textLength:x,nativeTextareaValue:v,focus:U,blur:$,select:G,clear:y,handleMouseEnter:b,handleMouseLeave:C,handleCompositionStart:h,handleCompositionUpdate:k,handleCompositionEnd:S,handleInput:g,handleFocus:w,handleBlur:z,handleChange:T,handleKeydown:q,setNativeTextareaValue:V,resizeTextarea:f,onceInitSizeTextarea:J}=te.default(o,L,u),Q=e.computed(()=>B.value||d.value),B=e.computed(()=>o.clearable&&!l.value&&!o.readonly&&!!v.value&&(p.value||j.value)),d=e.computed(()=>o.showWordLimit&&!!i.value.maxlength&&!l.value&&!o.readonly),X=e.computed(()=>!!d.value&&x.value>Number(i.value.maxlength)),Y=e.computed(()=>({[a.b()]:!0,[a.m(c.value)]:c.value,[a.is("disabled")]:l.value,[a.is("exceed")]:X.value,[e.useAttrs().class]:e.useAttrs().class})),Z=e.computed(()=>[e.useAttrs().style,o.textareaStyle]),A=e.computed(()=>{const n={};return o.containerRole==="combobox"&&(n["aria-haspopup"]=e.useAttrs()["aria-haspopup"],n["aria-owns"]=e.useAttrs()["aria-owns"],n["aria-expanded"]=e.useAttrs()["aria-expanded"]),n}),E=e.computed(()=>[o.textareaStyle,H.value,{resize:o.resize}]);return _.useResizeObserver(u,n=>{if(J(),!d.value||o.resize!=="both")return;const t=n[0],{width:r}=t.contentRect;m.value={right:`calc(100% - ${r+16}px)`}}),e.watch(v,()=>V()),e.watch(()=>o.modelValue,()=>{var n;e.nextTick(()=>f()),o.validateEvent&&((n=s==null?void 0:s.validate)==null||n.call(s,"change").catch(t=>M.debugWarn(t)))}),e.onMounted(()=>{!o.formatter&&o.parser&&M.debugWarn("TuTextarea","If you set the parser, you also need to set the formatter."),V(),e.nextTick(f)}),P({textarea:u,ref:O,textareaStyle:E,autosize:e.toRef(o,"autosize"),focus:U,blur:$,select:G,clear:y,resizeTextarea:f}),(n,t)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",e.mergeProps(e.unref(A),{class:e.unref(Y),style:e.unref(Z),role:n.containerRole,onMouseenter:t[9]||(t[9]=(...r)=>e.unref(b)&&e.unref(b)(...r)),onMouseleave:t[10]||(t[10]=(...r)=>e.unref(C)&&e.unref(C)(...r))}),[e.createElementVNode("textarea",e.mergeProps({ref_key:"textarea",ref:u},e.unref(i),{id:e.unref(K),class:[e.unref(a).e("inner"),{[e.unref(a).is("focus")]:e.unref(p)}],tabindex:n.tabindex,disabled:e.unref(l),readonly:n.readonly,autocomplete:n.autocomplete,style:e.unref(E),"aria-label":n.label,placeholder:n.placeholder,form:e.unref(W),onCompositionstart:t[0]||(t[0]=(...r)=>e.unref(h)&&e.unref(h)(...r)),onCompositionupdate:t[1]||(t[1]=(...r)=>e.unref(k)&&e.unref(k)(...r)),onCompositionend:t[2]||(t[2]=(...r)=>e.unref(S)&&e.unref(S)(...r)),onInput:t[3]||(t[3]=(...r)=>e.unref(g)&&e.unref(g)(...r)),onFocus:t[4]||(t[4]=(...r)=>e.unref(w)&&e.unref(w)(...r)),onBlur:t[5]||(t[5]=(...r)=>e.unref(z)&&e.unref(z)(...r)),onChange:t[6]||(t[6]=(...r)=>e.unref(T)&&e.unref(T)(...r)),onKeydown:t[7]||(t[7]=(...r)=>e.unref(q)&&e.unref(q)(...r))}),null,16,oe),e.unref(Q)?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(a).e("suffix")),style:e.normalizeStyle(m.value)},[(e.unref(B),e.openBlock(),e.createBlock(e.unref(ee.TuIcon),{key:0,class:e.normalizeClass([e.unref(a).e("icon"),e.unref(a).em("icon","clear")]),onMousedown:t[8]||(t[8]=e.withModifiers(()=>{},["prevent"])),onClick:e.unref(y)},{default:e.withCtx(()=>[e.createVNode(e.unref(re.Close))]),_:1},8,["class","onClick"])),e.unref(d)?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(e.unref(a).e("count"))},e.toDisplayString(e.unref(x))+" / "+e.toDisplayString(e.unref(i).maxlength),3)):e.createCommentVNode("",!0)],6)):e.createCommentVNode("",!0)],16,ne)),[[e.vShow,n.type!=="hidden"]])}});exports.default=se;
