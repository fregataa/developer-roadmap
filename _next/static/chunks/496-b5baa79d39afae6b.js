"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{2903:function(e,n,o){o.r(n),o.d(n,{__N_SSG:function(){return m},default:function(){return g}});var t=o(85893),i=o(25115),r=o(11739),l=o(82438),s=o(1832),a=o(16673),x=o(13961),c=o(80202),p=(o(67294),o(71277)),d=o(28641),u=o(15193);function h(e){var n=e.href;return(0,t.jsxs)(i.xu,{my:"30px",children:[(0,t.jsx)(i.iz,{mb:"15px",orientation:"horizontal"}),(0,t.jsx)(i.xv,{lineHeight:"23px",fontWeight:500,fontSize:"14px",color:"gray.500",mb:"10px",children:"This page is a work in progress. Help us by writing a small introduction to the topic and suggesting a few links to read more about this topic."}),(0,t.jsx)(u.zx,{size:"sm",py:"20px",as:i.rU,href:n,target:"_blank",isFullWidth:!0,colorScheme:"gray",_hover:{textDecoration:"none",bg:"gray.200"},children:"Edit this Page"})]})}function f(e){var n=e.roadmap,r=e.group;if(!n.contentPathsFilePath)return null;var l=n.contentPathsFilePath.replace(/^\//,""),s=(o(79280)("./".concat(l))[r]||"").replace(/^\//,""),a=o(79280)("./".concat(s)).default;return(0,t.jsx)(i.xu,{children:(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(a,{}),(0,t.jsx)(h,{href:"".concat(d.url.repoData,"/").concat(s)})]})})}function v(e){var n=e.roadmap,o=e.group.split(":");return(0,t.jsxs)(r.aG,{fontWeight:"medium",fontSize:"sm",separator:(0,t.jsx)(p.XC,{color:"gray.500"}),children:[(0,t.jsx)(r.gN,{children:(0,t.jsx)(r.At,{color:"blue.500",href:"/".concat(n.id),children:n.featuredTitle})}),o.map((function(e,i){return(0,t.jsx)(r.gN,{isCurrentPage:i===o.length-1,children:(0,t.jsx)(r.At,{textTransform:"capitalize",color:"blue.500",href:"/".concat(n.id,"/").concat(o.slice(0,i+1).join(":")),children:e.split("-").join(" ")})},e)}))]})}var m=!0;function g(e){var n,o,r=e.roadmap,x=e.group,p=e.isOutlet;return void 0!==p&&p?(0,t.jsx)(f,{roadmap:r,group:x}):(0,t.jsxs)(i.xu,{bg:"white",minH:"100vh",children:[(0,t.jsx)(l.e,{}),(0,t.jsx)(c.Z,{title:(null===r||void 0===r||null===(n=r.seo)||void 0===n?void 0:n.title)||r.title,description:(null===r||void 0===r||null===(o=r.seo)||void 0===o?void 0:o.description)||r.description,keywords:(null===r||void 0===r?void 0:r.seo.keywords)||[]}),(0,t.jsxs)(i.W2,{my:"60px",maxW:"container.md",position:"relative",children:[(0,t.jsx)(v,{roadmap:r,group:x}),(0,t.jsx)(f,{roadmap:r,group:x})]}),(0,t.jsx)(s.z,{}),(0,t.jsx)(a.$,{})]})}},12496:function(e,n,o){o.r(n),o.d(n,{InteractiveRoadmapRenderer:function(){return S},__N_SSG:function(){return y},default:function(){return z}});var t=o(85893),i=o(62730),r=o(67294),l=o(25115),s=o(26461),a=o(82438),x=o(1832),c=o(16673),p=o(80202),d=o(91177),u=o(15193),h=o(91202),f=o(2903),v=o(71277);function m(e){var n=document.querySelectorAll('[data-group-id$="-'.concat(e,'"]')),o=[];return n.forEach((function(n){var t,i=(null===n||void 0===n||null===(t=n.dataset)||void 0===t?void 0:t.groupId)||"";new RegExp("^\\d+-".concat(e,"$")).test(i)&&o.push(n)})),o}function g(e){var n=e.roadmap,o=e.groupId,i=e.onClose,r=void 0===i?function(){return null}:i;if(!o)return null;var s="done"===localStorage.getItem(o);return(0,t.jsxs)(l.xu,{zIndex:99999,pos:"relative",children:[(0,t.jsx)(l.xu,{onClick:r,pos:"fixed",top:0,left:0,right:0,bottom:0,bg:"black",opacity:.4}),(0,t.jsx)(h.Z,{allowPinchZoom:!0,children:(0,t.jsxs)(l.xu,{p:"0px 30px 30px",position:"fixed",w:["100%","60%","40%"],bg:"white",top:0,right:0,bottom:0,borderLeftWidth:"1px",overflowY:"scroll",children:[(0,t.jsxs)(l.kC,{mt:"20px",justifyContent:"space-between",alignItems:"center",zIndex:1,children:[!s&&(0,t.jsx)(u.zx,{onClick:function(){localStorage.setItem(o,"done"),m(o).forEach((function(e){var n;return null===e||void 0===e||null===(n=e.classList)||void 0===n?void 0:n.add("done")})),r()},colorScheme:"green",leftIcon:(0,t.jsx)(v.nQ,{}),size:"xs",iconSpacing:0,children:(0,t.jsx)(l.xv,{as:"span",d:["block","none","none","block"],ml:"10px",children:"Mark as Done"})}),s&&(0,t.jsx)(u.zx,{onClick:function(){localStorage.removeItem(o),m(o).forEach((function(e){var n;return null===e||void 0===e||null===(n=e.classList)||void 0===n?void 0:n.remove("done")})),r()},colorScheme:"red",leftIcon:(0,t.jsx)(v.ny,{}),size:"xs",iconSpacing:0,children:(0,t.jsx)(l.xv,{as:"span",d:["block","none","none","block"],ml:"10px",children:"Mark as Pending"})}),(0,t.jsx)(u.zx,{onClick:r,colorScheme:"yellow",ml:"5px",leftIcon:(0,t.jsx)(v.Tw,{width:"8px"}),iconSpacing:0,size:"xs",children:(0,t.jsx)(l.xv,{as:"span",d:["none","none","none","block"],ml:"10px",children:"Close"})})]}),(0,t.jsx)(f.default,{isOutlet:!0,roadmap:n,group:o})]})})]})}var j=o(28641);function w(e){var n=e.roadmap;return(0,t.jsxs)(l.W2,{bg:"red.600",maxW:"container.md",position:"relative",mt:"50px",p:"20px",rounded:"5px",color:"white",children:[(0,t.jsx)(l.X6,{mb:"4px",size:"md",children:"Oops! There's an error"}),(0,t.jsxs)(l.xv,{children:["Try refreshing or ",(0,t.jsx)(l.rU,{target:"_blank",fontWeight:700,textDecoration:"underline",fontSize:"14px",href:j.url.issue,children:"report a bug"})," and use the ",(0,t.jsx)(l.rU,{fontWeight:700,textDecoration:"underline",href:"/roadmaps/".concat(n.id,".png"),children:"non-interactive version"})]})]})}var k=o(49609);function b(){return(0,t.jsx)(l.W2,{maxW:"container.md",position:"relative",mt:"60px",textAlign:"center",children:(0,t.jsx)(k.$,{thickness:"7px",speed:"0.65s",emptyColor:"gray.200",color:"gray.500",size:"xl"})})}var y=!0;function S(e){var n=e.roadmap,o=(0,i.ib)(),a=o.loading,x=o.error,c=o.get,p=(0,r.useRef)(null),d=(0,r.useState)(!0),u=d[0],h=d[1],f=(0,r.useState)(null),v=f[0],m=f[1],j=(0,r.useState)(""),k=j[0],y=j[1],S=(0,r.useState)(!1),z=S[0],C=S[1];if((0,r.useEffect)((function(){n.jsonUrl&&c(n.jsonUrl).then((function(e){m(e)})).catch((function(e){console.error(e),C(!0)}))}),[c,n.id,n.jsonUrl]),(0,r.useEffect)((function(){var e=function(e){"escape"===e.key.toLowerCase()&&y("")},n=function(e){var n,o,t=document.querySelector("meta[name=viewport]");t&&t.setAttribute("content","initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0");var i=null===(n=null===e||void 0===e?void 0:e.target)||void 0===n?void 0:n.closest("g"),r=null===i||void 0===i||null===(o=i.dataset)||void 0===o?void 0:o.groupId;i&&r&&(r.startsWith("ext_link:")?window.open("https://".concat(r.replace("ext_link:",""))):y(function(e){return(e||"").replace(/^\d+-/,"")}(r)))};return window.addEventListener("keydown",e),window.addEventListener("click",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("click",n)}}),[]),(0,r.useEffect)((function(){v&&(h(!0),(0,s.S)(v).then((function(e){var n=p.current;n&&(n.firstChild&&n.removeChild(n.firstChild),n.appendChild(e))})).catch((function(e){C(!0)})).finally((function(){h(!1)})))}),[v]),!n.jsonUrl)return null;if(x||z)return(0,t.jsx)(w,{roadmap:n});var W=[];return"frontend"===n.id&&(W=["970px","970px","2100px","2800px","2800px"]),"backend"===n.id&&(W=["870px","1130px","1900px","2500px","2520px","2520px"]),"devops"===n.id&&(W=["870px","1920px","2505px","2591px","2591px","2591px"]),"vue"===n.id&&(W=["600px","820px","1340px","1680px","1750px","1750px"]),"react"===n.id&&(W=["400px","865px","1065px","1400px","1400px","1400px"]),"blockchain"===n.id&&(W=["780px","1120px","1770px","2235px","2235px","2235px"]),"golang"===n.id&&(W=["590px","1201px","1201px","1625px","1625px","1625px"]),"javascript"===n.id&&(W=["892px","1835px","1835px","2475px","2475px","2475px"]),"nodejs"===n.id&&(W=["865px","1855px","1855px","2500px","2500px","2500px"]),"qa"===n.id&&(W=["865px","1610px","1610px","2200px","2200px","2200px"]),"design-system"===n.id&&(W=["915px","1760px","1880px","2370px","2370px","2370px"]),"angular"===n.id&&(W=["925px","1365px","1740px","2370px","2370px","2370px"]),"software-architect"===n.id&&(W=["685px","1170px","1470px","1980px","1980px","1980px"]),(0,t.jsxs)(l.W2,{maxW:"container.lg",position:"relative",minHeight:W,children:[(a||u)&&(0,t.jsx)(b,{}),(0,t.jsx)(g,{roadmap:n,groupId:k,onClose:function(){return y("")}}),(0,t.jsx)("div",{ref:p})]})}function z(e){var n,o,i=e.roadmap;return(0,t.jsxs)(l.xu,{bg:"white",minH:"100vh",children:[(0,t.jsx)(a.e,{}),(0,t.jsx)(p.Z,{title:(null===i||void 0===i||null===(n=i.seo)||void 0===n?void 0:n.title)||i.title,description:(null===i||void 0===i||null===(o=i.seo)||void 0===o?void 0:o.description)||i.description,keywords:(null===i||void 0===i?void 0:i.seo.keywords)||[]}),(0,t.jsxs)(l.xu,{mb:"60px",children:[(0,t.jsx)(d.h,{roadmap:i}),(0,t.jsx)(S,{roadmap:i})]}),(0,t.jsx)(x.z,{}),(0,t.jsx)(c.$,{})]})}}}]);