package com.CucumberAdactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage {
	public static WebDriver driver;
	
	@FindBy(xpath="(//input[@class='login_input'])[1]")
	private WebElement username;
	
	@FindBy(xpath="(//input[@class='login_input'])[2]")
	private WebElement password;
	
	@FindBy(xpath="//input[@id='login']")
	private WebElement loginbtn;

	public Loginpage(WebDriver ldriver) {
		this.driver=ldriver;
		PageFactory.initElements(driver, this);
	}
	
	
	public WebElement getUsername() {
		return username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginbtn() {
		return loginbtn;
	}
	
	
	
	
	

}
