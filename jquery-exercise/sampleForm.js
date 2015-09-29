var SampleForm = function(){
	
	
	
};
SampleForm.prototype.setFullName = function(fullName){
		$('input[name="fullname"]').val(fullName);
};

SampleForm.prototype.setEmail = function(email){
		$('input[name="email"]').val(email);
};
SampleForm.prototype.selectMale = function(){
		$('input#genderM').click();
};
SampleForm.prototype.selectFemale = function(){
		$('input#genderF').click();
};
SampleForm.prototype.selectHobby = function(number){
		var num = number.toString();
		$('input#hobby'+num).click();
};
SampleForm.prototype.hearAboutUS = function(option){
		$('select#heard option[value="'+option+'"]').prop('selected', true)	
		
};

SampleForm.prototype.setMessage = function(message){
		$('textarea#message').val(message);
		
};

SampleForm.prototype.clickOnValidate = function(){
		$('span[class="btn btn-default"]').click();
		
};














