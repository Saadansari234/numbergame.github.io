



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


















