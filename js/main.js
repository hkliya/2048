const gridLeft = 60;
const rectSize = 70;
const gridTop = 200;

let grid;

var addGameTitle = function (canvas) {
    var title = new fabric.Text('2048', {left: 170, top: 50});
    canvas.add(title);
};

var addScore = function (canvas) {
    var score = new fabric.Text('Score: 0', {left: 175, top: 110, fontSize: 20});
    canvas.add(score);
};

var createRect = function (row, column, fill) {
    var rect = new fabric.Rect({
        top: gridTop + row * (rectSize + 1),
        left: gridLeft + column * (rectSize + 1),
        width: rectSize,
        height: rectSize,
        fill: fill
    });
    return rect;
};
var getGrids = function () {
    let grids = [];
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            var rect = createRect(row, column, 'red');
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

var addNumberWithPosition = function (row, column, canvas) {
    let fill = 'blue';
    let block = createRect(row, column, fill);
    canvas.add(block);

    var number = new fabric.Text('2', {
        top: gridTop + row * rectSize,
        left: gridLeft + column * rectSize,
        fontSize: 60,
        fill: "white"
    });
    canvas.add(number);
};

function generateRandomPosition() {
    let generateRandomNumberBetweenZeroAndFour = function () {
        return Math.floor(Math.random() * 4);
    };

    return {
        row: generateRandomNumberBetweenZeroAndFour(),
        column: generateRandomNumberBetweenZeroAndFour()
    }
}

function addNumber(canvas) {
    let i = 0;
    while (i < 2) {
        let position = generateRandomPosition();

        if (grid[position.row][position.column] !== 0) {
            continue;
        }

        addNumberWithPosition(position.row, position.column, canvas);

        i++;
    }
}

function generateGrid() {
    grid = [];
    for (let row = 0; row < 4; row++) {
        grid[row] = [];
        for (let column = 0; column < 4; column++) {
            grid[row][column] = 0;
        }
    }
}

function start() {
    let canvasDOM = document.getElementById("canvas");
    canvasDOM.width = window.innerWidth;
    canvasDOM.height = window.innerHeight;

    var canvas = new fabric.Canvas('canvas');

    generateGrid();

    addGameTitle(canvas);
    addScore(canvas);
    addGrid(canvas);
    addNumber(canvas);
}