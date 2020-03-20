window.onload = function () {
    var mas = document.getElementsByClassName('layer');
    var j = 0;
    var y = 0;
    document.querySelector('.jlehmann').onmousewheel = function(event) {
        if (event.deltaY>0) {
            y =y +  Math.round(event.deltaY);
        }
        else if (event.deltaY<0) {
            y =y +  Math.round(event.deltaY);
        }
        mas[j].style.top = -(y*0.1) +'px';
        
        console.log(mas[j].style.top);
        

        if (y*0.1 >= 450) {
            j++;
            y=0;
            if (j==mas.length-1) {
                document.querySelector('.jlehmann').onmousewheel = false;
            }
        }
    
        
    }




}