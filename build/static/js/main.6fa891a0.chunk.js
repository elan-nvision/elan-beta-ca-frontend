(window["webpackJsonpelan-beta-ca-frontend"]=window["webpackJsonpelan-beta-ca-frontend"]||[]).push([[0],{109:function(e,t,a){e.exports=a(270)},270:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(104),o=a.n(i),r=(a(56),a(105)),s=a(31),c=a(32),m=a(35),u=a(33),d=a(3),h=a(36),p=a(272),f=a(273),g=a(274),E=a(275),b=a(276),v=a(277),y=a(106),w=a.n(y),k=a(54),C=a(34),x=a.n(C),I=(a(132),"http://"+window.location.host),T=I,A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={loggedIn:null},e.renderBody=e.renderBody.bind(Object(d.a)(e)),e.setup(),e.parseHash(),e.setState(),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"parseHash",value:function(){this.auth0=new k.a.WebAuth({domain:"elan-nvision.auth0.com",clientID:"7ypOoXT5lMAP6B3LRvGJoD3eK0tBTrai"}),this.auth0.parseHash((function(e,t){if(e)return console.log(e);null!==t&&null!==t.accessToken&&null!==t.idToken&&(localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("email",JSON.stringify(t.idTokenPayload)),window.location=window.location.href.substr(0,window.location.href.indexOf("")))}))}},{key:"setup",value:function(){w.a.ajaxSetup({beforeSend:function(e){localStorage.getItem("access_token")&&e.setRequestHeader("Authorization","Bearer "+localStorage.getItem("access_token"))}})}},{key:"setState",value:function(){var e=localStorage.getItem("id_token");this.state.loggedIn=!!e}},{key:"renderBody",value:function(){return this.state.loggedIn?l.a.createElement(j,null):l.a.createElement(O,null)}},{key:"render",value:function(){return void 0===this.state.loggedIn?l.a.createElement("div",{className:"loader"},"Loading"):l.a.createElement(this.renderBody,null)}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).authenticate=a.authenticate.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"authenticate",value:function(){this.WebAuth=new k.a.WebAuth({domain:"elan-nvision.auth0.com",clientID:"7ypOoXT5lMAP6B3LRvGJoD3eK0tBTrai",scope:"openid email",audience:"https://elan-nvision.auth0.com/api/v2/",responseType:"token id_token",redirectUri:T}),this.WebAuth.authorize()}},{key:"render",value:function(){return l.a.createElement("div",{id:"fh5co-couple",style:{paddingTop:"20px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"},l.a.createElement("h2",null,"Elan & nVision 2020"),l.a.createElement("h3",null,"Registration Portal for Campus Ambassadors"),l.a.createElement("p",{style:{textAlign:"left"}},"This is an invitation to the college janta of the city to become the Campus Ambassadors of ELAN & nVision 2020. The Campus Ambassador program provides you with an opportunity to be more closely associated with the fest than just another participant. A Campus Ambassador will be the first contact between ELAN and nVision 2020 and his/her college."," "),l.a.createElement("p",{style:{textAlign:"left"}},"The responsibilities of a Campus Ambassador are:"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Spread awareness regarding the fest in your institute via offline and online publicity of the events- ones that happen before the fest and during the fest."," "),l.a.createElement("li",null,"Encourage and ensure participation from your institutes in the events of the fest in ways you deem fit."),l.a.createElement("li",null,"Perform different tasks aimed at promoting the fest which will be allocated to you from time to time."),l.a.createElement("li",null,"Help Elan & nVision organise events in your college.")),l.a.createElement("p",{style:{textAlign:"left"}},"About the structure of the program:"," "),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Interested individuals may register at the link provided above. The applicants will be shortlisted by our team and the selected Campus Ambassadors will be mailed."," "),l.a.createElement("li",null,"Campus ambassadors will be awarded certain points for each task they complete"),l.a.createElement("li",null,"The registered campus ambassadors will be provided with a unique referral code which can be used to login to the CA portal and view the leaderboard. The CA portal will be updated regularly with new tasks."," "),l.a.createElement("li",null,"The tasks are aimed at increasing the social presence and outreach of the fest through different institutes.")),l.a.createElement("p",{style:{textAlign:"left"}},"Eligibility:"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Age requirement: 17 or above."),l.a.createElement("li",null,"Good communication, management and soft skills. "),l.a.createElement("li",null,"Must be enrolled in an educational institute. (school or college)")),l.a.createElement("p",{style:{textAlign:"left"}},"Incentives:"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Cash prizes"),l.a.createElement("li",null,"Elan & nVision merchandise as you cross milestones on the leaderboard"),l.a.createElement("li",null,"Free passes to the events of the fest"),l.a.createElement("li",null,"Free stay provided by Elan & nVision during the fest"),l.a.createElement("li",null,"Top performing CAs will receive recognition on our social media platforms and official website"),l.a.createElement("li",null,"Certificates from Elan&nVision IIT Hyderabad")),l.a.createElement(p.a,{color:"primary",style:{marginTop:"30px"},onClick:this.authenticate},"Register Now")))))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={firstTime:null,fname:"",lname:"",institute:"",age:null,points:null,no_of_people:null,rcode:null,fbHandle:"",instaHandle:"",ideas:""},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.renderForm=a.renderForm.bind(Object(d.a)(a)),a.renderPoints=a.renderPoints.bind(Object(d.a)(a)),a.submitForm=a.submitForm.bind(Object(d.a)(a)),a.getData=a.getData.bind(Object(d.a)(a)),a.logout=a.logout.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://ca.elan.org.in/doesuserexist/"+JSON.parse(localStorage.getItem("email")).email;x.a.get(t).then((function(t){e.setState({firstTime:!("true"==t.data.message)})}))}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(r.a)({},n,a))}},{key:"getData",value:function(){var e=this,t={headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("access_token")}},a="https://ca.elan.org.in/api/private?token="+localStorage.getItem("id_token");x.a.get(a,t).then((function(t){e.setState({fname:t.data.fname,lname:t.data.lname,no_of_people:t.data.no_of_people,points:t.data.points,rcode:t.data.rcode})}))}},{key:"submitForm",value:function(e){e.preventDefault();var t={headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("access_token")}},a="https://ca.elan.org.in/api/private?fname="+this.state.fname+"&lname="+this.state.lname+"&institute="+this.state.institute+"&age="+this.state.age+"&token="+localStorage.getItem("id_token")+"&fb="+this.state.fbHandle+"&insta="+this.state.instaHandle+"&ideas="+this.state.ideas;x.a.get(a,t).then((function(e){window.location.reload()}))}},{key:"renderForm",value:function(){return l.a.createElement("div",{id:"fh5co-couple",style:{paddingTop:"20px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"},l.a.createElement("h2",null,"Registration Portal"),l.a.createElement("h3",null,"For Campus Ambassadors"),l.a.createElement(f.a,{style:{marginTop:"50px"},onSubmit:this.submitForm},l.a.createElement(g.a,{form:!0},l.a.createElement(E.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"fname",value:this.state.fname,placeholder:"First Name",onChange:this.handleInputChange}))),l.a.createElement(E.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"lname",value:this.state.lname,placeholder:"Last Name",onChange:this.handleInputChange})))),l.a.createElement(g.a,{form:!0},l.a.createElement(E.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"institute",placeholder:"Institute",value:this.state.institute,onChange:this.handleInputChange}))),l.a.createElement(E.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"age",value:this.state.age,onChange:this.handleInputChange,placeholder:"Age"})))),l.a.createElement(g.a,{form:!0},l.a.createElement(E.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"fbHandle",placeholder:"Facebook Username",value:this.state.fbHandle,onChange:this.handleInputChange}))),l.a.createElement(E.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"text",name:"instaHandle",value:this.state.instaHandle,onChange:this.handleInputChange,placeholder:"Instagram Handle"})))),l.a.createElement(g.a,{form:!0},l.a.createElement(E.a,{md:12},l.a.createElement(b.a,null,l.a.createElement(v.a,{type:"textarea",name:"ideas",placeholder:"What are your ideas for publicising the fest?",value:this.state.ideas,onChange:this.handleInputChange})))),l.a.createElement(g.a,null,l.a.createElement(p.a,{color:"primary",style:{marginTop:"30px"}},"Submit")))))))}},{key:"logout",value:function(){localStorage.clear(),window.location.reload()}},{key:"renderPoints",value:function(){return null==this.state.no_of_people?(this.getData(),l.a.createElement("p",null,"Loading")):l.a.createElement("div",{id:"fh5co-couple",style:{paddingTop:"20px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-md-offset-2 text-center fh5co-heading animate-box"},l.a.createElement("h2",null,"Elan & nVision 2020"),l.a.createElement("h3",{style:{marginTop:"40px"}},"Welcome, ",this.state.fname," ",this.state.lname),l.a.createElement("h4",null,"Your referral code is ",this.state.rcode,"."),l.a.createElement("h4",null,"You have been awarded ",this.state.points," points since"," ",this.state.no_of_people," people have used your referral code."),l.a.createElement(p.a,{color:"primary",onClick:this.logout},"LOGOUT")))))}},{key:"render",value:function(){return!0===this.state.firstTime?l.a.createElement(this.renderForm,null):!1===this.state.firstTime?l.a.createElement(this.renderPoints,null):l.a.createElement("p",null,"Loading")}}]),t}(l.a.Component),S=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.6fa891a0.chunk.js.map