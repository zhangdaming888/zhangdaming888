(function(window,document,undefined){  
var hearts = [];  
window.requestAnimationFrame = (function(){  
return window.requestAnimationFrame ||  
window.webkitRequestAnimationFrame ||  
window.mozRequestAnimationFrame ||  
window.oRequestAnimationFrame ||  
window.msRequestAnimationFrame ||  
function (callback){  
setTimeout(callback,1000/60);  
}  
})();  
init();  
function init(){  
css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");  
attachEvent();  
gameloop();  
}  
function gameloop(){  
for(var i=0;i&lt;hearts.length;i++){  
if(hearts.alpha &lt;=0){  
document.body.removeChild(hearts.el);  
hearts.splice(i,1);  
continue;  
}  
hearts.y--;  
hearts.scale += 0.004;  
hearts.alpha -= 0.013;  
hearts.el.style.cssText = "left:"+hearts.x+"px;top:"+hearts.y+"px;opacity:"+hearts.alpha+";transform:scale("+hearts.scale+","+hearts.scale+") rotate(45deg);background:"+hearts.color;  
}  
requestAnimationFrame(gameloop);  
}  
function attachEvent(){  
var old = typeof window.onclick==="function" && window.onclick;  
window.onclick = function(event){  
old && old();  
createHeart(event);  
}  
}  
function createHeart(event){  
var d = document.createElement("div");  
d.className = "heart";  
hearts.push({  
el : d,  
x : event.clientX - 5,  
y : event.clientY - 5,  
scale : 1,  
alpha : 1,  
color : randomColor()  
});  
document.body.appendChild(d);  
}  
function css(css){  
var style = document.createElement("style");  
style.type="text/css";  
try{  
style.appendChild(document.createTextNode(css));  
}catch(ex){  
style.styleSheet.cssText = css;  
}  
document.getElementsByTagName('head')[0].appendChild(style);  
}  
function randomColor(){  
return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";  
}  
})(window,document);  