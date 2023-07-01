import{u as w}from"./index.567e2206.js";import{h as x,p as b}from"./hooks.module.a845df0c.js";import{C as y}from"./close.3a539829.js";import{a as k}from"./http.20668c64.js";import{s as i}from"./page.e7291a86.js";import{o as s}from"./jsxRuntime.module.8b00cb04.js";import"./preact.module.f1575aff.js";import"./jwt.f0e0aa9c.js";function E(p){const{gaPageIdentifier:r}=p,l=w(i),[e,c]=x(),m=async()=>{const o=window.location.pathname;if(o==="/"||o==="/best-practices"||o==="/roadmaps"||o.startsWith("/guides")||o.startsWith("/videos")||o.startsWith("/account"))return;const{response:t,error:a}=await k("https://api.roadmap.sh/v1-get-sponsor",{href:window.location.pathname});if(a){console.error(a);return}t?.sponsor&&(c(t.sponsor),window.fireEvent({category:"SponsorImpression",action:`${t.sponsor?.company} Impression`,label:t.sponsor.gaLabel||`${r} / ${t.sponsor?.company} Link`}))};if(b(()=>{window.setTimeout(m)},[]),l||!e)return null;const{url:d,title:h,imageUrl:f,description:g,company:n,gaLabel:u,pageUrl:C}=e;return s("a",{href:d,target:"_blank",rel:"noopener sponsored nofollow",class:"fixed bottom-[15px] right-[15px] z-50 flex max-w-[350px] bg-white shadow-lg outline-0 outline-transparent",onClick:()=>{window.fireEvent({category:"SponsorClick",action:`${n} Redirect`,label:u||`${r} / ${n} Link`})},children:[s("span",{class:"absolute right-1.5 top-1.5 text-gray-300 hover:text-gray-800","aria-label":"Close",onClick:o=>{o.preventDefault(),o.stopImmediatePropagation(),i.set(!0)},children:s("img",{alt:"Close",class:"h-4 w-4",src:y})}),s("img",{src:f,class:"block h-[150px] w-[104.89px] object-contain lg:h-[169px] lg:w-[118.18px]",alt:"Sponsor Banner"}),s("span",{class:"flex flex-1 flex-col justify-between text-sm",children:[s("span",{class:"p-[10px]",children:[s("span",{class:"mb-0.5 block font-semibold",children:h}),s("span",{class:"block text-gray-500",children:g})]}),s("span",{class:"sponsor-footer",children:"Partner Content"})]})]})}export{E as PageSponsor};
