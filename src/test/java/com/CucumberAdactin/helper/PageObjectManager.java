package com.CucumberAdactin.helper;

import org.openqa.selenium.WebDriver;

import com.CucumberAdactin.pom.BookHotel;
import com.CucumberAdactin.pom.Loginpage;
import com.CucumberAdactin.pom.SearchHotelpage;

public class PageObjectManager {
     public static WebDriver driver;
	
	private Loginpage lp;
	private SearchHotelpage sh;
	private BookHotel bh;
	
	public PageObjectManager(WebDriver mdriver) {
		this.driver=mdriver;
	}
	
	public Loginpage getLp() {
	lp=	new Loginpage(driver);
		return lp;
	}
	
	public SearchHotelpage getSh() {
		sh=new SearchHotelpage(driver);
		return sh;
	}
	
	public BookHotel getBh() {
		bh=new BookHotel(driver);
		return bh;
	}
}
