package com.CucumberAdactin.Stepdefinition;

import com.CucumberAdactin.baseclass.Baseclass;
import com.CucumberAdactin.helper.PageObjectManager;
import cucumber.api.java.en.*;

public class BookingStepdefinition extends Baseclass {
	
	PageObjectManager pom=new PageObjectManager(driver);
	
	
	@Given("^User selects the respective hotel$")
	public void user_selects_the_respective_hotel() throws Throwable {
	   
	}

	@When("^user click the respective hotel$")
	public void user_click_the_respective_hotel() throws Throwable {
		 clickOnElement(pom.getBh().getRadiobutton());
	}

	@When("^User continue to the next page$")
	public void user_continue_to_the_next_page() throws Throwable {
		clickOnElement(pom.getBh().getCon());
	}

	@When("^User enter the firstname as \"([^\"]*)\"$")
	public void user_enter_the_firstname_as(String arg1) throws Throwable {
		inputValueElement(pom.getBh().getFname(), "Nithiyanantham");
	}

	@When("^User enter the lastname as \"([^\"]*)\"$")
	public void user_enter_the_lastname_as(String arg1) throws Throwable {
	    inputValueElement(pom.getBh().getLname(), "L");
	}

	@When("^User enter the Billing address as \"([^\"]*)\"$")
	public void user_enter_the_Billing_address_as(String arg1) throws Throwable {
	    inputValueElement(pom.getBh().getBillingaddress(), "Chennai");
	}

	@When("^User enter the creditcard no \"([^\"]*)\"$")
	public void user_enter_the_creditcard_no(String arg1) throws Throwable {
	   inputValueElement(pom.getBh().getCreditcardnum(), "1234567891011121");
	}

	@When("^User select the credit card type as \"([^\"]*)\"$")
	public void user_select_the_credit_card_type_as(String arg1) throws Throwable {
	    Dropdown(pom.getBh().getCctype(), "Value", "AMEX");
	}

	@When("^User select the expiry date month as \"([^\"]*)\"$")
	public void user_select_the_expiry_date_month_as(String arg1) throws Throwable {
		 Dropdown(pom.getBh().getSmonth(), "Value", "2");
	}

	@When("^User select the expiry date year as \"([^\"]*)\"$")
	public void user_select_the_expiry_date_year_as(String arg1) throws Throwable {
		 Dropdown(pom.getBh().getSyear(), "Value", "2022");
	}

	@When("^User enter the cvv \"([^\"]*)\"$")
	public void user_enter_the_cvv(String arg1) throws Throwable {
	    inputValueElement(pom.getBh().getCvvnum(), "7644");
	}

	@Then("^User moves to book the hotel$")
	public void user_moves_to_book_the_hotel() throws Throwable {
	   clickOnElement(pom.getBh().getBnow());
	}


}
