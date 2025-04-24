var myTemplate =  `{{#stud}}
   <tr>
		<td> {{id}} </td>
		<td> {{name}} </td>
		<td> {{marks}} </td>
		<td> <input type = 'button' value = "Delete" onclick = 'deleteRecord({{i}})'> </td>
	</tr>
	{{/stud}} ` ;  // This is a multi line SPANNING string. Here # means start of iterator and / means end of iterator
	
var arr = [] // rray of json objects, each object represents a row in the table.

function showTableData1() {
	//var Mustache = require('mustache');

	var output = Mustache.render(myTemplate, {stud: arr});
	/*
	{stud: [{"id":101, "name": 'Nithin', "marks":85.5, "i":0}, {"id":102, "name": 'Megha', "marks":89.5, "i":1}, {"name": 'Nithin', "id":101, "marks":85.5, "i":2}]
	*/
	idStudTable.innerHTML = output;
}

function deleteRecord(index) {
	arr.splice(index, 1);
	showTableData1();
}

function addStudentData() {
	if(idstudentDetails.value.trim() == "") {
		alert("Record Not Entered")
		return false;
	}
	var studRecord = idstudentDetails.value.split(' ');//Copy textbox data into the Array
	if(studRecord.length != 3) {
		alert("Improper Data Entered")
		idstudentDetails.value = "";
		idstudentDetails.focus();
		return false;
	}
	
	var jStud = { "id":studRecord[0], 
				  "name":studRecord[1],
				  "marks":studRecord[2],
				  "i":arr.length
				}; // We have created a JSON by encapsulating the fields.
	arr.push(jStud); // Now copy the json into the array "arr"
	showTableData1();
}
