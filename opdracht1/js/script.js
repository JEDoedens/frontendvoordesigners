
var dragFromDiv;

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	dragFromDiv = (ev.target.parentElement);
}

function drop(ev) {
	ev.preventDefault();
	var dragData = ev.dataTransfer.getData("text");
	var newData = ev.target.parentElement;

  ev.target.parentElement.parentElement.appendChild(document.getElementById(dragData));
	dragFromDiv.appendChild(newData);
}
