(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),o=(n(0),n(124)),c={id:"prerequisites",title:"Prerequisites"},i={id:"prerequisites",title:"Prerequisites",description:"To use **Stacks** properly you need to pass a default spacing value to a `Provider` at the top of your React tree.",source:"@site/docs/prerequisites.md",permalink:"/stacks/docs/prerequisites",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/prerequisites.md",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/stacks/docs/installation"},next:{title:"Box",permalink:"/stacks/docs/box"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use ",Object(o.b)("strong",{parentName:"p"},"Stacks")," properly you need to pass a default spacing value to a ",Object(o.b)("inlineCode",{parentName:"p"},"Provider")," at the top of your React tree."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import { Provider as Stacks } from '@mobily/stacks'\n\nconst App = () => {\n  return (\n    <Stacks spacing={4}>\n      \u2026\n    </Stacks>\n  )\n}\n")),Object(o.b)("p",null,"In short, the spacing value unit here is a logical pixel, the same as you've been using before for either ",Object(o.b)("em",{parentName:"p"},"margin")," or ",Object(o.b)("em",{parentName:"p"},"padding"),". ",Object(o.b)("strong",{parentName:"p"},"Stacks")," will automatically multiply the default spacing value by value of ",Object(o.b)("inlineCode",{parentName:"p"},"space")," (",Object(o.b)("inlineCode",{parentName:"p"},"padding")," as well) passed to the components, for instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Stacks spacing={4}>\u2026</Stacks>\n\n<Stack space={2}>\u2026</Stack>\n// \u2b06\ufe0f 4 * 2 = 8 logical pixels of the bottom margin\n\n<Box padding={3}>\u2026</Box>\n// \u2b06\ufe0f 4 * 3 = 12 logical pixels of the padding\n")))}l.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,i({ref:t},s,{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);