var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 100);
lienzo.lineTo(250, 2);
lienzo.stroke();
lienzo.closePath();


lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(20, 10);
lienzo.lineTo(250, 299);
lienzo.stroke();
lienzo.closePath();
