function out() {
    var p;
    p = document.getElementById("out");
    //p.innerHTML = "Hello";
    //дописать информацию
    //p.innerHTML += " <b>Hello</b>";
    //p.innerText += " Hi"; вывод текста вместе с тегами
    //p.insertAdjacentHTML("beforeBegin","Hi");
    //beforeBegin-перед открывающим тегом
    //p.insertAdjacentHTML("afterBegin","Hi");
    //afterBegin-после открывающего тега,но перед содержимым
    //p.insertAdjacentHTML("beforeEnd","Hi")
    //p.insertAdjacentHTML("afterEnd","Hi");
    p.outerHTML = '<div class="one">Hello</div>';
}