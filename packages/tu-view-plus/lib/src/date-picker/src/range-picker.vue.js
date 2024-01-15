"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("vue"),de=require("./range-picker.js");require("../../form/index.js");const n=require("@tu-view-plus/utils"),E=require("@tu-view-plus/hooks"),la=require("@tu-view-plus/icons-vue"),oa=require("./hooks/use-format.js"),na=require("./hooks/use-is-disabled-date.js"),Y=require("./hooks/use-value-format.js"),x=require("../../time-picker/src/utils.js"),sa=require("./hooks/use-range-picker-state.js"),ia=require("./hooks/use-range-header-value.js"),ca=require("./hooks/use-range-time-picker-value.js"),d=require("./utils.js"),da=require("../../range-picker/index.js"),va=require("../../trigger/index.js"),pa=require("../../icon/index.js"),ve=require("./range-picker-dropdown.vue.js"),pe=require("../../form/src/hooks/use-form-props.js"),ma=a.defineComponent({name:"TuRangePicker",inheritAttrs:!1}),fa=a.defineComponent({...ma,props:de.rangePickerProps,emits:de.rangePickerEmits,setup(me,{emit:fe}){const B=me,c=fe,h=a.useSlots(),{t:i}=E.useLocale(),{mode:C,showTime:N,format:ge,modelValue:Ve,defaultValue:he,popupVisible:Pe,defaultPopupVisible:A,placeholder:L,timePickerProps:f,disabled:P,disabledDate:ke,disabledTime:Se,pickerValue:be,defaultPickerValue:Ce,valueFormat:ye,size:Te,error:we,exchangeTime:He,previewShortcut:Z,showConfirmBtn:Re}=a.toRefs(B);pe.useFormSize();const z=pe.useFormDisabled(),De=a.computed(()=>(L==null?void 0:L.value)||{date:[i("tu.datepicker.rangePlaceholder.dateStart"),i("tu.datepicker.rangePlaceholder.dateEnd")],month:[i("tu.datepicker.rangePlaceholder.monthStart"),i("tu.datepicker.rangePlaceholder.monthEnd")],year:[i("tu.datepicker.rangePlaceholder.yearStart"),i("tu.datepicker.rangePlaceholder.yearEnd")],week:[i("tu.datepicker.rangePlaceholder.weekStart"),i("tu.datepicker.rangePlaceholder.weekEnd")],quarter:[i("tu.datepicker.rangePlaceholder.quarterStart"),i("tu.datepicker.rangePlaceholder.quarterEnd")]}[C.value]||[i("tu.datepicker.rangePlaceholder.dateStart"),i("tu.datepicker.rangePlaceholder.dateEnd")]),{format:y,valueFormat:j,parseValueFormat:k}=oa.useFormat(a.reactive({mode:C,format:ge,showTime:N,valueFormat:ye})),S=a.computed(()=>{const e=P.value===!0||z.value===!0||n.isArray(P.value)&&P.value[0]===!0,t=P.value===!0||z.value===!0||n.isArray(P.value)&&P.value[1]===!0;return[e,t]}),qe=a.computed(()=>!!(S.value[0]&&S.value[1])),ee=(e=0)=>S.value[e]?e^1:e,F=a.ref(),l=a.ref(ee()),U=a.computed(()=>{const e=l.value,t=e^1;return S.value[t]?e:t}),Ie=a.computed(()=>S.value[l.value^1]),{value:T,setValue:Ee}=sa.useRangePickerState(a.reactive({modelValue:Ve,defaultValue:he,format:k})),[g,W]=E.useState(),[xe,w]=E.useState(),_=a.computed(()=>g.value??T.value),o=a.computed(()=>xe.value??g.value??T.value),[G,v]=E.useState(),p=a.ref(),m=a.ref(),[V,Fe]=E.useMergeState(A==null?void 0:A.value,a.reactive({value:Pe})),J=e=>{V.value!==e&&(Fe(e),c("popup-visible-change",e),c("update:popupVisible",e))},{startHeaderValue:K,endHeaderValue:Q,startHeaderOperations:Me,endHeaderOperations:Oe,resetHeaderValue:M,setHeaderValue:ae}=ia.useRangeHeaderValue(a.reactive({mode:C,startHeaderMode:p,endHeaderMode:m,value:be,defaultValue:Ce,selectedValue:o,format:k,onChange:e=>{const t=Y.getReturnRangeValue(e,j.value),r=x.getFormattedValue(e,k.value),u=n.getDateValue(e);c("picker-value-change",t,u,r),c("update:pickerValue",t)}})),$e=e=>{p.value=e},Be=e=>{m.value=e},Ne=e=>{let t=K.value;t=t.set("year",e.year()),p.value==="month"&&(t=t.set("month",e.month())),ae([t,Q.value]),p.value=void 0},Ae=e=>{let t=Q.value;t=t.set("year",e.year()),m.value==="month"&&(t=t.set("month",e.month())),ae([K.value,t]),m.value=void 0},H=a.ref([o.value[0]||n.getNow(),o.value[1]||n.getNow()]);a.watch(o,()=>{const[e,t]=o.value;H.value[0]=e||H.value[0],H.value[1]=t||H.value[1]});const[R,Le,ze]=ca.useRangeTimePickerValue(a.reactive({timePickerProps:f,selectedValue:o})),te=a.computed(()=>C.value==="date"&&N.value),re=a.computed(()=>te.value||(f==null?void 0:f.value)),D=na.useIsDisabledDate(a.reactive({mode:C,isRange:!0,showTime:N,disabledDate:ke,disabledTime:Se})),O=a.computed(()=>te.value||Re.value),je=a.computed(()=>O.value&&(!d.isCompleteRangeValue(_.value)||D(_.value[0],"start")||D(_.value[1],"end")));a.watch(V,e=>{p.value=void 0,m.value=void 0,W(void 0),w(void 0),e&&(M(),ze(),l.value=ee(l.value),a.nextTick(()=>ne(l.value))),e||v(void 0)}),a.watch(l,()=>{B.disabledInput&&(ne(l.value),v(void 0))});const Ue=(e,t)=>{const r=e?Y.getReturnRangeValue(e,j.value):void 0,u=x.getFormattedValue(e,k.value),s=n.getDateValue(e);n.isValueChange(e,T.value)&&(c("update:modelValue",r),c("change",r,s,u)),t&&c("ok",r,s,u)},ue=e=>{let t=n.getSortedDayjsArray(e);return re.value&&!He.value&&(t=[I(t[0],e[0]),I(t[1],e[1])]),t},q=(e,t,r)=>{if(D(e==null?void 0:e[0],"start")||D(e==null?void 0:e[1],"end"))return;let u=e?[...e]:void 0;d.isCompleteRangeValue(u)&&(u=ue(u)),Ue(u,r),Ee(u||[]),W(void 0),w(void 0),v(void 0),p.value=void 0,m.value=void 0,n.isBoolean(t)&&J(t)},le=e=>{const t=Y.getReturnRangeValue(e,j.value),r=x.getFormattedValue(e,k.value),u=n.getDateValue(e);c("select",t,u,r)},X=(e,t)=>{const{emitSelect:r=!1,updateHeader:u=!1}=t||{};let s=[...e];d.isCompleteRangeValue(s)&&(s=ue(s)),W(s),w(void 0),v(void 0),p.value=void 0,m.value=void 0,r&&le(s),u&&M()},oe=(e,t)=>{const{updateHeader:r=!1}=t||{};w(e),v(void 0),r&&M()},ne=e=>{F.value&&F.value.focus&&F.value.focus(e)},I=(e,t)=>re.value?d.mergeValueWithTime(n.getNow(),e,t):e,We=e=>{J(e)},_e=e=>{if(g.value&&o.value[U.value]&&(!O.value||!d.isCompleteRangeValue(g.value))){const t=[...o.value],r=I(e,R.value[l.value]);t[l.value]=r,oe(t)}},se=(e=!1)=>Ie.value?[...T.value]:g.value?e||!d.isCompleteRangeValue(g.value)?[...g.value]:[]:e?[...T.value]:[],Ge=e=>{const t=se(),r=I(e,R.value[l.value]);t[l.value]=r,le(t),!O.value&&d.isCompleteRangeValue(t)?q(t,!1):(X(t),d.isCompleteRangeValue(t)?l.value=0:l.value=U.value)},Je=(e,t)=>{const r=t==="start"?0:1,u=I(R.value[r],e),s=[...R.value];s[r]=u,Le(s);const b=se(!0);b[r]&&(b[r]=u,X(b,{emitSelect:!0}))};let $;a.onUnmounted(()=>{clearTimeout($)});const Ke=e=>{clearTimeout($),oe(e,{updateHeader:!0})},Qe=()=>{clearTimeout($),$=setTimeout(()=>{w(void 0),v(void 0),M()},100)},Xe=(e,t)=>{c("select-shortcut",t),q(e,!1)},Ye=()=>{q(o.value,!1,!0)},Ze=e=>{e.stopPropagation(),q(void 0),c("clear")},ea=e=>{J(!0);const t=e.target.value;if(!t){v(void 0);return}const r=x.getFormattedValue(o.value,y.value),u=n.isArray(G.value)?[...G.value]:r||[];if(u[l.value]=t,v(u),!x.isValidInputValue(t,y.value))return;const s=n.dayjs(t,y.value);if(D(s,l.value===0?"start":"end"))return;const b=n.isArray(o.value)?[...o.value]:[];b[l.value]=s,X(b,{updateHeader:!0})},aa=()=>{d.isValidRangeValue(o.value)?q(o.value,!1):l.value=U.value},ta=a.computed(()=>({format:y.value,...n.omit((f==null?void 0:f.value)||{},["defaultValue"]),visible:V.value})),ie=a.computed(()=>({prev:h["icon-prev"],prevDouble:h["icon-prev-double"],next:h["icon-next"],nextDouble:h["icon-next-double"]})),ra=a.reactive({headerValue:K,headerOperations:Me,headerIcons:ie}),ua=a.reactive({headerValue:Q,headerOperations:Oe,headerIcons:ie}),ce=a.computed(()=>({...n.pick(B,["mode","showTime","shortcuts","shortcutsPosition","dayStartOfWeek","disabledDate","disabledTime","hideTrigger","abbreviation"]),format:k.value,value:o.value,showConfirmBtn:O.value,confirmBtnDisabled:je.value,timePickerValue:R.value,timePickerProps:ta.value,extra:h.extra,dateRender:h.cell,startHeaderProps:ra,endHeaderProps:ua,footerValue:H.value,disabled:S.value,visible:V.value,onCellClick:Ge,onCellMouseEnter:_e,onShortcutClick:Xe,onShortcutMouseEnter:Z.value?Ke:void 0,onShortcutMouseLeave:Z.value?Qe:void 0,onConfirm:Ye,onTimePickerSelect:Je,startHeaderMode:p.value,endHeaderMode:m.value,onStartHeaderLabelClick:$e,onEndHeaderLabelClick:Be,onStartHeaderSelect:Ne,onEndHeaderSelect:Ae}));return(e,t)=>e.hideTrigger?(a.openBlock(),a.createBlock(ve.default,a.normalizeProps(a.mergeProps({key:1},{...e.$attrs,...ce.value})),null,16)):(a.openBlock(),a.createBlock(a.unref(va.TuTrigger),a.mergeProps({key:0},e.triggerProps,{trigger:"click","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"","click-to-close":!1,"popup-offset":10,"unmount-on-close":e.unmountOnClose,position:e.position,disabled:qe.value||e.readonly,"popup-visible":a.unref(V),"popup-container":e.popupContainer,onPopupVisibleChange:We}),{content:a.withCtx(()=>[a.createVNode(ve.default,a.normalizeProps(a.guardReactiveProps(ce.value)),null,16)]),default:a.withCtx(()=>[a.renderSlot(e.$slots,"default",{},()=>[a.createVNode(a.unref(da.TuRangePicker),a.mergeProps({ref_key:"refInput",ref:F},e.$attrs,{focusedIndex:l.value,"onUpdate:focusedIndex":t[0]||(t[0]=r=>l.value=r),size:a.unref(Te),focused:a.unref(V),visible:a.unref(V),error:a.unref(we),disabled:a.unref(z),readonly:e.readonly||e.disabledInput,"allow-clear":e.allowClear&&!e.readonly,placeholder:De.value,"input-value":a.unref(G),value:o.value,format:a.unref(y),onClear:Ze,onChange:ea,onPressEnter:aa}),a.createSlots({"suffix-icon":a.withCtx(()=>[a.renderSlot(e.$slots,"suffix-icon",{},()=>[a.createVNode(a.unref(pa.TuIcon),null,{default:a.withCtx(()=>[a.createVNode(a.unref(la.Calendar))]),_:1})])]),separator:a.withCtx(()=>[a.renderSlot(e.$slots,"separator",{},()=>[a.createTextVNode(a.toDisplayString(e.separator||"-"),1)])]),_:2},[e.$slots.prefix?{name:"prefix",fn:a.withCtx(()=>[a.renderSlot(e.$slots,"prefix")]),key:"0"}:void 0]),1040,["focusedIndex","size","focused","visible","error","disabled","readonly","allow-clear","placeholder","input-value","value","format"])])]),_:3},16,["unmount-on-close","position","disabled","popup-visible","popup-container"]))}});exports.default=fa;
