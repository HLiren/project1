import{_ as w}from"./xBkyOM2N.js";import{e as x,r as g,C,c as o,o as r,a as n,f as p,F as h,g as v,t as y,u as N,D as k,n as u,d as $,b as O,H as V,I,_ as S}from"./Bt1u4B0-.js";const j=["onClick"],F={key:0,class:"flex justify-center items-center"},M={key:0},T=["colspan"],z={class:"flex justify-center p-4"},A={key:0},E=["colspan"],H=x({__name:"BaseTable",props:{items:{},headers:{},rounded:{type:Boolean,default:!1},noDataMsg:{default:"No Data"},hover:{type:Boolean,default:!0}},setup(B){const s=B,i=g(null),D=e=>{var t;const c=s.headers.find(a=>a.key===e);if(!(c!=null&&c.sort))return;const d=(((t=i.value)==null?void 0:t.key)===e?i.value.order:null)==="asc"?"desc":"asc";i.value={key:e,order:d},_.value.sort((a,l)=>{const[f,m]=[a[e],l[e]];return f===m?0:d==="asc"?f<m?-1:1:f>m?-1:1})},_=g(s.items);return C(()=>s.items,()=>{_.value=s.items},{deep:!0}),(e,c)=>{var d;const b=w;return r(),o("table",{class:u(["w-full text-left overflow-x-auto",{"outline outline-gray-300 rounded-lg":e.rounded}])},[n("thead",null,[n("tr",null,[(r(!0),o(h,null,v(s.headers,t=>(r(),o("th",{key:t.key,class:u(["font-medium bg-slate-100 text-neutral-900",[{hidden:t.hidden},{"cursor-pointer":t.sort},t.style,{"first:rounded-tl-lg last:rounded-tr-lg":e.rounded}]])},[n("div",{class:"flex",onClick:a=>t.sort?D(t.key):null},[$(y(t.label)+" ",1),t.sort?(r(),o("div",F,[O(b,{class:"icon-caret-sort-select-arrow"})])):p("",!0)],8,j)],2))),128))])]),n("tbody",null,[((d=e.items)==null?void 0:d.length)<1?(r(),o("tr",M,[n("td",{colspan:s.headers.length+1,class:"align-center text-neutral-900"},[n("div",z,y(s.noDataMsg),1)],8,T)])):p("",!0),(r(!0),o(h,null,v(N(_),(t,a)=>(r(),o("tr",{key:a,class:u(["border-dashed text-sm",[{"first:border-b first:border-t-0 border-y":a!=e.items.length-1,"hover:bg-primary4":s.hover}]])},[(r(!0),o(h,null,v(s.headers,l=>(r(),o("td",{key:l.key,class:u([{hidden:l.hidden}])},[V(n("span",null,y(t[l.key]),513),[[I,!e.$.slots[l.key]]]),k(e.$slots,l.key,{item:t},void 0,!0)],2))),128))],2))),128))]),e.$slots.tableBottom?(r(),o("tfoot",A,[n("tr",null,[n("td",{colspan:s.headers.length,class:"border-t border-dashed p-4 mt-2"},[k(e.$slots,"tableBottom",{},void 0,!0)],8,E)])])):p("",!0)],2)}}}),G=S(H,[["__scopeId","data-v-3c83be86"]]);export{G as _};
