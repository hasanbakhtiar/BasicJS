var worth = document.getElementById("item").innerHTML;
var figure = /[A-Z0-9a-z_.-]+@[A-Z0-9a-z_\-]+\.[A-Za-z]{2,3}/;

var result = worth.match(figure);
document.getElementById("result").innerHTML = result;