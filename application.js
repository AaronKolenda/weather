$(document).ready(function(){

	$("#result1").hide();		//these divs will fade in later after the info is added to them
	$("#result2").hide();

	
	
	$("#go").click(function(){				//when go button is clicked
	
		var city1 = $("#select1 option:selected").val();	//the values are taken from the select boxes
		var city2 = $("#select2 option:selected").val();	
		var data = $("#select3 option:selected").val();
	
		$('#result1').fadeOut('2000', function() {			//the last results fade out
		$('#result1').html("<h2 class='text-left'>" + cities[city1][data] + displayUnit(data) + "</h2>");
		$('#result1').fadeIn('2000');						//and the new results fade in
		});
	
		$('#result2').fadeOut('2000', function() {
		$('#result2').html("<h2 class='text-left'>" + cities[city2][data] + displayUnit(data) + "</h2>");
		$('#result2').fadeIn('2000');
		});
	
		
	});
	
});
	
	//this function displays the proper unit of measurement after each piece of data is displayed
	
	function displayUnit(a) {		
		if (a < 12) {
		return " &deg";
		}
		else if (a == 12) {
		return " inches";
		}
		else if (a == 13) {
		return " hours";
		}
		else if (a == 14) {
		return " inches";
		}
	}
		
		
