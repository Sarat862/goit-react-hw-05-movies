"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{776:function(e,t,r){r.d(t,{Df:function(){return i},TP:function(){return s},V0:function(){return p},tx:function(){return f},zv:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(44).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3dd1fe04673ec54a7a07b66c5de36e89"}}),i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},399:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(885),u=r(757),c=r.n(u),i=r(791),s=r(731),o="SearchMovies_form__Aa9iv",f="SearchMovies_input__1c5BI",p="SearchMovies_btn__u-Chb",v=r(184);function l(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,v.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),""!==u.trim()&&(t(u),c(""))},children:[(0,v.jsx)("input",{className:f,type:"text",value:u,autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){c(e.target.value.toLowerCase())}}),(0,v.jsx)("button",{type:"submit",className:p,children:"Search"})]})}var h=r(776),m=r(639),d=r(510);function x(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],o=(0,i.useState)(!1),f=(0,a.Z)(o,2),p=f[0],x=f[1],w=(0,i.useState)(null),_=(0,a.Z)(w,2),b=_[0],k=_[1],g=(0,s.lr)(),j=(0,a.Z)(g,2),y=j[0],S=j[1],Z=y.get("query");(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),k(null),e.next=5,(0,h.V0)(Z);case 5:t=e.sent,u(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();Z&&e()}),[Z]);return(0,v.jsxs)("main",{children:[(0,v.jsx)(l,{onSubmit:function(e){S({query:e})}}),p&&(0,v.jsx)(m.a,{}),b&&(0,v.jsx)("p",{children:"Something went wrong"}),r.length>0&&(0,v.jsx)(d.e,{movies:r})]})}},639:function(e,t,r){r.d(t,{a:function(){return c}});var n=r(691),a="Loader_loader__+lRPl",u=r(184);function c(){return(0,u.jsx)("div",{className:a,children:(0,u.jsx)(n.s5,{strokeColor:"red",strokeWidth:"5",animationDuration:"0.75",width:"60",visible:!0})})}},510:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(731),a=r(470),u="MovieList_link_movie__rDLlx",c=r(184);function i(e){var t=e.movies,r=(0,a.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:r},className:u,children:a})},t)}))})}}}]);
//# sourceMappingURL=399.c9083612.chunk.js.map