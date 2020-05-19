(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{284:function(e,t,a){e.exports=a(476)},288:function(e,t,a){},289:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},465:function(e,t,a){},466:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),l=a.n(c),o=(a(288),a(289),a(31)),i=a(64),u=a(11),s=a(12),m=a(13),d=a(14),p=a(18),h=a(42),E=a(129),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:"",touched:!1},a.touchInput=function(){a.setState({touched:!0})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.validate()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.validate()}},{key:"validate",value:function(){var e=this.props.validate(this.props.value);this.setState({error:e})}},{key:"render",value:function(){var e=this.props,t=(e.validate,Object(E.a)(e,["validate"])),a=this.state,n=a.error,c=a.touched;return r.a.createElement("div",{className:"validated-input"},r.a.createElement("input",Object.assign({},t,{onBlur:this.touchInput})),n&&c&&r.a.createElement("div",{className:"error"},n))}}]),t}(n.Component),f=function(e){return e?"":"Required!"},b=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onChangeField=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.submitProductForm=function(){a.props.onSubmit(a.state),a.resetFields()},a.resetFields=function(){a.setState({title:"",type:"",price:"",quantity:""})};var n=e.product;return a.state=Object(o.a)({title:"",type:"",price:"",quantity:""},n),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"isDisabled",value:function(){var e=this.state,t=e.title,a=e.type,n=e.price,r=e.quantity;return f(t)&&f(a)&&f(n)&&f(r)}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.type,n=e.price,c=e.quantity,l=this.isDisabled();return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(v,{validate:f,type:"text",name:"title",value:t,onChange:this.onChangeField})),r.a.createElement("td",null,r.a.createElement(v,{validate:f,type:"text",name:"type",value:a,onChange:this.onChangeField})),r.a.createElement("td",null,r.a.createElement(v,{validate:f,type:"text",name:"price",value:n,onChange:this.onChangeField})),r.a.createElement("td",null,r.a.createElement(v,{validate:f,type:"text",name:"quantity",value:c,onChange:this.onChangeField})),r.a.createElement("td",null,r.a.createElement("button",{disabled:l,onClick:this.submitProductForm},"Submit")))}}]),t}(n.Component);b.defaultProps={product:{}};var g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={editMode:!1},a.onEdit=function(e){a.props.onEditProduct(e),a.setState({editMode:!1})},a.state={prevUserId:e.userId},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.product,n=t.onRemoveProduct;return this.state.editMode?r.a.createElement(b,{onSubmit:this.onEdit,product:a}):r.a.createElement("tr",null,r.a.createElement("td",null,a.title),r.a.createElement("td",null,a.type),r.a.createElement("td",null,a.price),r.a.createElement("td",null,a.quantity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.setState({editMode:!0})}},"Edit"),r.a.createElement("button",{onClick:function(){return n(a.id)}},"Remove")))}}]),t}(n.Component);function O(e){var t=e.products,a=e.onRemoveProduct,n=e.onAddProduct,c=e.onEditProduct,l=e.color;return r.a.createElement("table",{className:"product-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{color:l}},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("td",null,"\u0422\u0438\u043f"),r.a.createElement("td",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("td",null,"\u041e\u0441\u0442\u0430\u0442\u043e\u043a"),r.a.createElement("td",null))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(g,{onRemoveProduct:a,onEditProduct:c,key:e.id,product:e})})),r.a.createElement(b,{onSubmit:n})))}O.defaultProps={color:"red"};var y=function(){return new Promise((function(e){setTimeout((function(){e([{id:"1",title:"Samsung Galaxy S10",type:"device",price:"800$",quantity:"10"},{id:"2",title:"IPhone X",type:"device",price:"600$",quantity:"10"},{id:"3",title:"\u041f\u043b\u0430\u0442\u044c\u0435",type:"clothes",price:"50$",quantity:"5"}])}),1e3)}))},j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a ",r.a.createElement("button",{onClick:this.props.resolve},"click here")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}]),t}(n.Component),C=(n.Component,n.Component,function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).inputRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"focusOnInput",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{ref:this.inputRef,type:"text"}),r.a.createElement("div",null,"Input Component with complexity logic"))}}]),t}(n.Component));n.Component;var k=a(501),w=(a(180),a(486)),S=a(498),D=a(487),_=a(493),N=a(492),I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[],loading:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.postId&&this.fetchComments()}},{key:"fetchComments",value:function(){var e=this;this.setState({loading:!0}),fetch("https://jsonplaceholder.typicode.com/posts/".concat(this.props.postId,"/comments")).then((function(e){return e.json()})).then((function(t){return e.setState({comments:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state.comments;return r.a.createElement(N.a.Group,null,e.map((function(t){return r.a.createElement(N.a,{key:t.id},r.a.createElement(N.a.Avatar,{src:"https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Author,{as:"a"},t.email),r.a.createElement(N.a.Metadata,null,r.a.createElement("div",null,t.name)),r.a.createElement(N.a.Text,null,e.body),r.a.createElement(N.a.Actions,null,r.a.createElement(N.a.Action,null,"Reply"))))})))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showComments:!1},a.onShowComments=function(){a.props.onClickPost(a.props.post),a.setState({showComments:!0})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.showComments,t=this.props,a=t.onClickPost,n=t.post;return r.a.createElement(_.a.Group,null,r.a.createElement(_.a,null,r.a.createElement(_.a.Content,null,r.a.createElement(_.a.Header,{onClick:function(){return a(n)},as:"a"},n.title),r.a.createElement(_.a.Meta,null,"Description"),r.a.createElement(_.a.Description,null,n.body),r.a.createElement(_.a.Extra,null,r.a.createElement("a",{onClick:this.onShowComments},"Comments")),e&&r.a.createElement(_.a.Extra,null,r.a.createElement(I,{postId:n.id})))))}}]),t}(n.Component);var T,P=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onSelectPost,a=e.posts,n=e.isFetching;return r.a.createElement(w.a,null,r.a.createElement("div",null,r.a.createElement(S.a,{active:n,inverted:!0},r.a.createElement(D.a,{inverted:!0},"Loading")),a.map((function(e){return r.a.createElement(x,{key:e.id,post:e,onClickPost:t})}))))}}]),t}(n.Component),A=(T=P,function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],loading:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"fetchPosts",value:function(){var e=this;this.setState({loading:!0}),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e.setState({posts:t,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.loading;return r.a.createElement(T,Object.assign({},this.props,{posts:t,isFetching:a}))}}]),t}(r.a.Component)),M=a(500),L=a(495),R=a(55),F=a(494),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={authorInfo:null,albums:[],loading:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.authorId&&(this.fetchAuthorInfo(),this.fetchAlbums())}},{key:"componentDidUpdate",value:function(e){this.props.authorId!==e.authorId&&(this.fetchAuthorInfo(),this.fetchAlbums())}},{key:"fetchAuthorInfo",value:function(){var e=this;this.setState({loading:!0}),fetch("https://jsonplaceholder.typicode.com/users/".concat(this.props.authorId)).then((function(e){return e.json()})).then((function(t){return e.setState({authorInfo:t,loading:!1})}))}},{key:"fetchAlbums",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/".concat(this.props.authorId,"/albums")).then((function(e){return e.json()})).then((function(t){return e.setState({albums:t})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.albums,n=e.authorInfo;return n?r.a.createElement(L.a,{className:"author-column"},r.a.createElement(S.a,{inverted:!0,active:t},r.a.createElement(D.a,{inverted:!0},"Loading...")),r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,n.name),r.a.createElement(L.a.Meta,null,r.a.createElement("span",{className:"date"},"username: ",n.username)),r.a.createElement(L.a.Meta,null,r.a.createElement("span",{className:"email"},"email: ",n.email)),r.a.createElement(L.a.Description,null,n.name," works in ",r.a.createElement("strong",null,n.company.name)),r.a.createElement(L.a.Meta,null,r.a.createElement("span",{className:"phone"},"phone: ",n.phone))),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(R.a,{name:"user"}),a.length," Albums")),r.a.createElement(L.a.Content,null,r.a.createElement(F.a,null,a.map((function(e){return r.a.createElement(F.a.Item,{key:e.id},e.title)}))))):r.a.createElement(M.a,null,"Select any post")}}]),t}(n.Component);U.defaultProps={authorId:null};n.Component;var q=a(247),X=(a(379),a(380),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).slider=r.a.createRef(),a.glider=null,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.glider=new q.a(this.slider.current,this.props.options).mount()}},{key:"componentDidUpdate",value:function(e){this.props.options!==e.options&&this.glider.update(this.props.options)}},{key:"componentWillUnmount",value:function(){this.glider.destroy()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.bullets;return r.a.createElement("div",{ref:this.slider,className:"glide"},r.a.createElement("div",{className:"glide__track","data-glide-el":"track"},r.a.createElement("ul",{className:"glide__slides"},t.map((function(e){return r.a.createElement("li",{className:"glide__slide"},e)})))),r.a.createElement("div",{className:"glide__arrows","data-glide-el":"controls"},r.a.createElement("button",{className:"glide__arrow glide__arrow--left","data-glide-dir":"<"},"prev"),r.a.createElement("button",{className:"glide__arrow glide__arrow--right","data-glide-dir":">"},"next")),a&&r.a.createElement("div",{className:"glide__bullets","data-glide-el":"controls[nav]"},t.map((function(e,t){return r.a.createElement("button",{className:"glide__bullet","data-glide-dir":"=".concat(t)})}))))}}]),t}(n.Component));X.defaultProps={bullets:!0};var G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).resetDraggable=function(){a.setState({isDragging:!1})},a.trackMousePosition=function(e){a.state.isDragging&&a.setState({x:e.pageX,y:e.pageY})},a.startDragging=function(e){var t=a.draggable.current,n=t.offsetLeft,r=t.offsetTop;a.setState({isDragging:!0,x:e.pageX,y:e.pageY,startX:e.pageX-n,startY:e.pageY-r})},a.state={isDragging:!1,x:0,y:0,startX:0,startY:0},a.draggable=r.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("mouseup",this.resetDraggable),window.addEventListener("mousemove",this.trackMousePosition)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.resetDraggable),window.removeEventListener("mousemove",this.trackMousePosition)}},{key:"render",value:function(){var e=this.state,t=e.x,a=e.y,n={position:"absolute",left:t-e.startX,top:a-e.startY};return r.a.createElement("div",{style:n,className:"draggable",onMouseDown:this.startDragging,ref:this.draggable},this.props.children)}}]),t}(n.Component);function H(){return r.a.createElement("div",{className:"cirlce"})}n.Component,n.Component;var V=r.a.createContext("light"),W=r.a.createContext("email@gmail.com"),Y=(a(381),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.context;return r.a.createElement("div",{className:"btn",style:{color:"light"===e?"black":"white",backgroundColor:"light"===e?"lightgrey":"black"}},"Click Me")}}]),t}(n.Component));Y.contextType=V;var B=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.context;return r.a.createElement("div",{className:e},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam odio deserunt magnam ut voluptatum, dolores autem, temporibus doloribus aspernatur quam natus rem perspiciatis iure tempore quisquam ducimus pariatur deleniti distinctio!",r.a.createElement(Y,null))}}]),t}(n.Component);B.contextType=V;n.Component;var $=a(8);r.a.Component;a(382);r.a.createContext({theme:"light",toggleTheme:function(){}}),a(248),a(3);var J=a(85),Q=a.n(J);Q.a.create({baseURL:"https://jsonplaceholder.typicode.com/"});a(477);a(490);var z=a(502);a(272),a(491),a(488),a(489);a(465);var K=a(503),Z=a(496),ee=a(68),te=(a(466),a(497),a(29));var ae=function(){return r.a.createElement(w.a,{className:"page"},r.a.createElement(z.a,null,"Welcome to the BlogV2"))},ne=Q.a.create({baseURL:"https://jsonplaceholder.typicode.com/"});function re(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object(n.useState)(t),c=Object($.a)(r,2),l=c[0],o=c[1],i=Object(n.useState)(null),u=Object($.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)(!1),p=Object($.a)(d,2),h=p[0],E=p[1];return Object(n.useEffect)((function(){a&&(E(!0),ne.get(e).then((function(e){E(!1),o(e.data)})).catch((function(e){E(!1),m(e.response)})))}),[e,a]),[l,h,s]}function ce(e){var t=e.postId,a=re("/posts/".concat(t,"/comments"),[]),n=Object($.a)(a,2),c=n[0];return n[1]?r.a.createElement(R.a,{name:"asterisk",loading:!0}):r.a.createElement(N.a.Group,null,c.map((function(e){return r.a.createElement(N.a,{key:e.id},r.a.createElement(N.a.Avatar,{src:"https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Author,null,r.a.createElement(te.b,{to:"/users/".concat(e.email)},e.email)),r.a.createElement(N.a.Text,null,e.body)))})))}function le(e){var t=e.post,a=Object(n.useState)(!1),c=Object($.a)(a,2),l=c[0],o=c[1],i=re("/users/".concat(t.userId),null,l),u=Object($.a)(i,1)[0];return r.a.createElement(_.a,null,r.a.createElement(_.a.Content,null,r.a.createElement(_.a.Header,{as:"a"},t.title),r.a.createElement(_.a.Description,null,t.body),r.a.createElement(_.a.Extra,null,r.a.createElement(te.b,{to:"/users/".concat(t.userId)},"Go to ",u?u.name:"Author")),r.a.createElement(_.a.Extra,{onClick:function(){return o(!l)}},"Comments"),l&&r.a.createElement(_.a.Extra,null,r.a.createElement(ce,{postId:t.id}))))}function oe(){var e=re("/posts",[]),t=Object($.a)(e,2),a=t[0],n=t[1];return r.a.createElement(w.a,{className:"page"},r.a.createElement(S.a,{active:n,inverted:!0},r.a.createElement(D.a,null)),r.a.createElement(_.a.Group,{className:"posts"},a.map((function(e){return r.a.createElement(le,{key:e.id,post:e})}))))}var ie=a(273);function ue(){var e=re("/users",[]),t=Object($.a)(e,2),a=t[0],n=t[1];return r.a.createElement(w.a,{className:"page"},r.a.createElement(S.a,{active:n,inverted:!0},r.a.createElement(D.a,null)),r.a.createElement(k.a,{className:"users",columns:4},a.map((function(e){return r.a.createElement(k.a.Column,null,r.a.createElement(L.a,{style:{width:"100%"}},r.a.createElement(ie.a,{src:"https://react.semantic-ui.com/images/avatar/large/matthew.png",wrapped:!0,ui:!1}),r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,r.a.createElement(te.b,{to:"/users/".concat(e.id),className:"email"},e.name)),r.a.createElement(L.a.Meta,null,r.a.createElement(te.b,{to:"/users/".concat(e.id),className:"email"},e.email)),r.a.createElement(L.a.Description,null,e.address.street," ",e.address.suite,", ",e.address.city)),r.a.createElement(L.a.Content,null)))}))))}function se(){var e=re("/albums",[]),t=Object($.a)(e,2),a=t[0],n=t[1];return r.a.createElement(w.a,{className:"page"},r.a.createElement(S.a,{active:n,inverted:!0},r.a.createElement(D.a,null)),r.a.createElement(_.a.Group,{className:"posts"},a.map((function(e){return r.a.createElement(_.a,null,r.a.createElement(_.a.Content,null,r.a.createElement(_.a.Header,null,e.title),r.a.createElement(_.a.Extra,null,r.a.createElement(te.b,{to:"/users/".concat(e.userId,"/albums/").concat(e.id)},"See photos"))))}))))}function me(){var e=Object(ee.g)(),t=e.userId,a=e.albumId,n=re("/albums/".concat(a),{}),c=Object($.a)(n,3),l=c[0],o=c[2],i=re("/albums/".concat(a,"/photos"),[]),u=Object($.a)(i,2),s=u[0],m=u[1];return o&&404===o.status?(console.log(o),r.a.createElement(ee.a,{to:"/users/".concat(t)})):r.a.createElement(w.a,{className:"page"},r.a.createElement(S.a,{inverted:!0,active:m},r.a.createElement(D.a,{active:!0})),r.a.createElement(z.a,null,l.title),s.length>0&&r.a.createElement(X,{options:{perView:3},bullets:!1},s.map((function(e){return r.a.createElement(ie.a,{src:e.url,rounded:!0})}))))}function de(){return r.a.createElement(w.a,{className:"page"},r.a.createElement(z.a,null,"404 Page not Found"))}function pe(){var e=Object(ee.g)().userId,t=Object(ee.h)(),a=t.path,n=t.url,c=re("/users/".concat(e),null),l=Object($.a)(c,2),o=l[0],i=l[1],u=re("/users/".concat(e,"/albums"),[]),s=Object($.a)(u,1)[0];return r.a.createElement(w.a,{className:"page"},r.a.createElement(S.a,{active:i||!o,inverted:!0},r.a.createElement(D.a,null)),o&&r.a.createElement(k.a,null,r.a.createElement(k.a.Column,{width:6},r.a.createElement(L.a,{fluid:!0},r.a.createElement(ie.a,{src:"https://react.semantic-ui.com/images/avatar/large/matthew.png",wrapped:!0,ui:!1}),r.a.createElement(L.a.Content,null,r.a.createElement(L.a.Header,null,o.name),r.a.createElement(L.a.Meta,null,r.a.createElement("span",{className:"email"},o.email)),r.a.createElement(L.a.Description,null,o.address.street," ",o.address.suite,", ",o.address.city)),r.a.createElement(L.a.Content,{extra:!0},r.a.createElement("a",null,r.a.createElement(R.a,{name:"user"}),s.length," Albums")),r.a.createElement(L.a.Content,null,r.a.createElement(F.a,null,s.map((function(e){return r.a.createElement(F.a.Item,{key:e.id},r.a.createElement(te.b,{to:"".concat(n,"/albums/").concat(e.id)},e.title))})))))),r.a.createElement(k.a.Column,{width:10},r.a.createElement(ee.d,null,r.a.createElement(ee.b,{exact:!0,path:a},r.a.createElement(z.a,{as:"h3"},"Select a album.")),r.a.createElement(ee.b,{path:"".concat(a,"/albums/:albumId"),exact:!0},r.a.createElement(me,null)),r.a.createElement(ee.b,{path:"*"},r.a.createElement(de,null))))))}Object(ee.i)((function(e){var t=e.location;return r.a.createElement(K.a,null,r.a.createElement(Z.a,{key:t.pathname.includes("/users/")?void 0:t.key,classNames:"fade",timeout:250},r.a.createElement(ee.d,{location:t},r.a.createElement(ee.b,{path:"/",exact:!0,component:ae}),r.a.createElement(ee.b,{path:"/posts",exact:!0,component:oe}),r.a.createElement(ee.b,{path:"/users",exact:!0,component:ue}),r.a.createElement(ee.b,{path:"/users/:userId",component:pe}),r.a.createElement(ee.b,{path:"/albums",exact:!0,component:se}),r.a.createElement(ee.b,{path:"*",component:de}))))}));var he=a(36),Ee=a(38),ve=a(270),fe=a.n(ve),be=a(137),ge=a(173),Oe=a.n(ge),ye=a(271);function je(e){return new Promise((function(t){setTimeout(t,e)}))}var Ce=function(e){return{type:"ADD_TODO_SUCCESS",payload:e}},ke={isLoading:!1,items:[{id:1,title:"Walk the dog",completed:!1},{id:2,title:"Make a dinner",completed:!1}]};var we=Object(Ee.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO_SUCCESS":return Object(o.a)({},e,{items:[t.payload].concat(Object(i.a)(e.items)),isLoading:!1});case"REMOVE_TODO":return Object(o.a)({},e,{items:e.items.filter((function(e){return e.id!==t.payload}))});case"UPDATED_TODO":return Object(o.a)({},e,{items:e.items.map((function(e){return e.id===t.payload.id?Object(o.a)({},e,{},t.payload):e}))});case"ADD_TODO_LOADING":return Object(o.a)({},e,{isLoading:!0});default:return e}},count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCEREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}}),Se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.d,De=Object(Ee.e)(we,Se(Object(Ee.a)(be.a,fe.a)));var _e=Object(he.b)((function(e){return{todos:e.todos.items,isLoading:e.todos.isLoading}}))((function(e){var t=e.todos,a=e.isLoading,n=e.dispatch;return r.a.createElement("div",null,a&&r.a.createElement("div",null,"Loading.."),t.map((function(e){return r.a.createElement("div",{key:e.id},e.title,"  ||||||  ",r.a.createElement("span",{onClick:function(){return n({type:"REMOVE_TODO",payload:e.id})}},"X"))})))}));var Ne=Object(he.b)(null,(function(e){return{addNewTodo:function(t){return e(function(e){return function(){var t=Object(ye.a)(Oe.a.mark((function t(a){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"ADD_TODO_LOADING"}),t.next=3,je(3e3);case 3:a(Ce(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.addNewTodo,a=Object(n.useState)(""),c=Object($.a)(a,2),l=c[0],o=c[1],i=Object(n.useCallback)((function(){t({id:Date.now(),title:l,completed:!1}),o("")}),[l,t]);return r.a.createElement("div",null,r.a.createElement("input",{value:l,onChange:function(e){return o(e.target.value)},type:"text"}),r.a.createElement("button",{onClick:i},"Add Todo"))}));function Ie(){return r.a.createElement(he.a,{store:De},r.a.createElement(Ne,null),r.a.createElement(_e,null))}var xe=Object(Ee.c)({selectedSubreddit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"reactjs",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SUBREDIT":return t.payload;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,items:[],error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_REQUEST":return Object(o.a)({},e,{error:null,isLoading:!0});case"FETCH_POSTS_SUCCESS":return Object(o.a)({},e,{isLoading:!1,items:t.payload});case"FETCH_POSTS_ERROR":return{isLoading:!1,items:[],error:t.payload};default:return e}}}),Te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ee.d;Object(Ee.e)(xe,Te(Object(Ee.a)(be.a)));var Pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[284,1,2]]]);
//# sourceMappingURL=main.829470b9.chunk.js.map