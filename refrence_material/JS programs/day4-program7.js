		//DD-MM-YYYY DD\MM\YYYY
			function isDataValid(){
				var numberFormat = /^[0-9]+$/;
				var dateFormat = /^[0-9]{2}[/\-]{1}[0-9]{2}[/\-]{1}[0-9]{4}$/;
				
				// validate that the name is not empty
				if(studFrm.firstName.value == ""){
					alert("First Name should not be empty");
					studFrm.firstName.focus();
					errorMsgFName.style.display = "block";
					studFrm.firstName.style.borderColor = "red";
					return false;
				}				
				// Validate student age if it is empty
				if(studFrm.studAge.value == "") {
					alert("Age cannot be empty");
					studFrm.studAge.focus();
					return false;
				}
				// Validate that Age is a number - USE RE
				if(!studFrm.studAge.value.match(numberFormat)) {
					alert("Age must be a number");
					studFrm.studAge.focus();
					return false;
				}
				// Validate student Age that it cannot be less than 15
				if(parseInt(studFrm.studAge.value) < 15) {
					alert("Age cannot be less than 15");
					studFrm.studAge.focus();
					return false;
				}
				// Validate student Age that it cannot be greater than 125
				if(parseInt(studFrm.studAge.value) > 125 ) {
					alert("Invalid age entered");
					studFrm.studAge.focus();
					return false;
				}
				//validate date is not empty
				if(studFrm.dateOfBirth.value == "") {
					alert("Date cannot be empty");
					studFrm.dateOfBirth.focus();
					return false;
				}
				//Validate date format
				if(!studFrm.dateOfBirth.value.match(dateFormat)) {
					alert("DoB should be of format DD-MM-YYYY");
					studFrm.dateOfBirth.focus();
					/*Take the date string. Write Algorithm to check if delimiters are same.
					12-07-2021
					if(value[2] != value[5])
					*/
					return false;
				}
				// If every data is fine, then give a confirmation msg
				alert('Form data is accepted');
				return true;
			} // end of function
