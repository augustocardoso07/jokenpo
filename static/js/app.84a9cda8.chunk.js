(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var o=n(167),r=n(168),s=n(6),i=n.n(s),c=n(69),a=n(3),l=n(2),m=n(21),Q=n(16),p=n(4);function A(e){var t=e.score;return Object(p.jsxs)(l.a,{style:d.container,children:[Object(p.jsx)(l.a,{children:Object(p.jsx)(Q.a,{source:n(129),style:d.logo})}),Object(p.jsxs)(l.a,{style:d.score,children:[Object(p.jsx)(m.a,{style:d.label,children:"Score"}),Object(p.jsx)(m.a,{style:d.points,children:t})]}),Object(p.jsx)(c.a,{style:"inverted"})]})}var d=a.a.create({container:{alignItems:"center",justifyContent:"space-between",height:110,width:"90%",flexDirection:"row",borderWidth:3,borderRadius:5,borderColor:"#fff",marginTop:40,paddingLeft:18,paddingRight:10},logo:{width:70,height:70},score:{backgroundColor:"#fff",padding:8,width:80,alignItems:"center",borderWidth:3,borderRadius:5,borderColor:"#fff"},label:{},points:{fontSize:35}}),u=n(34),j=function(e){switch(e){case"scissors":return"hsl(39, 89%, 49%)";case"paper":return"hsl(230, 89%, 62%)";case"rock":return"hsl(349, 71%, 52%)";case"lizard":return"hsl(261, 73%, 60%)";case"spock":return"hsl(189, 59%, 53%)"}return"red"};function f(e){return Object(p.jsxs)(u.a,{onPress:function(){return e.onPress()},style:b(e.movePositionX,e.movePositionY,j(e.type)).container,children:["lizard"===e.type&&Object(p.jsx)(Q.a,{source:n(130)}),"paper"===e.type&&Object(p.jsx)(Q.a,{source:n(131)}),"rock"===e.type&&Object(p.jsx)(Q.a,{source:n(132)}),"scissors"===e.type&&Object(p.jsx)(Q.a,{source:n(133)}),"spock"===e.type&&Object(p.jsx)(Q.a,{source:n(134)}),e.title&&Object(p.jsx)(m.a,{style:b().title,children:e.title})]})}var b=function(e,t,n){return a.a.create({container:{position:"absolute",top:t,left:e,transform:[{translateX:-50}],backgroundColor:"#fff",alignItems:"center",justifyContent:"center",borderRadius:50,borderWidth:10,borderColor:n,width:100,height:100},title:{textTransform:"uppercase",color:"#fff",position:"absolute",top:100,width:150,textAlign:"center"}})};function h(e){var t=function(t){e.setPlayerMove(t),e.setGameState("playing")};return Object(p.jsx)(l.a,{style:g.container,children:Object(p.jsxs)(l.a,{style:g.innerContainer,children:[Object(p.jsx)(f,{type:"scissors",movePositionX:180,movePositionY:0,onPress:function(){return t("scissors")}}),Object(p.jsx)(f,{type:"paper",movePositionX:280,movePositionY:80,onPress:function(){return t("paper")}}),Object(p.jsx)(f,{type:"rock",movePositionX:240,movePositionY:200,onPress:function(){return t("rock")}}),Object(p.jsx)(f,{type:"lizard",movePositionX:120,movePositionY:200,onPress:function(){return t("lizard")}}),Object(p.jsx)(f,{type:"spock",movePositionX:80,movePositionY:80,onPress:function(){return t("spock")}})]})})}var g=a.a.create({innerContainer:{width:360,height:300},container:{flex:1,width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}),I=n(19);function x(){var e=Object(I.k)();return Object(p.jsx)(l.a,{style:y.container,children:Object(p.jsx)(u.a,{style:y.button,children:Object(p.jsxs)(m.a,{style:y.text,onPress:function(){return e.navigate("Rules")},children:[" ","Rules"]})})})}var y=a.a.create({container:{height:110,alignItems:"center",justifyContent:"center"},button:{paddingLeft:40,paddingRight:40,paddingBottom:10,paddingTop:10,borderColor:"#fff",borderWidth:1,borderRadius:5},text:{color:"#fff",textTransform:"uppercase",fontSize:18}}),O=["lizard","paper","rock","scissors","spock"];var R={scissors:["paper","lizard"],paper:["rock","spock"],rock:["lizard","scissors"],lizard:["spock","paper"],spock:["scissors","rock"]};function v(e){var t,n,o=function(){e.setGameState("piking"),"player"==s&&e.setScore(e.score+1)},r=O[Math.floor(Math.random()*O.length)],s=(t=e.playerMove)==(n=r)||void 0==t||void 0==n?"draw":R[t].indexOf(n)>=0?"player":"computer";return Object(p.jsxs)(l.a,{style:M.container,children:[Object(p.jsxs)(l.a,{style:M.innerContainer,children:[Object(p.jsx)(f,{type:e.playerMove,movePositionX:90,movePositionY:50,onPress:o,title:"You picked"}),Object(p.jsx)(f,{type:r,movePositionX:270,movePositionY:50,onPress:o,title:"The House picked"})]}),Object(p.jsxs)(l.a,{style:M.menu,children:[Object(p.jsx)(m.a,{style:M.gameResul,children:"player"==s?"you win":"computer"==s?"the house win":s}),Object(p.jsx)(u.a,{style:M.playAgain,onPress:o,children:Object(p.jsx)(m.a,{style:M.playAgainText,children:"Play Again"})})]})]})}var M=a.a.create({innerContainer:{width:360,height:200},container:{flex:1,width:"100%",height:"100%",alignItems:"center",justifyContent:"space-evenly"},gameResul:{color:"#fff",textTransform:"uppercase",fontSize:40,marginBottom:30},playAgain:{paddingRight:50,paddingLeft:50,paddingTop:20,paddingBottom:20,backgroundColor:"#fff",color:"#000",borderRadius:5},playAgainText:{textTransform:"uppercase"},menu:{alignItems:"center",justifyContent:"space-evenly"}}),k=n(0);function S(){var e=Object(k.useState)("piking"),t=i()(e,2),n=t[0],o=t[1],r=Object(k.useState)(),s=i()(r,2),a=s[0],m=s[1],Q=Object(k.useState)(0),d=i()(Q,2),u=d[0],j=d[1];return Object(p.jsxs)(l.a,{style:P.container,children:[Object(p.jsx)(A,{score:u}),"piking"===n?Object(p.jsx)(h,{setGameState:o,setPlayerMove:m}):Object(p.jsx)(v,{playerMove:a,setScore:j,score:u,setGameState:o}),Object(p.jsx)(x,{}),Object(p.jsx)(c.a,{style:"light"})]})}var P=a.a.create({container:{flex:1,backgroundColor:"hsl(214, 47%, 23%)",alignItems:"center",justifyContent:"center"}});function E(){var e=Object(I.k)();return Object(p.jsxs)(l.a,{style:G.container,children:[Object(p.jsx)(m.a,{style:G.title,children:" Rules "}),Object(p.jsx)(Q.a,{style:G.image,source:n(145)}),Object(p.jsx)(u.a,{onPress:function(){return e.goBack()},children:Object(p.jsx)(Q.a,{source:n(146)})})]})}var G=a.a.create({container:{flex:1,alignItems:"center",justifyContent:"space-evenly",width:"100%"},image:{},title:{fontSize:35}}),C=Object(r.a)();function W(){return Object(p.jsx)(o.a,{children:Object(p.jsxs)(C.Navigator,{screenOptions:{headerShown:!1},children:[Object(p.jsx)(C.Screen,{name:"Home",component:S}),Object(p.jsx)(C.Screen,{name:"Rules",component:E,options:{animation:"slide_from_left"}})]})})}},118:function(e,t,n){e.exports=n(160)},129:function(e,t,n){e.exports=n.p+"static/media/logo-bonus.2fee0370.png"},130:function(e,t,n){e.exports=n.p+"static/media/icon-lizard.1ee04840.png"},131:function(e,t,n){e.exports=n.p+"static/media/icon-paper.cfb9afb9.png"},132:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABklBMVEUAAAAAAAAAgIBVVVVAQIAzM2YrVVVAQGBGRl1AQGo7O2I3SVtAQGA8PGk5R2M2Q15AQGY9PWE6Rl03Q2Q4QGA+RmQ8RGI5QGM+RWA8Q2U5QGA4RGQ9Q2E6QGM8QWI6QGA5RGM9QmE8QWQ8QWE7QGQ5QmE9QWM8RGI7Q2A9QWE8RGQ7Q2I8RGI8Q2M7QWA6QWM8Q2E6QWE7QWQ6QWI7Q2E6Q2E8QmM8QWI8QWM7QmE6QmI8QWI7Q2M7QmI8QWM8Q2I7QmM8Q2M7QmI8Q2I7QmM6Q2E8QmM8QmM7Q2E7QmI6QmI7Q2I8QWI7QmM7QmI6QmE8Q2I7QmE8QmM7QmM6Q2E7QmE8QmI7Q2I7QmE7QmI7QWI8Q2I7QmI7QmE7QWI6QmI7QmI7QmI7QmM7QmI8QmI7QmI7Q2E8QmI7Q2I7QmI7QmE8QmI7QmI7QmI7QWI7QmI7QmE7QWI7QmI7QmI7Q2I7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmI7QmL///8Cws2JAAAAhHRSTlMAAQIDBAUGCAsMDQ4QERITFBUWFyAhIiQlJigpKiwvMDEyMzc4Ojs8PT9AQURISktMT1JTV1xdXmJkZWZnaGprbG9wc3R2d4SGh4iKjY6PkJGTlpudpaessra3uLm6u7y9vsLExcbHycvR1NbX2d7g4eLk5ebn6eru7/Hy8/f4+vv8/f5AxOJmAAAAAWJLR0SFFddq5wAAAXBJREFUGBmVwYtDS2EcBuB3SlTamK4UhcnWhYpshCKXMmvNpXtJFxJGatni0Hr/8M7qnNqc2+97HlhcSH3ZS8cDEDr5cpcFm5eAYDSeehSAo7rbT54NzdGQuTimUZftg73wEkvleWi3B3bu5enkV0MNLK7/pRttLdmGEkv0NFOLY40UyDTjyB1KrFfA9JgiMZgGKbIAU5QiOR8MvZSph6GVMjEYqijzDqYtiqRhWqTMeRgSlOmG7lRiZ/UpZYahmyT5kTJvANyiLk+ZZcD3mQo2gKtU8e8ERqjkHCappAUfqCSECSq5gUEqiaB6gyo6gctZKugAcO035Zqhi+QoFkDBlQyFNB8ONH2jzHcY/PMUmYapbJQSz3Hs7h9660aR1jS9aKdRLDhNDyso5RvS6Oot/tf2lW5ewKLyNV0MwMbNTTrqgh3/FK22F1MPO4KwV/GJRbbejz8In4Wrfh74OZ+83+6HwMCP2Vex0BmIlcPZPkTWWGcoUUYuAAAAAElFTkSuQmCC"},133:function(e,t,n){e.exports=n.p+"static/media/icon-scissors.64c46434.png"},134:function(e,t,n){e.exports=n.p+"static/media/icon-spock.94db1a54.png"},145:function(e,t,n){e.exports=n.p+"static/media/image-rules-bonus.15fc8930.png"},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAPFBMVEUAAAAAAAAAgICAgIA9PWY+RmE6QmM+RmQ8RGI5QGM8Q2U7QWI5QGA6RmM+RGY7RWI6Q2I9QWE8RGT////FTWqCAAAAE3RSTlMAAQICGR0fISIkJicoLC00OT9AfgYUOwAAAAFiS0dEEwy7XJYAAABtSURBVBjTrY/BEoIwFMRSBSqtCOT/P9aDg33Ps3vM7CGBqRfC6gJMp89Aqy7Q1fF9qFuBpt9vVV93iHSwQSO7aGaUru7qdot2TfMPoOzqkRlVg9lwPlLF5dLS93L5Vxtzdm66AnPuaOunht+9ASzICYxROAR2AAAAAElFTkSuQmCC"}},[[118,1,2]]]);
//# sourceMappingURL=app.84a9cda8.chunk.js.map