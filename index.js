
function calculate()
		{
		var totalwithouttax=document.getElementById("totalwithouttax").value;
		var  Tip1=10%
		var total=parseInt(value1)/parseInt(Tip1);
		
		var totalwithouttax=document.getElementById("totalwithouttax").value;
		var  Tip2=20%
		var total=parseInt(value1)/parseInt(Tip2);
		
		var totalwithouttax=document.getElementById("totalwithouttax").value;
		var  Tip3=30%
		var total=parseInt(value1)/parseInt(Tip3);
		
        localStorage.setItem("result",total);
		alert("Value Saved");
		}
		function showResult()
		{
			var result=localStorage.getItem("result");
			document.getElementById("result").innerHTML="The result is:"+ result;
			
		}
		var totalwithouttax=getElementById("totalwithouttax").value;
		var totalwithtax=getElementById("totalwithouttax").value;
		