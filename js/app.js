$(document).ready(function() {
	$('#searchButton').on('click', function() {
		var jobName = $('#job-title').val();
		var jobLocation = $('#job-locations').val();
		if ((jobValidation(jobName) == true) && (jobValidation(jobLocation) == true)) {
			searchJobs(jobName, jobLocation);
		} else {
			alert('Please enter a valid job title!');
			return false;
			$(jobName).val('');
		}
	});

	function jobValidation(input) {
		var checkInput = true;
		if ((input == '') || (input == ' ') || (!/[^a-zA-Z]/.test(input))) {
			checkInput = false;
		}
		return checkInput;
	}

	function jobDisplay(output) {

	}

	function searchJobs(jobName, jobLocation) {

	}
});