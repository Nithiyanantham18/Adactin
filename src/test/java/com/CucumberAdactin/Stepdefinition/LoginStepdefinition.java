package com.CucumberAdactin.Stepdefinition;

import com.CucumberAdactin.baseclass.Baseclass;
import com.CucumberAdactin.helper.FileReaderManager;
import com.CucumberAdactin.helper.PageObjectManager;
import com.CucumberAdactin.pom.Loginpage;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class LoginStepdefinition extends Baseclass  {
            
    PageObjectManager pom=new PageObjectManager(driver);
	
@Given("^User wants to launch the adactin application$")
public void user_wants_to_launch_the_adactin_application() throws Throwable {
	
	   String url = FileReaderManager.getInstance().getCrInstance().getUrl();
           getUrl(url);
}
@When("^User enter \"([^\"]*)\" as username$")
public void user_enter_as_username(String arg1) throws Throwable {
   inputValueElement(pom.getLp().getUsername(), "nithi0909");
}

@When("^User enter \"([^\"]*)\" as password$")
public void user_enter_as_password(String arg1) throws Throwable {
    inputValueElement(pom.getLp().getPassword(), "Nithi@09");
}

@Then("^User verify the valid username and valid password in the home page$")
public void user_verify_the_valid_username_and_valid_password_in_the_home_page() throws Throwable {
    clickOnElement(pom.getLp().getLoginbtn());
    Assert.assertEquals(true, false);
}


	}


