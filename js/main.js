const gridLeft = 60;
const rectSize = 70;
const gridTop = 200;

var addGameTitle = function (canvas) {
    var title = new fabric.Text('2048', {left: 170, top: 50});
    canvas.add(title);
};

var addScore = function (canvas) {
    var score = new fabric.Text('Score: 0', {left: 175, top: 110, fontSize: 20});
    canvas.add(score);
};

var createRect = function (i, j, fill) {
    var rect = new fabric.Rect({
        top: gridTop + i * (rectSize + 1),
        left: gridLeft + j * (rectSize + 1),
        width: rectSize,
        height: rectSize,
        fill: fill
    });
    return rect;
};
var getGrids = function () {
    let grids = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            var rect = createRect(i, j, 'red');
            grids.push(rect);
        }
    }

    return grids;
};
function addGrid(canvas) {
    var grids = getGrids();
    for (let rect of grids) {
        canvas.add(rect)
    }
}

var addNumberWithPosition = function (i, j, canvas) {
    let fill = 'blue';
    let block = createRect(i, j, fill);
    canvas.add(block);

    var number = new fabric.Text('2', {
        left: gridLeft + i * rectSize,
        top: gridTop + j * rectSize,
        fontSize: 60,
        fill: "white"
    });
    canvas.add(number);
};
function addNumber(canvas) {
    let i = 0;
    let j = 0;
    addNumberWithPosition(i, j, canvas);
    addNumberWithPosition(1, 1, canvas);
}

function start() {
    let canvasDOM = document.getElementById("canvas");
    canvasDOM.width = window.innerWidth;
    canvasDOM.height = window.innerHeight;

    var canvas = new fabric.Canvas('canvas');

    addGameTitle(canvas);
    addScore(canvas);
    addGrid(canvas);
    addNumber(canvas);
}