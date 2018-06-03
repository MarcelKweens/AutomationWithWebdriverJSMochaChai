 var webdriver = require('selenium-webdriver'),
    By =  webdriver.By,
    until = webdriver.until;
    require('chromedriver'),
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;
    LoginData = require('../testdata/LoginData.json');

    describe('Validate Login Functionality: ', function(){
        //this.timeout(30000);

        beforeEach('Browser initializaton', async function(){
            driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
            await driver.get("http://yourapplicationurl.com");

        });

        LoginData.forEach(function(data, username, password, answer){

            it('Login with: '+data.username+"/"+data.password+"/"+data.answer,  async function(){

                await driver.findElement(By.xpath("//input[@ng-model='LoginViewModel.UserName']"))
                .sendKeys(data.username);
                await driver.findElement(By.xpath("//input[@ng-model='LoginViewModel.Password']"))
                .sendKeys(data.password);
                await driver.findElement(By.xpath("//input[@value='Log In' and @type='submit']"))
                .click();
                await driver.wait(until.elementIsVisible( driver.findElement(By.xpath("//input[@ng-model='twoFactorModel.answer']"))),5000);
                await driver.findElement(By.xpath("//input[@ng-model='twoFactorModel.answer']"))
                .sendKeys(data.answer);
                await driver.findElement(By.xpath("//input[@value='Proceed' and @type='submit']"))
                .click();
                await driver.wait(until.titleContains('Alleva'));
                await driver.getCurrentUrl().then(async function(url){

                    expect(url).equals('https://yourdashboardurlafterlogin');
                    await allure.createAttachment('URL matched after login: ', Buffer.from(url));
                })
                
                
            });
    });


        afterEach(async function(){

            if(this.currentTest.state == "passed"){
                var screenshot = await driver.takeScreenshot();
                await allure.createAttachment('Test Passed, attached screenshot!', Buffer.from(screenshot,"base64"));
            }
            else if(this.currentTest.state == "failed"){
                var screenshot = await driver.takeScreenshot();
                await allure.createAttachment('Test Failed, attached screenshot', Buffer.from(screenshot,"base64"));

            }

           await driver.quit();
        })

    });

