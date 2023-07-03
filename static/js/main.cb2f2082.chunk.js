(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),i=n(23),u=n(6),j=n(12),d=n(11),b=n(1),l=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsxs)("button",{onClick:r,className:"btn",style:{backgroundColor:t},children:[" ",n]})};l.defaultProps={color:"steelblue"};var h=l,p=n(2),O=function(e){e.title;var t=e.onAdd,n=e.showAdd,r=Object(p.e)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:"Task Tracker"}),"/"===r.pathname&&Object(b.jsx)(h,{color:n?"red":"green",text:n?"Close":"Add",onClick:t})]})};O.defaultProps={title:"Task Tracker"};var f=O,x=n(8);var m=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:" Copyright \xa9 2021"}),Object(b.jsx)(x.b,{to:"/about",children:"About"})]})};var k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Version 1.0.0"}),Object(b.jsx)(x.b,{to:"/",children:"Go Back"})]})},v=n(22),y=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(b.jsxs)("h3",{children:[" ",t.text," ",Object(b.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(b.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(y,{task:e,onDelete:n,onToggle:r},e.id)}))})},T=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1],l=Object(r.useState)(!1),h=Object(d.a)(l,2),p=h[0],O=h[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:p}),s(""),j(""),O(!1)):alert("Please add task!")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:" Task "}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:" Day & Time "}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control  forn-control-check",children:[Object(b.jsx)("label",{children:" Set Reminder "}),Object(b.jsx)("input",{type:"checkbox",checked:p,value:p,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var w=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),l=s[0],h=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O=function(){var e=Object(j.a)(Object(u.a)().mark((function e(){var t,n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/JamesTr28/task-tracker-json/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/JamesTr28/task-tracker-json/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/JamesTr28/task-tracker-json/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,h([].concat(Object(i.a)(l),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/JamesTr28/task-tracker-json/tasks/".concat(t),{method:"DELETE"});case 2:h(l.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(Object(u.a)().mark((function e(t){var n,r,c,a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("https://my-json-server.typicode.com/JamesTr28/task-tracker-json/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,h(l.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(x.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f,{onAdd:function(){return c(!n)},showAdd:n}),Object(b.jsx)(p.a,{path:"/",exact:!0,render:function(e){return Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(T,{onAdd:y}),l.length>0?Object(b.jsx)(g,{tasks:l,onDelete:w,onToggle:C}):"No Tasks To Show"]})}}),Object(b.jsx)(p.a,{path:"/about",component:k}),Object(b.jsx)(m,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.cb2f2082.chunk.js.map