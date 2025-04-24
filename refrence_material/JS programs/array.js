function sortNumbers(arr) {
	size = arr.length
	for(i = 0; i < size-1; i++) {  // Runs for the length of the Array (n-1) times
		for(j = 0; j < size-i-1; j++) {//Comparison of consecutive elements in UNSORTED-ARRAY
			if(arr[j] > arr[j+1]) { // Compares the cosecutive elements
				let temp = arr[j]; // Algorithm/logic/procedure to swa
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}// end of inner loop
	}// end of outer loop
}

function printSortedNumbers() {
	inputArr = idInputText.value.split(' '); // split the text in the input text box and copy the values into an Array of strings
	arrayNumbers = []; // Consider an empty Array
	for(i = 0; i < inputArr.length; i++) {
		arrayNumbers.push(parseInt(inputArr[i]))//Convert each string from inputArr and store it in the arrayNumbers array as number
	}
	sortNumbers(arrayNumbers); // The numbers will get sorted
	outputStr = arrayNumbers.join(' ');//Now, take all elements of the array and convert hem into a single string while keeping a space between every element.
	idOutputText.value = outputStr;//Put the string into the output text box
}