describe('angularjs homepage', function() {
	it('should have a title', function() {
		browser.get('http://localhost:8080/AngularJs/');

		element(by.model('user.name')).sendKeys("Name");

		element(by.linkText('JSON')).click();

		element(by.binding('jsonString')).getText().then(function(text) {
			console.log(text);
		});

		expect(browser.getTitle()).toEqual('AngularJs Tutorial');
	});
});