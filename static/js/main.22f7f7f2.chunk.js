(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{18:function(e,t,a){e.exports={postContainer:"PostCard_postContainer__eVvEg",postcard:"PostCard_postcard__3jYhV",commentInput:"PostCard_commentInput__2evis",postImage:"PostCard_postImage__EGj4i",username:"PostCard_username__3iMx3",status:"PostCard_status__27axQ",like:"PostCard_like__3-00p",likeItem:"PostCard_likeItem__3g2ji",statustem:"PostCard_statustem__2k7LH",likeCount:"PostCard_likeCount__3hHMd",likeSymbol:"PostCard_likeSymbol__4cP5u",commentSymbol:"PostCard_commentSymbol__1fmTm",footer:"PostCard_footer__ngHMI",date:"PostCard_date__1iNiB",image:"PostCard_image__dioD9",subscribe:"PostCard_subscribe__1AGWM"}},23:function(e,t,a){e.exports={form:"Registration_form__1LjYZ",btn:"Registration_btn__2FA-f",container:"Registration_container__1n0Nr",content:"Registration_content__1E9Cw",login:"Registration_login__1QBzr",register:"Registration_register__3j0km"}},29:function(e,t,a){e.exports={post:"Post_post__29K8Q",postInner:"Post_postInner__1xrQE",postImgBig:"Post_postImgBig__Q4oLS",image:"Post_image__3VnIY",postImage:"Post_postImage__1GzLD",postInfo:"Post_postInfo__3z9kw",username:"Post_username__WVFFq",like:"Post_like__1bKPS",commentInput:"Post_commentInput__2P6SL",footer:"Post_footer__2j9mn",likedInner:"Post_likedInner__282M0",likedHeader:"Post_likedHeader__3LyYO",likedContent:"Post_likedContent__2FwMS",likedItem:"Post_likedItem__3Shdm"}},43:function(e,t,a){e.exports=a(51)},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(41),l=a.n(c),i=(a(48),a(15)),s=a(12),u=a(8),o=a(42),m=a(21),d=a(11),b=a(30),v={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/firegram-main",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/firegram-main",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/firegram-main",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/firegram-main",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/firegram-main",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/firegram-main",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ID},f=Object(o.a)(v),p=Object(m.c)(f),E=Object(d.g)(f),O=Object(b.b)(f),j=d.k,g=a(0),h=a.n(g),_=a(3),k=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(u.a)(c,2),i=l[0],o=l[1],m=Object(s.g)();Object(n.useEffect)((function(){var e=Object(b.c)(O,(function(e){r(e||!1)}));return function(){return e()}}),[]);var v=function(){var e=Object(_.a)(h.a.mark((function e(t,a,n){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(O,a,n);case 3:return c=e.sent,e.next=6,Object(d.l)(Object(d.d)(E,"users",c.user.uid),{uid:c.user.uid,name:t,email:a,createdAt:d.a.fromDate(new Date)});case 6:r(c.user),o(!1),m("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),r(!1),o(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(_.a)(h.a.mark((function e(t,a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.d)(O,t,a);case 3:n=e.sent,r(n.user),o(!1),m("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r(!1),o(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}();return{user:a,error:i,signup:v,signout:function(){var e=Object(_.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)(O);case 2:m("/login");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signIn:f}},S=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1],l=null===O||void 0===O?void 0:O.currentUser;return Object(n.useEffect)((function(){if(e){var t=Object(d.d)(E,"users",e),a=Object(d.h)(t,(function(e){c({name:e.data().name||"",email:e.data().email||"",avatar:e.data().avatar||"",avatarPath:e.data().avatarPath||"",createdAt:e.data().createdAt||"",uid:e.data().uid||"",subscribes:e.data().subscribes||"",subscribers:e.data().subscribers||""})}));return function(){return a()}}}),[e,l]),{getProfileData:function(){var t=Object(_.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(d.d)(E,"users",e),t.next=3,Object(d.e)(a);case 3:return n=t.sent,t.abrupt("return",n.data());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),uploadImg:function(){var t=Object(_.a)(h.a.mark((function t(a,n,r){var c,l,i,s,u;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=Object(d.d)(E,"users",e||(null===O||void 0===O||null===(c=O.currentUser)||void 0===c?void 0:c.uid)),i=Object(m.d)(p,"avatar/".concat((new Date).getTime()," - ").concat(a.name)),t.prev=2,!n.avatarPath){t.next=6;break}return t.next=6,Object(m.a)(Object(m.d)(p,n.avatarPath));case 6:return t.next=8,Object(m.e)(i,a);case 8:return s=t.sent,t.next=11,Object(m.b)(Object(m.d)(p,s.ref.fullPath));case 11:return u=t.sent,t.next=14,Object(d.m)(l,{avatar:u,avatarPath:s.ref.fullPath});case 14:r(""),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),console.log(t.t0.message);case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e,a,n){return t.apply(this,arguments)}}(),deleteAvatar:function(){var t=Object(_.a)(h.a.mark((function t(a){var n,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=Object(d.d)(E,"users",e||(null===O||void 0===O||null===(n=O.currentUser)||void 0===n?void 0:n.uid)),!window.confirm("Delete avatar?")){t.next=9;break}return c=Object(m.d)(p,a.avatarPath),t.next=7,Object(m.a)(c);case 7:return t.next=9,Object(d.m)(r,{avatar:"",avatarPath:""});case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),updateProfileData:function(){var t=Object(_.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(d.d)(E,"users",e||(null===O||void 0===O||null===(n=O.currentUser)||void 0===n?void 0:n.uid)),t.prev=1,t.next=4,Object(d.m)(r,{name:a});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),data:r}},x=function(e){var t=e.user,a=e.image,n=e.name,c=e.classname,l=void 0===c?"":c,s=e.open,u=void 0!==s&&s,o=e.signout,m=void 0===o?function(e){return e}:o,d=e.handleLinkClick,b=void 0===d?function(e){return e}:d,v=l;return v+=u?" open":" close",r.a.createElement("div",{id:"menu",className:v},r.a.createElement("ul",null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/images",onClick:b},"\u0412\u0441\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")),r.a.createElement("li",null,r.a.createElement("div",{className:"nav_avatar "},r.a.createElement("img",{src:a||"https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png",alt:"avatar"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile/".concat(t.uid),onClick:b},n||"Profile")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login",className:"btn",onClick:function(){m(),b()}},"\u0412\u044b\u0439\u0442\u0438"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login",onClick:b},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/register",onClick:b},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))))},C=function(e){var t=e.open,a=e.setOpen,n=void 0===a?function(e){return e}:a;return r.a.createElement("button",{className:"styled-burger",open:t,onClick:function(){return n(!t)}},r.a.createElement("div",{style:{transform:function(){return t?"rotate(45deg)":"rotate(0)"}}}),r.a.createElement("div",{style:{opacity:function(){return t?"0":"1"},transform:function(){return t?"translateX(20px)":"translateX(0)"}}}),r.a.createElement("div",{style:{transform:function(){return t?"rotate(-45deg)":"rotate(0)"}}}))},N=function(e){var t=e.user,a=e.name,c=e.image,l=e.signout,i=Object(n.useState)(!1),s=Object(u.a)(i,2),o=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(C,{open:o,setOpen:m}),r.a.createElement(x,{classname:"styled-menu",user:t,name:a,image:c,signout:l,open:o,handleLinkClick:function(){return m(!1)}})))},I=function(){var e,t,a=k(null===O||void 0===O||null===(e=O.currentUser)||void 0===e?void 0:e.uid),c=a.user,l=a.signout,s=S(null===O||void 0===O||null===(t=O.currentUser)||void 0===t?void 0:t.uid).data,o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],b=m[1],v=Object(n.useState)(window.innerWidth),f=Object(u.a)(v,2),p=f[0],E=f[1],j=Object(n.useState)(""),g=Object(u.a)(j,2),h=g[0],_=g[1];return Object(n.useEffect)((function(){b(null===s||void 0===s?void 0:s.name),_(null===s||void 0===s?void 0:s.avatar)}),[s]),Object(n.useEffect)((function(){window.onresize=function(){E(window.innerWidth)}}),[]),r.a.createElement("nav",{id:"navbar"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram")))),p>768?r.a.createElement(x,{user:c,name:d,image:h,signout:l}):r.a.createElement(N,{user:c,name:d,image:h,signout:l})))},P=function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("h2",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},"Loading..."))},w=Object(n.createContext)(),y=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(u.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(!0),o=Object(u.a)(s,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){Object(b.c)(O,(function(e){i(e),d(!1)}))}),[]),m?r.a.createElement(P,null):r.a.createElement(w.Provider,{value:{user:l}},t)},U=function(e){var t=e.children;return Object(n.useContext)(w).user?t:r.a.createElement(s.a,{to:"/login"})},T=a(53),A=function(e){var t=e.docs,a=e.loading,n=void 0!==a&&a,c=e.setSelectedImage,l=void 0===c?function(e){return e}:c;return n?r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader_inner"})):r.a.createElement("div",{className:"img-grid"},t?t.map((function(e){return r.a.createElement(T.a.div,{layout:!0,whileHover:{opacity:1},className:"img-wrap",key:e.id,onClick:function(){return l(e)}},r.a.createElement(T.a.img,{src:e.url,alt:"uploaded picture",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})):r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader_inner"})))},D=a(18),L=a.n(D),R=function(e){var t,a=e.author,n=e.style,c=e.currentUser,l=e.subscribe,s=void 0===l?function(e){return e}:l,u=e.unsubscribe,o=void 0===u?function(e){return e}:u;return r.a.createElement(T.a.div,{className:L.a.username,style:n||""},r.a.createElement(T.a.img,{src:a.avatar||"https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png",alt:"avatar"}),r.a.createElement(T.a.p,null,r.a.createElement(i.b,{to:"/profile/".concat(a.uid)}," ",a.name)),r.a.createElement(T.a.div,null,(null===a||void 0===a?void 0:a.uid)!==(null===c||void 0===c?void 0:c.uid)&&r.a.createElement(r.a.Fragment,null,s&&!(null===c||void 0===c||null===(t=c.subscribes)||void 0===t?void 0:t.includes(null===a||void 0===a?void 0:a.uid))?r.a.createElement(T.a.span,{className:L.a.subscribe,onClick:function(){s(a)}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):r.a.createElement(T.a.span,{className:L.a.subscribe,onClick:function(){o(a)}},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))))},F=function(e){var t=e.img;return r.a.createElement(T.a.img,{className:L.a.postImage,src:t})},H=function(e){var t=e.author,a=e.selectedImage,c=e.postId,l=e.isAll,s=e.setLike,o=void 0===s?function(e){return e}:s,m=e.setSelectedPost,d=void 0===m?function(e){return e}:m,b=Object(n.useState)(a.like),v=Object(u.a)(b,2),f=v[0],p=v[1];return r.a.createElement(T.a.div,{className:L.a.status},r.a.createElement(T.a.div,{className:L.a.like},r.a.createElement(T.a.div,{className:L.a.likeItem},r.a.createElement(T.a.span,{className:L.a.likeSymbol,onClick:function(){o(c,t.uid),p(a.like+1)}},"\u2661")),r.a.createElement(T.a.div,{className:L.a.likeItem},r.a.createElement(i.b,{to:l?"/post/".concat(a.id):"/post/".concat(t.uid,"/").concat(a.id)},r.a.createElement(T.a.span,{className:L.a.commentSymbol,role:"img","aria-label":"comments"}," ","\ud83d\udcac")))),r.a.createElement(T.a.div,{className:L.a.statustem},r.a.createElement(T.a.span,{onClick:function(e){d(a)}},"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f: ",f||0)))},K=function(e){var t=e.postId,a=e.author,c=e.addComment,l=void 0===c?function(e){return e}:c,i=Object(n.useState)(""),s=Object(u.a)(i,2),o=s[0],m=s[1];return r.a.createElement("div",{className:L.a.commentInput},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(t,a,o),m("")}},r.a.createElement("input",{onChange:function(e){m(e.target.value)},value:o,placeholder:"Add a comment\u2026"})))},W=function(e){switch(e){case"Firebase: Error (auth/email-already-in-use).":return"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!";case"Firebase: Error (auth/invalid-email).":return"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email!";case"Firebase: Error (auth/internal-error).":return"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b!";case"Firebase: Error (auth/user-not-found).":return"\u0422\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0432\u0443\u0435\u0442!";case"Firebase: Error (auth/wrong-password).":return"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c!"}},B=function(e){var t=function(e){var t=e.getDate();t<10&&(t="0"+t);var a=e.getMonth()+1;a<10&&(a="0"+a);var n=e.getFullYear()%100;return n<10&&(n="0"+n),t+"."+a+"."+n}(e.author.createdAt.toDate());return r.a.createElement(T.a.div,{className:L.a.footer},r.a.createElement(T.a.p,{className:L.a.date},t))},z=a(29),M=a.n(z),V=function(e){var t=e.likedUsers,a=e.setSelectedPost,n=void 0===a?function(e){return e}:a;return r.a.createElement(T.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&n(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(T.a.div,{className:M.a.likedInner,initial:{y:"-100vh"},animate:{y:"10vh"}},r.a.createElement(T.a.div,{className:M.a.likedHeader},r.a.createElement("h1",null,'\u041e\u0442\u043c\u0435\u0442\u043a\u0438 "\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"')," "),r.a.createElement(T.a.div,{className:M.a.likedContent},t?r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:M.a.likedItem,key:e.uid},r.a.createElement(R,{author:e}))}))):null)))},G=function(e){var t=e.selectedImage,a=e.author,c=e.currentUser,l=e.isAll,i=e.setSelectedImage,s=void 0===i?function(e){return e}:i,o=e.subscribe,m=void 0===o?function(e){return e}:o,d=e.unsubscribe,b=void 0===d?function(e){return e}:d,v=e.setLike,f=void 0===v?function(e){return e}:v,p=e.addComment,E=void 0===p?function(e){return e}:p,O=Object(n.useState)(null),j=Object(u.a)(O,2),g=j[0],h=j[1];return r.a.createElement(T.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&s(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(T.a.div,{className:L.a.postcard,initial:{y:"-100vh"},animate:{y:"10vh"}},r.a.createElement(R,{author:a,currentUser:c,subscribe:m,unsubscribe:b}),r.a.createElement(F,{img:t.url}),r.a.createElement(H,{setLike:function(){f(t.postId,a.uid)},selectedImage:t,author:a,setSelectedPost:h,isAll:l}),r.a.createElement(K,{postId:t.postId,author:a,addComment:E}),r.a.createElement(B,{author:a})),g&&r.a.createElement(V,{likedUsers:t.likedUsers,setSelectedPost:h}))},Y=a(17),Q=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!0),i=Object(u.a)(l,2),s=i[0],o=i[1],m=S(O.currentUser.uid).data;return Object(n.useEffect)((function(){if(null===m||void 0===m?void 0:m.subscribes){var t,a=Object(d.c)(E,e);if(0===(null===m||void 0===m||null===(t=m.subscribes)||void 0===t?void 0:t.length))return c([]),void o(!1);var n=Object(d.j)(a,Object(d.i)("createdAt","desc"),Object(d.n)("uid","in",m.subscribes)),r=Object(d.h)(n,(function(e){var t=[];e.forEach((function(e){t.push(Object(Y.a)(Object(Y.a)({},e.data()),{},{id:e.id}))})),c(t),o(!1)}));return function(){return r()}}}),[e,m]),{docs:r,loading:s}},J=a(14),X=function(e,t){var a,r=Object(n.useState)(null),c=Object(u.a)(r,2),l=c[0],i=c[1],s=Object(n.useState)(!0),o=Object(u.a)(s,2),m=o[0],b=o[1],v=S(null===O||void 0===O||null===(a=O.currentUser)||void 0===a?void 0:a.uid).data;return Object(n.useEffect)((function(){if(e&&t){var a=Object(d.d)(E,"images",t,"photo",e),n=Object(d.h)(a,(function(e){i(e.data()),b(!1)}));return function(){return n()}}if(e){var r=Object(d.d)(E,"images",e),c=Object(d.h)(r,(function(e){i(e.data()),b(!1)}));return function(){return c()}}}),[e,t]),{docs:l,loading:m,setLike:function(){var e=Object(_.a)(h.a.mark((function e(t,a){var n,r,c,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(d.j)(Object(d.c)(E,"images"),Object(d.n)("postId","==",t)),e.next=3,Object(d.f)(n);case 3:return e.sent.forEach(function(){var e=Object(_.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(d.d)(E,"images",t.id),t.data().likedUsers.find((function(e){return e.uid===v.uid}))){e.next=10;break}return e.prev=2,e.next=5,Object(d.m)(a,{like:(t.data().like+=1)||1,likedUsers:[].concat(Object(J.a)(t.data().likedUsers),[v])});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()),r=Object(d.j)(Object(d.c)(E,"images",a,"photo"),Object(d.n)("postId","==",t)),e.next=8,Object(d.f)(r);case 8:return e.sent.forEach(function(){var e=Object(_.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(d.d)(E,"images",a,"photo",t.id),t.data().likedUsers.find((function(e){return e.uid===v.uid}))){e.next=10;break}return e.prev=2,e.next=5,Object(d.m)(n,{like:(t.data().like+=1)||1,likedUsers:[].concat(Object(J.a)(t.data().likedUsers),[v])});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()),c=Object(d.d)(E,"users",v.uid),e.next=13,Object(d.e)(c);case 13:if((l=e.sent).data().likedPosts.includes(t)){e.next=23;break}return e.prev=15,e.next=18,Object(d.m)(c,{likedPosts:l.data().likedPosts?[].concat(Object(J.a)(l.data().likedPosts),[t]):[t]});case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(15),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[15,20]])})));return function(t,a){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(_.a)(h.a.mark((function e(t,a,n){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(d.j)(Object(d.c)(E,"images"),Object(d.n)("postId","==",t)),e.next=3,Object(d.f)(r);case 3:return e.sent.forEach(function(){var e=Object(_.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(d.d)(E,"images",t.id),e.prev=1,!t.data()){e.next=5;break}return e.next=5,Object(d.m)(a,{comments:[].concat(Object(J.a)(t.data().comments),[{comment:n,author:v}])});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()),c=Object(d.j)(Object(d.c)(E,"images",a.uid,"photo"),Object(d.n)("postId","==",t)),e.next=8,Object(d.f)(c);case 8:e.sent.forEach(function(){var e=Object(_.a)(h.a.mark((function e(t){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(d.d)(E,"images",a.uid,"photo",t.id),c=t.data().comments?t.data().comments:[],e.prev=2,!t.data()){e.next=6;break}return e.next=6,Object(d.m)(r,{comments:[].concat(Object(J.a)(c),[{comment:n,author:v}])});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}());case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),subscribe:function(){var e=Object(_.a)(h.a.mark((function e(t){var a,n,r,c,l,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(d.d)(E,"users",null===O||void 0===O||null===(a=O.currentUser)||void 0===a?void 0:a.uid),e.next=3,Object(d.e)(r);case 3:if((c=e.sent).data().subscribes.includes(t.uid)){e.next=7;break}return e.next=7,Object(d.m)(r,{subscribes:[].concat(Object(J.a)(c.data().subscribes),[t.uid])});case 7:return l=Object(d.d)(E,"users",t.uid),e.next=10,Object(d.e)(l);case 10:if((i=e.sent).data().subscribers.includes(null===O||void 0===O||null===(n=O.currentUser)||void 0===n?void 0:n.uid)){e.next=14;break}return e.next=14,Object(d.m)(l,{subscribers:[].concat(Object(J.a)(i.data().subscribers),[null===O||void 0===O||null===(s=O.currentUser)||void 0===s?void 0:s.uid])});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unsubscribe:function(){var e=Object(_.a)(h.a.mark((function e(t){var a,n,r,c,l,i,s,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(d.d)(E,"users",null===O||void 0===O||null===(a=O.currentUser)||void 0===a?void 0:a.uid),e.next=3,Object(d.e)(r);case 3:if(!(c=e.sent).data().subscribes.includes(t.uid)){e.next=8;break}return l=c.data().subscribes.filter((function(e){return e!==t.uid})),e.next=8,Object(d.m)(r,{subscribes:l});case 8:return i=Object(d.d)(E,"users",t.uid),e.next=11,Object(d.e)(i);case 11:if(!(s=e.sent).data().subscribers.includes(null===O||void 0===O||null===(n=O.currentUser)||void 0===n?void 0:n.uid)){e.next=16;break}return u=s.data().subscribers.filter((function(e){var t;return e!==(null===O||void 0===O||null===(t=O.currentUser)||void 0===t?void 0:t.uid)})),e.next=16,Object(d.m)(i,{subscribers:u});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},q=function(){var e,t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Q("images"),s=i.docs,o=i.loading,m=X(),d=m.setLike,b=m.addComment,v=m.subscribe,f=m.unsubscribe,p=S(null===O||void 0===O||null===(e=O.currentUser)||void 0===e?void 0:e.uid).data,E=s.filter((function(e){return(null===e||void 0===e?void 0:e.email)===(null===c||void 0===c?void 0:c.email)}))[0];return o?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,0!==s.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{setSelectedImage:l,docs:s,loading:o}),c&&r.a.createElement(G,{selectedImage:c,setSelectedImage:l,author:E,setLike:d,currentUser:p,isAll:!0,subscribe:v,unsubscribe:f,addComment:b})):"\u041d\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a:(")},Z=function(e,t){var a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(!0),s=Object(u.a)(i,2),o=s[0],m=s[1];return Object(n.useEffect)((function(){var a;a=t?Object(d.c)(E,e,t,"photo"):Object(d.c)(E,e);var n=Object(d.j)(a,Object(d.i)("createdAt","desc")),r=Object(d.h)(n,(function(e){var t=[];e.forEach((function(e){t.push(Object(Y.a)(Object(Y.a)({},e.data()),{},{id:e.id}))})),l(t),m(!1)}));return function(){return r()}}),[e,t]),{docs:c,loading:o}},$=function(){var e,t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Z("images"),s=i.docs,o=i.loading,m=X(),d=m.setLike,b=m.addComment,v=m.subscribe,f=m.unsubscribe,p=S(null===O||void 0===O||null===(e=O.currentUser)||void 0===e?void 0:e.uid).data,E=s.filter((function(e){return(null===e||void 0===e?void 0:e.email)===(null===c||void 0===c?void 0:c.email)}))[0];return o?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{setSelectedImage:l,docs:s,loading:o}),c&&r.a.createElement(G,{selectedImage:c,setSelectedImage:l,author:E,setLike:d,addComment:b,currentUser:p,isAll:!0,subscribe:v,unsubscribe:f}))},ee=a(5),te=a(23),ae=a.n(te),ne=function(){var e=k(),t=e.error,a=e.signIn,c=Object(n.useState)({email:"",password:"",error:null,loading:!1}),l=Object(u.a)(c,2),s=l[0],o=l[1],m=s.email,d=s.password,b=s.error,v=s.loading,f=function(e){o(Object(Y.a)(Object(Y.a)({},s),{},Object(ee.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){t&&o(Object(Y.a)(Object(Y.a)({},s),{},{error:W(t),loading:!1}))}),[t,s]),r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.login},r.a.createElement("div",{className:ae.a.content},r.a.createElement("h1",null,"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("form",{className:ae.a.form,onSubmit:function(e){e.preventDefault(),o(Object(Y.a)(Object(Y.a)({},s),{},{error:null,loading:!0})),m&&d||o(Object(Y.a)(Object(Y.a)({},s),{},{error:"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b!"})),a(m,d)}},r.a.createElement("input",{type:"email",placeholder:"email",name:"email",value:m,onChange:f}),r.a.createElement("input",{type:"password",placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c",name:"password",value:d,onChange:f}),r.a.createElement("span",{className:ae.a.forget},"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),r.a.createElement("span",{className:ae.a.clearfix}),r.a.createElement("button",{disabled:v,className:ae.a.btn}," ",v?"\u0412\u0445\u043e\u0434...":"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("p",null,"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? - ",r.a.createElement(i.b,{to:"/register"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))),b?r.a.createElement("p",{className:"error"},b):null))},re=function(e){var t=e.comments,a=e.currentUser;return r.a.createElement("div",{className:"comments"},t?t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(R,{author:null===e||void 0===e?void 0:e.author,currentUser:a,style:{fontSize:"14px"}}),r.a.createElement("span",{className:"comment"},e.comment))})):null)},ce=function(){var e,t=Object(s.h)(),a=t.id,c=t.uid,l=S(null===O||void 0===O||null===(e=O.currentUser)||void 0===e?void 0:e.uid).data,i=X(a,c),o=i.docs,m=i.loading,d=i.setLike,b=i.addComment,v=i.subscribe,f=i.unsubscribe,p=S(null===o||void 0===o?void 0:o.uid).data,E=Object(n.useState)(null),j=Object(u.a)(E,2),g=j[0],h=j[1],_=Object(n.useState)(null),k=Object(u.a)(_,2),x=k[0],C=k[1],N=Object(n.useState)(null),I=Object(u.a)(N,2),w=I[0],y=I[1],U=Object(n.useState)(null),A=Object(u.a)(U,2),D=A[0],L=A[1];Object(n.useEffect)((function(){h(p),C(o),L(null===o||void 0===o?void 0:o.comments)}),[o,a,p,l]);var W=function(e){y(e)};return m?r.a.createElement(P,null):r.a.createElement("div",{className:M.a.post},r.a.createElement("div",{className:M.a.postInner},x&&g?r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a.div,{className:M.a.postImgBig},r.a.createElement(F,{img:x.url})),r.a.createElement(T.a.div,{className:M.a.postInfo},r.a.createElement(R,{author:g,subscribe:v,currentUser:l,unsubscribe:f}),r.a.createElement(H,{setLike:d,selectedImage:x,author:g,setSelectedPost:W,postId:a}),r.a.createElement(B,{author:g}),r.a.createElement(re,{comments:D,currentUser:l}),r.a.createElement(K,{addComment:function(e,t,a){b(e,t,a),L([].concat(Object(J.a)(D),[{author:t,text:a}]))},author:g,postId:x.postId})),w&&r.a.createElement(V,{likedUsers:x.likedUsers,setSelectedPost:W})):r.a.createElement(P,null)))},le=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",height:"25px",cursor:"pointer"},viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))},ie=function(e){var t=e.deleteImage,a=void 0===t?function(e){return e}:t;return r.a.createElement("svg",{onClick:a,xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",height:"25px",cursor:"pointer",color:"#f24957"},viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}))},se=function(e){var t=e.avatar,a=e.deleteImage,n=void 0===a?function(e){return e}:a,c=e.setImg,l=void 0===c?function(e){return e}:c;return r.a.createElement("div",{className:"img_container "},r.a.createElement("img",{src:t||"https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png",alt:"avatar"}),r.a.createElement("div",{className:"overlay"},n&&l&&r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"photo"},r.a.createElement(le,null)),t?r.a.createElement(ie,{deleteImage:n}):null,r.a.createElement("input",{type:"file",id:"photo",accept:"image/*",style:{display:"none"},onChange:function(e){return l(e.target.files[0])}}))))},ue=function(e){var t,a=e.user,n=e.id,c=e.active,l=e.setImg,s=void 0===l?function(e){return e}:l,u=e.deleteImage,o=void 0===u?function(e){return e}:u;return r.a.createElement("div",{className:"sidenav"},r.a.createElement("div",{className:"profile"},s&&o?r.a.createElement(se,{avatar:a.avatar,setImg:s,deleteImage:o}):r.a.createElement(se,{avatar:a.avatar}),r.a.createElement("div",{className:"name"},a.name),r.a.createElement("div",{className:"job"},a.email)),r.a.createElement("div",{className:"sidenav-url"},r.a.createElement("div",{className:"url"},r.a.createElement(i.b,{to:"/profile/".concat(n),className:"profile"===c?"active":""},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement("hr",{align:"center"})),(null===O||void 0===O||null===(t=O.currentUser)||void 0===t?void 0:t.uid)===n&&r.a.createElement("div",{className:"url"},r.a.createElement(i.b,{to:"/settings",className:"settings"===c?"active":""},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement("hr",{align:"center"}))))},oe=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u0412\u0430\u0448\u0438 \u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"),r.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f."))},me=function(e,t){var a=Object(n.useState)(0),r=Object(u.a)(a,2),c=r[0],l=r[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),o=s[0],b=s[1],v=Object(n.useState)(null),f=Object(u.a)(v,2),g=f[0],k=f[1],x=S(O.currentUser.uid).data;return Object(n.useEffect)((function(){var a=Object(m.d)(p,e.name),n=Object(d.c)(E,"images",O.currentUser.uid,"photo"),r=Object(m.f)(a,e);r.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;l(t)}),(function(e){return b(e)}),Object(_.a)(h.a.mark((function e(){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.b)(r.snapshot.ref);case 2:if(a=e.sent,c=j(),!x){e.next=8;break}return e.next=7,Object(d.b)(n,{url:a,createdAt:c,avatar:(null===x||void 0===x?void 0:x.avatar)||"",name:(null===x||void 0===x?void 0:x.name)||"",email:(null===x||void 0===x?void 0:x.email)||"",uid:O.currentUser.uid,like:0,postId:t,likedUsers:[]});case 7:k(a);case 8:case"end":return e.stop()}}),e)}))));var c=Object(d.c)(E,"images");return Object(_.a)(h.a.mark((function e(){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=7;break}return a=j(),e.next=4,Object(m.b)(r.snapshot.ref);case 4:return n=e.sent,e.next=7,Object(d.b)(c,{url:n,createdAt:a,avatar:(null===x||void 0===x?void 0:x.avatar)||"",name:(null===x||void 0===x?void 0:x.name)||"",email:(null===x||void 0===x?void 0:x.email)||"",uid:O.currentUser.uid,like:0,postId:t,likedUsers:[],comments:[]});case 7:case"end":return e.stop()}}),e)})))}),[e,x]),{progress:c,url:g,error:o}},de=function(e){var t=e.file,a=e.setFile,c=void 0===a?function(e){return e}:a,l=100*Math.random(),i=me(t,l),s=i.url,u=i.progress;return Object(n.useEffect)((function(){s&&c(null)}),[s,c]),r.a.createElement(T.a.div,{initial:{width:0},animate:{width:u+"%"},className:"progress-bar"})},be=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(u.a)(l,2),s=i[0],o=i[1],m=["image/png","image/jpeg"];return r.a.createElement("form",{className:"upload_form"},r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please select an image file (png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(de,{file:a,setFile:c})))},ve=function(){var e,t=Object(s.h)().id,a=Object(n.useState)(null),c=Object(u.a)(a,2),l=c[0],i=c[1],o=Object(n.useState)(null),m=Object(u.a)(o,2),d=m[0],b=m[1],v=Object(n.useState)([]),f=Object(u.a)(v,2),p=f[0],E=f[1],j=Z("images",t),g=j.docs,h=j.loading,_=S(t).data,k=X(t),x=k.setLike,C=k.addComment;return Object(n.useEffect)((function(){b(_),E(g)}),[_,t,g]),h?r.a.createElement(P,null):r.a.createElement("div",null,d&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{user:d,active:"profile",id:t}),t===(null===O||void 0===O||null===(e=O.currentUser)||void 0===e?void 0:e.uid)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null),r.a.createElement(be,null)),r.a.createElement("div",null,r.a.createElement(A,{setSelectedImage:i,docs:p,loading:h}),l&&r.a.createElement(G,{selectedImage:l,setSelectedImage:i,author:d,setLike:x,addComment:C,currentUser:_}))):"No data")},fe=function(e){var t=e.className,a=e.disabled,n=e.children;return r.a.createElement("button",{className:t,disabled:a},n)},pe=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:null,loading:!1}),t=Object(u.a)(e,2),a=t[0],c=t[1],l=k(),i=l.signup,s=l.error,o=function(e){c(Object(Y.a)(Object(Y.a)({},a),{},Object(ee.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){s&&c(Object(Y.a)(Object(Y.a)({},a),{},{error:W(s),loading:!1}))}),[s,a]);var m=a.name,d=a.email,b=a.password,v=a.error,f=a.loading;return r.a.createElement("div",{className:ae.a.container},r.a.createElement("div",{className:ae.a.register},r.a.createElement("div",{className:ae.a.content},r.a.createElement("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(Object(Y.a)(Object(Y.a)({},a),{},{loading:!0})),i(m,d,b),c({name:"",email:"",password:"",error:null,loading:!1})},className:ae.a.form},r.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",value:m,onChange:o}),r.a.createElement("input",{type:"email",placeholder:"email",name:"email",value:d,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",value:b,onChange:o}),r.a.createElement("span",{className:ae.a.clearfix}),r.a.createElement(fe,{className:ae.a.btn,disabled:f},f?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))),v?r.a.createElement("p",{className:"error"},v):null))},Ee=function(e){var t=e.user,a=S().updateProfileData,c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],s=l[1],o=Object(n.useState)(t.name),m=Object(u.a)(o,2),d=m[0],b=m[1];return r.a.createElement("div",{className:"main"},r.a.createElement("h2",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0440\u043e\u0444\u0438\u043b\u0435"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("i",{className:"fa fa-pen fa-xs edit",onClick:function(){s(!i)}}),r.a.createElement("div",null,i?r.a.createElement("div",null,r.a.createElement("input",{value:d,onChange:function(e){b(e.target.value)},className:"input"}),r.a.createElement("button",{className:"button",onClick:function(){a(d),s(!1)}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")):r.a.createElement("p",null,"\u0418\u043c\u044f: ",r.a.createElement("span",null,t.name))),r.a.createElement("div",null,r.a.createElement("p",null,"Email: ",r.a.createElement("span",null,t.email))),r.a.createElement("div",null,r.a.createElement("p",null,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d:",r.a.createElement("span",null,t.createdAt.toDate().toDateString())," ")))))},Oe=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),s=i[0],o=i[1],m=S(O.currentUser.uid),d=m.uploadImg,b=m.deleteAvatar,v=m.data;Object(n.useEffect)((function(){c(v),s&&d(s,a,o)}),[s,v]);return r.a.createElement("div",null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{user:a,setImg:o,deleteImage:function(){b(a)},active:"settings",id:O.currentUser.uid}),r.a.createElement(Ee,{user:a})):"No data")};var je=function(){var e=k().user;return r.a.createElement("div",{className:"App"},r.a.createElement(y,null,r.a.createElement(I,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(U,{user:e},r.a.createElement(q,null))}),r.a.createElement(s.b,{path:"/firegram-main",element:r.a.createElement(U,{user:e},r.a.createElement(q,null))}),r.a.createElement(s.b,{path:"/images",element:r.a.createElement($,null)}),r.a.createElement(s.b,{path:"/login",element:r.a.createElement(ne,null)}),r.a.createElement(s.b,{path:"/register",element:r.a.createElement(pe,null)}),r.a.createElement(s.b,{path:"/profile/:id",element:r.a.createElement(ve,null)}),r.a.createElement(s.b,{path:"/post/:uid/:id",element:r.a.createElement(ce,null)}),r.a.createElement(s.b,{path:"/post/:id",element:r.a.createElement(ce,null)}),r.a.createElement(s.b,{path:"/settings",element:r.a.createElement(U,{user:e},r.a.createElement(Oe,null))}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(je,null))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.22f7f7f2.chunk.js.map