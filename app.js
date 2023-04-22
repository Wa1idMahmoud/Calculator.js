/* This is going to call all buttons and put it in the buttons function as it calls anything with the element button. */
const buttons = document.querySelectorAll('button')

/* This will display the output in the screen. */
const screenDisplay = document.querySelector('.screen')

/* This is the calculation array, it starts empty. */
let calculation = []
let accumulativeCalculation

/* this is where the calculations happens, telling what button does what, telling the clear button to make a new empty array and the = to evaluate the sums. */
/* have the vale of the equation in the button placeholder and store it in the calculation array*/
function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = ''
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}



/* Hook up all event listeners to all our buttons */
/* I used forEach method to grab all buttons */
/* Then I added addEventListener to listen for each click of each button to then do a call back and calculate them */
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))



