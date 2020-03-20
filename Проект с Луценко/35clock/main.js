window.onload = function () {

    setInterval (fSec, 100);
    var sec = 0;
    var min = 0;
    var hour = 0;

    function fSec () {
        document.querySelector('#sec').style.transform = 'rotate('+sec+'deg)';
        document.querySelector('#min').style.transform = 'rotate('+min+'deg)';
        document.querySelector('#hour').style.transform = 'rotate('+hour+'deg)';
        if (sec+6 == 366) {
            sec = 0;
            min = min + 6;
        }
        if (min+6 == 366) {
            min = 0;
            hour = hour + 30;
        }
        sec = sec +6;
    }
    






}