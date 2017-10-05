//var myGamePiece;

function startGame()
{
    myGameArea.start();
    //myGamePiece = new pacman(20, "yellow", 30, 120);
}
/*
function pacman(radius, color, x, y)
{
    this.radius = radius;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
}
*/
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.setAttribute("id", "gamebody");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }
}
