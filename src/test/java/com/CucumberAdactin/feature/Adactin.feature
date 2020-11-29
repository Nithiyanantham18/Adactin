Feature: Over all functionality of adactin application 

Background: 
	Given User wants to launch the adactin application 
	When User enter "nithi0909" as username 
	And User enter "Nithi@09" as password 
	Then User verify the valid username and valid password in the home page 
	
	
Scenario: User wants to login the adactin application 
	Given User wants to launch the adactin application 
	When User enter "nithi0909" as username 
	And User enter "Nithi@09" as password 
	Then User verify the valid username and valid password in the home page 
	
	
Scenario: User wants to search the hotels 
	Given User chooses the hotels 
	When User chooses the location "Sydney" 
	And User chooses the hotel "Hotel Creek" 
	And User chooses the roomtype "Super Deluexe" 
	And User chooses the no of rooms "1-One" 
	And User chooses the check in date "31/10/2020" 
	And User chooses the check out date "03/11/2020" 
	And User chooses the adult per room "2-Two" 
	And User chooses the children per room "0-None" 
	Then User search the hotels 
	
	
Scenario: user wants to select the hotel and to give the personal details 
	Given User selects the respective hotel 
	When user click the respective hotel 
	And User continue to the next page 
	And User enter the firstname as "Nithiyanantham " 
	And User enter the lastname as "L" 
	And User enter the Billing address as "Chennai" 
	And User enter the creditcard no "1234567891011121" 
	And User select the credit card type as "American Express" 
	And User select the expiry date month as "Febrauary" 
	And User select the expiry date year as "2022"
	And User enter the cvv "7644" 
	Then User moves to book the hotel