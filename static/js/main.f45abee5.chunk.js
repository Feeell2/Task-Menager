(this["webpackJsonptask-menager"]=this["webpackJsonptask-menager"]||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),c=a.n(r),l=(a(63),a(33)),i=a(34),o=a(44),u=a(35),m=a(46),k=a(6),d=function(e){return{type:"CHANGE_TASKS_ARRAY",payload:e}},f=Object(k.b)((function(e){return{toggleOpen:e.toggleOpen}}),(function(e){return{toggleNav:function(){return e({type:"CLOSE_NAV"})}}}))((function(e){var t=e.toggleNav,a=e.toggleOpen;return s.a.createElement("div",{className:"header__Hamburger",onClick:function(){return t()}},a.toggleOpen?s.a.createElement("i",{className:"fas fa-times"}):s.a.createElement("i",{className:"fas fa-bars"}))})),p=a(18),E=a(19),b=Object(k.b)((function(e){return{toggleOpen:e.toggleOpen}}),(function(e){return{toggleNav:function(){return e({type:"CLOSE_NAV"})}}}))((function(e){var t=e.toggleNav,a=e.toggleOpen;return s.a.createElement("nav",{className:a.toggleOpen?"showMenu":"hideMenu"},s.a.createElement("ul",{className:"nav__Menu"},s.a.createElement("li",{className:"nav__Menu__Link"},s.a.createElement(p.b,{exact:!0,onClick:function(){return t()},to:"/"},"Strona startowa")),s.a.createElement("li",{className:"nav__Menu__Link"},s.a.createElement(p.b,{onClick:function(){return t()},to:"/addProject"},"Dodaj projekt")),s.a.createElement("li",{className:"nav__Menu__Link"},s.a.createElement(p.b,{onClick:function(){return t()},to:"/manageTasks"},"Zarz\u0105dzaj zadaniami")),s.a.createElement("li",{className:"nav__Menu__Link"},s.a.createElement(p.b,{onClick:function(){return t()},to:"/checkTasks"},"Sprawd\u017a zadania"))))})),g=a(36),T=a(65),h=a.n(T),_=(a(78),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addTask=function(e){e.preventDefault();var t={startDate:a.state.startDate.toLocaleDateString(),titleTask:a.state.titleTask,describeTask:a.state.describeTask};a.setState((function(e){return{titleTask:"",describeTask:"",startDate:new Date,counter:e.counter+1}})),a.props.dispatchAddToSaved(d(t))},a.handleInputChange=function(e){var t=e.target,n=t.value,s=t.name;a.setState(Object(g.a)({},s,n))},a.handleInputDate=function(e){a.setState({startDate:e})},a.state={startDate:new Date,titleTask:"",describeTask:"",counter:0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"form"},s.a.createElement("label",{htmlFor:"titleTask",className:"form_title"},"Wpisz nazw\u0119 projektu"),s.a.createElement("input",{type:"text",name:"titleTask",className:"form_titleInput",value:this.state.titleTask,onChange:this.handleInputChange}),s.a.createElement("label",{htmlFor:"describeTask",className:"form_title"},"Wpisz nazw\u0119 projektu"),s.a.createElement("textarea",{name:"describeTask",className:"form_describeTextarea",value:this.state.describeTask,onChange:this.handleInputChange}),s.a.createElement(h.a,{selected:this.state.startDate,onChange:this.handleInputDate,className:"form_DataPicker",dateFormat:"dd/MM/yyyy"}),s.a.createElement("button",{className:"form_button",onClick:this.addTask.bind(this)},"Dodaj")))}}]),t}(s.a.Component)),O=Object(k.b)(null,(function(e){return{dispatchAddToSaved:function(t){return e(d(t))}}}))(_),N=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(O,null))},v=function(e){return s.a.createElement("li",{className:"Task"},s.a.createElement("h3",{className:"Task_title"},e.titleTask),s.a.createElement("p",{className:"Task_description"},e.describeTask),s.a.createElement("p",{className:"Task_time"}," ",e.startDate," "),s.a.createElement("button",{className:"Task_button",onClick:e.click,index:e.index,style:e.style},"Zrobione"))},j={height:"80vh"},C=Object(k.b)((function(e){return{tasks3:e.tasks3}}),{})((function(e){var t=e.tasks3;return s.a.createElement("div",{className:"CheckTasks"},s.a.createElement("ul",{className:"ToDoTable",style:j},s.a.createElement("h2",{className:"ToDoTable_title"},"WYKONANE"),t.tasks3.map((function(e){return s.a.createElement(v,{key:t.tasks3.indexOf(e),titleTask:e.titleTask,describeTask:e.describeTask,startDate:e.startDate,index:t.tasks3.indexOf(e),style:{display:"none"}})}))))})),y=Object(k.b)((function(e){return{tasks:e.tasks}}),(function(e){return{addToCheck:function(t){return e({type:"CHANGE_TO_TASK_ARRAY",index:t})}}}))((function(e){var t=e.tasks,a=e.addToCheck,n=function(e){var t=e.currentTarget.getAttribute("index");a(t)};return s.a.createElement("ul",{className:"ToDoTable"},s.a.createElement("h2",{className:"ToDoTable_title"},"Do zrobienia"),t.tasks.map((function(e){return s.a.createElement(v,{key:t.tasks.indexOf(e),titleTask:e.titleTask,describeTask:e.describeTask,startDate:e.startDate,click:n,index:t.tasks.indexOf(e)})})))})),D=Object(k.b)((function(e){return{tasks2:e.tasks2}}),(function(e){return{addCheck:function(t){return e({type:"CHANGE_TO_CHECK_ARRAY",index:t})}}}))((function(e){var t=e.tasks2,a=e.addCheck,n=function(e){var t=e.currentTarget.getAttribute("index");a(t)};return s.a.createElement("ul",{className:"ToDoTable"},s.a.createElement("h2",{className:"ToDoTable_title"},"do zatwierdzienia"),t.tasks2.map((function(e){return s.a.createElement(v,{key:t.tasks2.indexOf(e),titleTask:e.titleTask,describeTask:e.describeTask,startDate:e.startDate,click:n,index:t.tasks2.indexOf(e)})})))})),A=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"manageTask_title"},"Zarz\u0105dzanie zadaniami"),s.a.createElement("div",{className:"manageTask"},s.a.createElement(y,null),s.a.createElement(D,null)))},x=a(61),z=a.n(x),w=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(z.a,{className:"mainText",text:"Witaj w mened\u017cerze zada\u0144",speed:"180",eraseDelay:9999999e4})," ",s.a.createElement(z.a,{className:"secondText",text:"Mo\u017cesz tutaj stworzy\u0107 projekt i roz\u0142o\u017cy\u0107 go na poszczeg\xf3lne zadania",speed:"180",eraseDelay:9999999e4}))},S=function(){return s.a.createElement("h1",null,"Strona nie istnieje")},M=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,null),s.a.createElement("section",{className:"main-page__section"},s.a.createElement(E.c,null,s.a.createElement(E.a,{path:"/",exact:!0,component:w,className:"greeting"}),s.a.createElement(E.a,{path:"/addProject",component:N}),s.a.createElement(E.a,{path:"/checkTasks",component:C}),s.a.createElement(E.a,{path:"/manageTasks",component:A}),s.a.createElement(E.a,{component:S}))))},R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{basename:"/Task-Menager"},s.a.createElement("div",null,s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"header__logo"},"Task Manager"),s.a.createElement(f,null)),s.a.createElement("main",{className:"Main-page"},s.a.createElement(M,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(20),I=a(26),F=a(30),L={tasks:[],tasks2:[],tasks3:[]},K={toggleOpen:!1},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TASKS_ARRAY":return Object(F.a)({},e,{tasks:[].concat(Object(I.a)(e.tasks),[t.payload.payload])});case"CHANGE_TO_TASK_ARRAY":var a=parseInt(t.index);return Object(F.a)({},e,{tasks2:[].concat(Object(I.a)(e.tasks2),Object(I.a)(e.tasks.splice(a,1))),tasks:e.tasks.filter((function(e){return e!==a}))});case"CHANGE_TO_CHECK_ARRAY":var n=parseInt(t.index);return Object(F.a)({},e,{tasks3:[].concat(Object(I.a)(e.tasks3),Object(I.a)(e.tasks2.splice(n,1))),tasks2:e.tasks2.filter((function(e){return e!==n}))});default:return e}},Y=Object(H.combineReducers)({tasks:W,tasks2:W,tasks3:W,toggleOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLOSE_NAV":return Object(F.a)({},e,{toggleOpen:!e.toggleOpen});default:return e}}}),G=a(67),P=Object(H.createStore)(Y,Object(G.composeWithDevTools)());c.a.render(s.a.createElement(k.a,{store:P},s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){},68:function(e,t,a){e.exports=a(123)}},[[68,1,2]]]);
//# sourceMappingURL=main.f45abee5.chunk.js.map