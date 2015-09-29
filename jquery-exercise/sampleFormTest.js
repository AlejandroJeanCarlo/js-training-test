var SampleFormTest = function(){
	
};
SampleFormTest.prototype.fillAllFields = function(){
	var sample = new SampleForm();
	sample.setFullName('Jean Carlo Rodriguez');
	sample.setEmail('JeanCarlo.Rodriguez@fundacion-jala.org');
	sample.selectMale();
	sample.selectHobby(2);
	sample.selectHobby(4);
	sample.selectHobby(5);
	sample.hearAboutUS('net');
	sample.setMessage('Thats it !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	sample.clickOnValidate();
	//$('span[class="btn btn-default"]').click();
};