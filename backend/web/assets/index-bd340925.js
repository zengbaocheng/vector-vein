import{c as p,A as y,aT as b,i as g}from"./index-52f19034.js";function a(n){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?Object(arguments[o]):{},e=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){O(n,t,r[t])})}return n}function O(n,o,r){return o in n?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n}var u=function(o,r){var e=a({},o,r.attrs);return p(y,a({},e,{icon:b}),null)};u.displayName="PlusOutlined";u.inheritAttrs=!1;const x=u;var L={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function j(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function P(n,o,r){var e=typeof o.fill=="string"?[o.fill]:o.fill||[],t=[],i=o.theme||r.theme;switch(i){case"outline":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push("none"),t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push("none");break;case"filled":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push("#FFF"),t.push("#FFF");break;case"two-tone":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone),t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone);break;case"multi-color":t.push(typeof e[0]=="string"?e[0]:"currentColor"),t.push(typeof e[1]=="string"?e[1]:r.colors.multiColor.outFillColor),t.push(typeof e[2]=="string"?e[2]:r.colors.multiColor.innerStrokeColor),t.push(typeof e[3]=="string"?e[3]:r.colors.multiColor.innerFillColor);break}return{size:o.size||r.size,strokeWidth:o.strokeWidth||r.strokeWidth,strokeLinecap:o.strokeLinecap||r.strokeLinecap,strokeLinejoin:o.strokeLinejoin||r.strokeLinejoin,colors:t,id:n}}var S=Symbol("icon-context");function I(n,o,r){var e={name:"icon-"+n,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(i){var c=j(),s=g(S,L);return function(){var f=i.size,h=i.strokeWidth,k=i.strokeLinecap,d=i.strokeLinejoin,m=i.theme,C=i.fill,F=i.spin,v=P(c,{size:f,strokeWidth:h,strokeLinecap:k,strokeLinejoin:d,theme:m,fill:C},s),l=[s.prefix+"-icon"];return l.push(s.prefix+"-icon-"+n),o&&s.rtl&&l.push(s.prefix+"-icon-rtl"),F&&l.push(s.prefix+"-icon-spin"),p("span",{class:l.join(" ")},[r(v)])}}};return e}export{I,x as P};
