"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),o=require("@tu-view-plus/hooks");require("../../button/index.js");const u=require("../../button/src/constants.js"),i=t.buildProps({popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String,values:u.buttonTypes,default:"default"},size:{...o.useSizeProp,default:"medium"},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}}),p={"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,r)=>!0};exports.dropdownButtonEmits=p;exports.dropdownButtonProps=i;
