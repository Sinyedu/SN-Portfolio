import{_,g as v,r as h,b as f,c as n,d as t,i,F as b,e as x,o,t as a,n as d}from"./index-DLbQHNe0.js";const k={class:"centercontainer"},p={class:"filter-buttons mb-4 flex justify-center"},g={class:"text-1xl font-bold underline pt-7"},w={class:"portfolio-item flex items-center"},m={class:"info mr-4"},y=["src"],P={class:"text-white"},C={class:"text-white"},V={key:0,class:"projectlink"},$=["href"],j={key:1},B={__name:"PortfoliosView",setup(E){const{portfolioItems:c}=v();let e=h("");const u=f(()=>e.value==""?c.value:c.value.filter(r=>r.category==e.value));return(r,l)=>(o(),n("main",null,[t("div",k,[t("div",p,[t("h1",g,[t("button",{onClick:l[0]||(l[0]=s=>i(e)?e.value="Video":e="Video"),class:"text-white p-2"},"Video"),t("button",{onClick:l[1]||(l[1]=s=>i(e)?e.value="Web":e="Web"),class:"text-white p-2"},"Web"),t("button",{onClick:l[2]||(l[2]=s=>i(e)?e.value="Photo":e="Photo"),class:"text-white p-2"},"Photo"),t("button",{onClick:l[3]||(l[3]=s=>i(e)?e.value="":e=""),class:"text-white p-2"},"All")])]),(o(!0),n(b,null,x(u.value,s=>(o(),n("div",{key:s,class:"card"},[t("div",w,[t("div",m,[t("img",{class:"object-fill",src:s.image,alt:""},null,8,y),t("h2",P,a(s.title),1),t("p",C,a(s.description),1),t("p",{class:d(s.stack)},a(s.stack),3),t("p",{class:d(["text-white underline",s.category])},a(s.category),3)])]),s.link?(o(),n("div",V,[t("a",{class:"text-white font-bold",href:s.link},"LINK FOR THE PROJECT",8,$)])):(o(),n("div",j))]))),128))])]))}},R=_(B,[["__scopeId","data-v-094bb2cd"]]);export{R as default};
