var fructs = {
	"11111" : {
		"name" : "Банан",
		"price" : 40,
		"img" : "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_banana-128.png",
		"sclad" : "ДА"
	},
	"11112" : {
		"name" : "Помидор",
		"price" : 20,
		"img" : "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"sclad" : "ДА"
	},
	"11113" : {
		"name" : "Яблоко",
		"price" : 30,
		"img" : "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-128.png",
		"sclad" : "ДА"
	}
};

console.log(fructs);

var out = "";
for (var key in fructs) {
	out+= 'Название: ' + fructs[key].name + '<br>';
	out+= 'Цена: ' + fructs[key].price + '<br>';
	out+= 'Наличие: ' + fructs[key].sclad + '<br>';
	out+='<img src="'+fructs[key].img+'">';
	//out+='<img srs="'+fructs[key].img+'">';
	
	out+='<hr>';
}
document.getElementById("out").innerHTML = out;