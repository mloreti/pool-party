(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(55)},32:function(e,a,t){},33:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),u=(t(32),t(33),t(12)),o=t(7),i=t.n(o),m=t(11),s=t(4),p=t(16),f=t.n(p).a.initializeApp({apiKey:"AIzaSyAyIdR5rJ6p-JX5BVMeoksBURFgAs5mD5U",authDomain:"pool-party-app.firebaseapp.com",databaseURL:"https://pool-party-app.firebaseio.com",projectId:"pool-party-app",storageBucket:"pool-party-app.appspot.com",messagingSenderId:"875916367186",appId:"1:875916367186:web:71a4c5d40ff62bda"}),d=function(){return f.database().ref("players").once("value").then(function(e){return e.val()})},E=function(e){return f.database().ref("players/".concat(e)).once("value").then(function(e){return e.val()})},v=function(e){var a=e.name,t=f.database().ref("players/").push();return t.set({id:t.key,name:a})},y=t(24),b=t.n(y),h=function(e){return Object.keys(e).map(function(a){return e[a]})},O=function(e){var a=new Date(e);return b()(a).startOf().fromNow()},j=t(5);var S=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),u=Object(s.a)(l,2),o=u[0],p=u[1],f=function(){var e=Object(m.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:a=e.sent,c(h(a));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){f()},[]),r.a.createElement("div",{className:"Players"},r.a.createElement("h1",null,"Players"),r.a.createElement("input",{name:"name",value:o,onChange:function(e){p(e.currentTarget.value)},placeholder:"Player name"}),r.a.createElement("button",{onClick:function(){v({name:o}).then(function(){f()}),p("")}},"Add Player"),r.a.createElement("ul",null,t.map(function(e){var a=e.id,t=e.name;return r.a.createElement("li",{key:a},r.a.createElement(j.b,{to:"/players/".concat(a)},t))})))};var w=function(){return r.a.createElement("h1",null,"Home")},g=function(){return f.database().ref("games").once("value").then(function(e){return e.val()})},I=function(e){var a=e.player1Id,t=e.player2Id,n=e.player1Score,r=e.player2Score,c=e.winnerId,l=f.database().ref("games/").push();return l.set({time:p.database.ServerValue.TIMESTAMP,id:l.key,player1Id:a,player2Id:t,player1Score:n,player2Score:r,winnerId:c})},k=function(e){return f.database().ref("games/".concat(e)).remove()};var P=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)(function(){E(e).then(function(e){c(e.name)})},[e]),r},x=function(e){var a=e.id,t=P(a);return r.a.createElement(j.b,{to:"/players/".concat(a)},t)};t(54);var A=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),u=Object(s.a)(l,2),o=u[0],p=u[1],f=Object(n.useState)("Player 1"),E=Object(s.a)(f,2),v=E[0],y=E[1],b=Object(n.useState)("Player 2"),O=Object(s.a)(b,2),S=O[0],w=O[1],P=Object(n.useState)(0),A=Object(s.a)(P,2),G=A[0],N=A[1],C=function(){var e=Object(m.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:a=e.sent,c(h(a));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,p(h(a||[]));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){C(),T()},[]),r.a.createElement("div",{className:"Games"},r.a.createElement("h1",null,"Games"),r.a.createElement("h2",null,"Add Game"),r.a.createElement("h4",null,"Player 1"),r.a.createElement("form",null,r.a.createElement("select",{onChange:function(e){y(e.currentTarget.value)},value:v},r.a.createElement("option",{value:"Player 1",disabled:!0},"Select a player"),t.map(function(e){var a=e.id,t=e.name;return r.a.createElement("option",{key:a,value:a},t)})),r.a.createElement("label",null,"Score",r.a.createElement("input",{type:"number",value:G,max:17,min:0,onChange:function(e){return N(Number(e.currentTarget.value))}}))),r.a.createElement("h4",null,"Player 2"),r.a.createElement("form",null,r.a.createElement("select",{onChange:function(e){w(e.currentTarget.value)},value:S},r.a.createElement("option",{value:"Player 2",disabled:!0},"Select a player"),t.map(function(e){var a=e.id,t=e.name;return v!==a?r.a.createElement("option",{key:a,value:a},t):null})),"Score: ",17-G),r.a.createElement("button",{onClick:function(){var e=17-G;I({player1Id:v,player2Id:S,player1Score:G,player2Score:e,winnerId:G>e?v:S}),N(0),y("Player 1"),w("Player 2"),T()}},"Add Game"),r.a.createElement("h2",null,"History"),r.a.createElement("ol",null,o.map(function(e){return r.a.createElement("li",{className:"Game"},r.a.createElement(j.b,{to:"/games/".concat(e.id)},"Link to game"),r.a.createElement("div",null,r.a.createElement(x,{id:e.player1Id})," ",r.a.createElement("strong",null,e.player1Score)," vs"," ",r.a.createElement("strong",null,e.player2Score)," ",r.a.createElement(x,{id:e.player2Id})),r.a.createElement("div",null,"Winner:"," ",r.a.createElement("strong",null,r.a.createElement(x,{id:e.winnerId}))),r.a.createElement("div",null,r.a.createElement("span",{className:"remove",onClick:function(){return a=e.id,void k(a).then(function(){T()});var a}},"Remove X")))})))},G=function(e){var a=e.match,t=Object(n.useState)({id:"",name:""}),c=Object(s.a)(t,2),l=c[0],u=c[1],o=Object(n.useState)([]),p=Object(s.a)(o,2),f=p[0],d=p[1],v=a.params.id,y=function(){var e=Object(m.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,d(h(a||[]));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){y(),E(v).then(function(e){u(e)})},[v]);var b,j=(b=v,f.filter(function(e){return e.player1Id===b||e.player2Id===b}));return r.a.createElement("div",{className:"PlayerProfile"},r.a.createElement("h1",null,l.name),r.a.createElement("h2",null,"Games Played"),j.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,O(e.time)),r.a.createElement("div",null,"Opponent:"," ",e.player1Id===v?r.a.createElement(x,{id:e.player2Id}):r.a.createElement(x,{id:e.player1Id})),e.winnerId===v?"\u2705":"\u274c",e.player1Score," - ",e.player2Score)}))},N=function(e){var a=e.match.params.id,t=Object(n.useState)(),c=Object(s.a)(t,2),l=c[0],u=c[1];return Object(n.useEffect)(function(){var e;(e=a,f.database().ref("games/".concat(e)).once("value").then(function(e){return e.val()})).then(function(e){u(e)})},[a]),l?r.a.createElement("div",{className:"Game"},r.a.createElement("h1",null,"Game"),r.a.createElement("h4",null,O(l.time)),r.a.createElement("h4",null,"Winner: ",r.a.createElement(x,{id:l.winnerId})),r.a.createElement(x,{id:l.player1Id}),r.a.createElement("h1",null,l.player1Score),r.a.createElement(x,{id:l.player2Id}),r.a.createElement("h1",null,l.player2Score)):null};var C=function(){return r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:w}),r.a.createElement(u.b,{exact:!0,path:"/players",component:S}),r.a.createElement(u.b,{path:"/players/:id",component:G}),r.a.createElement(u.b,{exact:!0,path:"/games",component:A}),r.a.createElement(u.b,{path:"/games/:id",component:N}),r.a.createElement(u.a,{to:"/"}))};var T=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(j.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(j.b,{to:"/games"},"Games")),r.a.createElement("li",null,r.a.createElement(j.b,{to:"/players"},"Players"))))};var B=function(){return r.a.createElement(j.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null)),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.ce563ba0.chunk.js.map