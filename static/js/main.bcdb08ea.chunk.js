(this.webpackJsonpasteroids=this.webpackJsonpasteroids||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),r=n(5),s=n.n(r),a=n(6),c=n(7),u=n(1),l=function(t){return function(e){return(e%t+t)%t}},y=function(t){return t};var h=function(t){return{x:l(t.screen.width)(t.ship.position.x+t.ship.velocity.x),y:l(t.screen.height)(t.ship.position.y+t.ship.velocity.y)}},p=function(t){return t.keys.right?l(360)(t.ship.rotation+2):t.keys.left?l(360)(t.ship.rotation-2):l(360)(t.ship.rotation)},f=function(t){return t.keys.up?(e=t.ship.velocity,function(t){return{x:.99*(e.x-.1*Math.sin(-t*Math.PI/180)),y:.99*(e.y-.1*Math.cos(-t*Math.PI/180))}})(t.ship.rotation):{x:.99*t.ship.velocity.x,y:.99*t.ship.velocity.y};var e},d=function(t){return Object(u.a)({},t.ship,{position:h(t),velocity:f(t),rotation:p(t)})};var x=function(t,e){return{x:e.position.x+e.velocity.x,y:e.position.y+e.velocity.y}};var v={context:null,ship:{position:{x:800,y:400},velocity:{x:0,y:0},rotation:0},lastShot:0,bullets:[],keys:{right:!1,left:!1,up:!1},screen:{width:0,height:0,ratio:0}};function k(t,e){switch(e.type){case"set_context":return Object(u.a)({},t,{context:e.context,screen:e.screen});case"set_keys":return Object(u.a)({},t,{keys:Object(u.a)({},t.keys,{},e.keys)});case"add_bullet":var n=(o={x:0,y:-20},r={x:0,y:0},s=t.ship.rotation*Math.PI/180,{x:(o.x-r.x)*Math.cos(s)-(o.y-r.y)*Math.sin(s)+r.x,y:(o.x-r.x)*Math.sin(s)+(o.y-r.y)*Math.cos(s)+r.y}),i={position:{x:t.ship.position.x+n.x,y:t.ship.position.y+n.y},velocity:{x:n.x/2,y:n.y/2}};return Date.now()-t.lastShot>300?Object(u.a)({},t,{lastShot:Date.now(),bullets:[].concat(Object(c.a)(t.bullets),[i])}):t;case"update":!function(t){var e=t.context,n=t.ship;e.save(),e.translate(n.position.x,n.position.y),e.rotate(n.rotation*Math.PI/180),e.strokeStyle="#ffffff",e.fillStyle="#000000",e.lineWidth=2,e.beginPath(),e.moveTo(0,-15),e.lineTo(10,10),e.lineTo(5,7),e.lineTo(-5,7),e.lineTo(-10,10),e.closePath(),e.fill(),e.stroke(),e.restore()}(t);return t.bullets.map((function(e){return function(t,e){var n=t.context;n.save(),n.translate(e.position.x,e.position.y),n.rotate(e.rotation*Math.PI/180),n.fillStyle="#FFF",n.lineWidth=.5,n.beginPath(),n.arc(0,0,2,0,2*Math.PI),n.closePath(),n.fill(),n.restore()}(t,e)})),Object(u.a)({},t,{ship:d(t),bullets:t.bullets.map((function(e){return function(t,e){return e.position.x<0||e.position.y<0||e.position.x>t.screen.width||e.position.y>t.screen.height?null:Object(u.a)({},e,{position:x(0,e)})}(t,e)})).filter(y)});default:return t}var o,r,s}var w=37,b=39,g=38,m=65,j=68,O=87,M=32;var C=function(){var t=Object(i.useRef)(null),e=Object(i.useReducer)(k,v),n=Object(a.a)(e,2),r=n[0],s=n[1];Object(i.useEffect)((function(){var e=t.current.getContext("2d");s({type:"set_context",context:e,screen:{width:window.innerWidth,height:window.innerHeight,ratio:window.devicePixelRatio||1}})}),[]);var c=Object(i.useCallback)((function(){var e=r.context||t.current.getContext("2d");e.save(),e.fillStyle="#000",e.fillRect(0,0,window.innerWidth,window.innerHeight),s({type:"update"}),e.restore(),requestAnimationFrame((function(){c()}))}),[r.context]),u=Object(i.useCallback)((function(t,e){t.keyCode!==w&&t.keyCode!==m||s({type:"set_keys",keys:{left:e}}),t.keyCode!==b&&t.keyCode!==j||s({type:"set_keys",keys:{right:e}}),t.keyCode!==g&&t.keyCode!==O||s({type:"set_keys",keys:{up:e}}),t.keyCode===M&&s({type:"add_bullet"})}),[]);return Object(i.useEffect)((function(){return window.addEventListener("keyup",(function(t){return u(t,!1)})),window.addEventListener("keydown",(function(t){return u(t,!0)})),requestAnimationFrame((function(){c()})),function(){window.removeEventListener("keyup",u),window.removeEventListener("keydown",u)}}),[u,c]),o.a.createElement("div",{className:"App"},o.a.createElement("canvas",{ref:t,width:r.screen.width*r.screen.ratio,height:r.screen.height*r.screen.ratio}))};n(13);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bcdb08ea.chunk.js.map