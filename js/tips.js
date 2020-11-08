function calculate()
		{
		var value1=document.getElementById("value1").value;
		var value2=document.getElementById("value2").value;
		var total=parseInt(value1)+parseInt(value2);
		
        localStorage.setItem("result",total);
		alert("Value Saved");
		}
		function showResult()
		{
			var result=localStorage.getItem("result");
			document.getElementById("result").innerHTML="The result is:"+ result;
		}
