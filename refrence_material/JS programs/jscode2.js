// Program to check if a number is Even or not.

function checkEven() {
	var inputNum = parseInt(prompt("Enter a number to check if it is Even or not: "))
	if(inputNum % 2 == 0)
		alert(inputNum + " is an Even number")
	else
		alert(inputNum + " is not an Even number")
}
