import{B as t}from"./BqYyig0m.js";async function s(r){return await t.post("/orders/orders",r)}async function a(r){return await t.get("/orders/orders",r)}async function i(r){return await t.put("/orders/orders",r)}async function o(r){return await t.put("/orders/orders",{orders:[r]})}async function d(r){const e=Array.isArray(r)?r:[r];return await t.get("/orders/labels",{trackingCode:e})}async function c(r){return await t.get("/orders/shipments",r)}async function u(r){return await t.put("orders/shipment-items",r)}async function p(r){return await t.put("/orders/shipments",r)}async function y(r){return await t.put("/orders/dispatch",r)}export{c as a,i as b,p as c,y as d,o as e,d as g,u as h,s as i,a as o};
