"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[40295],{32846:(e,t,s)=>{s.d(t,{A:()=>c});var a=s(89379),n=s(73216),l=s(35475),r=s(70579),o=s(65043),i=s(48147);const c=e=>{let{className:t}=e;const[s,c]=(0,o.useState)(),{data:d}=(0,i.t)(),m=(0,n.zy)().pathname.split("/").filter((e=>e));return(0,o.useEffect)((()=>{const e=d.map((e=>(0,a.A)((0,a.A)({},e),{},{id:e.id})));c(e)}),[]),(0,r.jsx)("nav",{className:'py-6 aria-label="Breadcrumb '.concat(t),children:(0,r.jsxs)("ol",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-600",children:[(0,r.jsx)("li",{children:(0,r.jsxs)(l.N_,{to:"/",className:"block transition hover:text-gray-700 text-white",children:[(0,r.jsx)("span",{className:"sr-only",children:"Home"}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 md:w-6 md:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})]})}),m.map(((e,t)=>{const a="/".concat(m.slice(0,t+1).join("/")),n=s?s.find((t=>t.id===e)):null;return console.log(n),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4 md:w-5 md:h-5 text-gray-500",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 20.247l6-16.5"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:a,className:"block transition hover:text-gray-700 xs:text-xs md:text-md font-medium whitespace-nowrap truncate max-w-[100px] md:max-w-none text-white uppercase",children:n?n.id:e})})]},a)}))]})})}},40295:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(32846),n=s(48147),l=s(65043),r=s(73216),o=s(81118),i=s(70579);const c=()=>{const[e]=(0,l.useState)(20),{nftPageCount:t}=(0,r.g)();console.log(t);const s=(0,r.Zp)(),{currentPage:c,nftData:d,setCurrentPage:m}=(0,n.t)(),x=c*e,h=x-e,u=d.slice(h,x);return(0,l.useEffect)((()=>{t&&m(Number(t))}),[t,c]),(0,i.jsxs)("section",{className:"nft bg-custom-background bg-fixed",children:[(0,i.jsx)("div",{className:"w-4/6 mx-auto",children:(0,i.jsx)(a.A,{})}),(0,i.jsx)("div",{className:"nft-container md:w-4/6 xs:w-4/5 mx-auto flex flex-wrap justify-center",children:u.map(((e,t)=>(0,i.jsxs)("div",{className:"nft-wrap m-4 w-72 max-w-64 min-h-64 flex flex-col justify-center items-center p-4 bg-gray-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out",children:[(0,i.jsx)("img",{src:e.collection_details.image_url,alt:e.collection_details.name,className:"nft-img w-32 h-32 object-cover rounded-full shadow-md border-2 border-gray-700"}),(0,i.jsx)("div",{className:"line h-[1px] w-full bg-gradient-to-r from-indigo-500 to-pink-500 my-4"}),(0,i.jsx)("h1",{className:"nft-title text-white font-semibold text-center text-sm",children:e.collection_details.name}),(0,i.jsx)("div",{className:"line h-[1px] w-full bg-gradient-to-r from-indigo-500 to-pink-500 my-4"}),(0,i.jsx)("p",{className:"nft-text uppercase text-white font-semibold text-center text-sm",children:e.collection_details.chains})]},t)))}),(0,i.jsx)("div",{className:"block mx-auto py-8 text-center w-max",children:(0,i.jsx)(o.T,{color:"secondary",total:5,initialPage:1,page:c,onChange:e=>(e=>{s("/nft/".concat(e))})(e)})})]})}}}]);
//# sourceMappingURL=40295.759d633c.chunk.js.map