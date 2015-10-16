$(document).ready(function() {
	$('#searchButton').on('click', function() {
		var jobName = $('#job-title').val();
		var jobLocation = document.getElementById('job-location').value;
		if (jobValidation(jobName, jobLocation) == true) {
			searchJobs(jobName, jobLocation);
		} else {
			$('#job-title').val('');
			//jobLocation.value == 'choose location';
			return false;	
		}
	});

	// Function to validate the input provided to the text box and drop down list
	function jobValidation(jobName, jobLocation) {
		var checkInput = true;
		if ((jobName == '') || (jobName == ' ') || (/[^a-zA-Z]/.test(jobName))) {
			alert('Please enter a valid job title!');
			checkInput = false;
		} 
		if (jobLocation == 'choose location') {
			alert('Please select a desired location.');
			checkInput = false;
		}
		return checkInput;
		//console.log(checkInput);
	}

	/* Function to make AJAX request */

	function jobDisplay(output) {

	}

	function searchJobs(jobName, jobLocation) {
		alert("So far, so good");
	}
});