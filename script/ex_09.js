let canvas = document.getElementsByTagName("canvas");

canvas[0].draggable = true;
function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}