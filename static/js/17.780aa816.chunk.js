(this.webpackJsonpmajor_project_ui=this.webpackJsonpmajor_project_ui||[]).push([[17],{234:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(0),c=a.n(o),l=a(29),r=a.n(l),s=a(5),i=a(30);t.default=function(e){var t=c.a.useState(""),a=Object(n.a)(t,2),o=a[0],l=a[1],u=c.a.useState(""),m=Object(n.a)(u,2),d=m[0],f=m[1],E=c.a.useState(""),p=Object(n.a)(E,2),b=p[0],j=p[1],g={fontSize:"16px",color:"#35c644"};return c.a.useEffect((function(){console.log({api:Object(i.a)()}),r.a.get("".concat(Object(i.a)(),"/")).then((function(e){console.log(e),l(e?e.data.version:"Loding")})),r.a.get("/version.json").then((function(e){console.log(e),e&&(f(e.data.version),j(new Date(e.data.build).toISOString()))})).catch((function(e){f(""),j(""),console.log(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"mt-2"},"More info about Devorzo"," ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udc4b")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.b,{to:"/code-of-conduct"},"Code of Conduct"))),c.a.createElement("h3",{className:"mt-4"},"Stats for nerds"),c.a.createElement("p",null," ","UI Build Version: ",c.a.createElement("code",{style:g},d)," -"," ",c.a.createElement("code",{style:g},b)),c.a.createElement("p",null,"Server Build Version: ",c.a.createElement("code",{style:g},o))))}}}]);
//# sourceMappingURL=17.780aa816.chunk.js.map