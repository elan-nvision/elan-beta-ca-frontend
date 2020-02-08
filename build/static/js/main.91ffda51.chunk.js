(window["webpackJsonpelan-beta-ca-frontend"]=window["webpackJsonpelan-beta-ca-frontend"]||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/favicon.3c278e5a.png"},244:function(e,t,a){e.exports=a(506)},249:function(e,t,a){},506:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),s=(a(249),a(230)),i=a(106),c=a(107),m=a(112),u=a(108),d=a(27),h=a(113),p=a(509),f=a(510),y=a(511),b=a(512),E=a(513),g=a(231),k=a.n(g),v=a(150),w=a(76),A=a.n(w),C=(a(266),a(395),a(508)),I=a(111),T=a(155),x=a(11),S=a(515),R=a(514),N=a(109),F=a.n(N),O=a(516).a.Text,j=C.a.Header,z=C.a.Content,_=C.a.Footer,H=[{title:"Rank",dataIndex:"rank",key:"rank"},{title:"Name",dataIndex:"name",key:"name"},{title:"Points",dataIndex:"points",key:"points"}],L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={loggedIn:null},e.renderBody=e.renderBody.bind(Object(d.a)(e)),e.setup(),e.parseHash(),e.setState(),document.body.style.backgroundColor="#f0f2f5",e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"parseHash",value:function(){this.auth0=new v.a.WebAuth({domain:"elan-nvision.auth0.com",clientID:"7ypOoXT5lMAP6B3LRvGJoD3eK0tBTrai"}),this.auth0.parseHash((function(e,t){if(e)return console.log(e);null!==t&&null!==t.accessToken&&null!==t.idToken&&(localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("email",JSON.stringify(t.idTokenPayload)),window.location=window.location.href.substr(0,window.location.href.indexOf("")))}))}},{key:"setup",value:function(){k.a.ajaxSetup({beforeSend:function(e){localStorage.getItem("access_token")&&e.setRequestHeader("Authorization","Bearer "+localStorage.getItem("access_token"))}})}},{key:"setState",value:function(){var e=localStorage.getItem("id_token");this.state.loggedIn=!!e}},{key:"renderBody",value:function(){return this.state.loggedIn?l.a.createElement(B,null):l.a.createElement(W,null)}},{key:"render",value:function(){return void 0===this.state.loggedIn?l.a.createElement("div",{class:"fh5co-loader"}):l.a.createElement(this.renderBody,null)}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).authenticate=a.authenticate.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"authenticate",value:function(){this.WebAuth=new v.a.WebAuth({domain:"elan-nvision.auth0.com",clientID:"7ypOoXT5lMAP6B3LRvGJoD3eK0tBTrai",scope:"openid email",audience:"https://elan-nvision.auth0.com/api/v2/",responseType:"token id_token",redirectUri:"https://ca.elan.org.in"}),this.WebAuth.authorize()}},{key:"render",value:function(){return l.a.createElement(C.a,{className:"layout"},l.a.createElement(j,null,l.a.createElement("div",{className:"logo",style:{float:"left",display:"inline"}},l.a.createElement("img",{src:F.a,style:{width:"50px",height:"50px",display:"inline",marginRight:"10px"}}),l.a.createElement(O,{style:{display:"inline",color:"white",fontSize:"1.8rem"}},"Campus Ambassador Portal"))),l.a.createElement(z,{style:{padding:"2% 2%"}},l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280,fontSize:"1.8rem"}},l.a.createElement("p",{style:{textAlign:"left"}},"This is an invitation to the college janta of the city to become the Campus Ambassadors of ELAN & nVision 2020. The Campus Ambassador program provides you with an opportunity to be more closely associated with the fest than just another participant. A Campus Ambassador will be the first contact between ELAN and nVision 2020 and his/her college."," "),l.a.createElement("p",{style:{textAlign:"left"}},"The responsibilities of a Campus Ambassador are:"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Spread awareness regarding the fest in your institute via offline and online publicity of the events- ones that happen before the fest and during the fest."," "),l.a.createElement("li",null,"Encourage and ensure participation from your institutes in the events of the fest in ways you deem fit."),l.a.createElement("li",null,"Perform different tasks aimed at promoting the fest which will be allocated to you from time to time."),l.a.createElement("li",null,"Help Elan & nVision organise events in your college.")),l.a.createElement("p",{style:{textAlign:"left"}},"About the structure of the program:"," "),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Interested individuals may register at the link provided above. The applicants will be shortlisted by our team and the selected Campus Ambassadors will be mailed."," "),l.a.createElement("li",null,"Campus ambassadors will be awarded certain points for each task they complete"),l.a.createElement("li",null,"The registered campus ambassadors will be provided with a unique referral code which can be used to login to the CA portal and view the leaderboard. The CA portal will be updated regularly with new tasks."," "),l.a.createElement("li",null,"The tasks are aimed at increasing the social presence and outreach of the fest through different institutes.")),l.a.createElement("p",{style:{textAlign:"left"}},"Eligibility:"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Age requirement: 17 or above."),l.a.createElement("li",null,"Good communication, management and soft skills. "),l.a.createElement("li",null,"Must be enrolled in an educational institution(school or college)")),l.a.createElement("p",{style:{textAlign:"left"}},"Incentives:"),l.a.createElement("ul",{style:{textAlign:"left"}},l.a.createElement("li",null,"Cash prizes"),l.a.createElement("li",null,"Elan & nVision merchandise as you cross milestones on the leaderboard"),l.a.createElement("li",null,"Free passes to the events of the fest"),l.a.createElement("li",null,"Free stay provided by Elan & nVision during the fest"),l.a.createElement("li",null,"Top performing CAs will receive recognition on our social media platforms and official website"),l.a.createElement("li",null,"Certificates from Elan&nVision IIT Hyderabad"),l.a.createElement("li",null,"Internship courses by"," ",l.a.createElement("a",{href:"https://elan.org.in/internship"},"Verzeo"))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(I.a,{type:"primary",size:"large",onClick:this.authenticate},"LOG IN / REGISTER")))),l.a.createElement(_,{style:{textAlign:"center"}},"\xa9 2020 Elan & nVision 2020"))}}]),t}(l.a.Component),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={firstTime:null,fname:"",lname:"",institute:"",age:null,points:null,no_of_people:null,rcode:null,fbHandle:"",instaHandle:"",ideas:"",contactNumber:"",referredBy:"",current:"home",dataSource:null},a.handleInputChange=a.handleInputChange.bind(Object(d.a)(a)),a.renderForm=a.renderForm.bind(Object(d.a)(a)),a.renderPoints=a.renderPoints.bind(Object(d.a)(a)),a.submitForm=a.submitForm.bind(Object(d.a)(a)),a.getData=a.getData.bind(Object(d.a)(a)),a.logout=a.logout.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.homeRef=l.a.createRef(),a.tasksRef=l.a.createRef(),a.rulesRef=l.a.createRef(),a.leaderboardRef=l.a.createRef(),a.setTasks=a.setTasks.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setTasks",value:function(){this.homeRef.current.style.display="none",this.rulesRef.current.style.display="none",this.tasksRef.current.style.display="block",this.setState({current:"tasks"})}},{key:"handleClick",value:function(e){"Home"==e.item.node.innerText?(this.homeRef.current.style.display="block",this.rulesRef.current.style.display="none",this.tasksRef.current.style.display="none",this.leaderboardRef.current.style.display="none",this.setState({current:"home"})):"Tasks"==e.item.node.innerText?(this.homeRef.current.style.display="none",this.rulesRef.current.style.display="none",this.tasksRef.current.style.display="block",this.leaderboardRef.current.style.display="none",this.setState({current:"tasks"})):"Rules"==e.item.node.innerText?(this.homeRef.current.style.display="none",this.rulesRef.current.style.display="block",this.tasksRef.current.style.display="none",this.leaderboardRef.current.style.display="none",this.setState({current:"rules"})):"Leaderboard"==e.item.node.innerText&&(this.homeRef.current.style.display="none",this.rulesRef.current.style.display="none",this.tasksRef.current.style.display="none",this.leaderboardRef.current.style.display="block",this.setState({current:"leaderboard"}))}},{key:"componentDidMount",value:function(){var e=this,t="https://ca.elan.org.in/doesuserexist/"+JSON.parse(localStorage.getItem("email")).email;A.a.get(t).then((function(t){e.setState({firstTime:!("true"==t.data.message)})}));var a=[];A.a.get("https://ca.elan.org.in/leaderboard").then((function(t){for(var n=0;n<t.data.fname.length;n++)a.push({key:n+1,name:t.data.fname[n]+" "+t.data.lname[n],points:t.data.points[n],rank:n+1});e.setState({dataSource:a})}))}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(s.a)({},n,a))}},{key:"getData",value:function(){var e=this,t={headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("access_token")}},a="https://ca.elan.org.in/api/private?token="+localStorage.getItem("id_token");A.a.get(a,t).then((function(t){e.setState({fname:t.data.fname,lname:t.data.lname,no_of_people:t.data.no_of_people,points:t.data.points,rcode:t.data.rcode})})).catch((function(e){localStorage.clear(),window.location.reload()}))}},{key:"submitForm",value:function(e){e.preventDefault();var t={headers:{"Content-Type":"application/json",authorization:"Bearer "+localStorage.getItem("access_token")}},a="https://ca.elan.org.in/api/private?fname="+this.state.fname+"&lname="+this.state.lname+"&institute="+this.state.institute+"&age="+this.state.age+"&token="+localStorage.getItem("id_token")+"&fb="+this.state.fbHandle+"&insta="+this.state.instaHandle+"&ideas="+this.state.ideas+"&phone="+this.state.contactNumber+"&referredBy="+this.state.referredBy;A.a.get(a,t).then((function(e){window.location.reload()})).catch((function(e){localStorage.clear(),window.location.reload()}))}},{key:"renderForm",value:function(){return l.a.createElement(C.a,{className:"layout"},l.a.createElement(j,null,l.a.createElement("div",{className:"logo",style:{float:"left",display:"inline"}},l.a.createElement("img",{src:F.a,style:{width:"50px",height:"50px",display:"inline",marginRight:"10px"}}),l.a.createElement(O,{style:{display:"inline",color:"white",fontSize:"1.8rem"}},"Campus Ambassador Portal"))),l.a.createElement(z,{style:{padding:"2% 2%"}},l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280,fontSize:"1.8rem"}},l.a.createElement("h2",{style:{textAlign:"center"}},"Registration Form"),l.a.createElement(p.a,{onSubmit:this.submitForm,style:{paddingTop:"10px"}},l.a.createElement(f.a,{form:!0},l.a.createElement(y.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"text",name:"fname",value:this.state.fname,placeholder:"First Name",onChange:this.handleInputChange}))),l.a.createElement(y.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"text",name:"lname",value:this.state.lname,placeholder:"Last Name",onChange:this.handleInputChange})))),l.a.createElement(f.a,{form:!0},l.a.createElement(y.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"text",name:"institute",placeholder:"Institute",value:this.state.institute,onChange:this.handleInputChange}))),l.a.createElement(y.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"text",name:"age",value:this.state.age,onChange:this.handleInputChange,placeholder:"Age"})))),l.a.createElement(f.a,{form:!0},l.a.createElement(y.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"text",name:"fbHandle",placeholder:"Link to your Facebook Profile",value:this.state.fbHandle,onChange:this.handleInputChange}))),l.a.createElement(y.a,{md:6},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"text",name:"instaHandle",value:this.state.instaHandle,onChange:this.handleInputChange,placeholder:"Instagram Handle"})))),l.a.createElement(f.a,{form:!0},l.a.createElement(y.a,{md:12},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"textarea",name:"ideas",placeholder:"What are your ideas for publicising the fest?",value:this.state.ideas,onChange:this.handleInputChange})))),l.a.createElement(f.a,{form:!0},l.a.createElement(y.a,{md:12},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"textarea",name:"contactNumber",placeholder:"Contact Number",value:this.state.contactNumber,onChange:this.handleInputChange})))),l.a.createElement(f.a,{form:!0},l.a.createElement(y.a,{md:12},l.a.createElement(b.a,null,l.a.createElement(E.a,{type:"textarea",name:"referredBy",placeholder:"Were you referred here by another CA? If yes, enter their referral code here. ",value:this.state.referredBy,onChange:this.handleInputChange,rows:"3"})))),l.a.createElement(f.a,null,l.a.createElement(y.a,{md:12,style:{textAlign:"center"}},l.a.createElement(I.a,{type:"primary",size:"large",onClick:this.submitForm},"Submit")))))))}},{key:"logout",value:function(){localStorage.clear(),window.location.reload()}},{key:"renderPoints",value:function(){return null==this.state.no_of_people?(this.getData(),l.a.createElement("div",{class:"fh5co-loader"})):l.a.createElement(C.a,{className:"layout"},l.a.createElement(j,null,l.a.createElement("div",{className:"logo",style:{float:"left",display:"inline"}},l.a.createElement("img",{src:F.a,style:{width:"50px",height:"50px",display:"inline",marginRight:"10px"}}),l.a.createElement(O,{style:{display:"inline",color:"white",fontSize:"1.8rem"}},"Campus Ambassador Portal"))),l.a.createElement(z,{style:{padding:"2% 2%"}},l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280,fontSize:"1.8rem"}},l.a.createElement(T.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},l.a.createElement(T.a.Item,{key:"home"},l.a.createElement(x.a,{type:"home"}),"Home"),l.a.createElement(T.a.Item,{key:"tasks"},l.a.createElement(x.a,{type:"check-square"}),"Tasks"),l.a.createElement(T.a.Item,{key:"rules"},l.a.createElement(x.a,{type:"book"}),"Rules"),l.a.createElement(T.a.Item,{key:"leaderboard"},l.a.createElement(x.a,{type:"database"}),"Leaderboard")),l.a.createElement("div",{class:"home",style:{textAlign:"center"},ref:this.homeRef},l.a.createElement("h3",{style:{marginTop:"40px"}},"Welcome, ",this.state.fname," ",this.state.lname),l.a.createElement("h4",null,"Your referral code is ",this.state.rcode,". When people use this code to sign up, you will be awarded points."),l.a.createElement("h4",null,"So far, ",this.state.no_of_people," ",1==this.state.no_of_people?"person has":"people have"," ","used your referral code and you've been awarded"," ",this.state.points," points."),l.a.createElement(I.a,{type:"primary",onClick:this.setTasks,size:"large",style:{marginTop:"10px"}},"My Tasks"),l.a.createElement("br",null),l.a.createElement(I.a,{type:"primary",onClick:this.logout,size:"large",style:{marginTop:"10px"}},"Log out")),l.a.createElement("div",{class:"home",style:{marginTop:"20px",display:"none"},ref:this.tasksRef},l.a.createElement(S.a,{title:"Task 1",style:{fontSize:"1.8rem"}},"Your first task as a campus ambassador for ELAN and Nvision 2020 will be to get more campus ambassadors. With every candidate that applies using your referral code, you get 50 points. If the applicant gets selected to be a campus ambassador, you'll get an additional 50 points. Hurry up and get your friends to apply! ",l.a.createElement("br",null)," ",l.a.createElement("br",null),"The weightage (number of points) of this task will continue to reduce. ",l.a.createElement("br",null),l.a.createElement("br",null),"When your friend signs up with your referral code, they will be awarded 25 points as well.",l.a.createElement("br",null),"[This task does not require submission of proof]"),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 2 has expired",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"ELAN & Nvision 2020's first online event- The Online LitFest is now live! Share and spread the word! ",l.a.createElement("br",null),l.a.createElement("br",null),"Post the overall poster that has been posted on the Facebook and Instagram pages of ELAN and Nvision. ",l.a.createElement("br",null),l.a.createElement("br",null),"Facebook story: 25 ",l.a.createElement("br",null),"Facebook post: 35 ",l.a.createElement("br",null),"Instagram story: 35",l.a.createElement("br",null),"Instagram post: 50 ",l.a.createElement("br",null),"Whatsapp story: 35 ",l.a.createElement("br",null),l.a.createElement("br",null),"Additional points will be allotted when proof of other offline/online publicity is presented to the organisers."),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 3",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"Elan and Nvision 2020- Into Elysium themed tshirts are now up for sale! Get some of these tshirts for you and your friends and win some CA points in the process. ",l.a.createElement("br",null),l.a.createElement("br",null),"For every tshirt ordered using your CA referral code, you earn 20 CA points. For every 9 tshirts ordered using your CA referral code, you receive 1 tshirt free. You can either choose to get it delivered or pick it up when you come to the fest.",l.a.createElement("br",null),l.a.createElement("br",null),"T&Cs- ",l.a.createElement("br",null),"A maximum of 360 points can be earned and a maximum of 2 free tshirts per CA can be won through this task."),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 4 has expired",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"Make some noise! Elan and Nvision 2020 is just 50 days away!"," ",l.a.createElement("br",null),l.a.createElement("br",null),"Share the 50 days to go poster from Elan & Nvision's Facebook/Insta page. ",l.a.createElement("br",null),l.a.createElement("br",null),"Facebook story: 25 ",l.a.createElement("br",null),"Facebook post: 35 ",l.a.createElement("br",null),"Instagram story: 35",l.a.createElement("br",null),"Instagram post: 50 ",l.a.createElement("br",null),"Whatsapp story: 35 ",l.a.createElement("br",null),l.a.createElement("br",null),"Additional points will be allotted when proof of other offline/online publicity is presented to the organisers."),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 5",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"The overall posters for the techy and culti events are out!",l.a.createElement("br",null),l.a.createElement("br",null),"Share them from the Facebook/insta pages of the fest. ",l.a.createElement("br",null),l.a.createElement("br",null),"Facebook story: 35 ",l.a.createElement("br",null),"Facebook post: 45 ",l.a.createElement("br",null),"Instagram story: 45",l.a.createElement("br",null),"Instagram post: 60 ",l.a.createElement("br",null),"Whatsapp story: 45 ",l.a.createElement("br",null),l.a.createElement("br",null),"For EACH of the two overall posters shared, above will be the points scheme. Also, share the individual event posters from the Facebook page. Each story/post of an individual event gives you an additional 10 points."),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 6",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"We've released the workshops to be held during the fest!",l.a.createElement("br",null),l.a.createElement("br",null),"Share the"," ",l.a.createElement("a",{href:"https://m.facebook.com/story.php?story_fbid=2685069344880733&id=219674534753572"},"poster"),". ",l.a.createElement("br",null),l.a.createElement("br",null),"Facebook story: 35 ",l.a.createElement("br",null),"Facebook post: 45 ",l.a.createElement("br",null),"Instagram story: 45",l.a.createElement("br",null),"Instagram post: 60 ",l.a.createElement("br",null),"Whatsapp story: 45 ",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 7",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"Register for ELAN & Nvision 2020.",l.a.createElement("br",null),l.a.createElement("br",null),"The entry passes for ELAN & Nvision are now live! Click"," ",l.a.createElement("a",{href:"https://eventbeep.com/fest/elan_culti2020?category=Entertainment&event=entry"},"here")," ","to get yours now! . ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ol",null,l.a.createElement("li",null,"Use this"," ",l.a.createElement("a",{href:"https://eventbeep.com/fest/elan_culti2020?category=Entertainment&event=entry"},"link")," ","to register for the fest and pay the entry fee. Click on Register, and then Pay Now."),l.a.createElement("li",null,"Fill the form with the personal details and click on continue as guest. An option to fill in a reference code will appear.")),"Your reference code is your CA referral code. ",l.a.createElement("br",null),l.a.createElement("b",null,"Ask your friends to use your reference code. Make sure they enter it in all caps and don't add a space at the end of the string. (Eg. \u201cLOZXCZ\u201d )"),l.a.createElement("br",null),"As our CA, you have an additional perk. Get your friends to buy entry passes to the fest while using your CA referral code."," ",l.a.createElement("b",null,l.a.createElement("i",null,"And every 10 times your referral code is used, you win a free ELAN & Nvision tshirt, and every 20 times your referral code is used, you get a free ELAN & Nvision hoodie!"))," ",l.a.createElement("br",null),"And for every person using your referral code, you earn 20 points! Don\u2019t miss this chance to become a top CA in a go!",l.a.createElement("br",null),"(Note: Registering for events is independent of getting an entry ticket. Registration for events is free while the entry ticket is not. One entry ticket per head is enough for you to participate in any event of your choice)"),l.a.createElement("br",null),l.a.createElement(S.a,{body:!0,title:"Task 8",style:{fontSize:"1.8rem"},inverse:!0,color:"danger"},"15 days to go for a fiesta that will leave you exhilarated!",l.a.createElement("br",null),l.a.createElement("br",null),"Share the 15 days to go poster from Elan & Nvision's Facebook/Insta page. . ",l.a.createElement("br",null),l.a.createElement("br",null),"Facebook story: 25 ",l.a.createElement("br",null),"Facebook post: 35 ",l.a.createElement("br",null),"Instagram story: 35",l.a.createElement("br",null),"Instagram post: 50 ",l.a.createElement("br",null),"Whatsapp story: 35 ",l.a.createElement("br",null))),l.a.createElement("div",{class:"home",style:{marginTop:"20px",display:"none"},ref:this.rulesRef},l.a.createElement("ol",null,l.a.createElement("li",null,"Points are allotted by our organisers and the team's decision will be fnal."),l.a.createElement("li",null,"Organisers will soon make a WhatsApp group with the contact number you share with us and will keep you informed of all further tasks."," "),l.a.createElement("li",null,"The proofs of tasks completed should be sent to the organiser that contacts you."," "),l.a.createElement("li",null,"To submit proof of a task completed, you will be required to send a screenshot of the post/story after a minimum of 20 hours of posting (on Instagram, a screenshot from the story archives), with the number of views/likes/comments clearly visible. Additional points maybe allotted based on the engagement your story/post receives."," "),l.a.createElement("li",null,"Feel free to communicate any ideas you have for publicising ELAN & Nvision and it's events with the organisers."," "))),l.a.createElement("div",{class:"home",style:{marginTop:"20px",display:"none"},ref:this.leaderboardRef},l.a.createElement(R.a,{dataSource:this.state.dataSource,columns:H}),";"))))}},{key:"render",value:function(){return!0===this.state.firstTime?l.a.createElement(this.renderForm,null):!1===this.state.firstTime?l.a.createElement(this.renderPoints,null):l.a.createElement("div",{class:"fh5co-loader"})}}]),t}(l.a.Component),P=L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[244,1,2]]]);
//# sourceMappingURL=main.91ffda51.chunk.js.map