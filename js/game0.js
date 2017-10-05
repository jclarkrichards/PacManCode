var show_grid = false;

function startGame()
{
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.firstChild);
    }
}

function toggleGrid()
{
    show_grid = !show_grid;
    if(show_grid) {
	drawGrid(myGameArea.context);
    }
    else {
	console.log("turn off");
	myGameArea.context.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    }
}
