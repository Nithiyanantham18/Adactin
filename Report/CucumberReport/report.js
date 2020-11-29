$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Over all functionality of adactin application",
  "description": "",
  "id": "over-all-functionality-of-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1512000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User wants to launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"nithi0909\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Nithi@09\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the valid username and valid password in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_wants_to_launch_the_adactin_application()"
});
formatter.result({
  "duration": 8003612400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nithi0909",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 4378848100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@09",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 2282644400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefinition.user_verify_the_valid_username_and_valid_password_in_the_home_page()"
});
formatter.result({
  "duration": 7182670000,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:174)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:181)\r\n\tat com.CucumberAdactin.Stepdefinition.LoginStepdefinition.user_verify_the_valid_username_and_valid_password_in_the_home_page(LoginStepdefinition.java:34)\r\n\tat ✽.Then User verify the valid username and valid password in the home page(Adactin.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "User wants to login the adactin application",
  "description": "",
  "id": "over-all-functionality-of-adactin-application;user-wants-to-login-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User wants to launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enter \"nithi0909\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enter \"Nithi@09\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User verify the valid username and valid password in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_wants_to_launch_the_adactin_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "nithi0909",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@09",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinition.user_verify_the_valid_username_and_valid_password_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1162052300,
  "status": "passed"
});
formatter.before({
  "duration": 604000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User wants to launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"nithi0909\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Nithi@09\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the valid username and valid password in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_wants_to_launch_the_adactin_application()"
});
formatter.result({
  "duration": 1979843300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nithi0909",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 2572138000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@09",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 3088888900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NITHI\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:3406}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 233c7f4e911094409ba8a5c683e03ea5\n*** Element info: {Using\u003dxpath, value\u003d(//input[@class\u003d\u0027login_input\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.CucumberAdactin.baseclass.Baseclass.inputValueElement(Baseclass.java:107)\r\n\tat com.CucumberAdactin.Stepdefinition.LoginStepdefinition.user_enter_as_password(LoginStepdefinition.java:28)\r\n\tat ✽.And User enter \"Nithi@09\" as password(Adactin.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepdefinition.user_verify_the_valid_username_and_valid_password_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "User wants to search the hotels",
  "description": "",
  "id": "over-all-functionality-of-adactin-application;user-wants-to-search-the-hotels",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User chooses the hotels",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User chooses the location \"Sydney\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User chooses the hotel \"Hotel Creek\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User chooses the roomtype \"Super Deluexe\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User chooses the no of rooms \"1-One\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User chooses the check in date \"31/10/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User chooses the check out date \"03/11/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User chooses the adult per room \"2-Two\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User chooses the children per room \"0-None\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User search the hotels",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdefinition.user_chooses_the_hotels()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 27
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_location(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 24
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_hotel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Super Deluexe",
      "offset": 27
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_roomtype(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1-One",
      "offset": 30
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_no_of_rooms(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "31/10/2020",
      "offset": 32
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_check_in_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "03/11/2020",
      "offset": 33
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_check_out_date(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2-Two",
      "offset": 33
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_adult_per_room(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0-None",
      "offset": 36
    }
  ],
  "location": "SearchStepdefinition.user_chooses_the_children_per_room(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepdefinition.user_search_the_hotels()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3909000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NITHI\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:3406}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 233c7f4e911094409ba8a5c683e03ea5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.CucumberAdactin.baseclass.Baseclass.screenSht(Baseclass.java:215)\r\n\tat com.CucumberAdactin.Stepdefinition.HooksStepdefinition.afterHooks(HooksStepdefinition.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 196000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User wants to launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter \"nithi0909\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"Nithi@09\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User verify the valid username and valid password in the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefinition.user_wants_to_launch_the_adactin_application()"
});
formatter.result({
  "duration": 8124600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NITHI\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:3406}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 233c7f4e911094409ba8a5c683e03ea5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.CucumberAdactin.baseclass.Baseclass.getUrl(Baseclass.java:51)\r\n\tat com.CucumberAdactin.Stepdefinition.LoginStepdefinition.user_wants_to_launch_the_adactin_application(LoginStepdefinition.java:19)\r\n\tat ✽.Given User wants to launch the adactin application(Adactin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "nithi0909",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithi@09",
      "offset": 12
    }
  ],
  "location": "LoginStepdefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefinition.user_verify_the_valid_username_and_valid_password_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "user wants to select the hotel and to give the personal details",
  "description": "",
  "id": "over-all-functionality-of-adactin-application;user-wants-to-select-the-hotel-and-to-give-the-personal-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User selects the respective hotel",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user click the respective hotel",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User continue to the next page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User enter the firstname as \"Nithiyanantham \"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter the lastname as \"L\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter the Billing address as \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter the creditcard no \"1234567891011121\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User select the credit card type as \"American Express\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User select the expiry date month as \"Febrauary\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User select the expiry date year as \"2022\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter the cvv \"7644\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User moves to book the hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "BookingStepdefinition.user_selects_the_respective_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingStepdefinition.user_click_the_respective_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingStepdefinition.user_continue_to_the_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithiyanantham ",
      "offset": 29
    }
  ],
  "location": "BookingStepdefinition.user_enter_the_firstname_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 28
    }
  ],
  "location": "BookingStepdefinition.user_enter_the_lastname_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 35
    }
  ],
  "location": "BookingStepdefinition.user_enter_the_Billing_address_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891011121",
      "offset": 30
    }
  ],
  "location": "BookingStepdefinition.user_enter_the_creditcard_no(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "American Express",
      "offset": 37
    }
  ],
  "location": "BookingStepdefinition.user_select_the_credit_card_type_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Febrauary",
      "offset": 38
    }
  ],
  "location": "BookingStepdefinition.user_select_the_expiry_date_month_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 37
    }
  ],
  "location": "BookingStepdefinition.user_select_the_expiry_date_year_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7644",
      "offset": 20
    }
  ],
  "location": "BookingStepdefinition.user_enter_the_cvv(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BookingStepdefinition.user_moves_to_book_the_hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5622000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NITHI\u0027, ip: \u0027192.168.173.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:3406}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 233c7f4e911094409ba8a5c683e03ea5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.CucumberAdactin.baseclass.Baseclass.screenSht(Baseclass.java:215)\r\n\tat com.CucumberAdactin.Stepdefinition.HooksStepdefinition.afterHooks(HooksStepdefinition.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});