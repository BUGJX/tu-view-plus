"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),ee=require("@vueuse/core"),F=require("./textarea.js"),I=require("@tu-view-plus/hooks"),te=require("../../icon/index.js"),re=require("./use-textarea.js"),M=require("@tu-view-plus/utils"),oe=require("@tu-view-plus/icons-vue");require("../../form/index.js");require("../style/textarea.css");const N=require("../../form/src/hooks/use-form-props.js"),R=require("../../form/src/hooks/use-form-item.js"),ne=["role"],ae=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],se=e.defineComponent({name:"TuTextarea",inheritAttrs:!1}),ue=e.defineComponent({...se,props:F.textareaProps,emits:F.textareaEmits,setup(D,{expose:P,emit:L}){const u=e.shallowRef(),n=D,W=L,a=I.useNamespace("textarea"),f=N.useFormSize(),l=N.useFormDisabled(),i=I.useComponentAttrs({excludeKeys:e.computed(()=>Object.keys(A.value))}),m=e.ref(),{form:K,formItem:s}=R.useFormItem(),{inputId:O}=R.useFormItemInputId(n,{formItemContext:s}),{textareaRef:j,isHovering:H,isFocused:p,textareaCalcStyle:U,textLength:x,nativeTextareaValue:v,focus:$,blur:G,select:J,clear:y,handleMouseEnter:b,handleMouseLeave:C,handleCompositionStart:h,handleCompositionUpdate:k,handleCompositionEnd:S,handleInput:g,handleFocus:w,handleBlur:z,handleChange:T,handleKeydown:q,setNativeTextareaValue:V,resizeTextarea:c,onceInitSizeTextarea:Q}=re.default(n,W,u),X=e.computed(()=>B.value||d.value),B=e.computed(()=>n.clearable&&!l.value&&!n.readonly&&!!v.value&&(p.value||H.value)),d=e.computed(()=>n.showWordLimit&&!!i.value.maxlength&&!l.value&&!n.readonly),Y=e.computed(()=>!!d.value&&x.value>Number(i.value.maxlength)),Z=e.computed(()=>({[a.b()]:!0,[a.m(f.value)]:f.value,[a.is("disabled")]:l.value,[a.is("exceed")]:Y.value,[e.useAttrs().class]:e.useAttrs().class})),_=e.computed(()=>[e.useAttrs().style,n.textareaStyle]),A=e.computed(()=>{const o={};return n.containerRole==="combobox"&&(o["aria-haspopup"]=e.useAttrs()["aria-haspopup"],o["aria-owns"]=e.useAttrs()["aria-owns"],o["aria-expanded"]=e.useAttrs()["aria-expanded"]),o}),E=e.computed(()=>[n.textareaStyle,U.value,{resize:n.resize}]);return ee.useResizeObserver(u,o=>{if(Q(),!d.value||n.resize!=="both")return;const t=o[0],{width:r}=t.contentRect;m.value={right:`calc(100% - ${r+16}px)`}}),e.watch(v,()=>V()),e.watch(()=>n.modelValue,()=>{var o;e.nextTick(()=>c()),n.validateEvent&&((o=s==null?void 0:s.validate)==null||o.call(s,"change").catch(t=>M.debugWarn(t)))}),e.onMounted(()=>{!n.formatter&&n.parser&&M.debugWarn("TuTextarea","If you set the parser, you also need to set the formatter."),V(),e.nextTick(c)}),P({textarea:u,ref:j,textareaStyle:E,autosize:e.toRef(n,"autosize"),focus:$,blur:G,select:J,clear:y,resizeTextarea:c}),(o,t)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",e.mergeProps(A.value,{class:Z.value,style:_.value,role:o.containerRole,onMouseenter:t[9]||(t[9]=(...r)=>e.unref(b)&&e.unref(b)(...r)),onMouseleave:t[10]||(t[10]=(...r)=>e.unref(C)&&e.unref(C)(...r))}),[e.createElementVNode("textarea",e.mergeProps({ref_key:"textarea",ref:u},e.unref(i),{id:e.unref(O),class:[e.unref(a).e("inner"),{[e.unref(a).is("focus")]:e.unref(p)}],tabindex:o.tabindex,disabled:e.unref(l),readonly:o.readonly,autocomplete:o.autocomplete,style:E.value,"aria-label":o.label,placeholder:o.placeholder,form:e.unref(K),onCompositionstart:t[0]||(t[0]=(...r)=>e.unref(h)&&e.unref(h)(...r)),onCompositionupdate:t[1]||(t[1]=(...r)=>e.unref(k)&&e.unref(k)(...r)),onCompositionend:t[2]||(t[2]=(...r)=>e.unref(S)&&e.unref(S)(...r)),onInput:t[3]||(t[3]=(...r)=>e.unref(g)&&e.unref(g)(...r)),onFocus:t[4]||(t[4]=(...r)=>e.unref(w)&&e.unref(w)(...r)),onBlur:t[5]||(t[5]=(...r)=>e.unref(z)&&e.unref(z)(...r)),onChange:t[6]||(t[6]=(...r)=>e.unref(T)&&e.unref(T)(...r)),onKeydown:t[7]||(t[7]=(...r)=>e.unref(q)&&e.unref(q)(...r))}),null,16,ae),X.value?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(a).e("suffix")),style:e.normalizeStyle(m.value)},[B.value?(e.openBlock(),e.createBlock(e.unref(te.TuIcon),{key:0,class:e.normalizeClass([e.unref(a).e("icon"),e.unref(a).em("icon","clear")]),onMousedown:t[8]||(t[8]=e.withModifiers(()=>{},["prevent"])),onClick:e.unref(y)},{default:e.withCtx(()=>[e.createVNode(e.unref(oe.Close))]),_:1},8,["class","onClick"])):e.createCommentVNode("",!0),d.value?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(e.unref(a).e("count"))},e.toDisplayString(e.unref(x))+" / "+e.toDisplayString(e.unref(i).maxlength),3)):e.createCommentVNode("",!0)],6)):e.createCommentVNode("",!0)],16,ne)),[[e.vShow,o.type!=="hidden"]])}});exports.default=ue;
