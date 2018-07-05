var $ = require("jquery");

var tableWidth = 800;
var tableHeight = 200;
var numLines = 9;
var numNeedles = 0;
var lineGap = 100;
var needleSize = 95;
var hits = 0;
var misses = 0;


$(document).ready(function() {

    console.log("ready");
    $('#table').css('width', tableWidth + 'px');
    $('#table').css('height', tableHeight + 'px');
    
    drawGrid();

    // for(var i=0; i<10; i++) {
    //     drawNeedle(i);
    // }

    $('#addButton').click(function() {
        drawNeedle();
    });

    
})


function drawGrid() {
    for(var i = 0; i< numLines; i++) {
        drawLine(i * lineGap);
    }

    //drawNeedle(0);
}

function drawNeedle() {
    var x = Math.round(Math.random() * tableWidth);
    var y = Math.round(Math.random() * tableHeight);
    var rotation = Math.round(Math.random() * 360);
    var id = 'needle' + numNeedles;
    var needle = $('<div id="' + id +'" style="border:2px solid black; height:' + needleSize + 'px; width:0px; left:' + x + 'px; top:' + y + 'px; position: absolute;"></div>');
    $('#table').append(needle);
    document.getElementById(id).style.transform = 'rotate(' + rotation + 'deg)';
    var rect = document.getElementById(id).getBoundingClientRect();
    
    
    var targetLine = Math.ceil(rect.x / lineGap);
    var lineX = targetLine * lineGap;
    var colour = 'red';
  
    var valid = true;
    // If hit
    // if(lineX === 0 || lineX === numLines-1) {
    //     valid = false;
    // }

    if(valid) {
        numNeedles++;
        if (rect.x < lineX && rect.x + rect.width > lineX){
            colour = 'green';
            hits++;
        } else {
            misses++;
        }
        needle.css('border-color', colour);
        var pi = (numNeedles * 2) / hits;
        console.log(numNeedles + ' needles, hits: ' + hits + ' misses: ' + misses + ' Pi guess: ' + pi);
    }
    else {
        //$('#table').remove(needle);
    }
    
    


}

function drawLine(x) {
    var id = 'line' + x;
    var line = $('<div id="' + id +'" style="border:1px solid red; height:'+ tableHeight +'px; width:0px; left:' + x + 'px; top:0px; position: absolute;"></div>');
    $('#table').append(line);
    
}

