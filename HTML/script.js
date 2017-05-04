var howOften = 4; // 4 seconds
var current = Math.floor(Math.random() * 5);
var ns6 = document.getElementById&&!document.all;
var items = new Array()
	items[0]="<a href='#'><img alt='tuin' src='afb/tuinfoto3.jpg' width='60%' height='500' border='0'/></a>";
	items[1]="<a href='#'><img alt='tuin' src='afb/tuinfotodonker1.jpg' width='60%' height='500' border='0' /></a>";
	items[2]="<a href='#'><img alt='tuin' src='afb/tuinfoto2.jpg' width='60%' height='500' border='0' /></a>";
	items[3]="<a href='#'><img alt='binnen' src='afb/binnen1.jpg' width='60%' height='500' border='0' /></a>";
	items[4]="<a href='#'><img alt='gevel' src='afb/gevel1.jpg' width='60%' height='500' border='0' /></a>";
function rotater() {
	document.getElementById("placeholder").innerHTML = items[current];
	current = (current==items.length-1) ? 0 : current + 1;
	setTimeout("rotater()",howOften*1000);
}
function rotater() {
	if(document.layers) {
		document.placeholderlayer.document.write(items[current]);
		document.placeholderlayer.document.close();
	}
	if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
	if(document.all)
		placeholderdiv.innerHTML=items[current];

	current = (current==items.length-1) ? 0 : current + 1; //increment or reset
	setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;