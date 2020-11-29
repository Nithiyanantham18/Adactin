package com.CucumberAdactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel {

	public static WebDriver driver;
	
         @FindBy(xpath="//input[@id='radiobutton_0']")
         private WebElement radiobutton;
         
         @FindBy(xpath="//input[@id='continue']")
         private WebElement con;
         
         
         @FindBy(xpath="//input[@id='first_name']")
         private WebElement fname;
	
         @FindBy(xpath="//input[@id='last_name']")
         private WebElement lname;
	
         @FindBy(xpath="//textarea[@id='address']")
         private WebElement billingaddress;
	
         @FindBy(xpath="//input[@id='cc_num']")
         private WebElement creditcardnum;
         
         @FindBy(xpath="//select[@id='cc_type']")
         private WebElement cctype;
         
         @FindBy(xpath="//select[@id='cc_exp_month']")
         private WebElement Smonth;
         
         @FindBy(xpath="//select[@id='cc_exp_year']")
         private WebElement Syear;
         
         @FindBy(xpath="//input[@id='cc_cvv']")
         private WebElement cvvnum;
         
         @FindBy(xpath="//input[@id='book_now']")
         private WebElement Bnow;

         
         public BookHotel(WebDriver ldriver) {
     		this.driver=ldriver;
     		PageFactory.initElements(driver, this);
     	}
		public WebElement getBnow() {
			return Bnow;
		}


		public WebElement getRadiobutton() {
			return radiobutton;
		}

		public WebElement getCon() {
			return con;
		}

		public WebElement getFname() {
			return fname;
		}

		public WebElement getLname() {
			return lname;
		}

		public WebElement getBillingaddress() {
			return billingaddress;
		}

		public WebElement getCreditcardnum() {
			return creditcardnum;
		}

		public WebElement getCctype() {
			return cctype;
		}

		public WebElement getSmonth() {
			return Smonth;
		}

		public WebElement getSyear() {
			return Syear;
		}

		public WebElement getCvvnum() {
			return cvvnum;
		}
}