var table = "<tr> <th> ID </th> <th> NAME </th> <th> MARKS </th>" // To store all table rows
function addStudentData() {
	var studRecord = idstudentDetails.value.split(' ');//Copy the textbox data into the Array
	// check if the text box is empty or it has only spaces
	if(idstudentDetails.value.trim() == ""){
		alert("Record Not Entered")
		return false;
	}
	//Check if the user has given properly all the 3 values (ID Name and Marks)
	if(studRecord.length != 3) {
		alert("Improper Data Entered")
		idstudentDetails.value = "";
		idstudentDetails.focus();
		return false;
	}
	var eachRow = "<tr>" // Now, with the given data in the text box, build the table row
	for(var i = 0; i < studRecord.length; i++) {
		eachRow += "<td>" + studRecord[i] + "</td>" 
	}
	eachRow += "</tr>"
	table += eachRow
	idStudTable.innerHTML = table;
}
"    sh   al   ini    "