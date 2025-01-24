//When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value".
//When the #text-input element only contains the letter A and the #check-btn element is clicked, the #result element should contain the text "A is a palindrome".
//When the #text-input element contains the text eye and the #check-btn element is clicked, the #result element should contain the text "eye is a palindrome"
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    const text = textInput.value;
    const cleanText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedText = cleanText.split("").reverse().join("");
    if (cleanText === reversedText) {
      result.style.display = "block";
      result.innerHTML = `${text} is a palindrome`;
    } else {
      result.style.display = "block";
      result.innerHTML = `${text} is not a palindrome`;
    }
  }
  // } else if (textInput.value === "A") {
  //     result.style.display = "block";
  //     result.innerHTML = "A is a palindrome";
  // } else if(textInput.value === "eye"){
  //     result.style.display = "block";
  //     result.innerHTML = "eye is a palindrome";
  // }
});
