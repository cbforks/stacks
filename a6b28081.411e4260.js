(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(1),o=t(6),i=(t(0),t(124)),c={id:"provider",title:"Provider"},a={id:"provider",title:"Provider",description:"",source:"@site/docs/provider.md",permalink:"/docs/provider",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/provider.md",sidebar:"someSidebar",previous:{title:"FillObject",permalink:"/docs/fill-object"},next:{title:"Grid",permalink:"/docs/grid"}},p=[],u={rightToc:p};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}))}l.isMDXComponent=!0},124:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},f=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(t),s=n,b=f["".concat(c,".").concat(s)]||f[s]||d[s]||i;return t?o.a.createElement(b,a({ref:r},u,{components:t})):o.a.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);