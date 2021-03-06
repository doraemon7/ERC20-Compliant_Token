$(document).ready(function(){

	$('#customizedTokenForm').submit(function(event){
		event.preventDefault();

		// formData will store all the form field's values in a JSON object
		var formData = {};

		// Gets the Customized Token Fields
		formData.totalSupply = $("input[name='totalSupply']").val();
		formData.tokenName = $("input[name='tokenName']").val();
		formData.tokenDecimals = $("input[name='tokenDecimals']").val();
		formData.tokenSymbol = $("input[name='tokenSymbol']").val();

		//console.log("Printing the formData");
		//console.log(formData);

		// Post request to save custom token details
		$.ajax({
			type: "POST",
			url: "/customToken",
			data: formData,
			success: function(res){
				alert("Token Created Successfully");
				window.location.href = window.location.protocol + '/tokenOperations';
			},
			error: function (err){
				alert("Something went wrong while submitting the request");
				window.location.href = window.location.protocol ;

			}
		}); //end of ajax call
	}); // end of $('#customizedTokenForm').submit(function(event)
}); //end of document.ready
