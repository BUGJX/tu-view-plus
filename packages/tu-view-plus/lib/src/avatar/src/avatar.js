"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),t=require("./constants.js"),r=e.buildProps({shape:{values:t.shape,type:String,default:"circle"},imageUrl:{type:String},size:{type:Number,default:40},autoFixFontSize:{type:Boolean,default:!0},triggerType:{values:t.triggerType,type:String,default:"button"},triggerIconStyle:{type:Object},effect:{type:String,values:t.avartEffects,default:"up"},background:{type:String},color:{type:String}}),a={click:i=>!0,error:()=>!0,load:()=>!0};exports.avatarEmits=a;exports.avatarProps=r;
