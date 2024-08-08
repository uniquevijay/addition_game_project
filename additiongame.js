let firstNumber = document.getElementById("firstNumber");
firstNumber.textContent = Math.ceil(Math.random() * 100);
let secondNumber = document.getElementById("secondNumber");
secondNumber.textContent = Math.ceil(Math.random() * 100);

function checkingSum() {
    let inputValue = document.getElementById("userInput").value;
    let sumOfTwoNumbers = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);

    if (sumOfTwoNumbers === parseInt(inputValue)) {
        document.getElementById("gameResult").textContent = "Congratulations! You got it right.";
        document.getElementById("gameResult").style.backgroundColor = "#028a0f";
        document.getElementById("gameResult").style.color = "#ffffff";
    }
    else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
        document.getElementById("gameResult").style.color = "#ffffff";
    }
}

function restartButton() {
    firstNumber.textContent = Math.ceil(Math.random() * 100);
    secondNumber.textContent = Math.ceil(Math.random() * 100);
    document.getElementById("userInput").value = "";
    document.getElementById("gameResult").textContent = "";
}