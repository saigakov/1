var sdvig = 0; //анимирование
var timer;

var test = document.getElementById('test');
//move();

function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig+= 10;
    timer = setTimeout(move, 50);
}

//var timer = setInterval(move, 50);

document.getElementById('stop').onclick = function() {
    //clearInterval(timer);
    clearTimeout(timer);
}

//setTimeout(move, 5000);

var a =10;
obr();
function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a<0) {
        clearTimeout(timer);
        alert('Таймер отключен');

    }
    else {
        timer = timer = setTimeout(obr, 1000);
    }
    
}
