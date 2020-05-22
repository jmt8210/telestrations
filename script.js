var currentColor = 'black';
var backgroundColor = 'white';
var currentWidth = 20;
$(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.lineJoin = 'round';
    var oldX = 0;
    var oldY = 0;   
    var isClicked=false;
    $("*").mousedown(function(event){
        isClicked = true;  
    });
    $("*").mouseup(function(event){
        isClicked = false;
    });
    $("*").mousemove(function(event){
        
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        console.log("This is x: " + x);
        if(isClicked) drawPoint(x, y);
        
    });

    var drawPoint = function(x, y){
        console.log(x)
        ctx.arc(x, y, currentWidth/2, 0, Math.PI*2);
        ctx.stroke();
    }

    
});

var setBlack = function(){currentColor='black';}
var setWhite = function(){currentColor='white';}
var setBlue = function(){currentColor='blue';}
var setRed = function(){currentColor='red';}
var setGreen = function(){currentColor='green';}
var setYellow = function(){currentColor='yellow';}
var setOrange = function(){currentColor='orange';}
var setPurple = function(){currentColor='purple';}

var setSmall = function(){currentWidth=2;}
var setMedium = function(){currentWidth=5;}
var setLarge = function(){currentWidth=10;}


