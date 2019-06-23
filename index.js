/**
* This program is a boilerplate code for the standard tic tac toe game
* Here the “box” represents one placeholder for either a “X” or a “0”
* We have a 2D array to represent the arrangement of X or O is a grid
* 0 -> empty box
* 1 -> box with X
* 2 -> box with O
*
* Below are the tasks which needs to be completed:
* Imagine you are playing with the computer so every alternate move should be done by the computer
* X -> player
* O -> Computer
*
* Winner needs to be decided and has to be flashed
*
* Extra points will be given for approaching the problem more creatively
* 
*/

const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
let count = 0;

function initializeGrid() {
    for (let colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH; rowidx++) {
            tempArray.push(0);
            console.log(tempArray)
        }
        grid.push(tempArray);

    }
    console.log(grid)
    renderMainGrid();
}

function getRowBoxes(colIdx) {
    let rowDivs = '';

    for (let rowIdx = 0; rowIdx < GRID_LENGTH; rowIdx++) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum % 2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if (gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="' + colIdx + '" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for (let colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
    if (grid[0][0] !== 0 && grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2]) {
        var value;
        if (grid[0][0] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }

    else if (grid[0][0] !== 0 && grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0]) {
        var value;
        if (grid[0][0] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }
    else if (grid[1][0] !== 0 && grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2]) {
        var value;
        if (grid[1][0] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }

    else if (grid[0][1] !== 0 && grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1]) {
        var value;
        if (grid[0][1] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }
    else if (grid[2][0] !== 0 && grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2]) {
        var value;
        if (grid[2][0] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }

    else if (grid[0][2] !== 0 && grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2]) {
        var value;
        if (grid[0][2] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }
    else if (grid[0][0] !== 0 && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
        var value;
        if (grid[0][0] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }
    else if (grid[0][2] !== 0 && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]) {
        var value;
        if (grid[0][2] === 1) {
            value = "X";
        }
        else {
            value = "O"
        }
        getWinnerMessage(value);

    }
    else {
        if (count == 9) {
            getDrawMessage();
        }
    }
}

function getWinnerMessage(value) {
    const message = document.getElementById("message");
    message.innerHTML = '<h2>' + value + ' WON</h2>';
    document.getElementById('Button').style.display = "block";
}

function getDrawMessage() {
    const message = document.getElementById("message");
    message.innerHTML = '<h2>That was a DRAW match</h2>';
    document.getElementById('Button').style.display = "block";
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");
    if (grid[colIdx][rowIdx] === 0) {
        count += 1
        if (count % 2 !== 0) {
            grid[colIdx][rowIdx] = 1;
        }
        else {
            grid[colIdx][rowIdx] = 2;

        }
    }
    //  let newValue = 1;

    renderMainGrid();
    addClickHandlers();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");
    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

initializeGrid();
renderMainGrid();
addClickHandlers();
