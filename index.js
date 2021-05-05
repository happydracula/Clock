var canvas = document.getElementById("my-canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
  var x=canvas.width/2
   var y=canvas.height/2
var date = new Date();
    var seconds=date.getSeconds();
    var minutes=date.getUTCMinutes()-30;
    var hours=date.getHours();
    if(hours>12){
        hours=hours-12;
    }
    var fs=-Math.PI/2;
var fm=-Math.PI/2;
var fh=-Math.PI/2;
fs+=seconds*(Math.PI/30);
fm+=minutes*(Math.PI/30);
fh+=hours*(Math.PI/6);
console.log(minutes);
var radius=(canvas.width+canvas.height)/10
window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
 x=canvas.width/2
    y=canvas.height/2

 radius=(canvas.width+canvas.height)/10
})
var c =canvas.getContext("2d");
var backgroundGradient=c.createLinearGradient(0,0,0,canvas.height);
backgroundGradient.addColorStop(0,"#000000");
backgroundGradient.addColorStop(1,"#151515");
function Line(x,y,color,width){
    this.x=x;
    this.y=y;
    this.color=color;
    this.width=width;
    this.draw=()=>{
        c.beginPath();
        c.moveTo(canvas.width/2,canvas.height/2);
        c.lineTo(this.x,this.y);
        c.strokeStyle=this.color;
        c.lineWidth=this.width;
        c.stroke();
        c.closePath();
    
    }
}


var frames=0;
var r=1;
function animate(){
    
    
    if(frames%120===0){
        
        r++;
    }
    requestAnimationFrame(animate);
    c.fillStyle=backgroundGradient;
    c.fillRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.arc(x,y,radius,0,Math.PI*2);
    c.lineWidth=2;
    c.strokeStyle="#52057b";
    c.stroke();
    var rad=0;
    for(var i=1;i<=12;i++){
      c.beginPath();
      c.moveTo(x+radius*(Math.cos(rad)),y+radius*(Math.sin(rad)));
      c.lineTo(x+(radius-15)*(Math.cos(rad)),y+(radius-15)*(Math.sin(rad)));
      c.strokeStyle="#f638dc";
      c.lineWidth=3;
      c.stroke();
      c.closePath();
      rad+=Math.PI/6;
    }
    //seconds
    var secondHand =new Line(x+radius*(Math.cos(fs)),y+radius*(Math.sin(fs)),"#bc6ff1",5);
    secondHand.draw();
    if(frames%120===0&&frames!==0){
        
        fs+=Math.PI/30;
        
    }
    //minutes
    var minuteHand=new Line(x+(radius-40)*(Math.cos(fm)),y+(radius-40)*(Math.sin(fm)),"#bc6ff1",7);
    minuteHand.draw();
    if(frames%7200===0&&frames!==0){
        
        fm+=Math.PI/30;
    }
    frames++;
    hours
     var hourHand=new Line(x+(radius-80)*(Math.cos(fh)),y+(radius-80)*(Math.sin(fh)),"#bc6ff1",10);
     hourHand.draw();
     if(frames%432000===0){
         fh+=Math.PI/6;
     }
    frames++;

    
}
animate();