const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", buttonClick);

function buttonClick() {
  // Get the current value of the input when the button is clicked
  const textInput = document.getElementById("text-input").value;

  if (textInput === "") {
    alert("Please input a value");
    return;
  }

  palindromeChecker(textInput);
}

function palindromeChecker(text) {

const reversed = text.split("").reverse().join("").toLowerCase().replace(/[\W_]/g, '');

  if (reversed === text.toLowerCase().replace(/[\W_]/g, '')) {
    result.className = "showResult";
    result.innerHTML = `${text} is a palindrome`;
  } else {
    result.className = "showResult";
    result.innerHTML = `${text} is not a palindrome`;
  }
}
