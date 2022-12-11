//Battleship Game
function battleship() {
    var count = 0;
    var guesses = 0;
    let location = [0, 1, 1, 0, 1]

    while (count != 3) {
        var num = Number(prompt("Enter the number (1-5)"));//asking different values from user

        if (location[num - 1] === 1) {
            alert("You have hit the battleship")
            location[num - 1] = 2;
            count++;

        }
        else if (location[num - 1] == 0) {
            alert("You missed the battleship")
        }

        else if (location[num - 1] == 2) {
            alert("You have Already hit this battleship")
        }

        else {
            alert("invalid")
        }
        guesses++;
    }
    alert("You Total Guesses are " + guesses)
}
//Toggle Function
function changeMessage() {

    //Reading and storing string in the text variable 
    let text = document.getElementById('a').innerHTML

    //Comparing String of Text variable and String of element with ID = a
    if (text == document.getElementById('a').innerText) {

        document.getElementById('a').innerHTML = "Friday it is !!!"
    }

    if (text == document.getElementById('a').innerText) {
        document.getElementById('a').innerHTML = "Welcome to JavaScript"
    }
}
// Calculator Functions
function add() {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    let result = Number(a) + Number(b)
    document.getElementById('res').innerHTML = result
}
function subtract() {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    let result = Number(a) - Number(b)
    document.getElementById('res').innerHTML = result
}
function multiply() {
    let a = document.getElementById('num1').value
    let b = document.getElementById('num2').value

    let result = Number(a) * Number(b)
    document.getElementById('res').innerHTML = result
}


