var number = Math.floor(10*Math.random()) + 1; //создание случайного числа от 1 до 10
console.log(number);
var count = 2;

document.getElementById('cheсk').onclick = function () {
    if (count>0) {
        var usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        var out = document.getElementById('out');

        if (usernum == number) {
            alert ('Ура вы угадали!!!');
            location.reload();
        }
        else if (usernum > number) {
            out.innerHTML = 'Перелет';
        }
        else if (usernum < number) {
            out.innerHTML = 'Недолет';
        }
        document.getElementById('count').innerHTML = 'Осталось попыток'+count;
        count = count - 1;
    }
    else {
        alert ('Попытки закончились!!!');
        location.reload();
    }
}