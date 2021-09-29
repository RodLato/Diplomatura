function horizontalJunto(){
	var content = document.getElementsByClassName("content")[0].style.height = "600px";
	var content = document.getElementsByClassName("content")[0].style.width = "600px";
	var content = document.getElementsByClassName("content")[0].style.alignItems = "center";
	var content = document.getElementsByClassName("content")[0].style.flexDirection = "row-reverse";
}

function horizontalSeparado(){
	var content = document.getElementsByClassName("content")[0].style.height = "auto";
	var content = document.getElementsByClassName("content")[0].style.width = "100%";
	var content = document.getElementsByClassName("content")[0].style.alignItems = "flex-start";
	var content = document.getElementsByClassName("content")[0].style.flexDirection = "row";
	var content = document.getElementsByClassName("content")[0].style.justifyContent = "space-between";
}

function verticalJuntoALaDerecha(){
	var content = document.getElementsByClassName("content")[0].style.height = "600px";
	var content = document.getElementsByClassName("content")[0].style.width = "600px";
	var content = document.getElementsByClassName("content")[0].style.alignItems = "flex-end";
	var content = document.getElementsByClassName("content")[0].style.flexDirection = "column";
	var content = document.getElementsByClassName("content")[0].style.justifyContent = "flex-start";
}