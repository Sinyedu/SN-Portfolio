import{g as _,r as v,b as h,c as i,d as e,i as o,F as k,e as f,o as l,t as a,n as d}from"./index-B0YKhgvP.js";const p={class:"centercontainer"},x={class:"filter-buttons mb-4 flex justify-center"},b={class:"text-1xl font-bold underline pt-7"},g={class:"portfolio-item flex items-center"},m={class:"info mr-4"},y={class:"text-white"},w={class:"text-white"},C=["src"],P={key:0,class:"projectlink"},V=["href"],$={key:1},W={__name:"PortfoliosView",setup(j){const{portfolioItems:c}=_();let t=v("");const u=h(()=>t.value==""?c.value:c.value.filter(r=>r.category==t.value));return(r,n)=>(l(),i("main",null,[e("div",p,[e("div",x,[e("h1",b,[e("button",{onClick:n[0]||(n[0]=s=>o(t)?t.value="Video":t="Video"),class:"text-white p-2"},"Video"),e("button",{onClick:n[1]||(n[1]=s=>o(t)?t.value="Web":t="Web"),class:"text-white p-2"},"Web"),e("button",{onClick:n[2]||(n[2]=s=>o(t)?t.value="Photo":t="Photo"),class:"text-white p-2"},"Photo"),e("button",{onClick:n[3]||(n[3]=s=>o(t)?t.value="":t=""),class:"text-white p-2"},"All")])]),(l(!0),i(k,null,f(u.value,s=>(l(),i("div",{key:s,class:"card"},[e("div",g,[e("div",m,[e("h2",y,a(s.title),1),e("p",w,a(s.description),1),e("p",{class:d(s.stack)},a(s.stack),3),e("p",{class:d(s.category)},a(s.category),3)]),e("img",{src:s.image,alt:""},null,8,C)]),s.link?(l(),i("div",P,[e("a",{href:s.link},"Link for the project!",8,V)])):(l(),i("div",$))]))),128))])]))}};export{W as default};
