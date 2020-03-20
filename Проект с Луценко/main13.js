var man = {
    "name" : "Alex",
    "age" : 67,
    "id" : "223344d",
    "sex" : "male"
};
var man2 = {
    "name" : "Alex",
    "age" : 14,
    "id" : "223344d",
    "sex" : "male",
    "year" : function () {
        return 2019- this.age;
    }
};
//console.log (man2.year() );

var m = {
    "mas" : [25, 25, 25 ,25],
    "sum" : function () {
        var sum = 0;
        for (var i=0; i<this.mas.length; i++) {
            sum = sum + this.mas[i];
        }
        return sum;
    }
} 

console.log(m.sum() );

