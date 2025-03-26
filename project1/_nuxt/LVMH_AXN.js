import{_ as L}from"./BlN-oVz0.js";import{_ as O}from"./CihD9TyV.js";import{_ as I}from"./DpEiREkT.js";import{_ as M}from"./Cp_AAmUS.js";import{_ as V}from"./gSVssKPj.js";import{_ as Z}from"./CZNVgcsM.js";import{_ as E}from"./Dj8nmW0i.js";import{N as b,r as m,j as $,h as z,s as U,e as R,C as T,c as W,o as X,b as r,a as t,u as c,w as o,d as x,t as k,F as G,_ as q}from"./BqYyig0m.js";const J=b("/img/user-guide/user-guide-1.png"),K=b("/img/user-guide/user-guide-2.png"),Y=b("/img/user-guide/user-guide-3.png"),H=b("/img/user-guide/user-guide-4.png"),Q=b("/img/user-guide/user-guide-5.png"),ee=()=>{const v=m(!1),d=m(!1),_=m(""),u=m(!1),l=m({}),f=m(""),g="^XA^JBR^XZ",y={default:{toFormat:"zpl",fromFormat:"png",action:"print",resize:{width:712,height:1118},fitTo:{width:812,height:1218}},small:{toFormat:"zpl",fromFormat:"png",action:"print",resize:{width:451,height:200},fitTo:{width:551,height:236}}},P=s=>new Promise((e,n)=>{if(document.querySelector(`script[src="${s}"]`)){e();return}const i=document.createElement("script");i.src=s,i.onload=()=>e(),i.onerror=()=>n(new Error(`Failed to load script: ${s}`)),document.head.appendChild(i)}),S=()=>v.value?Promise.resolve():P("/js/BrowserPrint-Zebra-1.1.250.min.js").then(()=>P("/js/BrowserPrint-3.1.250.min.js")).then(()=>{v.value=!0,Promise.resolve()}),B=()=>new Promise((s,e)=>{BrowserPrint.getApplicationConfiguration(n=>{d.value=!0,_.value=n.application.version,s(n)},n=>{d.value=!1,e(n)})}),C=()=>l.value.name?Promise.resolve():new Promise((s,e)=>{BrowserPrint.getDefaultDevice("printer",n=>{l.value=n,l.value.send(g,()=>{f.value=l.value.name,u.value=!0,s()},i=>{u.value=!1,e(i)})},n=>{u.value=!1,e(n)})}),w=(s,e=a=>{},n=a=>{},i="default")=>{if(A.value){l.value.send(g,void 0,function(p){U({title:"Error !",content:p},"danger")});const a=y[i];if(!a){console.error(`Invalid label option key: ${i}`);return}l.value.convertAndSendFile(s,function(p){e(p)},p=>{n(p)},a)}else console.error("Printer setup incomplete.")},h=()=>d.value&&u.value?Promise.resolve():new Promise((s,e)=>{S().then(()=>Promise.all([C(),B()])).then(()=>{s()}).catch(n=>{console.error("Failed to initialize BrowserPrint:",n),e(n)})}),A=$(()=>d.value&&u.value);return z(()=>{h()}),{appVersion:_,deviceName:f,setupCompleted:A,reloadPrint:h,isAppSetup:d,isPrinterSetup:u,print:w}},te=()=>{const v=m(""),d=m(""),_=()=>{const l=window.navigator.userAgent.toLowerCase();l.indexOf("mac")!==-1?v.value="Mac":l.indexOf("win")!==-1&&(v.value="Windows")},u=$(()=>v.value==="Mac"?"/zebra-browser-print-mac-v131445.dmg":v.value==="Windows"?"/zebra-browser-print-windows-v131445 2.exe":"/");return z(()=>{_(),d.value=u.value}),{downloadLink:d}},ne={class:"flex gap-2"},oe={class:"flex justify-between items-center"},se={class:"inline-flex items-center"},re={class:"grid xl:grid-cols-3 gap-4 mb-5"},ie={class:"rounded-xl bg-primary4 text-primary-dark flex justify-center items-center h-12 w-12"},le={class:"card-text-secondary"},ae={class:"rounded-xl bg-primary4 text-primary-dark flex justify-center items-center h-12 w-12"},ce={class:"card-text-secondary"},de={class:"rounded-xl bg-primary4 text-primary-dark flex justify-center items-center h-12 w-12"},ue={class:"border rounded-full w-9 h-9 flex items-center justify-center"},pe=["href"],me=R({__name:"PrinterSetup",emits:["setup-completed"],setup(v,{expose:d,emit:_}){const u=_,{reloadPrint:l,isAppSetup:f,isPrinterSetup:g,print:y,setupCompleted:P,deviceName:S,appVersion:B}=ee(),{downloadLink:C}=te(),w=m(!1),h=()=>{w.value=!1};return T(P,s=>{u("setup-completed",s)}),d({handlePrint:(s,e,n,i="default")=>{if(s){const p=["default","small"].includes(i)?i:"default";y(s,e,n,p)}}}),(s,e)=>{const n=L,i=O,a=I,p=M,D=V,F=Z,N=E;return X(),W(G,null,[r(i,{size:"lg",title:"Application User Guide","backdrop-close":!1,visible:c(w),onClose:e[1]||(e[1]=j=>h())},{footer:o(()=>[t("div",ne,[r(n,{variant:"outline",color:"info",onClick:e[0]||(e[0]=j=>h())},{default:o(()=>e[3]||(e[3]=[x(" Close ")])),_:1})])]),default:o(()=>[e[4]||(e[4]=t("div",{class:"user-guide"},[t("div",null," A pop-up will appear requesting access to any connected Zebra devices. Select Yes. "),t("img",{src:J}),t("div",null," Right-click (WIN) or Click (OS X) on the Zebra log icon and select Settings. Browser Print’s settings will open. "),t("div",null,"OSX:"),t("img",{src:K}),t("div",null,"WIN:"),t("img",{src:Y}),t("div",null," To set or change the default printer, click the “Change” button. A pop-up will appear with a dropdown of all discoverable devices (finding network connected Zebra printers may take a few moments). "),t("img",{src:H}),t("div",null," Select the device you would like to print to by default and click “Set”. "),t("img",{src:Q}),t("div",null,"back to the homepage, click the “Recheck” button")],-1))]),_:1},8,["visible"]),r(p,{visible:!c(f)||!c(g),color:"danger"},{icon:o(()=>[r(a,{class:"icon-cil-warning"})]),default:o(()=>[e[5]||(e[5]=x(" Printer Not Connected ! "))]),_:1},8,["visible"]),t("div",oe,[t("div",se,[e[6]||(e[6]=t("div",{class:"text-gray-500"},"Environmental Diagnosis",-1)),r(D,{color:"link","without-text":"","loading-click":c(l)},null,8,["loading-click"])]),t("div",null,[r(n,{color:"link",onClick:e[2]||(e[2]=j=>w.value=!0)},{default:o(()=>e[7]||(e[7]=[x(" User Guide ")])),_:1})])]),t("div",re,[r(N,null,{left:o(()=>[t("div",ie,[r(a,{class:"icon-grid text-xl"})])]),center:o(()=>[e[8]||(e[8]=t("h5",{class:"cart-title"},"Application",-1)),t("div",le,"Version: "+k(c(B)),1)]),right:o(()=>[r(F,{color:c(f)?"success":"danger"},{default:o(()=>[x(k(c(f)?"active":"inactive"),1)]),_:1},8,["color"])]),_:1}),r(N,null,{left:o(()=>[t("div",ae,[r(a,{class:"icon-printer text-xl"})])]),center:o(()=>[e[9]||(e[9]=t("h5",{class:"cart-title"},"Printer",-1)),t("div",ce,"Device: - "+k(c(S)),1)]),right:o(()=>[r(F,{color:c(g)?"success":"danger"},{default:o(()=>[x(k(c(g)?"active":"inactive"),1)]),_:1},8,["color"])]),_:1}),r(N,null,{left:o(()=>[t("div",de,[r(a,{class:"icon-page text-xl"})])]),center:o(()=>e[10]||(e[10]=[t("h5",{class:"cart-title"},"Download Browser Print",-1),t("div",{class:"card-text-secondary"}," USB, Network printing to browser-based applications. ",-1)])),right:o(()=>[t("div",ue,[r(n,{color:"link"},{icon:o(()=>[t("a",{href:c(C)},[r(a,{class:"icon-download text-gray-500"})],8,pe)]),_:1})])]),_:1})])],64)}}}),Pe=q(me,[["__scopeId","data-v-b4e2323b"]]);export{Pe as _};
