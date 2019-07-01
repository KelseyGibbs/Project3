(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(84)},53:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=(a(53),a(3)),i=a(4),o=a(6),m=a(5),d=a(7),u=a(19),p=a(17),h=a(25),E=a.n(h),v=a(21),b=a.n(v),f=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},g=function(e){return{type:"SET_CURRENT_USER",payload:e}},w=function(){return function(e){localStorage.removeItem("jwtToken"),f(!1),e(g({}))}},y=a(13),O=a(15),j=a(43),N=a(29),k=a(77),x={isAuthenticated:!1,user:{},loading:!1},C={},S=Object(O.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(N.a)({},e,{isAuthenticated:!k(t.payload),user:t.payload});case"USER_LOADING":return Object(N.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),T=[j.a],_=Object(O.e)(S,{},Object(O.d)(O.a.apply(void 0,T),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||O.d)),R=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"WholeBaker")),r.a.createElement("p",{className:"flow-text grey-text"},"A bakery ordering and recipe management application."),r.a.createElement("br",null),r.a.createElement("div",{className:"col s12"},r.a.createElement(u.b,{to:"/login",className:"btn"},"Log In")))))}}]),t}(n.Component),A=a(20),I=a(10),U=a.n(I),D=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(A.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2,admin:e.state.admin};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{},admin:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(u.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:U()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:U()("",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:U()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:U()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("div",{class:"switch"},r.a.createElement("label",null,"Customer",r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"lever"}),"Admin")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn"},"Sign up")))))}}]),t}(n.Component),L=Object(y.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){b.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(p.g)(D)),B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(A.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a)},e.state={email:"",password:"",errors:{},admin:""},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},r.a.createElement("b",null,"Don't have an account?")," Contact WholeBaker to get setup")),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:U()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:U()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{class:"switch"},r.a.createElement("label",null,"true",r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{class:"lever"}),"false")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn"},"Login")))))}}]),t}(n.Component),P=Object(y.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){b.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),f(a);var n=E()(a);t(g(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(B),W=a(45),H=Object(y.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(W.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))}),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.name,r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into ",r.a.createElement("b",null,"WholeBaker"))),r.a.createElement("button",{onClick:this.onLogoutClick,className:"btn"},"Logout"))))}}]),t}(n.Component),G=Object(y.b)(function(e){return{auth:e.auth}},{logoutUser:w})(F),M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={email:"",password:"",errors:{}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,r.a.createElement("b",null,"Whole Baker")," admin"))),r.a.createElement("div",{className:"row"}))}}]),t}(n.Component),V=a(23),X=(a(79),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).notifyA=function(){return Object(V.b)("Wow so easy !",{containerId:"A"})},a.notifyB=function(){return Object(V.b)("Wow so easy !",{containerId:"B"})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{enableMultiContainer:!0,containerId:"B",position:V.b.POSITION.TOP_RIGHT}),r.a.createElement("button",{onClick:this.notifyB},"Add to Cart"))}}]),t}(n.Component)),z=(a(82),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={email:"",password:"",errors:{}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,r.a.createElement("b",null,"Order")," below"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col 3"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{class:"activator",src:"images/office.jpg"})),r.a.createElement("div",{class:"card-content"},r.a.createElement("span",{class:"card-title activator grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"more_vert")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"This is a link"))),r.a.createElement("div",{class:"card-reveal"},r.a.createElement("span",{class:"card-title grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"close")),r.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on. Here is some more information about this product that is only revealed once clicked on.")))),r.a.createElement("div",{className:"col 3"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{class:"activator",src:"images/office.jpg"})),r.a.createElement("div",{class:"card-content"},r.a.createElement("span",{class:"card-title activator grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"more_vert")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"This is a link"))),r.a.createElement("div",{class:"card-reveal"},r.a.createElement("span",{class:"card-title grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"close")),r.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on.")))),r.a.createElement("div",{className:"col 3"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{class:"activator",src:"images/office.jpg"})),r.a.createElement("div",{class:"card-content"},r.a.createElement("span",{class:"card-title activator grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"more_vert")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"This is a link"))),r.a.createElement("div",{class:"card-reveal"},r.a.createElement("span",{class:"card-title grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"close")),r.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on.")))),r.a.createElement("div",{className:"col 3"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{class:"activator",src:"images/office.jpg"})),r.a.createElement("div",{class:"card-content"},r.a.createElement("span",{class:"card-title activator grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"more_vert")),r.a.createElement("p",null,r.a.createElement("a",{href:"#"},"This is a link"))),r.a.createElement("div",{class:"card-reveal"},r.a.createElement("span",{class:"card-title grey-text text-darken-4"},"Card Title",r.a.createElement("i",{class:"material-icons right"},"close")),r.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on.")))),r.a.createElement(X,null)))}}]),t}(n.Component));a(83);if(localStorage.jwtToken){var J=localStorage.jwtToken;f(J);var Y=E()(J);_.dispatch(g(Y));var q=Date.now()/1e3;Y.exp<q&&(_.dispatch(w()),window.location.href="./login")}var K=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{store:_},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p.b,{exact:!0,path:"/",component:R}),r.a.createElement(p.b,{exact:!0,path:"/admindash",component:M}),r.a.createElement(p.b,{exact:!0,path:"/register",component:L}),r.a.createElement(p.b,{exact:!0,path:"/login",component:P}),r.a.createElement(p.b,{exact:!0,path:"/order",component:z}),r.a.createElement(p.d,null,r.a.createElement(H,{exact:!0,path:"/dashboard",component:G})))))}}]),t}(n.Component);c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.219750d1.chunk.js.map