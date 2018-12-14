(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(301)},301:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),l=a.n(o),c=a(18),i=a(19),s=a(21),u=a(20),m=a(22),p=a(35),d=a(311),h=a(148),f=a(30),g=a.n(f),y=a(12),E=a(305),b=a(302),v=function(e){var t=e.type,a=e.text;return r.a.createElement("span",null,r.a.createElement(y.a,{type:t,style:{marginRight:8}}),a)},O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{itemLayout:"vertical",size:"large",pagination:{onChange:function(e){console.log(e)},pageSize:3},dataSource:this.props.data,renderItem:function(e){return r.a.createElement(E.a.Item,{key:e.title,actions:[r.a.createElement(v,{type:"star-o",text:"156"}),r.a.createElement(v,{type:"like-o",text:"156"}),r.a.createElement(v,{type:"message",text:"2"})],extra:r.a.createElement("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})},r.a.createElement(E.a.Item.Meta,{avatar:r.a.createElement(b.a,{src:e.avatar}),title:r.a.createElement("a",{href:"/".concat(e.id)},e.title),description:e.description}),e.content)}})}}]),t}(n.Component),w=a(304),j=a(308),T=a(152),S=w.a.Item,D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleFormSubmit=function(e,t,a){var n=e.target.elements.title.value,r=e.target.elements.description.value,o=e.target.elements.content.value;switch(t){case"post":return g.a.post("http://127.0.0.1:8000/api/",{title:n,description:r,content:o}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)});case"put":return g.a.put("http://127.0.0.1:8000/api/".concat(a,"/"),{title:n,description:r,content:o}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(w.a,{onSubmit:function(t){return e.handleFormSubmit(t,e.props.requestType,e.props.articleID)}},r.a.createElement(S,{label:"Title"},r.a.createElement(j.a,{name:"title",placeholder:"Type your titile"})),r.a.createElement(S,{label:"Description"},r.a.createElement(j.a,{name:"description",placeholder:"Small description of your titile"})),r.a.createElement(S,{label:"Content"},r.a.createElement(j.a,{name:"content",placeholder:"Your content"})),r.a.createElement(S,null,r.a.createElement(T.a,{type:"primary",htmlType:"submit"},this.props.btnTxt))))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articles:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://127.0.0.1:8000/api/").then(function(t){e.setState({articles:t.data}),console.log(t.data)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{data:this.state.articles}),r.a.createElement("br",null),r.a.createElement("h2",null,"Create an Article"),r.a.createElement(D,{requestType:"post",articleID:null,btnTxt:"Create"}))}}]),t}(n.Component),x=a(306),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(e){var t=a.props.match.params.articleID;g.a.delete("http://127.0.0.1:8000/api/".concat(t)),a.props.history.push("/")},a.state={article:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.articleID;g.a.get("http://127.0.0.1:8000/api/".concat(t)).then(function(t){e.setState({article:t.data})})}},{key:"render",value:function(){var e=this.state.article;return r.a.createElement("div",null,r.a.createElement(x.a,{title:e.title},r.a.createElement("h3",null,e.description),r.a.createElement("p",null,e.content)),r.a.createElement("br",null),r.a.createElement("h2",null,"Update the Article"),r.a.createElement(D,{requestType:"put",articleID:this.props.match.params.articleID,btnTxt:"Update"}),r.a.createElement("form",{onSubmit:this.handleDelete},r.a.createElement(T.a,{type:"danger",htmlType:"submit"},"Delete")))}}]),t}(n.Component),I=a(303),C=a(141),U=function(e){return{type:"AUTH_SUCCESS",token:e}},P=function(e){return{type:"AUTH_FAIL",error:e}},_=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},F=function(e){return function(t){setTimeout(function(){t(_())},1e3*e)}},H=w.a.Item,L=r.a.createElement(y.a,{type:"loading",style:{fontSize:24},spin:!0}),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.props.onAuth(t.userName,t.password),a.props.history.push("/")})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;this.props.error&&(e=r.a.createElement("p",null,this.props.error.message));var t=this.props.form.getFieldDecorator;return r.a.createElement("div",null,e,this.props.loading?r.a.createElement(C.a,{indicator:L}):r.a.createElement(w.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(H,null,t("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(H,null,t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(H,null,r.a.createElement(T.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Log in"),"Or ",r.a.createElement(I.a,{style:{marginRight:"10px"},to:"/signup/"},"signup"))))}}]),t}(r.a.Component),q=w.a.create()(N),R=Object(p.b)(function(e){return{loading:e.loading,error:e.error}},function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"}),g.a.post("http://127.0.0.1:8000/rest-auth/login/",{username:e,password:t}).then(function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(U(t)),a(F(3600))}).catch(function(e){a(P(e))})}}(t,a))}}})(q),z=w.a.Item,B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||a.props.onAuth(t.userName,t.email,t.password,t.confirm),a.props.history.push("/")})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(z,null,e("userName",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),r.a.createElement(z,null,e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(z,null,e("password",{rules:[{required:!0,message:"Please input your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(z,null,e("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(j.a,{prefix:r.a.createElement(y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm Password",onBlur:this.handleConfirmBlur}))),r.a.createElement(z,null,r.a.createElement(T.a,{type:"primary",htmlType:"submit",style:{marginRight:"10px"}},"Signup"),"Or ",r.a.createElement(I.a,{style:{marginRight:"10px"},to:"/login/"},"login")))}}]),t}(r.a.Component),M=w.a.create()(B),X=Object(p.b)(function(e){return{loading:e.loading,error:e.error}},function(e){return{onAuth:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"}),g.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then(function(e){var t=e.data.key,a=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",a),r(U(t)),r(F(3600))}).catch(function(e){r(P(e))})}}(t,a,n,r))}}})(M),G=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{exact:!0,path:"/articles/:articleID/",component:A}),r.a.createElement(h.a,{exact:!0,path:"/login/",component:R}),r.a.createElement(h.a,{exact:!0,path:"/signup/",component:X}))},J=(a(299),a(309)),K=a(307),V=a(310),W=a(150),Q=a(312),Y=J.a.Header,Z=J.a.Content,$=J.a.Footer,ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(J.a,{className:"layout"},r.a.createElement(Y,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(K.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},this.props.isAuthenticated?r.a.createElement(K.a.Item,{key:"2",onClick:this.props.logout},"Logout"):r.a.createElement(K.a.Item,{key:"2"},r.a.createElement(W.a,{to:"/login"},"Login")),r.a.createElement(K.a.Item,{key:"1"},r.a.createElement(W.a,{to:"/"},"Posts")))),r.a.createElement(Z,{style:{padding:"0 50px"}},r.a.createElement(V.a,{style:{margin:"16px 0"}},r.a.createElement(V.a.Item,null,r.a.createElement(W.a,{to:"/"},"Home")),r.a.createElement(V.a.Item,null,r.a.createElement(W.a,{to:"/"},"List"))),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},this.props.children)),r.a.createElement($,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))}}]),t}(r.a.Component),te=Object(Q.a)(Object(p.b)(null,function(e){return{logout:function(){return e(_())}}})(ee)),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(te,this.props,r.a.createElement(G,null))))}}]),t}(n.Component),ne=Object(p.b)(function(e){return{isAuthenticated:null!==e.token}},function(e){return{onTryAutoSignup:function(){return e(function(e){var t=localStorage.getItem("token");if(void 0===t)e(_());else{var a=new Date(localStorage.getItem("expirationDate"));a<new Date?e(_()):(e(U(t)),e(F((a.getTime()-(new Date).getTime())/1e3)))}})}}})(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(53),oe=a(151),le=a(153),ce=function(e,t){return Object(le.a)({},e,t)},ie={token:null,error:null,loading:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return ce(e,{error:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return ce(e,{token:t.token,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return ce(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return ce(e,{token:null})}(e);default:return e}},ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c,me=Object(re.d)(se,ue(Object(re.a)(oe.a))),pe=r.a.createElement(p.a,{store:me},r.a.createElement(ne,null));l.a.render(pe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,2,1]]]);
//# sourceMappingURL=main.a35cf3b3.chunk.js.map