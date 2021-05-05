let i = 1;
let interval;
function startLoop() {
    interval = setInterval(function(){
        console.log(i);
        i ++;
        document.getElementById("time").innerHTML = i;
    }, 10);
}

let mark = 0;
function getTime() {
    stopLoop();
document.getElementById('mark').innerHTML = i;
    startLoop();
}

function stopLoop() {
    clearInterval(interval);
}

function clearLoop() {
    stopLoop();
    document.getElementById("time").innerHTML = "0";
    document.getElementById('mark').innerHTML = 0;
}

$('#Mark').on('click', getTime);
$('#clear').on('click', clearLoop);
$('#start').on('click', startLoop);
$('#stop').on('click', stopLoop);