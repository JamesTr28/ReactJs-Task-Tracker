(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),u=n(23),i=n(6),j=n(12),b=n(11),d=n(1),l=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(d.jsxs)("button",{onClick:r,className:"btn",style:{backgroundColor:t},children:[" ",n]})};l.defaultProps={color:"steelblue"};var O=l,f=n(2),h=function(e){e.title;var t=e.onAdd,n=e.showAdd,r=Object(f.e)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Task Tracker"}),"/"===r.pathname&&Object(d.jsx)(O,{color:n?"red":"green",text:n?"Close":"Add",onClick:t})]})};h.defaultProps={title:"Task Tracker"};var p=h,x=n(8);var v=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("p",{children:" Copyright \xa9 2021"}),Object(d.jsx)(x.b,{to:"/about",children:"About"})]})};var k=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h4",{children:"Version 1.0.0"}),Object(d.jsx)(x.b,{to:"/",children:"Go Back"})]})},m=n(22),g=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(d.jsxs)("h3",{children:[" ",t.text," ",Object(d.jsx)(m.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsx)(g,{task:e,onDelete:n,onToggle:r},e.id)}))})},T=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(b.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(b.a)(o,2),i=u[0],j=u[1],l=Object(r.useState)(!1),O=Object(b.a)(l,2),f=O[0],h=O[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:i,reminder:f}),s(""),j(""),h(!1)):alert("Please add task!")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:" Task "}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:" Day & Time "}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control  forn-control-check",children:[Object(d.jsx)("label",{children:" Set Reminder "}),Object(d.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w="https://my-json-server.typicode.com/JamesTr28/task-tracker-json";var C=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(b.a)(a,2),l=s[0],O=s[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var h=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,O([].concat(Object(u.a)(l),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/tasks/".concat(t),{method:"DELETE"});case 2:O(l.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n,r,c,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch(w+"/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,O(l.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(p,{onAdd:function(){return c(!n)},showAdd:n}),Object(d.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(d.jsxs)(d.Fragment,{children:[n&&Object(d.jsx)(T,{onAdd:m}),l.length>0?Object(d.jsx)(y,{tasks:l,onDelete:g,onToggle:C}):"No Tasks To Show"]})}}),Object(d.jsx)(f.a,{path:"/about",component:k}),Object(d.jsx)(v,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x.a,{children:Object(d.jsx)(C,{})})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.e0ec4fbe.chunk.js.map