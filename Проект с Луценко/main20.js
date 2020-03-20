//document.onkeypress = function(event) {
    //console.log(event);
    //if (event.shiftKey) {
        //console.log('Нажата клавиша shift');
    //}
//}
document.getElementById('test').onkeypress = function(event) {
    //console.log(event);
    if (event.keyCode<48 || event.keyCode>57) {
        console.log('не цыфра');
        return false;
    }
}