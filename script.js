var howOften = 4; // 4 seconds
var current = Math.floor(Math.random() * 7);
var ns6 = document.getElementById&&!document.all;
var items = new Array()
	items[0]="<img alt='' src='' width='96%' border='0'/>";
	items[1]="<img alt='' src='' width='96%' border='0' />";
	items[2]="<img alt='' src='' width='96%' border='0' />";
	items[3]="<img alt='' src='' width='96%' border='0' />";
	items[4]="<img alt='' src='' width='96%' border='0' />";
	items[5]="<img class='verticalfoto' alt='' src='' width='55%' border='0' />";
	items[6]="<img class='verticalfoto' alt='' src='' width='70%' border='0' />";
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