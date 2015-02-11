# AngularJS
AngularJS Example with testing using Protractor

Steps for installing Protractor on windows:

1- Install NodeJs from http://nodejs.org/

2- Open cmd & run "npm --version" to make sure that NodeJS & nmp is installed correctly.

3- Run "npm install -g protractor" in the cmd to install protractor.

4- Run "protractor --version" to make sure that protractor is installed correctly.

5- Run "webdriver-manager update".

6- Run "webdriver-manager start" to start the Selenium Server.

7- Move to the C:/Users/{your_user_name}/AppData/Roaming/npm/node_modules/protractor/example

	--> Protractor is installed in AppData hidden directory.

8- Run "protractor conf.js" to run the default test of protractor.

	--> Expected behaviour: Google chrome will start and the test will run then closed.

	Check the cmd to find the following:

		Using ChromeDriver directly...

		[launcher] Running 1 instances of WebDriver

		...

		Finished in 33.933 seconds

		3 tests, 5 assertions, 0 failures

		[launcher] 0 instance(s) of WebDriver still running
		
		[launcher] chrome #1 passed
