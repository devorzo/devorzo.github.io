(this.webpackJsonpmajor_project_ui=this.webpackJsonpmajor_project_ui||[]).push([[15],{233:function(e,a,t){"use strict";t.r(a);var r=t(6),c=t(0),s=t.n(c),o=t(5),l=t(9),n=t(29),m=t.n(n),i=t(24),d=t(59),u=t(30);a.default=function(e){var a=Object(c.useContext)(i.a),t=a.isLoggedIn,n=a.setAuth,p=Object(c.useState)(""),f=Object(r.a)(p,2),h=f[0],E=f[1],b=Object(c.useState)(""),v=Object(r.a)(b,2),g=v[0],N=v[1],y=Object(c.useState)(""),w=Object(r.a)(y,2),j=w[0],k=w[1],x=Object(c.useState)(""),O=Object(r.a)(x,2),C=O[0],I=O[1],A=Object(c.useState)(""),P=Object(r.a)(A,2),S=P[0],R=P[1],_=Object(c.useState)(!1),q=Object(r.a)(_,2),z=q[0],F=q[1];function J(e){var a=e.target.name,t=e.target.value;"fullname"===a?E(t):"username"===a?N(t):"email"===a?k(t):"password"===a?I(t):"confpassword"===a&&R(t)}return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-9 col-lg-12 col-xl-10"},s.a.createElement("div",{className:"card shadow-lgx o-hidden border-0 my-5x",style:{backgroundColor:"inherit",color:"inherit"}},s.a.createElement("div",{className:"card-body p-0"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"}),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"custom-card2 mt-4 p-2"},s.a.createElement("div",{className:"pt-4 p-md-5 pl-sm-0 pr-sm-0 pt-sm-5"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h4",{className:"mb-4",style:{color:"inherit"}},"Create an account")),s.a.createElement("form",{className:"user"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",name:"fullname",className:"form-control form-control-user",onChange:J,placeholder:"What would you like us to call you?"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-control form-control-user",name:"username",onChange:J,type:"text",id:"exampleUsernameEmail","aria-describedby":"username",placeholder:"Enter Username...",required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{className:"form-control form-control-user",onChange:J,type:"email",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",name:"email",style:{},required:!0})),s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-sm-6 mb-3 mb-sm-0"},s.a.createElement("input",{className:"form-control form-control-user",type:"password",onChange:J,id:"examplePasswordInput",placeholder:"Password",name:"password"})),s.a.createElement("div",{className:"col-sm-6"},s.a.createElement("input",{className:"form-control form-control-user",type:"password",onChange:J,id:"exampleRepeatPasswordInput",placeholder:"Repeat Password",name:"confpassword"}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"pl-2 custom-checkbox small"},s.a.createElement("div",{className:"form-check"},s.a.createElement("input",{className:"form-check-input custom-control-input",type:"checkbox",id:"formCheck-1",onChange:function(e){F(e.target.checked)},checked:z}),s.a.createElement("label",{className:"form-check-label custom-control-label",htmlFor:"formCheck-1",style:{}},"I agree to"," ",s.a.createElement(o.b,{to:"/code-of-conduct"},"Code of conduct"),", ",s.a.createElement(o.b,{to:"/privacy"},"privacy policy")," ","and ",s.a.createElement(o.b,{to:"/terms"},"terms")," of this site.")))),s.a.createElement("button",{className:"btn btn-primary btn-block text-white btn-user",type:"submit",onClick:function(e){e.preventDefault(),console.log({name:h,username:g,email:j,password:C,confpassword:S});var a={username:g,fullname:h,email:j,password:C,confpassword:S};""!==h?""!==g?""!==j&&function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(j)?""===C||C.length<6?d.a.error("Invalid password"):""===S||S.length<6?d.a.error("Invalid confirmation password"):C===S?z?m.a.post("".concat(Object(u.a)(),"/register"),a).then((function(e){var a;d.a.success("Registered successfully"),e.data.success&&(n(e.data),a=e.data.message.data.token,m.a.post("".concat(Object(u.a)(),"/api/v1/sendVerificationEmail"),{xAuthToken:a,email:j}))})).catch((function(a){console.log(e.response),null!==a.response.data.error.message?d.a.error("".concat(a.response.data.error.message)):d.a.error("Error")})):d.a.error("Please agree to the Code of conduct, privacy policy and terms of this site"):d.a.error("Passwords do not match"):d.a.error("Invalid email"):d.a.error("Invalid username"):d.a.error("Invalid name")},style:{}},"Register")),s.a.createElement("div",{className:"text-center mt-5"},s.a.createElement(o.b,{className:"small",to:"/login",style:{color:"inherit"}},"Already have an account? Login!"))))))))))),t&&s.a.createElement(l.a,{to:"/"}))}}}]);
//# sourceMappingURL=15.4b25154c.chunk.js.map