(this.webpackJsonpproductive=this.webpackJsonpproductive||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(8),s=n.n(r),a=(n(14),n(3)),o=n.p+"static/media/ph.93572040.png",l=n.p+"static/media/intro.44cb6585.mp3",d=n.p+"static/media/the_loop.dd76c723.mp3",u=n(0),j=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("header",{className:n,children:[Object(u.jsx)("img",{src:o,alt:"productive"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Productive"}),Object(u.jsx)("p",{children:"your life managment app"}),n?null:Object(u.jsx)("span",{onClick:function(e){var t=document.getElementById("introMusic");t.volume=.8,t.play();var n=document.getElementById("backMusic");n.volume=.4,setTimeout((function(){return n.play()}),7500),e.target.style.animation="fadeOutLeft 3s",setTimeout((function(){return i("retract")}),2800)},children:" Let's Go! "})]}),Object(u.jsx)("audio",{id:"introMusic",children:Object(u.jsx)("source",{src:l,type:"audio/mpeg"})}),Object(u.jsx)("audio",{id:"backMusic",loop:!0,children:Object(u.jsx)("source",{src:d,type:"audio/mpeg"})})]})},b=n.p+"static/media/reminderSFX.c5d0d3e2.mp3",m=n(4),O=n(2),p=function(e){var t=e.note,n=e.notes,c=e.updateNotes,i=function(e){var i=e.target.className,r=e.target.textContent.trim();c(n.map((function(e){return e!==t?e:Object(O.a)(Object(O.a)({},e),{},Object(m.a)({},i,r))})))};return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsx)("h2",{className:"title",contentEditable:!0,onBlur:i,suppressContentEditableWarning:!0,children:t.title}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{contentEditable:!0,onBlur:i,className:"content",suppressContentEditableWarning:!0,children:[" ",t.content," "]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(e){e.target.parentElement.style.animation="fadeOutLeft 1s",setTimeout((function(){return c(n.filter((function(e){return e!==t})))}),600)},children:"Delete"})]})},h=i.a.memo(p),x=function(e){var t=e.list,n=e.lists,c=e.updateLists,i=t.listType.slice(t.listType.search("-")+1),r=function(e){c(n.map((function(n){if(n!==t)return n;var c=n.content.map((function(t){return t.id===e.target.id?{item:t.item,isChecked:!t.isChecked,id:t.id}:t}));return Object(O.a)(Object(O.a)({},n),{},{content:c})})))},s={color:"#e0e0de",textDecoration:"line-through"};return Object(u.jsxs)("div",{className:"listCard",children:[Object(u.jsx)("h2",{className:"title",children:t.title}),Object(u.jsx)("hr",{}),"unordred"===t.listType?Object(u.jsx)("ul",{children:t.content.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("label",{style:e.isChecked?s:{},children:[Object(u.jsx)("input",{type:"checkbox",id:e.id,checked:e.isChecked,onChange:r,value:e.item}),e.item]})},e.id)}))}):Object(u.jsx)("ol",{style:{listStyleType:i},children:t.content.map((function(e){return Object(u.jsxs)("li",{children:[" ",e.item," "]},e.id)}))}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(e){e.target.parentElement.style.animation="fadeOutLeft 1s",setTimeout((function(){return c(n.filter((function(e){return e!==t})))}),600)},children:"Delete"})]})},f=i.a.memo(x),g=function(e){var t=e.reminder,n=e.reminders,c=e.updateReminders,i=e.playAlert,r=new Date(t.date).getTime()-Date.now();return r>0&&setTimeout((function(){i().then((function(){return setTimeout((function(){return alert("it's time for "+t.title)}),700)}))}),r),Object(u.jsxs)("div",{className:"reminder"+(r>0?"":" passed"),children:[Object(u.jsx)("h2",{className:"title",children:t.title}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{children:["to be done at ",t.date.replace("T"," > ")]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(e){e.target.parentElement.style.animation="fadeOutLeft 1s",setTimeout((function(){return c(n.filter((function(e){return e!==t})))}),600)},children:"Delete"})]})},v=i.a.memo(g),y=n(9),k=function(e){var t=e.forms,n=e.reset,i=e.setStock,r=e.stock,s=Object(c.useState)(""),o=Object(a.a)(s,2),l=o[0],d=o[1],j=Object(c.useState)(""),b=Object(a.a)(j,2),p=b[0],h=b[1],x=Object(c.useState)(""),f=Object(a.a)(x,2),g=f[0],v=f[1],k=Object(c.useState)(""),S=Object(a.a)(k,2),C=S[0],N=S[1],T=null,w=new Date(Date.now()-60*(new Date).getTimezoneOffset()*1e3).toISOString();for(var L in t)t[L]&&(T=L);var D=function(e){switch(e.target.name){case"title":d(e.target.value);break;case"listType":h(e.target.value);break;case"body":v(e.target.value);break;case"date":N(e.target.value);break;default:console.log("non applicable")}};return Object(u.jsxs)("div",{className:"item-form",children:[Object(u.jsx)("span",{onClick:function(){d(""),h(""),v(""),n(Object(O.a)(Object(O.a)({},t),{},Object(m.a)({},T,!1)))},className:"exit",children:"X"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=T,s="list"!==c?g:g.trim().split("\n").map((function(e,t){return{item:e,isChecked:!1,id:c+(Math.floor(Date.now()/3e3)+t)}})),a={title:l,listType:p,content:s,date:C,id:c+Math.floor(Date.now()/3e3)},o=Object(y.a)(r[c+"s"]);switch(o.push(a),c){case"note":i.updateNotes(o);break;case"list":i.updateLists(o);break;case"reminder":i.updateReminders(o.sort((function(e,t){return new Date(e.date)-new Date(t.date)})));break;default:console.log("not added")}d(""),h(""),v(""),n(Object(O.a)(Object(O.a)({},t),{},Object(m.a)({},T,!1)))},children:[Object(u.jsx)("input",{name:"title",maxLength:"30",placeholder:"set a title",value:l,onChange:D,required:!0,autoFocus:!0}),"list"===T&&Object(u.jsxs)("select",{value:p,onChange:D,name:"listType",required:!0,children:[Object(u.jsx)("option",{value:"",children:"choose your List type"}),Object(u.jsx)("option",{value:"unordred",children:"unordred"}),Object(u.jsx)("option",{value:"ordered-decimal",children:"ordred - regular numbers"}),Object(u.jsx)("option",{value:"ordered-upper-roman",children:"ordered - roman numbers"})]}),"reminder"===T?null:Object(u.jsx)("textarea",{name:"body",onChange:D,value:g,placeholder:"list"===T?"separate your list items into separate lines":"your note content",required:!0}),"reminder"===T&&Object(u.jsx)("input",{type:"datetime-local",min:w.slice(0,w.lastIndexOf(":")),value:C,onChange:D,name:"date",required:!0}),Object(u.jsx)("input",{type:"submit",value:"Save"})]})]})},S=function(e){var t=e.stock,n=e.setStock,r=Object(c.useState)({note:!1,list:!1,reminder:!1}),s=Object(a.a)(r,2),o=s[0],l=s[1],d=Object(c.useState)("Add"),j=Object(a.a)(d,2),b=j[0],p=j[1];return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsxs)("aside",{onClick:function(e){if("DIV"===e.target.nodeName){var t=e.target.textContent.toLowerCase();l(Object(O.a)(Object(O.a)({},o),{},Object(m.a)({},t,!0)))}p("Add"===b?"Undo":"Add"),document.querySelector(".options").classList.toggle("show")},style:"Add"===b?{}:{backgroundColor:"#99001c"},children:[b,Object(u.jsxs)("div",{className:"options",children:[Object(u.jsx)("div",{children:"Note"}),Object(u.jsx)("div",{children:"List"}),Object(u.jsx)("div",{children:"Reminder"})]})]}),Object.values(o).includes(!0)&&Object(u.jsx)(k,{forms:o,reset:l,stock:t,setStock:n})]})},C=function(e){var t=e.data,n=Object(c.useState)(t.notes),i=Object(a.a)(n,2),r=i[0],s=i[1],o=Object(c.useState)(t.lists),l=Object(a.a)(o,2),d=l[0],j=l[1],m=Object(c.useState)(t.reminders),O=Object(a.a)(m,2),p=O[0],x=O[1];document.addEventListener("visibilitychange",(function(e){var t=JSON.stringify({notes:r,lists:d,reminders:p});localStorage.setItem("data",t)}));var g=function(){var e=document.getElementById("alertSFX");return e.volume=.3,e.play()};return Object(u.jsxs)("main",{children:[Object(u.jsxs)("section",{children:[Object(u.jsxs)("h2",{children:["NOTES ",Object(u.jsx)("sup",{children:"editable*"})]}),Object(u.jsx)("div",{className:"container",children:r.map((function(e){return Object(u.jsx)(h,{note:e,notes:r,updateNotes:s},e.id)}))})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"LISTS"}),Object(u.jsx)("div",{className:"container",children:d.map((function(e){return Object(u.jsx)(f,{list:e,lists:d,updateLists:j},e.id)}))})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("h2",{children:["Reminders ",Object(u.jsx)("sup",{children:"automatically arranged*"})]}),Object(u.jsx)("div",{className:"container",children:p.map((function(e){return Object(u.jsx)(v,{reminder:e,reminders:p,updateReminders:x,playAlert:g},e.id)}))})]}),Object(u.jsx)(S,{setStock:{updateLists:j,updateNotes:s,updateReminders:x},stock:{notes:r,lists:d,reminders:p}}),Object(u.jsx)("audio",{id:"alertSFX",children:Object(u.jsx)("source",{src:b,type:"audio/mpeg"})})]})},N=function(){return Object(u.jsx)("footer",{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/ali-khaled-130013/",target:"_blank",rel:"noreferrer",children:"Website App Developer"})})};var T=function(){localStorage.getItem("data")||localStorage.setItem("data",JSON.stringify({notes:[],lists:[],reminders:[]}));var e=JSON.parse(localStorage.getItem("data"));return Object(u.jsxs)(i.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(C,{data:e}),Object(u.jsx)(N,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(T,{}),document.getElementById("root")),w(console.log)}},[[16,1,2]]]);
//# sourceMappingURL=main.9cb1fef0.chunk.js.map