document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
    //прямоугольник
    var div = document.getElementById('test');
    //получаю textarea
    var out = document.getElementById('out');
    //console.log(this.value);
    div.style.borderRadius = this.value + 'px';
    //border-radius: 30px
    out.innerHTML = 'border-radius: '+this.value+'px;\n';
    out.innerHTML += '-webkit-border-radius: '+this.value+'px;';


}
