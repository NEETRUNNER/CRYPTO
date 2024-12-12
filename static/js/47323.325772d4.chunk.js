"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[47323],{32846:(e,l,s)=>{s.d(l,{A:()=>i});var t=s(89379),n=s(52134),o=s(70579),a=s(65043),c=s(48147);const i=e=>{let{className:l}=e;const[s,i]=(0,a.useState)(),{data:r}=(0,c.t)(),d=(0,n.zy)().pathname.split("/").filter((e=>e));return(0,a.useEffect)((()=>{const e=r.map((e=>(0,t.A)((0,t.A)({},e),{},{id:e.id})));i(e)}),[]),(0,o.jsx)("nav",{className:'py-6 aria-label="Breadcrumb '.concat(l),children:(0,o.jsxs)("ol",{className:"flex flex-wrap items-center gap-2 text-sm text-gray-600",children:[(0,o.jsx)("li",{children:(0,o.jsxs)(n.N_,{to:"/",className:"block transition hover:text-gray-700 text-black",children:[(0,o.jsx)("span",{className:"sr-only",children:"Home"}),(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 md:w-6 md:h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})]})}),d.map(((e,l)=>{const t="/".concat(d.slice(0,l+1).join("/")),a=s?s.find((l=>l.id===e)):null;return console.log(a),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4 md:w-5 md:h-5 text-gray-500",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 20.247l6-16.5"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.N_,{to:t,className:"block transition hover:text-gray-700 xs:text-xs md:text-md font-medium whitespace-nowrap truncate max-w-[100px] md:max-w-none text-black uppercase",children:a?a.id:e})})]},t)}))]})})}},16039:(e,l,s)=>{s.r(l),s.d(l,{default:()=>b});var t=s(89379),n=s(81279),o=s(21939),a=s(48147),c=s(461),i=s(6058),r=s(70579);c.t1.register(c.PP,c.kc,c.FN,c.No,c.hE,c.m_,c.s$);const d=()=>{const{chart:e}=(0,a.t)(),l={labels:e.map((e=>new Date(e[0]).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))),datasets:[{type:"line",label:"\u0426\u0456\u043d\u0430",data:e.map((e=>e[1])),fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]};return(0,r.jsx)("div",{className:"chart-container",style:{width:"100%",height:"100%"},children:(0,r.jsx)(i.N1,{data:l,options:{responsive:!0,maintainAspectRatio:!1,resizeDelay:2e3,plugins:{legend:{labels:{color:"#000",font:{size:12,family:"Arial"}}},tooltip:{backgroundColor:"rgba(30, 30, 30, 0.8)",titleColor:"#fff",bodyColor:"#d1d1d1"}},scales:{x:{ticks:{color:"#ccc"},grid:{color:"rgba(255,255,255,0.1)"}},y:{ticks:{color:"#ccc"},grid:{color:"rgba(255,255,255,0.1)"}}},animation:{duration:1500,easing:"easeOutElastic"}},width:"800px",height:"500px"})})};var h=s(65043),x=s(52134),m=s(16749),g=s(32846),u=s(92382);s(4430),s(69078);const b=()=>{const[e,l]=(0,h.useState)(window.innerWidth<=480),[s,c]=(0,h.useState)(),{data:i,coinInfo:b,setCoinInfo:p,setLoading:j,setChart:w,setDataPrice:f,dataPrice:N,GetPriceCoin:v}=(0,a.t)(),k=(0,x.zy)(),{coinId:y}=(0,x.g)();console.log(k),console.log(y);(0,h.useEffect)((()=>{(()=>{const e=i.find((e=>e.id===y));if(console.log(e),p(e),e){const l="".concat(e.symbol,"USDT");c(l),console.log(null===s||void 0===s?void 0:s.toLowerCase())}console.log(b),console.log(null===b||void 0===b?void 0:b.priceChange1h)})()}),[i,b,y]),console.log(y),(0,h.useEffect)((()=>{f(null===b||void 0===b?void 0:b.price),console.log("\u0418\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043c\u043e\u043d\u0435\u0442\u044b")}),[b]),(0,h.useEffect)((()=>{_()}),[]);const _=()=>{(0,m.Sv)(y,"24h").then((e=>{j(!0),console.log(e),w(e)})).catch((e=>{throw j(!0),console.log(e),new e})).finally((()=>{j(!1)}))},C=()=>{(0,m.Sv)(y,"1w").then((e=>{j(!0),console.log(e),w(e)})).catch((e=>{throw j(!0),console.log(e),new e})).finally((()=>{j(!1)}))},z=()=>{(0,m.Sv)(y,"1m").then((e=>{j(!0),console.log(e),w(e)})).catch((e=>{throw j(!0),console.log(e),new e})).finally((()=>{j(!1)}))},P=()=>{(0,m.Sv)(y,"6m").then((e=>{j(!0),console.log(e),w(e)})).catch((e=>{throw j(!0),console.log(e),new e})).finally((()=>{j(!1)}))},S=()=>{(0,m.Sv)(y,"1y").then((e=>{j(!0),console.log(e),w(e)})).catch((e=>{throw j(!0),console.log(e),new e})).finally((()=>{j(!1)}))};return(0,r.jsx)(r.Fragment,{children:b?(0,r.jsx)("section",{className:"coin h-full",children:(0,r.jsxs)("div",{className:"coin-container md:w-4/6 xs:w-4/5 mx-auto py-8 h-full",children:[(0,r.jsx)(g.A,{}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{src:b.icon,alt:"",className:"md:w-16 xs:w-12 h-auto"}),(0,r.jsxs)("h3",{className:"md:text-2xl xs:text-lg font-bold uppercase text-black ml-2",children:["\u0426\u0456\u043d\u0430 ",b.name," (",b.symbol,")"]})]}),(0,r.jsxs)("div",{className:"flex justify-between flex-wrap items-center",children:[(0,r.jsxs)("div",{className:"flex pt-4",children:[(0,r.jsx)("h1",{className:"coin-price md:text-2xl xs:text-xl font-bold uppercase text-black",children:null===N||void 0===N?void 0:N.toFixed(2)}),(0,r.jsx)("p",{className:"coin-price__changed md:text-2xl xs:text-xl font-bold uppercase text-green-400 ml-2",children:Number.isNaN(N)?null:b.priceChange1h})]}),(0,r.jsxs)(o.AM,{children:[(0,r.jsx)(o.ut,{children:(0,r.jsxs)("button",{className:"text-base font-semibold group relative w-max",children:[(0,r.jsx)("span",{children:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f"}),(0,r.jsx)("span",{className:"absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-full"})]})}),(0,r.jsx)(o.QT,{transition:!0,anchor:"bottom",className:"divide-y divide-white/5 rounded-xl bg-black/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0",children:(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)("a",{className:"block rounded-lg py-2 px-3 transition hover:bg-white/5",href:b.twitterUrl,target:"_blank",children:(0,r.jsx)("p",{className:"font-semibold text-black",children:"Twitter"})}),(0,r.jsx)("a",{className:"block rounded-lg py-2 px-3 transition hover:bg-white/5",href:b.redditUrl,target:"_blank",children:(0,r.jsx)("p",{className:"font-semibold text-black",children:"Reddit"})})]})})]})]}),(0,r.jsxs)(n.oz.Group,{className:"md:pt-6 xs:pt-12",children:[(0,r.jsx)(n.oz.List,{children:e?(0,r.jsxs)(u.A,(0,t.A)((0,t.A)({},{dots:!1,infinite:!1,centerPadding:"60px",slidesToShow:2,speed:500}),{},{children:[(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__mobile"},onClick:_,children:"\u0414\u0435\u043d\u044c"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__mobile"},onClick:C,children:"\u0422\u0438\u0436\u0434\u0435\u043d\u044c"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__mobile"},onClick:z,children:"\u041c\u0456\u0441\u044f\u0446\u044c"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__mobile"},onClick:S,children:"\u041f\u0456\u0432 \u0440\u043e\u043a\u0443"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__mobile"},onClick:P,children:"\u0420\u0456\u043a"})]})):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__default ".concat(l?"bg-white":"bg-slate-500")},onClick:_,children:"\u0414\u0435\u043d\u044c"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__default ".concat(l?"bg-white":"bg-slate-500")},onClick:C,children:"\u0422\u0438\u0436\u0434\u0435\u043d\u044c"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__default ".concat(l?"bg-white":"bg-slate-500")},onClick:z,children:"\u041c\u0456\u0441\u044f\u0446\u044c"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__default ".concat(l?"bg-white":"bg-slate-500")},onClick:S,children:"\u041f\u0456\u0432 \u0440\u043e\u043a\u0443"}),(0,r.jsx)(n.oz,{className:e=>{let{selected:l}=e;return"coin-btn__default ".concat(l?"bg-white":"bg-slate-500")},onClick:P,children:"\u0420\u0456\u043a"})]})}),(0,r.jsxs)(n.oz.Panels,{className:"pt-6",children:[(0,r.jsx)(n.oz.Panel,{className:"w-full",children:(0,r.jsx)(d,{})}),(0,r.jsx)(n.oz.Panel,{className:"w-full",children:(0,r.jsx)(d,{})}),(0,r.jsx)(n.oz.Panel,{className:"w-full",children:(0,r.jsx)(d,{})}),(0,r.jsx)(n.oz.Panel,{className:"w-full",children:(0,r.jsx)(d,{})}),(0,r.jsx)(n.oz.Panel,{className:"w-full",children:(0,r.jsx)(d,{})})]})]})]})}):null})}}}]);
//# sourceMappingURL=47323.325772d4.chunk.js.map