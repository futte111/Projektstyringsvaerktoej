(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{55:function(e,t,a){e.exports=a(88)},60:function(e,t,a){},62:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(27),c=a.n(r),o=(a(60),a(61),a(62),a(16)),i=a(23),m=a(29),u=a.n(m),s=a(18),E=a.n(s),d=a(8),h=a.n(d),k=a(91),p=a(90),b=a(17),f=a.n(b),g=a(33),v=a.n(g),y=a(12),w=a.n(y),S=a(22),j=a.n(S),C=a(49),x=a(50),I=a(5),N=function(){function e(){var t=this;Object(C.a)(this,e),this.stakeholders=[],this.newStakeholderName="",this.newStakeholderEmail="",this.addStakeHolder=function(){t.postStakeholder(),t.newStakeholderName="",t.newStakeholderEmail=""},this.message=function(e){alert("this is something"+e)},this.getStakeholders()}return Object(x.a)(e,[{key:"getStakeholders",value:function(){var e=this;console.log("fetching"),fetch("https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder").then((function(t){return t.json().then((function(t){console.log(t),e.stakeholders=t}))}))}},{key:"deleteStakeholder",value:function(e,t){var a="https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder/"+e+"/"+t;console.log("fetching"),fetch(a,{method:"POST"}).then((function(a){return a.json().then((function(a){console.log(a),console.log("deleted stakeholder with name and email "+e+"  and "+t)}))}))}},{key:"postStakeholder",value:function(){var e=this;console.log("posting"),fetch("https://projektstyringsvaerktoej.herokuapp.com/rest/stakeholder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:this.newStakeholderName,email:this.newStakeholderEmail})}).then((function(){return e.getStakeholders()}))}}]),e}();Object(I.g)(N,{stakeholders:I.l,newStakeholderName:I.l,newStakeholderEmail:I.l});var L=new N,O=Object(i.f)(Object(o.a)((function(e){var t=e.history;return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,null,n.a.createElement(E.a,null,n.a.createElement(h.a,null,n.a.createElement(k.a,{bg:"light",expand:"lg"},n.a.createElement(k.a.Brand,null,"Projektstyringsv\xe6rkt\xf8j"),n.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"})))),n.a.createElement(E.a,null,n.a.createElement(h.a,null," ",n.a.createElement(p.a,null,n.a.createElement(p.a.Item,null,n.a.createElement(p.a.Link,null,"Identificer Stakeholders"),n.a.createElement(p.a.Link,{onClick:function(){return t.push("/keystakeholdercomponent")}},"Identificer Key Stakeholders"),n.a.createElement(p.a.Link,null,"Project Scope Statement"),n.a.createElement(p.a.Link,null,"Identificer arbejdsopgaver"),n.a.createElement(p.a.Link,null,"Identificer risici"),n.a.createElement(p.a.Link,null,"Vurder risici"),n.a.createElement(p.a.Link,null,"Im\xf8dekom risici"),n.a.createElement(p.a.Link,null,"Closing Checklist")))),n.a.createElement(h.a,{xs:6}," ",n.a.createElement(f.a,{style:{width:"33.6rem"}},n.a.createElement(f.a.Body,null,n.a.createElement(f.a.Title,null,"Identificer Stakeholders"),n.a.createElement(f.a.Text,null,"I dette afsnit skal du identificere dine Stakeholders. En Stakeholder kan v\xe6re en person eller organisation, der vil blive p\xe5virket af projektet, enten negativt eller positivt."))),n.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Navn p\xe5 Stakeholder"),n.a.createElement("th",null,"E-mail p\xe5 Stakeholder"),n.a.createElement("th",null," "))),n.a.createElement("tbody",null,L.stakeholders.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,t+1),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.email),n.a.createElement("td",null,n.a.createElement(j.a,{style:{position:"relative",zIndex:"10000000"},variant:"outline-primary",onClick:function(){L.deleteStakeholder(e.name,e.email)}}," x ")))})),n.a.createElement("tr",null,n.a.createElement("td",null," "),n.a.createElement("td",null,n.a.createElement(w.a.Row,null,n.a.createElement(h.a,{sm:"9"},n.a.createElement(w.a.Control,{value:L.newStakeholderName,size:"xs",type:"text",placeholder:"Navn",onChange:function(e){return L.newStakeholderName=e.target.value}})))),n.a.createElement("td",null,n.a.createElement(w.a.Row,null,n.a.createElement(h.a,{sm:"9"},n.a.createElement(w.a.Control,{value:L.newStakeholderEmail,size:"xs",type:"text",placeholder:"E-mail",onChange:function(e){return L.newStakeholderEmail=e.target.value}})),n.a.createElement(h.a,null,n.a.createElement(j.a,{variant:"outline-primary",onClick:function(){L.addStakeHolder()}},"Tilf\xf8j")))))))),n.a.createElement(h.a,null," ",n.a.createElement(j.a,{variant:"primary",onClick:function(){return t.push("/keystakeholdercomponent")}},"G\xe5 til n\xe6ste side")))))}))),T=Object(o.a)(O),P=Object(i.f)((function(e){var t=e.history;e.match;return n.a.createElement("div",{className:"login"},n.a.createElement(u.a,null,n.a.createElement(E.a,null,n.a.createElement(h.a,null,n.a.createElement(k.a,{bg:"light",expand:"lg"},n.a.createElement(k.a.Brand,null,"Login"),n.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"})))),n.a.createElement(E.a,null,n.a.createElement(h.a,null),n.a.createElement(h.a,{xs:6},n.a.createElement(w.a,null,n.a.createElement(w.a.Group,{controlId:"formBasicEmail"},n.a.createElement(w.a.Label,null,"Email address"),n.a.createElement(w.a.Control,{type:"email",placeholder:"Enter email"})),n.a.createElement(w.a.Group,{controlId:"formBasicPassword"},n.a.createElement(w.a.Label,null,"Password"),n.a.createElement(w.a.Control,{type:"password",placeholder:"Password"})),n.a.createElement(j.a,{variant:"primary",type:"submit",onClick:function(){return t.push("/stakeholdercomponent")}},"Submit"))),n.a.createElement(h.a,null))))})),B=Object(o.a)(P),A=a(15),D=a.n(A),H=Object(i.f)(Object(o.a)((function(e){var t=e.history;return n.a.createElement("div",null,n.a.createElement(u.a,null,n.a.createElement(E.a,null,n.a.createElement(h.a,null,n.a.createElement(k.a,{bg:"light",expand:"lg"},n.a.createElement(k.a.Brand,null,"Projektstyringsv\xe6rkt\xf8j"),n.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"})))),n.a.createElement(E.a,null,n.a.createElement(h.a,null," ",n.a.createElement(p.a,null,n.a.createElement(p.a.Item,null,n.a.createElement(p.a.Link,{onClick:function(){return t.push("/stakeholdercomponent")}},"Identificer Stakeholders"),n.a.createElement(p.a.Link,null,"Identificer Key Stakeholders"),n.a.createElement(p.a.Link,null,"Project Scope Statement"),n.a.createElement(p.a.Link,null,"Identificer arbejdsopgaver"),n.a.createElement(p.a.Link,null,"Identificer risici"),n.a.createElement(p.a.Link,null,"Vurder risici"),n.a.createElement(p.a.Link,null,"Im\xf8dekom risici"),n.a.createElement(p.a.Link,null,"Closing Checklist")))),n.a.createElement(h.a,{xs:6}," ",n.a.createElement(f.a,{style:{width:"33.6rem"}},n.a.createElement(f.a.Body,null,n.a.createElement(f.a.Title,null,"Identificer Key stakeholders"),n.a.createElement(f.a.Text,null,"I dette afsnit skal du identificere dine Keystakeholders ud fra D.A.N.C.E metoden. Hvad er D.A.N.C.E? ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"DECISIONS:")," ",n.a.createElement("br",null),"Tager beslutninger der kan har indflydelse p\xe5 projektets budget.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"AUTHORITY:")," ",n.a.createElement("br",null),"Have the authority to grant permission to proceed with the project.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"NEED:")," ",n.a.createElement("br",null),"Directly benefit from or are impacted by the project and consequently need to\xa0know all about it.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"CONNECTIONS:")," ",n.a.createElement("br",null),"Are connected to the people, money, or resources required to remove roadblocks or exert influence\xa0to ensure project success. These are the champions, the active supporters who will ensure your project's success.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"ENERGY:")," ",n.a.createElement("br",null),"Have positive or negative energy that could affect project success"))),n.a.createElement(v.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Navn p\xe5 Stakeholder"),n.a.createElement("th",null,"D"),n.a.createElement("th",null,"A"),n.a.createElement("th",null,"N"),n.a.createElement("th",null,"C"),n.a.createElement("th",null,"E"))),n.a.createElement("tr",null,L.stakeholders.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,t+1))})),n.a.createElement("th",null),n.a.createElement("th",null,n.a.createElement("label",null,n.a.createElement(D.a.Prepend,null,n.a.createElement(D.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),n.a.createElement("th",null,n.a.createElement("label",null,n.a.createElement(D.a.Prepend,null,n.a.createElement(D.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),n.a.createElement("th",null,n.a.createElement("label",null,n.a.createElement(D.a.Prepend,null,n.a.createElement(D.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),n.a.createElement("th",null,n.a.createElement("label",null,n.a.createElement(D.a.Prepend,null,n.a.createElement(D.a.Checkbox,{"aria-label":"Checkbox for following text input"})))),n.a.createElement("th",null,n.a.createElement("label",null,n.a.createElement(D.a.Prepend,null,n.a.createElement(D.a.Checkbox,{"aria-label":"Checkbox for following text input"}))))))),n.a.createElement(h.a,null,n.a.createElement(j.a,{variant:"primary"},"G\xe5 til n\xe6ste side")))))}))),G=Object(o.a)(H);var K=Object(o.a)((function(){return n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/stakeholdercomponent",component:T}),n.a.createElement(i.a,{path:"/keystakeholdercomponent",component:G}),n.a.createElement(i.a,{exact:!0,path:"/",component:B}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(25);c.a.render(n.a.createElement(R.a,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.ee0ef6ff.chunk.js.map