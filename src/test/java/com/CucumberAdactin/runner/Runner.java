package com.CucumberAdactin.runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.CucumberAdactin.baseclass.Baseclass;
import com.CucumberAdactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features="src\\test\\java\\com\\CucumberAdactin\\feature",
                     glue="com\\CucumberAdactin\\Stepdefinition",
                     plugin= {"pretty","html:Report\\CucumberReport","json:Report\\Cucumber.json",
                    		 "com.cucumber.listener.ExtentCucumberFormatter:Reports/Extend_Report.html",
                    		 "rerun:Report2/FailedScenario.txt"},
                     monochrome=true)

public class Runner {

   public static WebDriver driver;
   
   @BeforeClass
	public static void setup() throws IOException {
	   
	   String browsername = FileReaderManager.getInstance().getCrInstance().getBrowsername();
		driver = Baseclass.Browser(browsername);
	}
}
