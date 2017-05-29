var addGameTitle = function (canvas) {
    var title = new fabric.Text('2048', {left: 170, top: 50});
    canvas.add(title);
};

var addScore = function (canvas) {
    var score = new fabric.Text('Score: 0', {left: 175, top: 110, fontSize: 20});
    canvas.add(score);
};

var getGrids = function () {
    let grids = [];
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            var rect = new fabric.Rect({
                top: 200 + i * 71,
                left: 60 + j * 71,
                width: 70,
                height: 70,
                fill: 'red'
            });
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

function start() {
    let canvasDOM = document.getElementById("canvas");
    canvasDOM.width = window.innerWidth;
    canvasDOM.height = window.innerHeight;

    var canvas = new fabric.Canvas('canvas');

    addGameTitle(canvas);
    addScore(canvas);
    addGrid(canvas);
}