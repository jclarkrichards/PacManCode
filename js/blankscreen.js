function openBlankWindow()
{
    var width = 16;
    var height = 16;
    var nrows = 36;
    var ncols = 28;
    var WIDTH = width * ncols;
    var HEIGHT = height * nrows;
    var popup = window.open("blankwindow.html", "BLANK", "width="+WIDTH+" , height="+HEIGHT+" , left=400, top=400");
}