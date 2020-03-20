//определение устройства
document.querySelector('#out').innerHTML = navigator.userAgent;
console.log(navigator);
// метод match позволяет искать совпадения по патерну внутри строки//
if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
    alert ('Mobile');
}
else {
    alert ('Desctop');
}