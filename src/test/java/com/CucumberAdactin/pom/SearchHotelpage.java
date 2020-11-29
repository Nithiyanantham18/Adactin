package com.CucumberAdactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotelpage {

	
	public static WebDriver driver;
	
	@FindBy(xpath="//select[@id='location']")
	private WebElement location;
	
	@FindBy(xpath="//select[@id='hotels']")
	private WebElement hotels;
	
	@FindBy(xpath="//select[@id='room_type']")
	private WebElement rtype;
	
	@FindBy(xpath="//select[@id='room_nos']")
	private WebElement roomno;
	
	@FindBy(xpath="//input[@id='datepick_in']")
	private WebElement checkin;
	
	@FindBy(xpath="//input[@id='datepick_out']")
	private WebElement checkout;
	
	@FindBy(xpath="//select[@id='adult_room']")
	private WebElement adult;
	
	@FindBy(xpath="//select[@id='child_room']")
	private WebElement child;
	
	@FindBy(xpath="//input[@id='Submit']")
	private WebElement search;

	
	public SearchHotelpage(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotels() {
		return hotels;
	}

	public WebElement getRtype() {
		return rtype;
	}

	public WebElement getRoomno() {
		return roomno;
	}

	public WebElement getCheckin() {
		return checkin;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getAdult() {
		return adult;
	}

	public WebElement getChild() {
		return child;
	}

	public WebElement getSearch() {
		return search;
	}
	

	
	
	
	
	
	
	
}
