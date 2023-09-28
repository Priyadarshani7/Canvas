let  canvas = document.getElementById('mycanvas1');
let context = canvas.getContext('2d');

context.strokeStyle="purple"
context.lineWidth=5;//line width
context.beginPath();
context.moveTo(0,0);//imagine to keep brush on line position
context.lineTo(250,250);//specifies the endpoint of the line
context.lineTo(250,500)
context.moveTo(500,0)
context.lineTo(250,250)
context.stroke();// used to  draw the line


//Draw Triangle
let  canvas2 = document.getElementById('mycanvas2');
let context2 = canvas2.getContext('2d');
context2.strokeStyle="grey";
context2.fillStyle= "purple";
context2.lineWidth=5;
context2.beginPath();
context2.moveTo(250,0);
context2.lineTo(0,250);
context2.moveTo(0,250);
context2.lineTo(500,250);
context2.moveTo(500,250);
context2.lineTo(250,0);
context2.stroke();
context2.fill();

//Draw Rectangle
let  canvas3 = document.getElementById('mycanvas3');
let context3 = canvas3.getContext('2d');
context3.fillStyle="black"
context3.fillRect(0,0,250,250);
context3.strokeStyle="black";
context3.strokeRect(0,0,250,250);

context3.fillStyle="purple"
context3.fillRect(0,250,250,250);
context3.strokeStyle="black";
context3.strokeRect(0,250,250,250);

context3.fillStyle="pink"
context3.fillRect(250,250,250,250);
context3.strokeStyle="black";
context3.strokeRect(250,250,250,250);

context3.fillStyle="blue"
context3.fillRect(250,0,250,250);
context3.strokeStyle="black";
context3.strokeRect(250,0,250,250);

//Draw Circle
let  canvas4 = document.getElementById('mycanvas4');
let context4 = canvas4.getContext('2d');
context4.fillStyle="blue";
context4.strokeStyle="darkblue";
context4.lineWidth=10;
context4.beginPath();
context4.arc(250,250,200,0,2 * Math.PI);
context4.stroke();
context4.fill();

//Text
let  canvas5 = document.getElementById('mycanvas5');
let context5 = canvas5.getContext('2d');
context5.textAlign="center"
context5.font="50px MV "
context5.fillText("HELLO PIYU",canvas.width/2,canvas.height/2);