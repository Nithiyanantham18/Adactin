package com.CucumberAdactin.Stepdefinition;

import java.io.IOException;

import com.CucumberAdactin.baseclass.Baseclass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksStepdefinition extends Baseclass {

	@Before
	public void beforehooks(Scenario scenario) {
		
		System.out.println(scenario.getName());
		System.out.println("Started");
  
	}
	
	@After
	public void afterHooks(Scenario scenario) throws IOException {

		System.out.println("Status:"+scenario.getStatus());
		if (scenario.isFailed()) {
			
			String id = scenario.getId();
			System.out.println("scenario id is:"+id);
			screenSht(id);
		}
		
		System.out.println("   id: "+scenario.getId());
	} 
	
	
}
