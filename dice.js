var a=Math.random();
a=a*6+1;
var b=Math.floor(a);
console.log(b);
var x=document.querySelectorAll("img")[0];
var randdiceimg="dice"+ b +".png";
var source= "images/" + randdiceimg;
x.setAttribute("src",source);





var c=Math.random();
c=c*6+1;
var d=Math.floor(c);
console.log(d);

var y=document.querySelectorAll("img")[1];
var randd="dice"+ d +".png";
var sourc= "images/" + randd;
y.setAttribute("src",sourc);


if(b>d){
document.querySelector("h1").innerHTML="player 1 wins";
}

else if(d>b){
  document.querySelector("h1").innerHTML="player 2 wins";
}

else{
  document.querySelector("h1").innerHTML="draw";
}
