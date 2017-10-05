var myGamePiece;

function startGame()
{
    myGameArea.start();
    myGamePiece = new pacman(20, "yellow", 30, 120);
}

function pacman(radius, color, x, y)
{
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
    }
    this.newPos = function() {
	this.x += this.speedX;
	this.y += this.speedY;
    }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.setAttribute("id", "gamebody");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.firstChild);
	this.interval = setInterval(updateGameArea, 20);
	window.addEventListener('keydown', function (e) {
	    myGameArea.key = e.keyCode; })
	window.addEventListener('keyup', function (e) {
	    myGameArea.key = false; })
    },
    clear : function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGameArea()
{
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1;}
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1;}
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1;}
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1;}
    myGamePiece.newPos();
    myGamePiece.update();
}
