# AutomationWithWebdriverJSMochaChai
Sample UI Automation using WebdriverJS, Mocha ChaiJS and Allure reporting framework.

<pre>
<b>Installation</b>
Pre-requisites to run this on your system:
  Node.js (install from nodejs.org)
  npm (comes with nodejs)
  selenium webdriver( $ npm install selenium-webdriver --save )
  mocha ( $ npm install mocha --save )
  chai ( $ npm install chai --save )
  allure reporting ( $ npm install mocha-allure-reporter --save )
  
Clone repository on your system and do changes as per your requirements.
After that you can fire command in terminal:

$ npm test

This will execute your tests sequentially:
  -first mvn clean will clean all required directory so tha for each run fresh reports get generated
  -mocha ./tests/login.js --no-timeouts -R mocha-allure-reporter will run your tests with not timeout boundation and generate
   allure-results directory after execution completes
  -mvn site with generate allure report in target/site/maven-allure-plugin/index.html with all your failed/passed screenshots.
  
  <b><i>Benefits of using --no-timeouts: for mocha default timeout is 2 seconds, so whether your tests take more than 2 sec time 
    if you don't set this option,  your test will only execute for 2 seconds and this will cause of failing of your test unexpectedly. So its a good option to try.</i></b>
    
<b>Package.json</b>: This is actually works like pom in maven, you mention all dependencies and configuration in it, also you can use this to run your test by one command: npm test as I have used, using 'scripts' option:

"scripts": {
    "test": "mvn clean ; mocha ./tests/Login.js --no-timeouts -R mocha-allure-reporter ; mvn site"
  },
  
You can view report by opening this index.html in firefor or using jetty server in chrome.

Sample report screenshots:
<img src="https://github.com/rohinegi548/AutomationWithWebdriverJSMochaChai/blob/master/SampleGeneratedReportSnaps/Screenshot%20from%202018-06-03%2023-55-08.png" title="allure report sample1"/>
<br>
<img src="https://github.com/rohinegi548/AutomationWithWebdriverJSMochaChai/blob/master/SampleGeneratedReportSnaps/Screenshot%20from%202018-06-03%2023-55-53.png" title="allure report sample2"/>
<br>
<img src="https://github.com/rohinegi548/AutomationWithWebdriverJSMochaChai/blob/master/SampleGeneratedReportSnaps/Screenshot%20from%202018-06-03%2023-56-07.png" title="allure report sample3"/>
<br>

</pre>
