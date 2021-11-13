(this["webpackJsonpnutritheraphy-client"]=this["webpackJsonpnutritheraphy-client"]||[]).push([[0],{39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(31),c=n.n(r),i=(n(39),n(15)),o=n(8),l=n(10),j=n(12),u=n(11),h=n(2),b=n(14),d=n(32),O=n.n(d),p=new function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,n){return t.service.post("/signup",{username:e,password:n})},this.login=function(e,n){return t.service.post("/login",{username:e,password:n})},this.logout=function(){return t.service.post("/logout")},this.loggedin=function(){return t.service.get("/loggedin")},this.service=O.a.create({baseURL:"".concat("http://localhost:5005/api","/auth"),withCredentials:!0})},g=n(9),x=n(0),m=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",showForm:!0},e.handleToggle=function(){e.setState({showForm:!1})},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(b.a)({},s,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password;p.signup(s,a).then((function(t){e.setState({username:"",password:""}),e.props.setUser(t.data,!0)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,s=e.mail,a=e.name,r=e.lastName,c=e.city,i=e.country;e.typeOfDiet;return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("label",{for:"username",children:"Username"}),Object(x.jsx)("input",{name:"username",type:"text",value:t,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"password",children:"Password"}),Object(x.jsx)("input",{name:"password",type:"password",value:n,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"mail",children:"email"}),Object(x.jsx)("input",{name:"mail",type:"text",value:s,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"name",children:"Name"}),Object(x.jsx)("input",{name:"name",type:"text",value:a,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"lastName",children:"Last Name"}),Object(x.jsx)("input",{name:"lastName",type:"text",value:r,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"city",children:"City"}),Object(x.jsx)("input",{name:"city",type:"text",value:c,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"country",children:"Country"}),Object(x.jsx)("input",{name:"country",type:"text",value:i,onChange:this.handleChange}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"typeOfDiet",children:"What type of diet do you need?"}),Object(x.jsxs)("select",{name:"typeOfDiet",onChange:this.handleChange,children:[Object(x.jsx)("option",{value:"vegetarian",children:"Vegetarian"}),Object(x.jsx)("option",{value:"keto",children:"Keto"}),Object(x.jsx)("option",{value:"glutenFree",children:"Gluten Free"}),Object(x.jsx)("option",{value:"lowCalories",children:"Low Calories"})]}),Object(x.jsx)("br",{}),Object(x.jsx)(g.b,{to:"/",children:Object(x.jsx)("button",{type:"submit",onClick:this.handleToggle,children:"Signup"})})]})})}}]),n}(s.Component),f=m,v=function(e){var t=e.isLoggedIn,n=e.user,s=e.setUser;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"../images/LogoNutritherapy.png",style:{width:"480px",height:"300px"}})}),Object(x.jsxs)("ul",{children:[t&&n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("li",{children:["Hi,",n.username]}),Object(x.jsx)("li",{children:Object(x.jsx)(g.b,{to:"/",children:Object(x.jsx)("button",{onClick:function(){p.logout().then((function(){s(null,!1)}))},children:"Logout"})})})]}),!t&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("li",{children:[Object(x.jsx)(g.b,{to:"/signup",children:Object(x.jsx)("button",{children:"Signup"})}),Object(x.jsx)(g.b,{to:"/login",children:Object(x.jsx)("button",{children:"Login"})})]})})]})]})},y=(n(64),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(b.a)({},s,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password;p.login(s,a).then((function(t){e.setState({username:"",password:""}),e.props.setUser(t.data,!0)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsx)("input",{name:"username",type:"text",value:t,onChange:this.handleChange}),Object(x.jsx)("input",{name:"password",type:"password",value:n,onChange:this.handleChange}),Object(x.jsx)("button",{type:"submit",children:"Login"})]})})}}]),n}(s.Component)),C=y,w=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"hello"})})}}]),n}(s.Component),S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedIn:null,user:null},e.setUser=function(t,n){e.setState({user:t,isLoggedIn:n})},e.getUser=function(){null===e.state.user&&p.loggedin().then((function(t){e.setState({user:t.data.user,isLoggedIn:!0})})).catch((function(t){e.setState({isLoggedIn:!1})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this,t=this.state,n=t.user,s=t.isLoggedIn;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{isLoggedIn:s,user:n,setUser:this.setUser}),Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.a,{exact:!0,path:"/signup",render:function(t){return Object(x.jsx)(f,Object(i.a)(Object(i.a)({},t),{},{setUser:e.setUser}))}}),Object(x.jsx)(h.a,{exact:!0,path:"/login",render:function(t){return Object(x.jsx)(C,Object(i.a)(Object(i.a)({},t),{},{setUser:e.setUser}))}}),Object(x.jsx)(h.a,{exact:!0,path:"/private",render:function(e){return Object(x.jsx)(w,Object(i.a)({},e))}})]})]})}}]),n}(s.Component),L=S;c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g.a,{children:Object(x.jsx)(L,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.dde7928f.chunk.js.map