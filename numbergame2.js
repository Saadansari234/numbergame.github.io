///////////////////////////////////////////////trial two///////////////////////////////
//   let attempts=0;
//   let resultmessage = document.getElementById("resultmessage")
//   // Increment attempts
// attempts++;

// // Update attempt count on the page
// const attemptCountElement = document.getElementById('attemptCount');
// attemptCountElement.textContent = attempts.toString();

// if (attempts == 5) {
//   resultmessage.innerHTML= `Game over! You reached the maximum number of attempts. The correct number was ${targetNumber}.`

// }


// }


// let number = [Math.floor(Math.random() * 10) + 1]
// let attempt = 5 ;


// /*hh
// hh*/


  
// function handlebtn() {
//  var submitbutton= document.getElementById("submitbtn");
//   let input = document.getElementById("input").value;
//   let output = document.getElementById("output");
//   let resultmessage = document.getElementById("resultmessage");
//   let attemtscounter= document.getElementById("attemtscounter");


  

//   //let give condition to the input

//   if (input == number) {
//     output.innerHTML = `you guess right , your answer was ${number}`;
//     submitbutton.disabled= true;
//     resultmessage.innerHTML = `<h1>🌹</h1>`;
//     return;
//   } else if (input < number) {
//     attempt--;
//     if (attempt === 0 ) {
//       resultmessage.innerHTML = `better luck next time. the right number was ${number}`;
//       attemtscounter.innerHTML = attempt;
//       submitbutton.disabled= true;
//       return;
      
//     } else {
//       output.innerHTML = 'your number is too low!';
//       attemtscounter.innerHTML = attempt;
//     }
//     console.log("attempt");
   
//   } else if(input > number) {
//     attempt--;
//     if (attempt === 0 ) {
//       resultmessage.innerHTML = `better luck next time. the right number was ${number}`;
//       attemtscounter.innerHTML = attempt;
//       submitbutton.disabled= true;
//       return;

//     } else {
//       output.innerHTML = 'your number is too high!';
//       attemtscounter.innerHTML = attempt;
//     }
//     console.log("attempt");


// }




































let number = Math.floor(Math.random() * 10) + 1;
let attempt = 5;

function handlebtn() {
  var submitbutton = document.getElementById("submitbtn");
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let resultmessage = document.getElementById("resultmessage");
  let attemtscounter = document.getElementById("attemtscounter");

  if (parseInt(input) === number) {
    output.innerHTML = `You guessed right! Your answer was ${number}`;
    submitbutton.disabled = true;
    resultmessage.innerHTML = `<h1>🌹</h1>`;
    return;
  } else if (parseInt(input) < number) {
    attempt--;
    if (attempt === 0) {
      resultmessage.innerHTML = `Better luck next time. The right number was ${number}`;
      attemtscounter.innerHTML = attempt;
      submitbutton.disabled = true;
      return;
    } else {
      output.innerHTML = 'Your number is too low!';
      attemtscounter.innerHTML = attempt;
    }
  } else if (parseInt(input) > number) {
    attempt--;
    if (attempt === 0) {
      resultmessage.innerHTML = `Better luck next time. The right number was ${number}`;
      attemtscounter.innerHTML = attempt;
      submitbutton.disabled = true;
      return;
    } else {
      output.innerHTML = 'Your number is too high!';
      attemtscounter.innerHTML = attempt;
    }
  }
}



















































// ///////////////////////////////////////trial three////////////////////

// let btn= document.getElementById("btn");


// let number= [Math.floor(Math.random()* 100)+ 1]
// var attempt=3;

// function handlebtn() {
//     let input= document.getElementById("input").value;
//     let output= document.getElementById("output");

//     if(input==output){
//      alert("congratulation");
//     }

//       else if(input<output){
//       attempt--;
//       if(attempt===0){
//         alert("try smaller number");
//         alert("you are blocked");
//       }else{
//         alert("try smaller number");
//       }
//       console.log("attempt");


//     }else{
//       attempt--;
//       if(attempt===0){
//         alert("try greater number");
//         alert("you are blocked");
//       }else{
//         alert("try greater number");
//       }
//       console.log("attempt");
//     }




