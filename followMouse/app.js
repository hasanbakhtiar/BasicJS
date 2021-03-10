var place = document.getElementsByTagName("p")[0];
place.style.position = "absolute";
place.style.color = "red";
place.style.fontSize = "50px";
window.onmousemove = function(event) {
            place.style.left = event.clientX + 'px';
            place.style.top = event.clientY + 'px';
}