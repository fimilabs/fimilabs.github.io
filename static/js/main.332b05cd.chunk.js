(this["webpackJsonpfimi-labs-landing"]=this["webpackJsonpfimi-labs-landing"]||[]).push([[0],{24:function(e,t,a){e.exports=a(46)},34:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},44:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),r=a(21),n=a.n(r),s=a(11),c=a(6),o=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(o.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(s.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),p=a(17),h=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),n=r[0],s=r[1],c=Object(i.useState)([]),o=Object(d.a)(c,2),m=o[0],u=o[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){b(),h()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),h()}),[n]),l.a.createElement(l.a.Fragment,null,e.children())}));h.propTypes={children:v.a.func.isRequired};var b=h,f=a(13),E=a(1),g=a.n(E),N=a(7),w=function(e){var t=e.className,a=e.src,r=e.width,n=e.height,s=e.alt,c=Object(o.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],h=Object(i.useRef)(null);Object(i.useEffect)((function(){b(h.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},c,{ref:h,className:t,src:a,width:r,height:n,alt:s,onLoad:function(){p(!0)}}))};w.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var O=w,x=function(e){var t=e.className,i=Object(o.a)(e,["className"]),r=g()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:r}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(N.a,{to:"/"},l.a.createElement(O,{src:a(34),alt:"Open",width:32,height:32}))))},D=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,n=e.hideSignin,s=e.bottomOuterDivider,c=e.bottomDivider,m=Object(o.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],h=v[1],b=Object(i.useRef)(null),f=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",O),document.addEventListener("click",D),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",D),w()}}));var E=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",h(!0)},w=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),h(!1)},O=function(e){p&&27===e.keyCode&&w()},D=function(e){b.current&&p&&!b.current.contains(e.target)&&e.target!==f.current&&w()},j=g()("site-header",s&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:j}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-header-inner",c&&"has-bottom-divider")},l.a.createElement(x,null),!r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:f,className:"header-nav-toggle",onClick:p?w:E},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:b,className:g()("header-nav",p&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:w},"Documentation"))),!n&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:w},"Sign up")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=D,y=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"Contact")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"About us")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"FAQ's")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"Support"))))},C=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Facebook"),l.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://google.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Instagram"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),l.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},k=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(o.a)(e,["className","topOuterDivider","topDivider"]),n=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},r,{className:n}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(x,null),l.a.createElement(C,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(y,null),l.a.createElement("div",{className:"footer-copyright"},"Made by ",l.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var L=k,F=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(L,null))},H=a(5),q={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},P={types:Object(H.a)({},q.types),defaults:Object(H.a)({},q.defaults)},B={types:Object(H.a)({},q.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(H.a)({},q.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},S={types:Object(H.a)({},q.types,{pushLeft:v.a.bool}),defaults:Object(H.a)({},q.defaults,{pushLeft:!1})},A=function(e){var t=e.className,a=Object(o.a)(e,["className"]),i=g()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:i}))},M=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,n=e.loading,s=e.wide,c=e.wideMobile,m=e.disabled,d=Object(o.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),r&&"button-".concat(r),n&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};M.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var R=M,T=function(e){var t=e.className,a=e.children,r=e.handleClose,n=e.show,s=e.closeHidden,c=e.video,m=e.videoTag,d=Object(o.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},h=g()("modal",n&&"is-active",c&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,n&&l.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),l.a.createElement("div",{className:"modal-inner",onClick:p},c?l.a.createElement("div",{className:"responsive-video"},"iframe"===m?l.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:c})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),l.a.createElement("div",{className:"modal-content"},a)))))};T.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var z=T,W=Object(H.a)({},P.defaults),_=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),h=Object(d.a)(p,2),b=h[0],f=h[1],E=g()("hero section center-content",r&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=g()("hero-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},v,{className:E}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:N},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Fimi ",l.a.createElement("span",{className:"text-color-primary"},"Labs")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(A,null,l.a.createElement(R,{tag:"a",color:"primary",wideMobile:!0,href:"https://cruip.com/"},"Get started"),l.a.createElement(R,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"View on Github"))))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},l.a.createElement(O,{className:"has-shadow",src:a(35),alt:"Hero",width:896,height:504}))),l.a.createElement(z,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};_.defaultProps=W;var I=_,V=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,n=Object(o.a)(e,["className","data","children","tag"]),s=g()("section-header",t),c=r;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},n,{className:s}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(c,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};V.defaultProps={children:null,tag:"h2"};var G=V,U=Object(H.a)({},S.defaults),K=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",s&&"has-bottom-divider"),h=g()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:p},l.a.createElement(G,{data:{title:"Build up the whole picture",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:h},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(36),alt:"Features tile icon 01",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(37),alt:"Features tile icon 02",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(38),alt:"Features tile icon 03",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(39),alt:"Features tile icon 04",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(40),alt:"Features tile icon 05",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(O,{src:a(41),alt:"Features tile icon 06",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};K.defaultProps=U;var J=K,Q=Object(H.a)({},B.defaults),Y=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,h=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=g()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",c&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",n&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},h,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(G,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(42),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(43),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(O,{src:a(44),alt:"Features split 03",width:528,height:396})))))))};Y.defaultProps=Q;var $=Y,X=Object(H.a)({},S.defaults),Z=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(G,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};Z.defaultProps=X;var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,n=Object(o.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},n,{className:s,htmlFor:r}),a)};te.defaultProps={children:null,labelHidden:!1,id:null};var ae=te,ie=function(e){var t=e.children,a=e.className,i=e.status,r=Object(o.a)(e,["children","className","status"]),n=g()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},r,{className:n}),t)};ie.defaultProps={children:null,status:!1};var le=ie,re=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,n=e.type,s=e.name,c=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,E=Object(o.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=g()("form-input",p&&"form-input-".concat(p),c&&"form-".concat(c),t),O="textarea"===n?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(ae,{labelHidden:r,id:E.id},i),l.a.createElement("div",{className:N},l.a.createElement(O,Object.assign({},E,{type:"textarea"!==n?n:null,className:w,name:s,disabled:m,value:d,placeholder:h,rows:"textarea"===n?b:null})),a),f&&l.a.createElement(le,{status:c},f))};re.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ne=re,se=Object(H.a)({},P.defaults,{split:!1}),ce=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,m=e.split,d=Object(o.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=g()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(ne,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ce.defaultProps=se;var oe=ce,me=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{className:"illustration-section-01"}),l.a.createElement(J,null),l.a.createElement($,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(ee,{topDivider:!0}),l.a.createElement(oe,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/fimilabs.github.io",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var de=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),l.a.createElement(b,{ref:e,children:function(){return l.a.createElement(s.c,null,l.a.createElement(m,{exact:!0,path:"/",component:me,layout:F}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var ue=Object(c.a)();n.a.render(l.a.createElement(s.b,{history:ue},l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.332b05cd.chunk.js.map