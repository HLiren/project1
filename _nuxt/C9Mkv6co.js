import{J as d}from"./BMe8QPLZ.js";import{B as f}from"./Bt1u4B0-.js";function b(){return{downloadZip:async(a,c="files.zip")=>{const n=new d;try{const r=a.map(async o=>{const{data:e,error:i}=await f.get(o,{},{responseType:"blob"});if(i)throw new Error(`Failed to download file from ${o}: ${i.message}`);if((e==null?void 0:e.type)!=="application/pdf"){console.error(`Unexpected response type from ${o}: ${e==null?void 0:e.type}`);return}const s=o.match(/order_id=([a-zA-Z0-9]+)/),l=s?s[1]:`file-${Math.random().toString(36).substring(7)}`;n.file(`${l}.pdf`,e)});await Promise.all(r);const p=await n.generateAsync({type:"blob"}),t=document.createElement("a");t.href=URL.createObjectURL(p),t.download=c,t.click()}catch(r){console.error("Error downloading files:",r)}}}}export{b as u};
