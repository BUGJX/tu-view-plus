"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("@tu-view-plus/utils"),e=require("./constants.js"),r=t.buildProps({shape:{values:e.shape,type:String,default:"circle"},imageUrl:{type:String},size:{type:Number,default:40},autoFixFontSize:{type:Boolean,default:!0},triggerType:{values:e.triggerType,type:String,default:"button"},triggerIconStyle:{type:Object},effect:{type:String,values:e.avartEffects,default:"line"}}),a={click:i=>!0,error:()=>!0,load:()=>!0};exports.avatarEmits=a;exports.avatarProps=r;
