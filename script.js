var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		}
		else {
			content.style.display = "block";
		}
	});
}

setInterval(myTimer, 1000);

function setX(x) {
	document.getElementById("x").innerHTML = parseInt(document.getElementById("x").innerHTML) + x
}

function myTimer(x) {

	var count = document.getElementById("demo").innerHTML;
	var countx = document.getElementById("x").innerHTML;
	var a = parseInt(count);
	var b = parseInt(countx);
	var current = a + b;

	document.getElementById("demo").innerHTML = current;

	if (current == 10) {
		document.getElementById("dinda").innerHTML = "benar"
	}

	else if (current >= 15) {
		document.getElementById("dinda").innerHTML = "sangat benar"
	}

	else {
		document.getElementById("dinda").innerHTML = "good"
	}

}