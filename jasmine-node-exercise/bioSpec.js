var Bio = require('./bio.js');
//var bio = Bio('Jean', 12);
//console.log(bio); 

describe('getBio',function(){
	xit('verify that at send the name Jean Carlo and the age 12 show a message of the bio',function(){
		var actualResult = Bio('Jean Carlo',12);	
		var expectedResult = 'Hi, my name is Jean Carlo, I am 12 years old and Iam a nice guy.';
		expect(expectedResult).toEqual(actualResult);
	});
	
	it('Verify that at no introduce the name of the person an error is throw',function(){
		
		var actualResult = Bio();	
		var expectedResult = 'Need name and age to provide a biography';
		expect(function(){Bio()}).toThrow('Need name and age to provide a biography');
		//expect(expectedResult).toEqual(actualResult);
	});
	
	
	
	
});