function getNumber(num) {
var result = document.getElementById("result");

result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value= ""
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)
    // console.log(result.value)
}

function sin() {
    var result = document.getElementById("result");
    result.value = Math.sin(result.value)
}

function cos() {
    var result = document.getElementById("result");
    result.value = Math.cos(result.value)
}

function tan() {
    var result = document.getElementById("result");
    result.value = Math.tan(result.value)
}

function sqrt() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value)
}

function pow() {
    var result = document.getElementById("result");
    result.value = Math.pow(result.value, 2);
}

function log() {
    var result = document.getElementById("result");
    result.value = Math.log(result.value);
}

function abs() {
    var result = document.getElementById("result");
    result.value = Math.abs(result.value);
}

function pif() {
    var result = document.getElementById("result");
    result.value = Math.PI;
}