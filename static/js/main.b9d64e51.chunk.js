(this["webpackJsonpcodepen-clone"]=this["webpackJsonpcodepen-clone"]||[]).push([[0],{11:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(11),a(1)),i=(a(12),a(13),a(14),a(15),a(16),a(5));function s(e){var t=e.language,a=e.displayName,n=e.value,l=e.onChange;return c.a.createElement("div",{className:"editor-container"},c.a.createElement("div",{className:"editor-title"},a),c.a.createElement(i.Controlled,{onBeforeChange:function(e,t,a){l(a)},value:n,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}}))}function u(e,t){var a="codepen-clone-"+e,c=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),l=Object(o.a)(c,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(r))}),[a,r]),[r,i]}var m=function(){var e=u("html",""),t=Object(o.a)(e,2),a=t[0],l=t[1],r=u("css",""),i=Object(o.a)(r,2),m=i[0],p=i[1],d=u("js",""),f=Object(o.a)(d,2),g=f[0],b=f[1],v=Object(n.useState)(""),E=Object(o.a)(v,2),y=E[0],h=E[1],j=c.a.useState(!0),O=Object(o.a)(j,2),N=O[0],x=O[1],S=c.a.useState(!1),C=Object(o.a)(S,2),w=C[0],k=C[1],J=c.a.useState(!1),B=Object(o.a)(J,2),I=B[0],T=B[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){h("\n        <html>\n          <body>".concat(a,"</body>\n          <style>").concat(m,"</style>\n          <script>").concat(g,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[a,m,g]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"pane top-pane"},c.a.createElement("div",{classname:"file-explorer"},c.a.createElement("input",{style:{color:"orangered"},type:"submit",value:"index.html",onClick:function(){x(!N),w&&k(!w),I&&T(!I)}}),c.a.createElement("input",{style:{color:"#6363f9"},type:"submit",value:"index.css",onClick:function(){k(!w),I&&T(!I),N&&x(!N)}}),c.a.createElement("input",{style:{color:"yellow"},type:"submit",value:"index.js",onClick:function(){T(!I),w&&k(!w),N&&x(!N)}})),N&&c.a.createElement(s,{language:"xml",displayName:"index.html",value:a,onChange:l}),w&&c.a.createElement(s,{language:"css",displayName:"index.css",value:m,onChange:p}),I&&c.a.createElement(s,{language:"javascript",displayName:"index.js",value:g,onChange:b})),c.a.createElement("div",{className:"pane"},c.a.createElement("iframe",{srcDoc:y,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a(18)}},[[6,1,2]]]);
//# sourceMappingURL=main.b9d64e51.chunk.js.map