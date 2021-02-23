
//for pressed button detection
var totalbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < totalbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      sounds(buttonInnerHTML);
      animation(buttonInnerHTML);
     
     });
    }

    //eventlistener for pressed key

    document.addEventListener(("keypress"), function (event) {
        sounds(event.key);
        animation(event.key);
    });


//button animation function
    function animation(currentkey) {
   var activebutton=document.querySelector("."+ currentkey);
   activebutton.classList.add('pressed');
   setTimeout(function () {
       activebutton.classList.remove('pressed');
   },300);
}

//sound function for drum kit
 function sounds(key) {
    switch (key) {
        case "w":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "a":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
        case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        case "k":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
          case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        default:
          
      }
    
}




