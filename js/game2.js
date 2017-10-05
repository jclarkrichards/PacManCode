var myGamePiece;
var nodes = [];
var connections = [];
var show_grid = false;

function startGame()
{
    myGameArea.start();
    myGamePiece = new pacman(8, "yellow", 30, 120);
    nodes.push(new Node(10, 5, 5));
    nodes.push(new Node(10, 10, 5));
    nodes.push(new Node(10, 5, 10));
    nodes.push(new Node(10, 10, 10));
    nodes.push(new Node(10, 13, 10));
    nodes.push(new Node(10, 5, 20));
    nodes.push(new Node(10, 13, 20));
    nodes[0].right = nodes[1];
    nodes[0].down = nodes[2];
    nodes[1].left = nodes[0];
    nodes[1].down = nodes[3];
    nodes[2].up = nodes[0];
    nodes[2].right = nodes[3];
    nodes[2].down = nodes[5];
    nodes[3].up = nodes[1];
    nodes[3].left = nodes[2];
    nodes[3].right = nodes[4];
    nodes[4].left = nodes[3];
    nodes[4].down = nodes[6];
    nodes[5].up = nodes[2];
    nodes[5].right = nodes[6];
    nodes[6].up = nodes[4];
    nodes[6].left = nodes[5];
    connections.push(new Connection(nodes[0].x, nodes[0].y, nodes[1].x, nodes[1].y));
    connections.push(new Connection(nodes[0].x, nodes[0].y, nodes[2].x, nodes[2].y));
    connections.push(new Connection(nodes[1].x, nodes[1].y, nodes[3].x, nodes[3].y));
    connections.push(new Connection(nodes[2].x, nodes[2].y, nodes[3].x, nodes[3].y));
    connections.push(new Connection(nodes[2].x, nodes[2].y, nodes[5].x, nodes[5].y));
    connections.push(new Connection(nodes[3].x, nodes[3].y, nodes[4].x, nodes[4].y));
    connections.push(new Connection(nodes[4].x, nodes[4].y, nodes[6].x, nodes[6].y));
    connections.push(new Connection(nodes[5].x, nodes[5].y, nodes[6].x, nodes[6].y));
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

function Node(radius, x, y) {
    this.x = x;
    this.y = y;
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
    this.update = function() {
	var ctx = myGameArea.context;
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(x*16, y*16, radius, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
    }
}

function Connection(x0, y0, x1, y1) {
    console.log(x0);
    console.log(y0);
    console.log(x1);
    console.log(y1);
    this.update = function() {
	var ctx = myGameArea.context;
	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.moveTo(x0*16, y0*16);
	ctx.lineTo(x1*16, y1*16);
	ctx.lineWidth = 3;
	ctx.stroke();
    }
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
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

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1;}
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1;}
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1;}
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1;}
    showGrid();
    myGamePiece.newPos();

    for(var i=0; i<nodes.length; i++) {
	nodes[i].update();
    }
    for(var i=0; i<connections.length; i++) {
	connections[i].update();
    }
    myGamePiece.update();
}


function toggleGrid() {
    show_grid = !show_grid;
}


function showGrid() {
    if(show_grid) {
        drawGrid(myGameArea.context);
    }
    else {
        myGameArea.context.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    }
	
}

