canvas=document.getElementById("Canvas1");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=5;
ctx.arc(350,357,70,0,2*Math.PI);
ctx.stroke();
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(E){
    mouse_x=E.clientX-canvas.offsetLeft;
    mouse_y=E.clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}