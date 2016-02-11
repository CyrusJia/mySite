
var start = 0;
function startTimer(duration, display) {
    start = duration;

    function timer() {
        if(start>0) start--;

        display.textContent = "" + start;

    }
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

function buttonClicked(){
    start = 100;
    var display = document.querySelector('#counter');
    startTimer(start, display);

}
