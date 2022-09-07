(this["webpackJsonpkatsudon-client"]=this["webpackJsonpkatsudon-client"]||[]).push([[0],{118:function(e,t,n){},174:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){},215:function(e,t){},503:function(e,t,n){},504:function(e,t,n){},505:function(e,t,n){},506:function(e,t,n){},507:function(e,t,n){},514:function(e,t,n){},515:function(e,t,n){},516:function(e,t,n){},517:function(e,t,n){"use strict";n.r(t);var c=n(134),s=n.n(c),r=(n(174),n(5)),a=n(15),i=n(42),o=n(14),l=n(576),d=n(565),j=n(570),b=n(137),u=n(0),h=n.p+"static/media/Leetcode.090d606e.png",O=(n(176),n(1));function p(e){return Object(O.jsxs)("div",{className:"content-container",style:{backgroundColor:e.backgroundColor},children:[Object(O.jsxs)("div",{className:"landingpage-heading",style:{color:"white"},children:[Object(O.jsxs)("div",{className:"landingpage-title",children:[Object(O.jsx)("div",{children:"Katsudon "}),Object(O.jsx)("img",{src:h,alt:"leetcode",className:"leetcode-logo"}),Object(O.jsx)("div",{children:"Leaderboard"})]}),Object(O.jsxs)("div",{className:"landingpage-details",children:[Object(O.jsx)("div",{className:"landingpage-user-count",children:" 10 Registered Users"}),Object(O.jsx)("button",{className:"landingpage-get-started",children:" Get Started"})]})]}),Object(O.jsxs)("div",{className:"content-block",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"section-title",style:{color:e.color},children:"How it works"}),Object(O.jsxs)("div",{className:"section",children:["This website is dependent on the"," ",Object(O.jsx)("span",{style:{color:e.color},children:"\u30ab\u30c4\u30c9\u30f3 (Katsudon)"})," ","chrome extension.",Object(O.jsx)("br",{}),"When you successfully submit a Leetcode problem,"," ",Object(O.jsx)("span",{style:{color:e.color},children:"Katsudon"})," scrapes the details of the page's HTML and sends the needed information to the database"]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"section-title",style:{color:e.color},children:"Tech Stack"}),Object(O.jsxs)("div",{className:"section",children:["Backend server implemented using Node.js and TypeScript.",Object(O.jsx)("br",{}),"Using MongoDB as the noSQL database.",Object(O.jsx)("br",{}),Object(O.jsx)("span",{style:{color:e.color},children:"Katsudon"})," chrome extension built with JavaScript and small hints of HTML",Object(O.jsx)("br",{}),"Frontend built with ReactJS and CSS"]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"section-title",style:{color:e.color},children:"Credits"}),Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("span",{style:{color:e.color},children:"Qasim Wani"}),Object(O.jsx)("br",{}),"This project was greatly motivated by QasimWani's LeetHub chrome extension, which auto commits your leetcode solutions to a github repository.",Object(O.jsx)("br",{}),"Originally, the plan was to scrape user's github repos using LeetHub. However, I was getting rate limited and anticipated that 5,000 requests per hour definity won't be enough, since it costs 1 per file read. ",Object(O.jsx)("br",{}),"I decided to make my own Leetcode scraping extension to send the solution to my database to get around this rate limit."]}),Object(O.jsx)("div",{style:{height:"1rem"}}),Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("span",{style:{color:e.color},children:"Kevin Chen"}),Object(O.jsx)("br",{}),"Kevin:",Object(O.jsx)("li",{children:'"Hey guys should we buy a leetcode premium and share it?"'}),"Me:",Object(O.jsx)("li",{children:"Sharing an account? It would be kind of weird seeing that a problem was solved if I've never even seen it."}),Object(O.jsx)("li",{children:"...Though that would be a subtle way to tell that someone using the account was putting in good work."}),Object(O.jsx)("li",{children:"...Is there a way to tell which problems our friends have solved? It doesn't seem like leetcode has a social platform outside of the discuss section."}),Object(O.jsx)("li",{children:" ...Guess I'll try to make it myself"})]}),Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("span",{style:{color:e.color},children:"SQL Professor"}),Object(O.jsx)("br",{}),"Me: Hey professor, is there a way for me to create a schema to represent a graph of connections without having an having a garbage time complexity?",Object(O.jsx)("br",{}),"Professor:"," ",Object(O.jsx)("span",{style:{fontSize:"0.75rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid..."}),"TLDR: There's gonna be tradebacks left and right, so choose your database wisely.",Object(O.jsx)("br",{}),"Me: I don't expect this webpage to blow up, so I guess I'll try MongoDB",Object(O.jsx)("br",{})]})]})]})]})}var m=n(18),f=n(31),x=n(23),g=n(564),v=n(572),y=(n(178),function(e,t,n){var c,s=n[0].toUpperCase()+n.slice(1);return!!e&&Object(O.jsx)(g.a,{title:Object(O.jsxs)("div",{style:{fontSize:"1rem"},children:[s,": ",e]}),children:Object(O.jsx)("div",{className:"profile-solved-".concat(n),style:{width:(c=t?e/t:0,"".concat(100*c,"%"))}})})});function w(e){var t,n=e.userInfo,c=n.username,s=n.biography,r=n.followers,a=n.following,i=n.profile_picture_url,l=n.solved,d=Object(o.reduce)(l,(function(e,t){return e[Object(o.get)(t,"difficulty")]+=1,e}),{Easy:0,Medium:0,Hard:0}),j=d.Easy,b=d.Medium,u=d.Hard,h=j+b+u;return Object(O.jsxs)("div",{className:"profile-container",style:{border:"2px solid ".concat(null!==(t=e.borderColor)&&void 0!==t?t:"white")},children:[Object(O.jsxs)("div",{className:"profile-user-info",children:[Object(O.jsxs)("div",{className:"profile-top-wrapper",children:[Object(O.jsxs)("div",{className:"follow-stat",children:[Object(O.jsx)("div",{className:"follow-value",children:r.length}),Object(O.jsx)("div",{className:"follow-text",children:" Followers"})]}),Object(O.jsx)("div",{className:"profile-picture",children:Object(O.jsx)(v.a,{src:i,style:{width:"100%",height:"100%",border:"2px solid white"}})}),Object(O.jsxs)("div",{className:"follow-stat",children:[Object(O.jsx)("div",{className:"follow-value",children:a.length}),Object(O.jsx)("div",{className:"follow-text",children:" Following"})]})]}),Object(O.jsx)("div",{className:"profile-username",children:c}),Object(O.jsx)("div",{className:"profile-biography",children:null!==s&&void 0!==s?s:""})]}),Object(O.jsxs)("div",{className:"profile-solved-section",children:[Object(O.jsxs)("div",{className:"profile-solved-count",children:["Solved: ",h]}),Object(O.jsxs)("div",{className:"profile-solved-distribution",children:[y(j,h,"easy"),y(b,h,"medium"),y(u,h,"hard")]})]})]})}var S=n(580);var k=n(142),C=n.n(k);function N(e){return I.apply(this,arguments)}function I(){return(I=Object(f.a)(Object(m.a)().mark((function e(t){var n,c,s,r,a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,c=t.endpoint,s=t.params,r=t.headers,a={method:n,url:"".concat("https://katsudon-server-v2.herokuapp.com/").concat(c),params:s,headers:r},e.abrupt("return",C()(a).then((function(e){return e.data})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(143).config();var L=n(104),F=n.n(L);function P(){return(P=Object(f.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N({method:"get",endpoint:"api/user/all",params:{},headers:{}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(f.a)(Object(m.a)().mark((function e(t){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N({method:"get",endpoint:"api/solution/all?".concat(F.a.stringify(t)),params:{},headers:{}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(f.a)(Object(m.a)().mark((function e(t){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N({method:"get",endpoint:"api/user/profile?".concat(F.a.stringify(t)),params:{},headers:{}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A={getAllUsers:function(){return P.apply(this,arguments)},getUserSolutions:function(e){return T.apply(this,arguments)},getUserProfile:function(e){return E.apply(this,arguments)}},_=A,H=n(577),B=n(578),z=n(574),U=n(575),D=n(579),M=n(147),R=n.n(M),J=n(145),q=n.n(J),K=n(146),G=n.n(K),Q={Orange:{color:"#FFAA7A",navbar:"#8a5b41",background:"#2A2522"},Blue:{color:"#25B2FF",navbar:"#15425a",background:"#22242A"},Green:{color:"#7AFF87",navbar:"13561a",background:"#7AFF87"},LightBlue:{color:"#7AFFEF",navbar:"#13554d",background:"#22292A"},Purple:{color:"#AC39AC",navbar:"#3c0b3c",background:"#2A2229",header:"#2E1F2C",section:"#382E37"}},W={Easy:"#7AFF87",Medium:"#FFAC7D",Hard:"#FF7A7A"},V=n.p+"static/media/C.cac16519.svg",Y=n.p+"static/media/CSharp.885a32ed.svg",X=n.p+"static/media/C++.157c521f.svg",Z=n.p+"static/media/Elixir.23a2a1fc.svg",$=n.p+"static/media/Golang.6e21b652.svg",ee=n.p+"static/media/Java.1a020d6d.svg",te=n.p+"static/media/JavaScript.f719efab.svg",ne=n.p+"static/media/Kotlin.37e6e4c8.svg",ce=n.p+"static/media/PHP.e7123345.svg",se=n.p+"static/media/Python.2abc268f.svg",re={C:V,"C#":Y,"C++":X,Elixir:Z,Go:$,Kotlin:ne,JavaScript:te,Java:ee,PHP:ce,Python:se,Python3:se,Ruby:n.p+"static/media/Ruby.a2cd11fb.svg",Rust:n.p+"static/media/Rust.f6c0e91f.svg",Scala:n.p+"static/media/Scala.5e8adada.svg",Swift:n.p+"static/media/Swift.1216a1d0.svg",TypeScript:n.p+"static/media/TypeScript.65d28611.svg"},ae={C:"c","C#":"csharp","C++":"cpp",Elixir:"elixir",Go:"go",Kotlin:"kotlin",JavaScript:"javascript",Java:"java",PHP:"php",Python:"python",Python3:"python",Ruby:"ruby",Rust:"rust",Scala:"scala",Swift:"swift",TypeScript:"typescript"},ie=n(144),oe=n.n(ie);n(118);function le(e){var t={tableHeader:{color:e.headerColor,fontSize:"1.4rem"},tableCell:{textAlign:"left",fontSize:"1.15rem",color:"white",margin:0,padding:0,paddingInline:"1rem"},fileOpen:{fontSize:"2rem",color:"white"},languageLogo:{width:"2.5rem"},link:{textDecoration:"none"}};return Object(O.jsxs)(z.a,{children:[Object(O.jsx)(U.a,{style:Object(x.a)(Object(x.a)({},t.tableCell),{},{color:W[e.details.problem.difficulty]}),children:e.details.problem.id}),Object(O.jsx)(U.a,{style:Object(x.a)(Object(x.a)({},t.tableCell),{},{position:"relative"}),colSpan:3,children:Object(O.jsx)("a",{href:e.details.problem.url,target:"_blank",rel:"noreferrer",style:Object(x.a)({color:W[e.details.problem.difficulty]},t.link),children:e.details.problem.title})}),Object(O.jsx)(U.a,{style:t.tableCell,children:Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[Object(o.map)(Object(o.take)(Object(o.keys)(e.details.solutions),4),(function(e,n){return Object(O.jsx)("img",{src:re[e],alt:e,style:t.languageLogo},n)})),Object(o.keys)(e.details.solutions).length>4&&Object(O.jsxs)("div",{children:["+",Object(o.keys)(e.details.solutions).length-4]})]})}),Object(O.jsx)(U.a,{style:t.tableCell,children:Object(O.jsx)(l.a,{onClick:function(){e.handleOpenSolutionModel(e.details.problem,e.details.solutions)},children:Object(O.jsx)(oe.a,{style:t.fileOpen})})}),Object(O.jsx)(U.a,{style:t.tableCell,children:e.details.last_solved_at.substring(0,10)})]})}function de(e){var t={tableHeader:{color:e.headerColor,fontSize:"1.4rem",padding:"0.5rem"},tableCell:{textAlign:"left",fontSize:"1.15rem",color:"white",margin:0,padding:0,paddingInline:"1rem"},link:{textDecoration:"none"},iconButton:{color:"white",padding:0},arrowIcon:{color:"white",fontSize:"2rem"},sortIcon:{color:"white",fontSize:"3rem"}},n=Object(u.useState)(null),c=Object(r.a)(n,2),s=c[0],a=c[1],i=function(n){if(e.sortBy===n){if("asc"===e.queryParams.sortDir)return Object(O.jsx)(q.a,{style:t.arrowIcon});if("desc"===e.queryParams.sortDir)return Object(O.jsx)(G.a,{style:t.arrowIcon})}return Object(O.jsx)(O.Fragment,{})};return Object(O.jsxs)(H.a,{className:"solution-table",children:[Object(O.jsx)(B.a,{children:Object(O.jsxs)(z.a,{className:"header",children:[Object(O.jsxs)(U.a,{style:t.tableHeader,children:[Object(O.jsx)(l.a,{style:t.iconButton,onClick:function(e){a(e.currentTarget)},children:Object(O.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(O.jsx)(R.a,{style:t.sortIcon})})}),Object(O.jsx)(d.a,{anchorEl:s,open:!!s,onClose:function(){return a(null)},style:{marginLeft:"-1rem",opacity:.75},children:Object(o.map)([{label:"Problem",value:"problem_id"},{label:"Solved At",value:"last_solved_at"}],(function(t,n){return Object(O.jsxs)(j.a,{style:{width:"100px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem",fontSize:"1.15rem"},onClick:function(){e.handleSortDirChange(t.value)},children:[Object(O.jsx)("div",{children:t.label}),i(t.value)]},n)}))})]}),Object(O.jsx)(U.a,{style:t.tableHeader,colSpan:3,children:"Problem"}),Object(O.jsx)(U.a,{style:t.tableHeader,children:"Language"}),Object(O.jsx)(U.a,{style:t.tableHeader,children:"Solution"}),Object(O.jsx)(U.a,{style:t.tableHeader,children:"Solved At"})]})}),!e.loading&&Object(O.jsx)(D.a,{className:"solution-table-body",style:{backgroundColor:e.backgroundColor},children:Object(o.map)(e.solutions,(function(t,n){var c=t.problem.tags;return Object(O.jsx)(le,{details:t,handleOpenSolutionModel:e.handleOpenSolutionModel,problemTags:c},n)}))}),e.loading&&Object(O.jsxs)(D.a,{children:[Object(O.jsx)(z.a,{}),Object(O.jsx)(z.a,{children:Object(O.jsx)(U.a,{colSpan:7,children:Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(O.jsx)(S.a,{style:{color:"white",width:"3rem",height:"3rem"}})})})})]})]})}var je=n(568),be=n(155),ue=n(569),he=n(563);function Oe(e){return Object(O.jsx)(ue.a,{language:e.language,style:he.a,showLineNumbers:!0,lineNumberStyle:{minWidth:0},showInlineLineNumbers:!0,children:e.code})}var pe=n(566),me=n(581);function fe(e){var t,n=Object(u.useState)(0),c=Object(r.a)(n,2),s=c[0],a=c[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(pe.a,{variant:"scrollable",value:s,onChange:function(e,t){a(t)},TabIndicatorProps:{style:{backgroundColor:null!==(t=e.color)&&void 0!==t?t:"white"}},children:e.tabs.map((function(t,n){var c;return Object(O.jsx)(me.a,{label:Object(O.jsx)("div",{style:{fontSize:"1.5rem",textTransform:"none"},children:t.label}),style:{color:null!==(c=e.color)&&void 0!==c?c:"white",paddingTop:0,paddingBottom:0,marginLeft:0,backgroundColor:"rgba(0,0,0,0.1)"}},n)}))}),Object(O.jsx)("div",{children:e.tabs[s].content})]})}n(503);function xe(e){var t=e.problem,n=e.solutions,c=Object(o.without)(Object(o.keys)(n),"recent").map((function(e){var t=Object(o.get)(n,e),c=Object(o.get)(t,"runtime_ms"),s=Object(o.get)(t,"memory_usage_mb");return{label:e,content:Object(O.jsxs)("div",{className:"solution-code",children:[Object(O.jsxs)("div",{style:{padding:"1rem"},children:["Runtime: ",c," ms ",Object(O.jsx)("br",{}),"Memory Usage: ",s," MB"]}),Object(O.jsx)(Oe,{code:Object(o.get)(n,"".concat(e,".solution_code")),language:ae[e]})]})}}));return Object(O.jsx)(je.a,{open:e.open,onClose:e.handleClose,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(O.jsxs)("div",{className:"solution-container",children:[Object(O.jsx)("div",{className:"problem-block",children:Object(O.jsxs)("div",{className:"modal-content",children:[Object(O.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"leetcode-title",style:{color:W[t.difficulty]},children:[t.id,". ",t.title]}),Object(O.jsx)(be.a,{markup:t.description})]})}),Object(O.jsx)("div",{className:"solution-block",children:Object(O.jsx)("div",{className:"modal-content",children:Object(O.jsx)(fe,{tabs:c,color:W[t.difficulty]})})})]})})}n(504),n(505),n(506);function ge(e){var t,n=Object(o.orderBy)(Object(o.map)(Object(o.reduce)(e.solved,(function(e,t){return Object(o.get)(t,"tags").forEach((function(t){e[t]=1+(e[t]||0)})),e}),{}),(function(e,t){return{tag:t,frequency:e}})),["frequency","tag"],["desc","asc"]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"user-page-section-header",children:" Skills"}),Object(O.jsx)("div",{className:"user-page-section-content",style:{backgroundColor:null!==(t=e.backgroundColor)&&void 0!==t?t:"#382E37"},children:Object(O.jsx)("div",{className:"skill-tag-container",children:Object(o.map)(n,(function(e,t){return Object(O.jsxs)("div",{className:"skill-tag",children:[e.tag,": ",e.frequency]},t)}))})})]})}var ve=n.p+"static/media/banner.be31f949.jpg";function ye(e){var t=Object(a.e)(),n=Object(u.useState)(null),c=Object(r.a)(n,2),s=c[0],i=c[1],l=Object(u.useState)({}),d=Object(r.a)(l,2),j=d[0],b=d[1],h=Object(u.useState)(!0),p=Object(r.a)(h,2),g=p[0],v=p[1],y=Object(u.useState)(!0),k=Object(r.a)(y,2),C=k[0],N=k[1],I=Object(u.useState)(!1),L=Object(r.a)(I,2),F=L[0],P=L[1],T=Object(u.useState)({}),E=Object(r.a)(T,2),A=E[0],H=E[1],B=Object(u.useState)({}),z=Object(r.a)(B,2),U=z[0],D=z[1],M=Object(u.useState)("last_solved_at"),R=Object(r.a)(M,2),J=R[0],q=R[1],K=Object(u.useState)(1),G=Object(r.a)(K,2),Q=G[0],W=G[1],V=Object(u.useState)(Object(x.a)(Object(x.a)({},function(e){var t=Object(o.get)(e,"search").substring(1);return Object(o.reduce)(t.split("&"),(function(e,t){if(!t)return e;var n=t.split("="),c=Object(r.a)(n,2),s=c[0],a=c[1];return e[s]=a,e}),{})}(t)),{},{sortBy:J,sortDir:"desc"})),Y=Object(r.a)(V,2),X=Y[0],Z=Y[1];function $(){return($=Object(f.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,_.getUserProfile(X).then((function(e){i(e.user)})).catch((function(){setTimeout((function(){v(!1)}),200)}));case 3:setTimeout((function(){v(!1)}),500);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=Object(f.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,_.getUserSolutions(X).then((function(e){b(e)}));case 3:setTimeout((function(){N(!1)}),500);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){Z(Object(x.a)(Object(x.a)({},X),e))}var ne={0:null,1:"desc",2:"asc"};return Object(u.useEffect)((function(){!function(){$.apply(this,arguments)}()}),[]),Object(u.useEffect)((function(){!function(){ee.apply(this,arguments)}()}),[X]),Object(O.jsxs)("div",{className:"content-container",style:{backgroundColor:e.backgroundColor},children:[Object(O.jsx)("img",{src:ve,style:{width:"100%"},alt:"elaina eating"}),g&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(O.jsx)(S.a,{style:{color:e.color,width:"8rem",height:"8rem"}})}),s&&!g&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"profile-page-container",children:[Object(O.jsxs)("div",{className:"user-profile-wrapper",children:[Object(O.jsx)(w,{userInfo:s,borderColor:"#FF66EB"}),Object(O.jsx)(ge,{solved:s.solved})]}),Object(O.jsx)("div",{style:{overflow:"auto"},children:Object(O.jsx)(de,{solutions:j.rows,handleOpenSolutionModel:function(e,t){H(e),D(t),P(!0)},headerColor:e.color,backgroundColor:"#382E37",handleSortDirChange:function(e){var t=(Q+1)%3;te({sortBy:e,sortDir:ne[t]}),q(e),W(t)},loading:C,addFilter:te,queryParams:X,sortBy:J,sortDir:Q})}),Object(O.jsx)(xe,{open:F,handleClose:function(){H({}),D({}),P(!1)},problem:A,solutions:U})]})}),!s&&Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",fontSize:"2rem",color:"white"},children:['"',"sdfsf",'" is not a valid user']})]})}var we=n(150),Se=n.n(we),ke=n(154),Ce=(n(507),{container:function(e,t){return{padding:0,width:"200px",flexGrow:1}},control:function(e,t){return{borderRadius:0,backgroundColor:"#3d3d3d"}},dropdownIndicator:function(e,t){return{display:"none"}},indicatorsContainer:function(e,t){return{padding:0}},menu:function(e,t){return{borderRadius:0}},option:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{color:"white",fontSize:"1.25rem",backgroundColor:t.isFocused?"#444444":"#000000"})},placeholder:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{fontSize:"1.25rem",color:"white"})}}),Ne={searchIcon:{marginTop:"1px",color:"white",fontSize:"2.25rem"},nameLabel:{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"1rem",color:"white"},avatarIcon:{width:"2.5rem",height:"2.5rem"}};function Ie(e){return Object(O.jsxs)("div",{className:"user-filter-section",children:[Object(O.jsx)(Se.a,{style:Ne.searchIcon}),Object(O.jsx)(ke.a,{clearIndicator:!0,styles:Ce,value:e.selectedUser,onChange:e.setSelectedUser,options:e.allUsers,formatOptionLabel:function(e){return Object(O.jsxs)("div",{style:Ne.nameLabel,children:[Object(O.jsx)(v.a,{style:Ne.avatarIcon,src:e.profile_picture_url}),e.username]})},placeholder:"Search for a User..."})]})}n(514);var Le=n(573);function Fe(e){var t=Object(u.useState)([]),n=Object(r.a)(t,2),c=n[0],s=n[1],a=Object(u.useState)(null),l=Object(r.a)(a,2),d=l[0],j=l[1],b=Object(u.useState)(null),h=Object(r.a)(b,2),p=h[0],x=h[1],g=Object(u.useState)(!0),v=Object(r.a)(g,2),y=v[0],k=v[1],C=Object(u.useState)(!1),N=Object(r.a)(C,2),I=N[0],L=N[1];function F(){return(F=Object(f.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,_.getAllUsers().then((function(e){var t=e.users.map((function(e){return Object(o.pick)(e,["_id","username","profile_picture_url"])}));s(t)}));case 3:setTimeout((function(){k(!1)}),500);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(f.a)(Object(m.a)().mark((function e(t){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getUserProfile(t).then((function(e){x(e.user)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[]),Object(u.useEffect)((function(){L(!0),d&&function(e){P.apply(this,arguments)}(d),setTimeout((function(){L(!1)}),500)}),[d]),Object(O.jsxs)("div",{className:"content-container",style:{backgroundColor:e.backgroundColor},children:[y&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(O.jsx)(S.a,{style:{color:e.color,width:"8rem",height:"8rem"}})}),Object(O.jsxs)("div",{className:"user-page-content-container",children:[Object(O.jsx)("div",{className:"user-page-search-container",children:!y&&Object(O.jsx)(Ie,{allUsers:c,selectedUser:d,setSelectedUser:j})}),Object(O.jsxs)("div",{className:"user-page-user-profile-container",children:[I&&Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:Object(O.jsx)(S.a,{style:{color:e.color,width:"4rem",height:"4rem"}})}),!I&&p&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{userInfo:p}),Object(O.jsx)(i.b,{to:"/profile?user_id=".concat(Object(o.get)(d,"_id")),style:{textDecoration:"none"},children:Object(O.jsx)(Le.a,{style:{color:"white",fontSize:"1.25rem"},children:"View Profile"})})]})]})]})]})}function Pe(e){return Object(O.jsx)("div",{className:"content-container",style:{backgroundColor:e.backgroundColor},children:"Leetcode Problems"})}var Te=[{path:"/welcome",element:Object(O.jsx)(p,{})},{path:"/profile",element:Object(O.jsx)(ye,{})},{path:"/users",element:Object(O.jsx)(Fe,{})},{path:"/problems",element:Object(O.jsx)(Pe,{})}],Ee={"/welcome":Q.Blue,"/profile":Q.Purple,"/users":Q.LightBlue,"/problems":Q.Orange},Ae={"Sign In":"/profile",Leaderboard:"/welcome",Users:"/users",Problems:"/problems"},_e=n(151),He=n.n(_e);n(515);function Be(e){var t=Object(a.e)(),n=Object(b.useScrollYPosition)(),c=Object(u.useState)(null),s=Object(r.a)(c,2),h=s[0],p=s[1],m=Object(u.useState)(null),f=Object(r.a)(m,2),x=f[0],g=f[1],v={MenuItem:{fontSize:"1.5rem","&:hover":{color:null!==h&&void 0!==h?h:"white"}},link:{textDecoration:"none",color:"white"}};return Object(u.useEffect)((function(){var n=t.pathname;p(Object(o.get)(Ee,"".concat(n,".color"))),e.changeTheme(Object(o.get)(Ee,n))}),[t,e]),Object(u.useEffect)((function(){var e=document.querySelector(".navbar-container"),c=document.querySelector(".katsudon-logo");if(n>20)return e.classList.add("navbar-container-condensed"),e.style.backgroundColor=Object(o.get)(Ee,"".concat(t.pathname,".navbar")),void c.classList.add("katsudon-logo-condensed");e.classList.remove("navbar-container-condensed"),c.classList.remove("katsudon-logo-condensed"),e.style.backgroundColor=""}),[n]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"navbar-container",children:[Object(O.jsxs)("div",{className:"navbar-menu",children:[Object(O.jsx)(l.a,{onClick:function(e){g(e.currentTarget)},children:Object(O.jsx)(He.a,{style:{color:"white",fontSize:"4rem"}})}),Object(O.jsx)(d.a,{style:{marginLeft:"-1.5rem"},anchorEl:x,open:!!x,onClose:function(){return g(null)},children:Object(o.map)(Ae,(function(e,t){return Object(O.jsx)(i.b,{to:e,style:v.link,children:Object(O.jsx)(j.a,{sx:v.MenuItem,children:t})},t)}))})]}),Object(O.jsxs)("div",{className:"navbar-redirect-section",children:[Object(O.jsxs)("div",{className:"navbar-link-wrapper",children:[Object(O.jsx)("div",{className:"katsudon-logo",style:{color:h},children:"\u30ab\u30c4\u30c9\u30f3"}),Object(o.map)(Object(o.omit)(Ae,"Sign In"),(function(e,t){return Object(O.jsx)("div",{className:"redirect-links",children:Object(O.jsx)(i.b,{to:e,className:"navbar-redirect-link",style:{textDecoration:"none"},children:t})},t)}))]}),Object(O.jsx)(i.b,{to:"/profile",className:"navbar-redirect-link",style:{textDecoration:"none"},children:"Sign In"})]})]}),Object(O.jsx)("div",{className:"navbar-bottom-padding"})]})}var ze=n(152),Ue=n.n(ze),De=n(153),Me=n.n(De),Re=(n(516),{icon:{fontSize:"3rem",color:"white"}});function Je(){return Object(O.jsxs)("div",{className:"footer-container",children:[Object(O.jsxs)("div",{className:"footer-content",children:[Object(O.jsx)(l.a,{children:Object(O.jsx)("a",{href:"https://github.com/DLi7077",children:Object(O.jsx)(Ue.a,{style:Re.icon})})}),Object(O.jsx)(l.a,{children:Object(O.jsx)("a",{href:"https://www.linkedin.com/in/devin-li7077/",children:Object(O.jsx)(Me.a,{style:Re.icon})})})]}),"please hire me"]})}var qe=function(){var e=Object(u.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Te.map((function(e,t){var c=Object(u.cloneElement)(e.element,{color:Object(o.get)(n,"color"),backgroundColor:Object(o.get)(n,"background")});return Object(O.jsx)(a.a,{path:e.path,element:c},t)}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(Be,{changeTheme:c}),Object(O.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"75px"},children:Object(O.jsx)(a.c,{children:s})}),Object(O.jsx)(Je,{})]})})};s.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(qe,{}))}},[[517,1,2]]]);
//# sourceMappingURL=main.4d3170f6.chunk.js.map