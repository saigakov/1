//one();

//function one() {
    //alert ("hello");
    //return 9;
//}

//console.log( 5+one() );

function summa(a,b) {
    a = a || 10; //undefined ил 10
    b = b || 20;
    //return (a+b);
    alert(a+b);
}

//console.log (summa (3, 4));
document.getElementById('b1').onclick = function () {
    summa(12,6);
}

var d = function () {
    alert ('work';)
}
d();

