/**
 * Steps:
 * 1) Target the button and add click event listener
 * 2) Get the input value after click
 * 3) Get the clicked box number
 * 4) Get the clicked box id through box number
 * 5) Make that box background dark
 */

let previousBox = null;

document
  .getElementById("handleSubmit")
  .addEventListener("click", function (event) {
    const getNumber = document.getElementById("number").value;

    console.log(event);

    if (!(getNumber >= 1 && getNumber <= 9)) {
      alert("Please enter a number between 1 and 9");
    }

    const selectedBox = document.getElementById(`box${getNumber}`);

    if (previousBox) {
      previousBox.style.background = "";
    }

    selectedBox.style.background = "dodgerblue";

    previousBox = selectedBox;
  });
