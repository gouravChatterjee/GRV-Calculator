var x = "";
var frstdata = "";
var scnddata="";
var result="";



function get(id){
	var x = document.getElementById(id).value;
	
	document.getElementById('display').value += x;

}
var x = "";
var frstdata = "";
var scnddata="";
var result="";

function calculate(id){
	 x = document.getElementById(id).value;
	// console.log(x);
	 frstdata = document.getElementById('display').value;
	// console.log(frstdata+x);
	document.getElementById('display').value = "";

}
function getResult(id){
	scnddata = document.getElementById('display').value;
	frstdata = parseInt(frstdata);
	scnddata = parseInt(scnddata);
	switch(x){
		case "+":
			result = frstdata+scnddata;
			console.log(result);
			document.getElementById('display').value = result;
			break;
		case "-":
			result = frstdata-scnddata;
			console.log(result);
			document.getElementById('display').value = result;
			break;
		case "*":
			result = frstdata*scnddata;
			console.log(result);
			document.getElementById('display').value = result;
			break;
		case "/":
			result = frstdata/scnddata;
			console.log(result);
			document.getElementById('display').value = result;
			break;

	}
	

}
function clr(id){
	document.getElementById('display').value="";
	frstdata="";
	scnddata="";
	x="";
}
