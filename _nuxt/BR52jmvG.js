import{_ as L}from"./xBkyOM2N.js";import{_ as $}from"./BeFclaUx.js";import{_ as O}from"./SM7hxz3n.js";import{_ as P}from"./C4a3JGsQ.js";import{_ as R}from"./DkjFzXuH.js";import{_ as E}from"./DvjQmpBb.js";import{_ as T}from"./CKaSsRbv.js";import{_ as U}from"./CfMjetS_.js";import{s as F}from"./D26kbYTy.js";import{i as H}from"./D2dhzy7e.js";import{e as h,r as u,h as j,i as v,o as m,w as s,c as D,b as r,g as z,u as n,F as q,a as x,l as y,d,t as G,f as J}from"./Bt1u4B0-.js";import{u as K}from"./B4oWGeeH.js";import{u as Q}from"./WC2X13Kw.js";import{f as W}from"./DkQxb8LZ.js";import"./Dp47PizI.js";const X={class:"flex justify-between items-center"},Z={class:"grid grid-cols-2 gap-4"},ve=h({__name:"import-order",setup(ee){K({title:"Import Orders"});const{alerts:I,alertMsg:p,showAlert:c,clearAlerts:b}=Q(),f=u([]),a=u(),g=W(new Date,"YYYY-MM-DD"),l=u([g,g]),A=e=>{const i=new Date;i.setHours(0,0,0,0);const _=new Date(i.getTime()-30*864e5);return e<_||e>i},w=async()=>{b();try{const{data:e}=await H({from:l.value[0],to:l.value[1],siteId:a.value});e!=null&&e.message&&c(e==null?void 0:e.message,"success"),e!=null&&e.error&&c(e==null?void 0:e.error,"danger")}catch(e){c(e,"danger")}};async function C(){const{data:e}=await F();f.value=e==null?void 0:e.sites.map(o=>({text:o.siteCode,value:o.id}))}return j(()=>{C()}),(e,o)=>{const i=L,_=$,V=O,Y=P,M=R,S=E,B=T,N=U;return m(),v(N,null,{default:s(()=>[(m(!0),D(q,null,z(n(I),(t,k)=>(m(),D("div",{key:k},[r(_,{visible:t.visible,color:t.color,onClose:oe=>t.visible=!1},{icon:s(()=>[n(p).color==="danger"?(m(),v(i,{key:0,class:"icon-cil-warning text-xl"})):J("",!0)]),default:s(()=>[d(" "+G(n(p).message),1)]),_:2},1032,["visible","color","onClose"])]))),128)),r(B,{class:"m-auto"},{header:s(()=>[x("div",X,[r(V,null,{default:s(()=>o[2]||(o[2]=[d("Import order via file")])),_:1}),r(Y,{size:"md","loading-click":w,disabled:!n(a)},{default:s(()=>o[3]||(o[3]=[d(" Upload ")])),_:1},8,["disabled"])])]),default:s(()=>[x("div",Z,[r(M,{modelValue:n(a),"onUpdate:modelValue":o[0]||(o[0]=t=>y(a)?a.value=t:null),label:"Select Platform:",options:n(f)},null,8,["modelValue","options"]),r(S,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=t=>y(l)?l.value=t:null),full:"","value-type":"YYYY-MM-DD",label:"Date Range:","disabled-date":A},null,8,["modelValue"])])]),_:1})]),_:1})}}});export{ve as default};
