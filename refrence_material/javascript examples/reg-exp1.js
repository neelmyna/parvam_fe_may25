<!DOCTYPE html>
<html>
<head>
<title>form examples</title>
</head>
<body bgcolor="ivory">
	<form >
	<input type="submit" onclick="upper_case()" value="Abcd" id="s1" />
	<input type="submit" onclick="upper_case()" value="abcd" id="s2" />
</form>	
<script>
function upper_case(str)
{
   var s1 = document.getElementById(s1).value;
   var s2 = document.getElementById(s2).value;
   regexp = /^[A-Z]/;
   if (regexp.test(s1))
    {
      alert('String's first character is uppercase');
    } 
	if (regexp.test(s2))
    {
      console.log("String's first character is not uppercase");
    }
}
</script>
</body>
</html>