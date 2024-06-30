import{h as Z,g as tt,r as u,s as z,t as ot,v as rt,w as s,c,x,y as nt,a as at,_ as et,j as e,i as B,k as it,p as M,q as W,R as p,u as lt,B as m,T as N,G as E}from"./index-CVUDtLZy.js";import{d as st}from"./GitHub-C2uRPft2.js";function ct(t){return tt("MuiButton",t)}const b=Z("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),dt=u.createContext({}),ut=u.createContext(void 0),pt=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],vt=t=>{const{color:o,disableElevation:r,fullWidth:n,size:i,variant:a,classes:l}=t,v={root:["root",a,`${a}${s(o)}`,`size${s(i)}`,`${a}Size${s(i)}`,`color${s(o)}`,r&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${s(i)}`],endIcon:["icon","endIcon",`iconSize${s(i)}`]},d=it(v,ct,l);return c({},l,d)},T=t=>c({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),ft=z(ot,{shouldForwardProp:t=>rt(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,o[r.variant],o[`${r.variant}${s(r.color)}`],o[`size${s(r.size)}`],o[`${r.variant}Size${s(r.size)}`],r.color==="inherit"&&o.colorInherit,r.disableElevation&&o.disableElevation,r.fullWidth&&o.fullWidth]}})(({theme:t,ownerState:o})=>{var r,n;const i=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],a=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return c({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":c({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="text"&&o.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="outlined"&&o.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[o.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:x(t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},o.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},o.variant==="contained"&&o.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[o.color].main}}),"&:active":c({},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${b.focusVisible}`]:c({},o.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${b.disabled}`]:c({color:(t.vars||t).palette.action.disabled},o.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},o.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},o.variant==="text"&&{padding:"6px 8px"},o.variant==="text"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].main},o.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},o.variant==="outlined"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${x(t.palette[o.color].main,.5)}`},o.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(r=(n=t.palette).getContrastText)==null?void 0:r.call(n,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},o.variant==="contained"&&o.color!=="inherit"&&{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main},o.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},o.size==="small"&&o.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},o.size==="small"&&o.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},o.size==="small"&&o.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},o.size==="large"&&o.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${b.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${b.disabled}`]:{boxShadow:"none"}}),gt=z("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.startIcon,o[`iconSize${s(r.size)}`]]}})(({ownerState:t})=>c({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},T(t))),xt=z("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.endIcon,o[`iconSize${s(r.size)}`]]}})(({ownerState:t})=>c({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},T(t))),bt=u.forwardRef(function(o,r){const n=u.useContext(dt),i=u.useContext(ut),a=nt(n,o),l=at({props:a,name:"MuiButton"}),{children:v,color:d="primary",component:O="button",className:G,disabled:I=!1,disableElevation:F=!1,disableFocusRipple:P=!1,endIcon:$,focusVisibleClassName:H,fullWidth:U=!1,size:A="medium",startIcon:_,type:R,variant:K="text"}=l,J=et(l,pt),g=c({},l,{color:d,component:O,disabled:I,disableElevation:F,disableFocusRipple:P,fullWidth:U,size:A,type:R,variant:K}),f=vt(g),Q=_&&e.jsx(gt,{className:f.startIcon,ownerState:g,children:_}),X=$&&e.jsx(xt,{className:f.endIcon,ownerState:g,children:$}),Y=i||"";return e.jsxs(ft,c({ownerState:g,className:B(n.className,f.root,G,Y),component:O,disabled:I,focusRipple:!P,focusVisibleClassName:B(f.focusVisible,H),ref:r,type:R},J,{classes:f,children:[Q,v,X]}))});var C={},yt=W;Object.defineProperty(C,"__esModule",{value:!0});var L=C.default=void 0;zt(u);var ht=yt(M()),mt=e;function D(t){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(D=function(n){return n?r:o})(t)}function zt(t,o){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=D(o);if(r&&r.has(t))return r.get(t);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var l=i?Object.getOwnPropertyDescriptor(t,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}L=C.default=(0,ht.default)((0,mt.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");var j={},Ct=W;Object.defineProperty(j,"__esModule",{value:!0});var V=j.default=void 0,jt=Ct(M()),Ot=e;V=j.default=(0,jt.default)((0,Ot.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");var w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},k=p.createContext&&p.createContext(w),It=["attr","size","title"];function Pt(t,o){if(t==null)return{};var r=$t(t,o),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function $t(t,o){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(o.indexOf(n)>=0)continue;r[n]=t[n]}return r}function y(){return y=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},y.apply(this,arguments)}function S(t,o){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function h(t){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?arguments[o]:{};o%2?S(Object(r),!0).forEach(function(n){_t(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function _t(t,o,r){return o=Rt(o),o in t?Object.defineProperty(t,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[o]=r,t}function Rt(t){var o=Bt(t,"string");return typeof o=="symbol"?o:o+""}function Bt(t,o){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,o||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function q(t){return t&&t.map((o,r)=>p.createElement(o.tag,h({key:r},o.attr),q(o.child)))}function Et(t){return o=>p.createElement(kt,y({attr:h({},t.attr)},o),q(t.child))}function kt(t){var o=r=>{var{attr:n,size:i,title:a}=t,l=Pt(t,It),v=i||r.size||"1em",d;return r.className&&(d=r.className),t.className&&(d=(d?d+" ":"")+t.className),p.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:d,style:h(h({color:t.color||r.color},r.style),t.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),a&&p.createElement("title",null,a),t.children)};return k!==void 0?p.createElement(k.Consumer,null,r=>o(r)):o(w)}function St(t){return Et({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"},child:[]}]})(t)}const Mt=[{logo:e.jsx(V,{fontSize:"inherit"}),content:"alexis@devleeschauwer.fr",url:"mailto:alexis@devleeschauwer.fr"},{logo:e.jsx(st,{fontSize:"inherit"}),content:"github",url:"https://github.com/devleesch001"},{logo:e.jsx(St,{fontSize:"inherit"}),content:"gitlab",url:"https://gitlab.com/devleesch"},{logo:e.jsx(L,{fontSize:"inherit"}),content:"linkedin",url:"https://www.linkedin.com/in/alexis-devleeschauwer/"}],Wt=()=>{const{t}=lt();return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx(N,{textAlign:"center",variant:"h2",children:t("title.contact")})}),e.jsx(E,{container:!0,spacing:5,justifyContent:"center",alignContent:"center",marginTop:2,children:Mt.map((o,r)=>e.jsx(E,{item:!0,xs:12,sm:6,md:4,xl:3,children:e.jsx(Nt,{cardInfo:o})},r))})]})},Dt=u.memo(Wt),Nt=t=>{const{cardInfo:o}=t;return e.jsx(bt,{variant:"contained",href:o.url,target:"_blank",sx:{textTransform:"none"},fullWidth:!0,children:e.jsxs(m,{p:5,sx:{display:"flex",alignItems:"center",flexDirection:"column",p:1,m:1,borderRadius:1},children:[e.jsx(m,{sx:{fontSize:"100px"},children:o.logo}),e.jsx(N,{variant:"h6",children:o.content})]})})};export{Dt as default};
