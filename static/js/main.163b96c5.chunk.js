(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{11:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),o=a.n(l),r=(a(11),a(1)),i=(a(12),a(13),a(14),a(15),a(16),a(17),a(5));function s(e){var t=e.language,a=e.title,n=e.value,l=e.onChange;return c.a.createElement("div",{className:"editor-container"},c.a.createElement("div",{className:"editor-title"},a),c.a.createElement(i.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"monokai",lineNumbers:!0}}))}function u(e,t){var a="codepen-clone-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),l=Object(r.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(o))}),[a,o]),[o,i]}var m=function(){var e=u("css",""),t=Object(r.a)(e,2),a=t[0],l=t[1],o=u("js",""),i=Object(r.a)(o,2),m=i[0],d=i[1],p=u("html",""),f=Object(r.a)(p,2),v=f[0],g=f[1],b=Object(n.useState)(""),E=Object(r.a)(b,2),h=E[0],y=E[1],j=c.a.useState(!0),O=Object(r.a)(j,2),N=O[0],x=O[1],S=c.a.useState(!1),C=Object(r.a)(S,2),w=C[0],k=C[1],J=c.a.useState(!1),B=Object(r.a)(J,2),I=B[0],T=B[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){y("\n        <html>\n          <body>".concat(v,"</body>\n          <style>").concat(a,"</style>\n          <script>").concat(m,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[v,a,m]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"editor"},c.a.createElement("div",{classname:"file-explorer"},c.a.createElement("input",{style:{color:"orangered"},type:"submit",value:"index.html",onClick:function(){x(!N),w&&k(!w),I&&T(!I)}}),c.a.createElement("input",{style:{color:"#6363f9"},type:"submit",value:"index.css",onClick:function(){k(!w),I&&T(!I),N&&x(!N)}}),c.a.createElement("input",{style:{color:"yellow"},type:"submit",value:"index.js",onClick:function(){T(!I),w&&k(!w),N&&x(!N)}})),N&&c.a.createElement(s,{language:"xml",displayName:"index.html",value:v,onChange:g}),w&&c.a.createElement(s,{language:"css",displayName:"index.css",value:a,onChange:l}),I&&c.a.createElement(s,{language:"javascript",displayName:"index.js",value:m,onChange:d})),c.a.createElement("div",{className:"live-view"},c.a.createElement("iframe",{srcDoc:h,title:"output",sandbox:"allow-scripts",frameBorder:"4",width:"100%",height:"100%"})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(19)}},[[6,1,2]]]);
//# sourceMappingURL=main.163b96c5.chunk.js.map