let canvas = document.getElementById("theCanvas");
let ctx = canvas.getContext("2d");
let canvasCont = document.getElementById("canvasContainer")
let lineWidthBtn = document.getElementById("lineWidthBtn");
let lineColorBtn = document.getElementById("lineColorBtn");
let showWidth = document.getElementById("showWidth");
let showColor = document.getElementById("showColor");
let clearCanvas = document.getElementById("clear");

canvas.width = window.innerWidth * 0.85;
canvas.height = window.innerHeight * 0.7;

let x;
let y;

let drawing = false;
let lineWidth = 1;
let color = 0;
let colorArray = ['#FE0000', '#FAFE00', '#4DFE00', '#00FEFE', '#002AFE', '#E700FE']

//drawing

canvas.addEventListener("mousedown", (event) => {
    x = getMousePos(event).x;
    y = getMousePos(event).y;
    drawing = true;
})

canvas.addEventListener("mousemove", (event) => {
    if(drawing == true){
        drawLine(x, y, getMousePos(event).x, getMousePos(event).y);
        x = getMousePos(event).x;
        y = getMousePos(event).y;
    }
})

canvas.addEventListener("mouseup", (event) => {
    if(drawing == true){
        drawLine(x, y, getMousePos(event).x, getMousePos(event.y));
        x = 0;
        y = 0
        drawing = false
    }
})

function drawLine(x1, y1, x2, y2){
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.strokeStyle = chooseColor();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

//drawing

//settings

//line width

lineWidthBtn.addEventListener("click", () => {
    lineWidth += 1;
    if(lineWidth > 10){
        lineWidth = 1;
    }
    showWidth.textContent = lineWidth.toString();
})

//line width

//line color

lineColorBtn.addEventListener('click', () => {
    color += 1
    if(color >= colorArray.length){
        color = 0;
    }
    showColor.style.background = chooseColor();
})

function chooseColor(){
    return colorArray[color];
}

//line color

//clear

clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

//clear