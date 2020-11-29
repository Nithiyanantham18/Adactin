package com.CucumberAdactin.Stepdefinition;

import com.CucumberAdactin.baseclass.Baseclass;
import com.CucumberAdactin.helper.PageObjectManager;
import cucumber.api.java.en.*;

public class SearchStepdefinition extends Baseclass{
	
	PageObjectManager pom=new PageObjectManager(driver);
	
	@Given("^User chooses the hotels$")
	public void user_chooses_the_hotels() throws Throwable {
	    
	}

	@When("^User chooses the location \"([^\"]*)\"$")
	public void user_chooses_the_location(String arg1) throws Throwable {
		Dropdown(pom.getSh().getLocation(), "Value", "Sydney");
	}

	@When("^User chooses the hotel \"([^\"]*)\"$")
	public void user_chooses_the_hotel(String arg1) throws Throwable {
		Dropdown(pom.getSh().getHotels(), "VisibleText", "Hotel Creek");
	}

	@When("^User chooses the roomtype \"([^\"]*)\"$")
	public void user_chooses_the_roomtype(String arg1) throws Throwable {
		Dropdown(pom.getSh().getRtype(), "Value", "Super Deluxe");
	}

	@When("^User chooses the no of rooms \"([^\"]*)\"$")
	public void user_chooses_the_no_of_rooms(String arg1) throws Throwable {
		Dropdown(pom.getSh().getRoomno(), "VisibleText", "2 - Two");
	}

	@When("^User chooses the check in date \"([^\"]*)\"$")
	public void user_chooses_the_check_in_date(String arg1) throws Throwable {
		elementClear(pom.getSh().getCheckin());
		inputValueElement(pom.getSh().getCheckin(), "31/10/2020");
	}

	@When("^User chooses the check out date \"([^\"]*)\"$")
	public void user_chooses_the_check_out_date(String arg1) throws Throwable {
		elementClear(pom.getSh().getCheckout());
	   inputValueElement(pom.getSh().getCheckout(), "03/11/2020");
	}

	@When("^User chooses the adult per room \"([^\"]*)\"$")
	public void user_chooses_the_adult_per_room(String arg1) throws Throwable {
		Dropdown(pom.getSh().getAdult(), "VisibleText", "2 - Two");
	}

	@When("^User chooses the children per room \"([^\"]*)\"$")
	public void user_chooses_the_children_per_room(String arg1) throws Throwable {
		Dropdown(pom.getSh().getChild(), "VisibleText", "0 - None");
	}

	@Then("^User search the hotels$")
	public void user_search_the_hotels() throws Throwable {
	    clickOnElement(pom.getSh().getSearch());
	}

}
