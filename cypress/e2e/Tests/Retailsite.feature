Feature: Test Retail Site

Scenario: Login user  with correct email and password (TC2)
 Given On the retail portal
 When User clicks on login
 When I enter "gans79@gmail.com" as email and "Gans5217" as password and click Login  
 Then I will be logged in successfully landing on the home page

Scenario: Login user with incorrect email and password (TC3)
 Given On the retail portal
 When User clicks on login
 When I enter "gans79i@gmail.com" as email and "Gans5217" as password and click Login  
 Then error 'Your email or password is incorrect!' is visible

Scenario Outline: Verify all products and product detail page (TC8)
 Given On the retail portal
 When User clicks on products button   
 Then User will be navigated to all products page successfully
 When User clicks on view product of the '<product_no>'    
 Then User is landed to product detail page 
 
Examples:
  |product_no | 
  |first      | 

Scenario: Search product (TC9)
 Given On the retail portal
 When User clicks on products button   
 Then User will be navigated to all products page successfully
 When User enter a product in the search input    
 Then seached product is visible  

Scenario: Add product in cart (TC12)
 Given On the retail portal
 When User clicks on products button   
 When User hover over first product and click add to cart 
 When User hover over second product and click add to cart 
 When User clicks on view cart 
 Then prices, quantity and total prices are matching 

Scenario Outline: Verify product quantity in cart (TC13)
 Given On the retail portal
 When User clicks on products button   
 When User clicks on view product of the '<product_no>'    
 When User increase quantity to '<quantity_no>'
 When User clicks on view cart 
 Then Quantity is matching  

Examples:
  |product_no | quantity_no | 
  |first      | 4           |

Scenario Outline: View and cart brand products (TC19)
 Given On the retail portal
 When User clicks on products button   
 When User clicks on '<brand>' 
 Then User is navigated to the '<brand>' page  

Examples:
  |brand | 
  |Polo  | 

#Scenario Outline: Verify address in checkout page (TC23)
# Given On the retail portal
# When User clicks on Signup/Login
# When User enter '<name>' as name and '<email>' as email and click Signup
# When User enter '<pwd>' and '<firstname>' and '<lastname>' and '<address>' and '<state>' and '<city>' and '<zipcode>' and '<mobile>' and click create account
# Then Account is created successfully
# When User clicks on products button   
# When User hover over first product and click add to cart 
# When User clicks on proceed to checkout   
# Then Address is matching 
# When User clicks on delete account   
# Then Account is matching 

#Examples:
#  |name   | email             | pwd      | firstname | lastname    | Address       |state  | city | zipcode | mobile     |
#  |Ganesh | gans79B@gmail.com | Gans5217 | Ganesh    | Ranganathan | 39 Blackburn  | Kar   | Bang | 560043  | 0435099344 |









 
