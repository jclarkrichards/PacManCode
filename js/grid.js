class Line {
    constructor(x0, y0, x1, y1, ctx) {
	this.x0 = x0;
	this.x1 = x1;
	this.y0 = y0;
	this.y1 = y1;
	ctx.beginPath();
	ctx.strokeStyle = "white";
	ctx.moveTo(this.x0, this.y0);
	ctx.lineTo(this.x1, this.y1);
	ctx.stroke();
    }
}

function drawGrid(ctx)
{
    //Vertical lines
    for(var i=0; i<=window.innerWidth/16; i++) {
	var line = new Line(16*i, 0, 16*i, window.innerHeight, ctx)
    }

    //Horizontal lines
    for(var i=0; i<=window.innerHeight/16; i++) {
	var line2 = new Line(0, 16*i, window.innerWidth, 16*i, ctx);
    }
}


