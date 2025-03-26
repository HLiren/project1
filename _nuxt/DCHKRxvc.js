import{_ as k}from"./BeFclaUx.js";import{_ as B}from"./SM7hxz3n.js";import{_ as T}from"./C4a3JGsQ.js";import{_ as M}from"./xBkyOM2N.js";import{_ as R}from"./rjSasmN6.js";import{_ as S}from"./BGCo7yP8.js";import{_ as A}from"./CKaSsRbv.js";import{e as D,r as p,j as E,h as I,c as N,o as j,b as s,a as n,w as o,d as r,t as q,u as c,l as U,z as $,s as _}from"./Bt1u4B0-.js";import{a as z,e as K}from"./C5IItiNP.js";import{u as L}from"./WC2X13Kw.js";import"./Dp47PizI.js";const P={class:"flex justify-between items-center"},W={class:"grid grid-cols-3 items-center"},F={class:"col-span-1"},G={class:"flex justify-between items-center"},re=D({__name:"ShippingMethod",setup(H){const{alertMsg:d,showAlert:u,clearAlerts:f}=L(),i=p([]),a=p(null),g=async()=>{try{const{data:t}=await z();i.value=t.list}catch(t){_({title:"Error !",content:t},"danger")}},v=async()=>{var t;if(f(),a.value&&!((t=a.value)!=null&&t.checkValidity())){a.value.reportValidity();return}try{const{data:e}=await K(i.value[0]);e.message&&u(e.message,"success")}catch(e){_({title:"Error !",content:e},"danger")}},l=E({get:()=>{const t=i.value.find(e=>e.path==="dpd_price");return t?t.value:""},set:t=>{const e=i.value.find(m=>m.path==="dpd_price");e&&(e.value=t)}});return I(async()=>{await g()}),(t,e)=>{const m=k,h=B,x=T,y=M,b=R,w=S,C=A;return j(),N("div",null,[s(m,{visible:c(d).visible},{default:o(()=>[r(q(c(d).message),1)]),_:1},8,["visible"]),n("form",{ref_key:"formRef",ref:a,onSubmit:e[1]||(e[1]=$(()=>{},["prevent"]))},[s(C,null,{header:o(()=>[n("div",P,[s(h,null,{default:o(()=>e[2]||(e[2]=[r(" Shipment Ticket Rule ")])),_:1}),s(x,{type:"submit","loading-click":v},{default:o(()=>e[3]||(e[3]=[r(" Save ")])),_:1})])]),default:o(()=>[n("div",W,[n("div",F,[s(w,{placeholder:"Enter amount, e.g.,300",type:"number",max:"1000",min:"0",step:"0.01",modelValue:c(l),"onUpdate:modelValue":e[0]||(e[0]=V=>U(l)?l.value=V:null),required:""},{label:o(()=>[n("div",G,[e[5]||(e[5]=r(" Item Total Threshold ")),s(b,null,{icon:o(()=>[s(y,{class:"icon-question-circle text-xl"})]),default:o(()=>[e[4]||(e[4]=r(" When the items total on the ticket exceeds the threshold, the shipping provider will be set to DPD. "))]),_:1})])]),_:1},8,["modelValue"]),e[6]||(e[6]=n("div",{class:"text-xs text-gray-500 mt-2"},[r(" * This rule applies only for orders in the UK region. "),n("br"),r(" * If left 0, the default shipping provider will be Royal Mail. ")],-1))])])]),_:1})],544)])}}});export{re as default};
