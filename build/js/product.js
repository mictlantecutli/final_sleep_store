var n=(a,o,d)=>new Promise((s,e)=>{var i=t=>{try{r(d.next(t))}catch(c){e(c)}},u=t=>{try{r(d.throw(t))}catch(c){e(c)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(i,u);r((d=d.apply(a,o)).next())});import{setLocalStorage as m}from"./utils.js";import f from"./ProductData.js";const l=new f("tents");function P(a){m("so-cart",a)}function g(a){return n(this,null,function*(){const o=yield l.findProductById(a.target.dataset.id);P(o)})}document.getElementById("addToCart").addEventListener("click",g);
