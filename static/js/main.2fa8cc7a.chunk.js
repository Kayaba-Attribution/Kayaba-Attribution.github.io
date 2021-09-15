(this["webpackJsonpreact-website-learning"]=this["webpackJsonpreact-website-learning"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(15),n=c.n(a),i=c(14),r=(c(22),c(0)),l=["btn--primary","btn--outline","btn--test"],b=["btn--medium","btn--large"],o=["https://github.com/Kayaba-Attribution","https://www.linkedin.com/in/-juan-david-gomez-ca/"],j=function(e){var t=e.children,c=e.type,s=e.onClick,a=e.buttonStyle,n=e.buttonSize,i=e.buttonLink,j=l.includes(a)?a:l[0],d=b.includes(n)?n:b[0],h=o.includes(i)?i:o[0];return Object(r.jsx)("a",{href:h,className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(j," ").concat(d),onClick:s,type:c,children:t})})},d=c(2);c(24);var h=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!0),l=Object(i.a)(n,2),b=l[0],o=l[1],h=function(){return a(!1)},u=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(s.useEffect)((function(){u()}),[]),window.addEventListener("resize",u),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar",children:Object(r.jsxs)("div",{className:"navbar-container",children:[Object(r.jsxs)(d.b,{to:"/",className:"navbar-logo",onClick:h,children:["Kayaba_Attribution",Object(r.jsx)("i",{class:"fab fa-ethereum fa-fw"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:function(){return a(!c)},children:Object(r.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(r.jsxs)("ul",{className:c?"nav-menu active":"nav-menu",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{to:"/",className:"nav-links",onClick:h,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{to:"/services",className:"nav-links",onClick:h,children:"Services"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{to:"/products",className:"nav-links",onClick:h,children:"Products"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/sign-up",className:"nav-links-mobile",onClick:h,children:"Sign Up"})})]}),b&&Object(r.jsx)(j,{buttonStyle:"btn--outline",children:"GitHub"})]})})})};c(9),c(33);var u=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("li",{className:"cards__item",children:Object(r.jsxs)("a",{className:"cards__item__link",href:e.path,children:[Object(r.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(r.jsx)("img",{className:"cards__item__img",alt:"Kayaba-Project ",src:e.src})}),Object(r.jsx)("div",{className:"cards__item__info",children:Object(r.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var m=function(){return Object(r.jsxs)("div",{className:"cards",children:[Object(r.jsx)("h1",{children:"Check out some of my projects!"}),Object(r.jsx)("div",{className:"cards__container",children:Object(r.jsxs)("div",{className:"cards__wrapper",children:[Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(u,{src:"/images/launchpad.png",text:"Secure and Improved Token Launchpad for EVM conpatible Chains (Focused on BSC)",label:"Dapp Launchpad",path:"https://github.com/Kayaba-Attribution/Token-Launchpad-for-EVM-conpatible-Chains-Focused-on-BSC"}),Object(r.jsx)(u,{src:"/images/KCB.png",text:"Python API to interact with bep-20 tokens on the binance smart chain",label:"Trading Bot",path:"https://github.com/Kayaba-Attribution/KCB-Public-BSC-TERMINAL"})]}),Object(r.jsxs)("ul",{className:"cards__items",children:[Object(r.jsx)(u,{src:"/images/whales.png",text:"BSC Addresses transcation tracker with Email and Telegram notifications",label:"Addresses Tracker",path:"https://github.com/Kayaba-Attribution/BSC-Addresses-tracker-and-txn-bank"}),Object(r.jsx)(u,{src:"/images/chart.png",text:"Crypto Charting Application made with P5.JS and Alpha Vantage API",label:"Crypto Charts",path:"https://github.com/Kayaba-Attribution/P5.js-Crypto-Chart"}),Object(r.jsx)(u,{src:"/images/honeypot.png",text:"Balance Disorder ETH Honeypot HardHat Example Workflow",label:"Security Research",path:"https://github.com/Kayaba-Attribution/Balance-Disorder-ETH-Honeypot"})]})]})})]})};c(34);var x=function(){return Object(r.jsxs)("div",{className:"hero-container",children:[Object(r.jsx)("video",{src:"/videos/lines.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(r.jsx)("h1",{children:"BlockChain Developer"}),Object(r.jsx)("p",{children:"Juan David Gomez Villalba"}),Object(r.jsxs)("div",{className:"hero-btns",children:[Object(r.jsx)(j,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",buttonLink:"https://github.com/Kayaba-Attribution",children:"GITHUB"}),Object(r.jsxs)(j,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",buttonLink:"https://www.linkedin.com/in/-juan-david-gomez-ca/",children:["LinkedIn ",Object(r.jsx)("i",{className:"far fa-play-circle"})]})]})]})};c(35);var O=function(){return Object(r.jsxs)("div",{className:"footer-container",children:[Object(r.jsxs)("section",{className:"footer-subscription",children:[Object(r.jsx)("p",{className:"footer-subscription-heading",children:"All these links are placeholders"}),Object(r.jsx)("p",{className:"footer-subscription-text",children:":)"}),Object(r.jsx)("div",{className:"input-areas",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(r.jsx)(j,{buttonStyle:"btn--outline",children:"Subscribe"})]})})]}),Object(r.jsxs)("div",{class:"footer-links",children:[Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)(d.b,{to:"/sign-up",children:"How it works"}),Object(r.jsx)(d.b,{to:"/",children:"Testimonials"}),Object(r.jsx)(d.b,{to:"/",children:"Careers"}),Object(r.jsx)(d.b,{to:"/",children:"Investors"}),Object(r.jsx)(d.b,{to:"/",children:"Terms of Service"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Contact Us"}),Object(r.jsx)(d.b,{to:"/",children:"Contact"}),Object(r.jsx)(d.b,{to:"/",children:"Support"}),Object(r.jsx)(d.b,{to:"/",children:"Destinations"}),Object(r.jsx)(d.b,{to:"/",children:"Sponsorships"})]})]}),Object(r.jsxs)("div",{className:"footer-link-wrapper",children:[Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Videos"}),Object(r.jsx)(d.b,{to:"/",children:"Submit Video"}),Object(r.jsx)(d.b,{to:"/",children:"Ambassadors"}),Object(r.jsx)(d.b,{to:"/",children:"Agency"}),Object(r.jsx)(d.b,{to:"/",children:"Influencer"})]}),Object(r.jsxs)("div",{class:"footer-link-items",children:[Object(r.jsx)("h2",{children:"Social Media"}),Object(r.jsx)(d.b,{to:"/",children:"Instagram"}),Object(r.jsx)(d.b,{to:"/",children:"Facebook"}),Object(r.jsx)(d.b,{to:"/",children:"Youtube"}),Object(r.jsx)(d.b,{to:"/",children:"Twitter"})]})]})]}),Object(r.jsx)("section",{class:"social-media",children:Object(r.jsxs)("div",{class:"social-media-wrap",children:[Object(r.jsx)("div",{class:"footer-logo",children:Object(r.jsxs)(d.b,{to:"/",className:"social-logo",children:["Kayaba_Attribution",Object(r.jsx)("i",{class:"fab fa-ethereum fa-fw"})]})}),Object(r.jsx)("small",{class:"website-rights",children:"Kayaba_Attribution \xa9 2020"}),Object(r.jsxs)("div",{class:"social-icons",children:[Object(r.jsx)(d.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(r.jsx)("i",{class:"fab fa-facebook-f"})}),Object(r.jsx)(d.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(r.jsx)("i",{class:"fab fa-instagram"})}),Object(r.jsx)(d.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(r.jsx)("i",{class:"fab fa-youtube"})}),Object(r.jsx)(d.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(r.jsx)("i",{class:"fab fa-twitter"})}),Object(r.jsx)(d.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};var p=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(m,{}),Object(r.jsx)(O,{})]})},f=c(3);function v(){return Object(r.jsx)("h1",{className:"services",children:"SERVICES"})}function g(){return Object(r.jsx)("h1",{className:"products",children:"PRODUCTS"})}function k(){return Object(r.jsx)("h1",{className:"sign-up",children:"LIKE & SUBSCRIBE"})}var N=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(h,{}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{path:"/",exact:!0,component:p}),Object(r.jsx)(f.a,{path:"/services",component:v}),Object(r.jsx)(f.a,{path:"/products",component:g}),Object(r.jsx)(f.a,{path:"/sign-up",component:k})]})]})})};n.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))},9:function(e,t,c){}},[[36,1,2]]]);
//# sourceMappingURL=main.2fa8cc7a.chunk.js.map