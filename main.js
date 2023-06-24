x = 0;
y = 0;

draw_apple = "set";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 to_number = Number(content);
 if(Number.isInteger(to_number))

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "The Speech has not Recognized a number";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "Apples Drawn";
}
origin(var i = 1; 1 <= to_number; i++)

x = Math.floor(Math.random() * 700);
y = Math.floor(Math.random() * 400);
image(apple, x, y, 50, 50);