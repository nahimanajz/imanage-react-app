(this["webpackJsonpimanage-react-app"]=this["webpackJsonpimanage-react-app"]||[]).push([[0],{53:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(2),a=n(20),r=n.n(a),i=(n(53),n(7)),l=(n(54),function(){return JSON.parse(localStorage.getItem("userInfo"))}),o=l()?{Authorization:"Bearer "+l().token}:null,j=l()?l().user.id:null,d=l()?l().user.name:null;var b=function(){return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"home-image",children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h2",{children:"iManage helps you to:"}),Object(c.jsxs)("ol",{children:[Object(c.jsx)("li",{children:"Record Your expenses"}),Object(c.jsx)("li",{children:"Manage Your personal loans "}),Object(c.jsx)("li",{children:"Know Your debits and Credits"})]})]}),Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",className:"wave f-w",children:Object(c.jsx)("path",{fill:"#28365567","fill-opacity":"1",d:"M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,74.7C840,53,960,75,1080,96C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"})})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("h1",{className:"content text-center mt-5",children:"Why imanage"}),Object(c.jsxs)("div",{className:"three-col",children:[Object(c.jsxs)("div",{className:"box animate",children:[Object(c.jsx)("h2",{className:"title text-center",children:"Expenses"}),Object(c.jsx)("p",{children:" Sometimes it's really confusing to know How you used your money"}),Object(c.jsx)("p",{children:"But it should no longer be a problem, iManage helps you to Calculate those expenditure"})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("h2",{className:"title text-center",children:"Debits"}),Object(c.jsx)("p",{children:"Calculate money you owe your friends and time to pay them before you look bad among them "})]}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("h2",{className:"title text-center",children:"Credits"}),Object(c.jsx)("p",{children:" Did anybody ask you to pay him then you don't recognize when ? and how much he gave you ?"}),Object(c.jsx)("p",{children:" Use imanage to say Good bye to the confusions like those"})]})]})]})]})},u=n(3),h=n(10),O=n(15),x=n(4),m=n.n(x),p=n(8),g=n(12),f=n.n(g),y="USER_REGISTER_REQUEST",v="USER_REGISTER_SUCCESS",S="USER_REGISTER_FAIL",E="USER_LOGIN_REQUEST",N="USER_LOGIN_SUCCESS",C="USER_LOGIN_FAIL",w="https://fathomless-taiga-31341.herokuapp.com/api",_=n(27),L=n.n(_),I=function(){return document.querySelector(".modal-bg").classList.add("open")},P=function(){return document.querySelector(".modal-bg").classList.remove("open")},T=function(){return document.querySelector(".sidebar").classList.toggle("open")},D=function(){return document.querySelector(".modal-sm").classList.toggle("active")},A=function(){return document.querySelector(".modal-sm").classList.remove("active")},k=function(e,t){!0===e.error?t.forEach((function(e){return i.a.error(e[1])})):i.a.success(e.message)},R=function(e){return L()(e).format("YYYY-MM-DD HH:mm:ss")},F=function(e){return 0===e?"No payment":e},U=n(48);var q=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)(""),l=Object(u.a)(i,2),o=l[0],j=l[1],d=Object(s.useState)(""),b=Object(u.a)(d,2),x=b[0],g=b[1],v=Object(s.useState)(""),E=Object(u.a)(v,2),N=E[0],C=E[1],_=Object(s.useState)(""),L=Object(u.a)(_,2),I=L[0],P=L[1],T=Object(s.useState)(""),D=Object(u.a)(T,2),A=D[0],R=D[1],F=Object(U.a)(),q=F.register,M=(F.handleSubmit,F.watch,F.errors),Y=Object(h.c)((function(e){return e.userRegister})),B=Y.loading,V=Y.userInfo,Q=Y.error,G=Object(h.b)(),X=e.location.search?e.location.search.split("=")[1]:"/register";return Object(s.useEffect)((function(){V&&e.history.push(X)}),[V]),Object(c.jsxs)("main",{children:[Object(c.jsx)("div",{className:"aside",children:Object(c.jsxs)("ul",{children:[B&&Object(c.jsx)("div",{children:"Please wait ..."}),Q&&Object(c.jsxs)("div",{children:[Q," "]})]})}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault();var t,n={name:a,email:o,phone:N,balance:x,password:I,password_confirmation:A};console.log(n),G((t=n,function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:y,payload:t}),e.prev=1,e.next=4,f.a.post(w+"/users",t);case 4:return c=e.sent,s=c.data,a=Object.entries(s.message),e.abrupt("return",k(s,a));case 10:e.prev=10,e.t0=e.catch(1),n({type:S,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},className:"container",children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsx)("li",{className:"text-center title",children:"Sign up "}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"  name "}),Object(c.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(e.target.value)},ref:q({required:!0,min:2})}),Object(c.jsx)("small",{children:M.name&&"Name is required"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"  Email "}),Object(c.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return j(e.target.value)},ref:q({required:!0,pattern:/^\S+@\S+$/i})}),Object(c.jsx)("small",{children:M.email&&"Email is required"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"phone",children:"  Phone "}),Object(c.jsx)("input",{type:"text",name:"phone",id:"phone",onChange:function(e){return C(e.target.value)},ref:q({min:9,max:11})}),Object(c.jsx)("small",{children:M.phone&&"Phone is required"})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"phone",children:"  Balance "}),Object(c.jsx)("input",{type:"text",name:"balance",id:"balance",onChange:function(e){return g(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return P(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"rePassword",children:"confirm Password"}),Object(c.jsx)("input",{type:"password",name:"password_confirmation",id:"password_confirmation",onChange:function(e){return R(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"button primary",type:"submit",children:" Register"})}),Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"flex-inline",children:[Object(c.jsx)("label",{children:"Already has an Account ?"}),Object(c.jsx)("label",{children:Object(c.jsx)(O.b,{to:"/login",className:"text-link",children:"   Sign in "})})]})})]})})]})};var M=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],l=Object(s.useState)(""),o=Object(u.a)(l,2),j=o[0],d=o[1],b=Object(h.b)();return Object(c.jsxs)("main",{children:[Object(c.jsx)("div",{className:"aside"}),Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault(),b(function(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(c){var s,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c({type:E,payload:{email:e,password:t}}),n.prev=1,n.next=4,f.a.post(w+"/auth/user",{email:e,password:t});case 4:s=n.sent,(a=s.data).error?i.a.error(a.message):(localStorage.setItem("userInfo",JSON.stringify(a)),c({type:N,payload:a.user}),window.location.assign("/expenses")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),i.a.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(a,j))},className:"container",children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsx)("li",{children:Object(c.jsx)("h2",{className:"text-center",children:"Login"})}),Object(c.jsx)("li",{}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"email",children:"  Email "}),Object(c.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return r(e.target.value)}})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return d(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"button primary",type:"submit",children:" Sign in"})}),Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"flex-inline",children:[Object(c.jsx)("label",{children:"New to iManage?"}),Object(c.jsx)("label",{children:Object(c.jsx)(O.b,{to:"/register",className:"text-link",children:"   Sign up "})})]})})]})})]})},Y="DEBIT_SAVE_SUCCESS",B="DEBIT_SAVE_FAIL",V="DEBIT_LIST_REQUEST",Q="DEBIT_LIST_SUCCESS",G="DEBIT_LIST_FAIL",X="DEBIT_PAY_REQUEST",H="DEBIT_PAY_SUCCESS",J="DEBIT_PAY_FAIL",z=n(13),K=function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)("ul",{className:"aside sidemenu white-box",children:Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(z.a,{height:"400px"}),"     "]})}),Object(c.jsx)("ul",{className:"container",children:Object(c.jsxs)("table",{className:"f-w white-box mr-3",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(z.a,{})," "]})]})}),Object(c.jsx)("tbody",{children:[1,3,4,5,2,2,2,2,2].map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("td",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("td",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("td",{children:[Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("td",{children:[" ",Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("td",{children:[" ",Object(c.jsx)(z.a,{})," "]}),Object(c.jsxs)("td",{children:[Object(c.jsx)(z.a,{})," "]})]})}))})]})})]})},W=n(21),Z=function(e,t,n){var c=t*n,s=c-n;return e.slice(s,c)},$=function(e){for(var t=e.dataPerPage,n=e.totalData,s=e.paginate,a=[],r=0;r<Math.ceil(n/t);r++)a.push(r);return Object(c.jsxs)("ul",{className:"f-w",style:{marginTop:"32px"},children:[" ",a.map((function(e){return Object(c.jsx)("li",{className:"page-item p-1",style:{padding:"16px"},children:Object(c.jsx)("a",{onClick:function(){return s(e)},className:"page-links",children:++e})},e)}))]})};var ee=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],l=Object(s.useState)(""),d=Object(u.a)(l,2),b=d[0],O=d[1],x=Object(s.useState)(""),g=Object(u.a)(x,2),y=g[0],v=g[1],S=Object(s.useState)(""),E=Object(u.a)(S,2),N=E[0],C=E[1],_=Object(s.useState)(""),L=Object(u.a)(_,2),T=L[0],U=L[1],q=Object(s.useState)(0),M=Object(u.a)(q,2),G=M[0],X=M[1],z=Object(h.c)((function(e){return e.debits})),ee=z.debits,te=z.isLoading,ne=z.error,ce=z.debitsLoading,se=z.debitsError,ae=Object(h.b)();Object(s.useEffect)((function(){return ae(function(){var e=Object(p.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:V}),e.prev=1,e.next=4,f.a.get("".concat(w,"/debits"),{headers:o});case 4:n=e.sent,c=n.data,t({type:Q,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:V,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var re=0,ie=Object(s.useState)(1),le=Object(u.a)(ie,2),oe=le[0],je=le[1],de=Object(s.useState)(7),be=Object(u.a)(de,1)[0];return ce?Object(c.jsx)(K,{}):Object(c.jsxs)("main",{children:[Object(c.jsxs)("ul",{className:"aside sidemenu white-box",children:[Object(c.jsx)("li",{children:" Debits"}),Object(c.jsx)("li",{onClick:I,children:"Add debits"})]}),Object(c.jsxs)("ul",{className:"container white-box",children:[se&&Object(c.jsx)("div",{children:se}),Object(c.jsxs)("table",{className:"f-w",id:"example",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"No"}),Object(c.jsx)("th",{children:"Debitor"}),Object(c.jsx)("th",{children:"phone"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Current Payment"}),Object(c.jsx)("th",{children:"Remaining Days To pay"}),Object(c.jsx)("th",{children:"Actions"})]})}),Object(c.jsx)("tbody",{children:ee&&ee.length>0&&Z(ee,oe,be).map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:++re}),Object(c.jsx)("td",{children:e.debitor}),Object(c.jsxs)("td",{children:[e.phone," "]}),Object(c.jsxs)("td",{children:[e.amount," "]}),Object(c.jsxs)("td",{children:[" ",F(e.payedAmount)]}),Object(c.jsxs)("td",{children:[" ",e.remainingDays]}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"button-sm",onClick:function(){return function(e){return D()?X(e.id):D()}(e)},children:"Edit"})})]},e.id)}))})]}),Object(c.jsx)($,{dataPerPage:be,totalData:ee.length,paginate:function(e){return je(e)}})]}),Object(c.jsx)("div",{className:"modal-bg",children:Object(c.jsxs)("div",{className:"modal white-box",children:[Object(c.jsxs)("div",{className:"bg-primary p-1",children:[Object(c.jsx)("span",{onClick:P,className:"close",children:Object(c.jsx)(W.a,{})}),Object(c.jsx)("h2",{className:"text-center",children:"Record A Debit"})]}),Object(c.jsxs)("div",{children:[te&&Object(c.jsx)("div",{children:"Loading ..."}),ne&&Object(c.jsxs)("div",{children:[" ",ne]})]}),Object(c.jsx)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,n={debitor:a,phone:b,timeToPay:R(y),amount:N,user_id:j};ae((t=n,function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(w,"/debits"),t,{headers:o});case 3:if(c=e.sent,s=c.data,a=Object.entries(s.message),!0!==s.error){e.next=10;break}return e.abrupt("return",k(s,a));case 10:n({type:Y,payload:s}),i.a.success(s.message);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),n({type:B,payload:e.t0.message}),i.a.error(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"debitor",children:"  Debitor "}),Object(c.jsx)("input",{type:"text",name:"debitor",id:"debitor",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"phone",children:"  Phone "}),Object(c.jsx)("input",{type:"phone",name:"phone",id:"phone",onChange:function(e){return O(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"amount",children:" Amount "}),Object(c.jsx)("input",{type:"number",name:"amount",id:"amount",onChange:function(e){return C(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"timeToPay",children:" Payment Date "}),Object(c.jsx)("input",{type:"datetime-local",name:"timeToPay",id:"timeToPay",onChange:function(e){return v(e.target.value)},required:!0})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"button bg-primary",type:"submit",children:"SAVE Debit"})})]})})]})}),Object(c.jsx)("div",{className:"modal-sm",children:Object(c.jsx)("form",{className:"form-container white-box",onSubmit:function(e){var t;A(),e.preventDefault(),ae((t={debit_id:G,amount:T},function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(w,"/pay/debit"),t,{headers:o});case 3:c=e.sent,s=c.data,n({type:H,payload:s}),i.a.success(s.message),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:J,payload:e.t0.message}),i.a.error(e.t0.message),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(c.jsxs)("ul",{className:"form",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Amount"}),Object(c.jsx)("input",{type:"text",name:"AmountToPay",onChange:function(e){return U(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn-sm",children:"Pay"})})]})})})]})},te="EXPENSE_SUCCESS_REQUEST",ne="EXPENSE_FAIL_REQUEST",ce="FECTCH_EXPENSES_REQUEST",se="FECTCH_EXPENSES_SUCCESS",ae="FECTCH_EXPENSES_FAIL";var re=function(e){var t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],l=Object(s.useState)(""),d=Object(u.a)(l,2),b=d[0],O=d[1],x=Object(s.useState)("DUMMY DESCRIPTION"),g=Object(u.a)(x,1)[0],y=Object(s.useState)(""),v=Object(u.a)(y,2),S=(v[0],v[1],Object(h.c)((function(e){return e.expenses}))),E=S.loading,N=S.error,C=S.expenses,_=S.expenseLoading,T=S.expensesError,D=Object(h.b)();Object(s.useEffect)((function(){return D(function(){var e=Object(p.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ce}),e.prev=1,e.next=4,f.a.get("".concat(w,"/expenses"),{headers:o});case 4:n=e.sent,c=n.data,t({type:se,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:ae,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var A=0,R=Object(s.useState)(1),F=Object(u.a)(R,2),U=F[0],q=F[1],M=Object(s.useState)(7),Y=Object(u.a)(M,1)[0];return E?Object(c.jsx)(K,{}):Object(c.jsxs)("main",{children:[Object(c.jsxs)("ul",{className:"aside sidemenu white-box",children:[Object(c.jsx)("li",{children:" Expenditures"}),Object(c.jsx)("li",{onClick:I,children:"Add expenditure"})]}),Object(c.jsxs)("ul",{className:"container white-box",children:[N&&Object(c.jsx)("div",{children:N}),Object(c.jsxs)("table",{className:"f-w example",id:"example",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"No"}),Object(c.jsx)("th",{children:"Date"}),Object(c.jsx)("th",{children:"Category"}),Object(c.jsx)("th",{children:"Amount"})]}),Object(c.jsx)("tbody",{children:C&&C.length>0&&Z(C,U,Y).map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[" ",++A," "]}),Object(c.jsxs)("td",{children:[L()(e.date).format("dddd, MMMM Do YYYY, h:mm:ss a")||e.created_At," "]}),Object(c.jsxs)("td",{children:[e.category,"  "]}),Object(c.jsxs)("td",{children:[e.amount,"  "]})]},e.id)}))})]}),Object(c.jsx)($,{dataPerPage:Y,totalData:C.length,paginate:function(e){return q(e)}})]}),Object(c.jsx)("div",{className:"modal-bg",children:Object(c.jsxs)("div",{className:"modal white-box",children:[Object(c.jsxs)("div",{className:"bg-primary p-1",children:[Object(c.jsxs)("span",{onClick:P,className:"close",children:[" ",Object(c.jsx)(W.a,{})]}),Object(c.jsx)("h2",{className:"text-center",children:"Record Expense"})]}),_&&Object(c.jsx)("div",{className:"warning",children:"expenseLoading"}),T&&Object(c.jsxs)("div",{className:"warning",children:[" ",T]}),Object(c.jsx)("form",{className:"container",onSubmit:function(e){e.preventDefault(),D(function(e,t,n,c){return function(){var s=Object(p.a)(m.a.mark((function s(a){var r,l,j;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,f.a.post("".concat(w,"/expenses"),{amount:e,category:t,user_id:n,description:c},{headers:o});case 3:if(r=s.sent,l=r.data,j=Object.entries(l.message),!0!==l.error){s.next=10;break}return s.abrupt("return",k(l,j));case 10:400===l.status?i.a.warning(l.message):(a({type:te,payload:l.expense}),i.a.success(l.message));case 11:s.next=17;break;case 13:s.prev=13,s.t0=s.catch(0),a({type:ne,payload:s.t0.message}),i.a.error(s.t0.message);case 17:case"end":return s.stop()}}),s,null,[[0,13]])})));return function(e){return s.apply(this,arguments)}}()}(a,b,j,g))},children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"amount",children:" Amount "}),Object(c.jsx)("input",{type:"text",name:"amount",id:"amount",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"category",children:"  Category "}),Object(c.jsx)("input",{type:"text",name:"category",id:"category",onChange:function(e){return O(e.target.value)},required:!0})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{type:"submit",className:"button bg-primary",children:"SAVE"})})]})})]})})]})},ie=n(9),le="CREDIT_SAVE_SUCCESS",oe="CREDIT_SAVE_FAIL",je="CREDIT_LIST_REQUEST",de="CREDIT_LIST_SUCCESS",be="CREDIT_LIST_FAIL",ue="CREDIT_PAY_REQUEST",he="CREDIT_PAY_SUCCESS",Oe="CREDIT_PAY_FAIL",xe=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),l=Object(u.a)(r,2),d=l[0],b=l[1],O=Object(s.useState)(""),x=Object(u.a)(O,2),g=x[0],y=x[1],v=Object(s.useState)(""),S=Object(u.a)(v,2),E=S[0],N=S[1],C=Object(h.b)();return Object(c.jsx)("div",{className:"modal-bg",children:Object(c.jsxs)("div",{className:"modal white-box",children:[Object(c.jsxs)("div",{className:"bg-primary p-1",children:[Object(c.jsx)("span",{onClick:P,className:"close",children:Object(c.jsx)(W.a,{})}),Object(c.jsx)("h2",{className:"text-center",children:"Record Credits"})]}),Object(c.jsx)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,c={creditor:n,phone:d,timeToPay:R(g),amount:E,user_id:j};C((t=c,function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(w+"/credits",t,{headers:o});case 3:if(c=e.sent,s=c.data,a=Object.entries(s.message),!0!==s.error){e.next=10;break}return e.abrupt("return",k(s,a));case 10:400===s.status?i.a.warning(s.message):(n({type:le,payload:s}),i.a.success(s.message));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:oe,payload:e.t0.message}),i.a.error("message",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(c.jsxs)("ul",{className:"form-container",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"Creditor",children:"  Creditor "}),Object(c.jsx)("input",{type:"text",name:"creditor",id:"creditor",onChange:function(e){return a(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"phone",children:"  Phone "}),Object(c.jsx)("input",{type:"phone",name:"phone",id:"phone",onChange:function(e){return b(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"amount",children:" Amount "}),Object(c.jsx)("input",{type:"number",name:"amount",id:"amount",onChange:function(e){return N(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{htmlFor:"timeToPay",children:" Payment Date "}),Object(c.jsx)("input",{type:"date",name:"timeToPay",id:"timeToPay",onChange:function(e){return y(e.target.value)},required:!0})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"button bg-primary",type:"submit",children:"SAVE Credit"})})]})})]})})};var me=function(e){var t=Object(s.useState)(0),n=Object(u.a)(t,2),a=n[0],r=n[1],l=Object(s.useState)(1),j=Object(u.a)(l,2),d=j[0],b=j[1],O=Object(h.c)((function(e){return e.credits})),x=O.credits,g=O.creditsLoading,y=Object(h.b)();Object(s.useEffect)((function(){y(function(){var e=Object(p.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:je}),e.prev=1,e.next=4,f.a.get(w+"/credits",{headers:o});case 4:n=e.sent,c=n.data,t({type:de,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:je,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var v=0,S=Object(s.useState)(1),E=Object(u.a)(S,2),N=E[0],C=E[1],_=Object(s.useState)(7),L=Object(u.a)(_,1)[0];return g?Object(c.jsx)(K,{}):Object(c.jsxs)("main",{children:[Object(c.jsxs)("ul",{className:"aside sidemenu white-box",children:[Object(c.jsx)("li",{children:" Credits"}),Object(c.jsx)("li",{onClick:I,children:"Add Credits"})]}),Object(c.jsxs)("ul",{className:"container mr-3 white-box",children:[Object(c.jsxs)("table",{className:"f-w",id:"example",children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"No"}),Object(c.jsx)("th",{children:"Creditor"}),Object(c.jsx)("th",{children:"phone"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Current Payment"}),Object(c.jsx)("th",{children:"Remaining Days To pay"}),Object(c.jsx)("th",{children:"Actions"})]}),Object(c.jsx)("tbody",{children:x&&x.length>0&&Z(x,N,L).map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[" ",++v," "]}),Object(c.jsxs)("td",{children:[e.creditor," "]}),Object(c.jsxs)("td",{children:[e.phone," "]}),Object(c.jsxs)("td",{children:[e.amount," "]}),Object(c.jsxs)("td",{children:[" ",F(e.payedAmount)," "]}),Object(c.jsxs)("td",{children:[" ",e.remainingDays," "]}),Object(c.jsxs)("td",{children:[" ",Object(c.jsx)("button",{className:"button-sm",onClick:function(){return function(e){return D()?r(e.id):D()}(e)},children:"Edit"})," "]})]},e.id)}))})]}),Object(c.jsx)($,{dataPerPage:L,totalData:x.length,paginate:function(e){return C(e)}})]}),Object(c.jsx)(xe,{}),Object(c.jsxs)("div",{className:"modal-sm",children:[Object(c.jsx)("div",{className:"modal-content",children:Object(c.jsx)("form",{className:"form-container white-box",onSubmit:function(e){var t;A(),e.preventDefault(),y((t={credit_id:a,amount:d},function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post(w+"/pay/credit",t,{headers:o});case 3:c=e.sent,s=c.data,n({type:he,payload:s}),i.a.success(s.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:Oe,payload:e.t0.message}),i.a.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(c.jsxs)("ul",{className:"form",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Amount"}),Object(c.jsx)("input",{type:"text",name:"amountToPay",onChange:function(e){return b(e.target.value)}})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn-sm",type:"submit",children:"Pay"})})]})})}),","]})]})},pe=n(45),ge=n(46),fe=function(){return null!==d?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("ul",{className:"menu-item",children:[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(O.b,{to:"credits",class:"menu",children:" Credits "})," "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(O.b,{to:"debits",class:"menu",children:" Debits "}),"  "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(O.b,{to:"expenses",class:"menu",children:" Expense "}),"  "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(O.b,{to:"Income",class:"menu",children:" Income "}),"  "]})]}),Object(c.jsx)("ul",{className:"menu-item",children:Object(c.jsxs)("li",{children:[" ",Object(c.jsxs)(O.b,{to:"expenses",children:[" ",Object(c.jsx)(pe.a,{onClick:T,className:"menu"})," "]})," "]})})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("ul",{className:"menu-item",children:Object(c.jsxs)("li",{children:[" ",Object(c.jsx)(O.b,{to:"/register",class:"menu",children:" Join"}),"   "]})}),Object(c.jsxs)("ul",{className:"menu-item",children:[" ",Object(c.jsxs)("li",{children:[Object(c.jsxs)(O.b,{to:"login",class:"menu",children:[" ",Object(c.jsx)(ge.a,{})," "]}),"  "]})]})]})},ye=function(){var e=Object(s.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)("Rwf"),l=Object(u.a)(r,2),d=l[0],b=l[1],O=Object(h.c)((function(e){return e.deposits})),x=O.error,g=(O.deposits,Object(h.b)());return Object(c.jsxs)("main",{children:[" ",x&&Object(c.jsxs)("div",{children:[" ",x]}),Object(c.jsx)("div",{className:"modal-content",children:Object(c.jsx)("form",{className:"form-container white-box",onSubmit:function(e){var t;e.preventDefault(),g((t={amount:n,currency:d,user_id:j},function(){var e=Object(p.a)(m.a.mark((function e(n){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(w,"/deposit"),t,{headers:o});case 3:return c=e.sent,s=c.data,n({type:" INCOME_SAVE_SUCCESS ",payload:s}),e.abrupt("return",k(s,s.message));case 9:e.prev=9,e.t0=e.catch(0),i.a.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(c.jsxs)("ul",{className:"form",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Amount"}),Object(c.jsx)("input",{type:"number",name:"amount",onChange:function(e){return a(e.target.value)},required:!0})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("label",{children:"Currecy"}),Object(c.jsx)("input",{type:"text",name:"currency",value:d,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn-sm",type:"submit",children:"Record Income"})})]})})})]})};i.a.configure();var ve=function(e){return Object(c.jsxs)(O.a,{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"header f-w bg-primary",children:[Object(c.jsx)("ul",{className:"logo",children:Object(c.jsx)(O.b,{to:"/homepage",className:"menu",children:"iManage"})}),Object(c.jsx)(fe,{})]}),Object(c.jsxs)("aside",{className:"sidebar",children:[Object(c.jsx)(W.a,{onClick:T,size:32}),Object(c.jsx)("ul",{className:"menu-item",children:Object(c.jsx)("li",{className:"menu",onClick:function(){localStorage.clear("userInfo"),document.location.href="/homepage"},children:" logout"})})]}),Object(c.jsxs)("footer",{className:"footer bg-primary",children:["Developed By ",Object(c.jsx)("a",{href:"janvierdev.netlify.app",children:"  \xa9 Janvier"})]})]}),Object(c.jsx)(ie.a,{path:"/homepage",component:b}),Object(c.jsx)(ie.a,{path:"/",component:b,exact:"true"}),Object(c.jsx)(ie.a,{path:"/register",component:q}),Object(c.jsx)(ie.a,{path:"/login",component:M}),Object(c.jsx)(ie.a,{path:"/debits",component:ee}),Object(c.jsx)(ie.a,{path:"/credits",component:me}),Object(c.jsx)(ie.a,{path:"/expenses",component:re}),Object(c.jsx)(ie.a,{path:"/income",component:ye})]})},Se=n(22),Ee=n(47),Ne=n(6),Ce={expenses:[],loading:!1,error:null,expenseLoading:!1,expensesError:null},we={debits:[],isLoading:!1,error:null,debitsLoading:!1,debitsError:null,isPayLoading:!1,payError:null},_e={credits:[],isLoading:!1,error:null,creditsLoading:!1,creditsError:null,isPayLoading:!1,payError:null},Le=(n(83).act,{loading:!1,deposits:[],error:null}),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCOME_SAVE_SUCCESS":return{loading:!1,deposits:[].concat(Object(Ne.a)(e.deposits),[t.payload])};case"INCOME_SAVE_FAIL":return{loading:!1,error:t.payload};default:return e}},Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Se.d,Te=Object(Se.c)({userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case S:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{isLoading:!0};case N:return{isLoading:!1,userInfo:t.payload};case C:return{isLoading:!1,error:t.payload};default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return{loading:!0,expenses:[]};case se:return{loading:!1,expenses:t.payload};case ae:return{loading:!1,error:t.payload};case te:return console.log("data from reducer",t.payload),{expenseLoading:!1,expenses:[].concat(Object(Ne.a)(e.expenses),[t.payload])};case ne:return{expenseLoading:!1,expensesError:t.payload};default:return e}},debits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{isLoading:!1,debits:[].concat(Object(Ne.a)(e.debits),[t.payload.debit])};case B:return{isLoading:!1,error:t.payload};case V:return{debitsLoading:!0,debits:[]};case Q:return{debitsLoading:!1,debits:t.payload};case G:return{debitsLoading:!1,debitsError:t.payload};case X:return{isPayLoading:!0,debits:[]};case H:return{isPayLoading:!1,debits:e.debits};case J:return{isPayLoading:!1,payError:t.payload};default:return e}},credits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return{isLoading:!1,credits:[].concat(Object(Ne.a)(e.credits),[t.payload.Credit])};case oe:return{isLoading:!1,error:t.payload};case je:return{creditsLoading:!0,credits:[]};case de:return{creditsLoading:!1,credits:t.payload};case be:return{creditsLoading:!1,creditsError:t.payload.message};case ue:return{isPayLoading:!0,credits:[]};case he:return{isPayLoading:!1,credits:e.credits};case Oe:return{isPayLoading:!1,payError:t.payload};default:return e}},deposits:Ie}),De=Object(Se.e)(Te,{},Pe(Object(Se.a)(Ee.a)));r.a.render(Object(c.jsx)(h.a,{store:De,children:Object(c.jsx)(ve,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.5659bcd5.chunk.js.map