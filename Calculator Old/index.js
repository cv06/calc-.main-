// //  create two variables, firstName and lastName
// // concatenate the two variables into a third variable called fullName
// // log Fullname to the console 
// let firstName = 'Cason'
// let lastName = 'Voss'
// let fullName = firstName + ' ' + lastName
// console.log(fullName)



// let name = 'Linda'
// let greeting = 'Hi there'

// function greetLinda() {
// 	console.log(greeting + ', ' + name + '!')
// }
// greetLinda()
// // create a function that logs out "Hi there, Linda!"



// let myPoints = 0
// // Create two functions, add3Points() and remove1Point(), and have them add/remove points to/from the myPoints variable

// function add3Points() {
// 	myPoints += 3
// }
// function remove1Point() {
// 	myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point() 
// // call the functions so that the line below logs out 10 
// console.log(myPoints)


// // when the user clicks the purchase button, render out "something went wrong, please try again" in the paragraph that has the id="error"

// let error = document.getElementById("error");
// function errorPopUp() {
// 	error.textContent = 'Something went wrong, please try again.';
// 	console.log("button clicked")

// }



// create four functions: add(), subtract(), divide(), multiply()
// call the correct function when the user clicks on one of the buttons 
//  perform the given calculation in the paragraph 
// e.g. if the user clicks on the plus button, you should render...
let resultsInitial = document.getElementById("results")
console.log(resultsInitial.textContent)

let sub1 = document.getElementById("1")
let sub2 = document.getElementById("2")
let sub3 = document.getElementById("3")
let sub4 = document.getElementById("4")
let sub5 = document.getElementById("5")
let sub6 = document.getElementById("6")
let sub7 = document.getElementById("7")
let sub8 = document.getElementById("8")
let sub9 = document.getElementById("9")
let sub0 = document.getElementById("0")
console.log(sub4.textContent)
let outputValue = 0
resultsInitial.textContent += " "

function resetAll() {
	console.log(outputValue)
	outputValue = 0
}

function addOne() {
	console.log("1 was clicked")
	resultsInitial.textContent += "1"
	if (document.getElementById("add").clicked == true) {
		outputValue += 1
	} else if (document.getElementById("subtract").clicked == true) {
		outputValue -= 1
	} else if (document.getElementById("multiplication").clicked == true) {
		outputValue *= 1
	} else if (document.getElementById("divide").clicked == true) {
		outputValue /= 1
	}
}

function addTwo() {
	console.log("2 was clicked")
	resultsInitial.textContent += "2"
	if (document.getElementById("add").clicked == true) {
		outputValue += 2
	} else if (document.getElementById("subtract").clicked == true) {
		outputValue -= 2
	} else if (document.getElementById("multiplication").clicked == true) {
		outputValue *= 2
	} else if (document.getElementById("divide").clicked == true) {
		outputValue /= 2
	}
}

function addThree() {
	console.log("3 was clicked")
	resultsInitial.textContent += "3"
	if (document.getElementById("add").clicked == true) {
		outputValue += 3
	} else if (document.getElementById("subtract").clicked == true) {
		outputValue -= 3
	} else if (document.getElementById("multiplication").clicked == true) {
		outputValue *= 3
	} else if (document.getElementById("divide").clicked == true) {
		outputValue /= 3
	}
}

function addFour() {
	console.log("4 was clicked")
	resultsInitial.textContent += "4"
	if (outputValue < 4) outputValue = 4
}

function addFive() {
	console.log("5 was clicked")
	resultsInitial.textContent += "5"
	if (outputValue < 6) outputValue = 5
}

function addSix() {
	console.log("6 was clicked")
	resultsInitial.textContent += "6"
	if (outputValue < 7) outputValue = 7
}

function addSeven() {
	console.log("7 was clicked")
	resultsInitial.textContent += "7"
}

function addEight() {
	console.log("8 was clicked")
	resultsInitial.textContent += "8"
}

function addNine() {
	console.log("9 was clicked")
	resultsInitial.textContent += "9"
}

function addZero() {
	console.log("0 was clicked")
	resultsInitial.textContent += "0"
}

function addAddition() {
	console.log("+ was clicked")
	resultsInitial.textContent += " + "
	outputValue += 2 // change this value this is where you stopped 
}

function addSubtraction() {
	console.log("- was clicked")
	resultsInitial.textContent += " - "
}

function addMultiply() {
	console.log("X was clicked")
	resultsInitial.textContent += " x "
}

function addDivide() {
	console.log("÷ was clicked")
	resultsInitial.textContent += " ÷ "
}

function runCalc() {
	console.log("enter was clicked")
	resultsInitial.textContent = "Results: " + outputValue
}
console.log(outputValue)
// calculator can only use one type of equation at a time 
// calculator can only do two variables at a time 
// set so you hit sign first and then it determines type of equation and then inputs the variables var1, var2
