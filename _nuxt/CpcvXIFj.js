import{e as x,r as a,x as y,c as r,o as i,H as v,I as k,u as c,b as S,k as g,L as w,_ as R,D as V}from"./Bt1u4B0-.js";const D=x({__name:"Recaptcha",emits:["recaptchaStatus"],setup(n,{emit:s}){const u=a(null),p=a(!0),l=a(1e3),{recaptchaKey:_}=y().public,t=s;async function f(o){const{data:e}=await w({responseKey:o});e!=null&&e.success&&t("recaptchaStatus",!0)}function h(){t("recaptchaStatus",!1)}function m(){t("recaptchaStatus",!1)}return(o,e)=>{const d=g("vue-recaptcha");return i(),r("div",null,[v(S(d,{ref_key:"recaptchaRef",ref:u,sitekey:c(_),size:"normal",theme:"light","loading-timeout":c(l),onVerify:f,onExpire:h,onFail:m},null,8,["sitekey","loading-timeout"]),[[k,c(p)]])])}}}),C={},E={class:"flex min-h-screen min-w-full items-center justify-center"};function b(n,s){return i(),r("div",E,[V(n.$slots,"default")])}const F=R(C,[["render",b]]);export{F as _,D as a};
