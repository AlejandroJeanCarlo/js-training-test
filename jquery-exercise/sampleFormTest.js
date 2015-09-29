var SampleFormTest = function(){
	
};
SampleFormTest.prototype.TC1 = function(){
	//Positive TC
	
	var sample = new SampleForm();
	//sample.setFullName('Jean Carlo Rodriguez');
	sample.setEmail('JeanCarlo.Rodriguez@fundacion-jala.org');
	sample.selectMale();
	sample.selectHobby(2);
	sample.selectHobby(4);
	sample.selectHobby(5);
	sample.hearAboutUS('net');
	sample.setMessage('Thats it !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	sample.clickOnValidate();
	
	if($('div[class="bs-callout bs-callout-warning hidden"]').length ==1)
		console.log("TC Passed");
	else
		console.log("TC Failed");
	
};

SampleFormTest.prototype.TC2 = function(){
	//Negative TC
	var sample = new SampleForm();
	sample.clickOnValidate();
	if($('div[class="bs-callout bs-callout-warning hidden"]').length !=1)
		console.log("TC Passed");
	else
		console.log("TC Failed");
};