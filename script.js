var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var imgPlayer = new Image();

imageObj.onload = function() 
{
    ctx.drawImage(imageObj, 10, 160);
};
imgPlayer.src = 'pics/player.png';



function gameTick()
{
    updateValues();
    drawScreen();

    var t = setTimeout(gameTick, 16);
}

function updateValues()
{

}

function drawScreen()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,canvas.width,75);
}