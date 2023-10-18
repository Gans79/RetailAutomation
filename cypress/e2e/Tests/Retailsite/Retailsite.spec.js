import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';







Cypress.on('uncaught:exception', (err) => {
  // returning false here prevents Cypress from
  // failing the test
  console.log('Cypress detected uncaught exception: ', err);
  return false;
});

Given("On the retail portal", () => {
    cy.visit('https://automationexercise.com/')
    
});


When("User clicks on login",() =>{
    cy.get(`a[href='/login']`).click();  

});

When("I enter {string} as email and {string} as password and click Login",(email,pwd) =>{
    cy.get(`input[name='email']`).eq(0).type(email)
    cy.get(`input[name='password']`).type(pwd)
    cy.get(`button[data-qa='login-button']`).click()
});


When("User enter {string} as name and {string} as email and click Signup",(name,email) =>{
    cy.get(`input[data-qa='signup-name']`).type(name)
    cy.get(`input[data-qa='signup-email']`).type(email)
    cy.get(`button[data-qa='signup-button']`).click()
});


Then("I will be logged in successfully landing on the home page",() => {
    cy.contains("b","Ganesh Ranganathan")
});

Then("error '{}' is visible",(message) => {
    cy.get(`p:contains('${message}')`).scrollIntoView().should('be.visible');

});


When("User clicks on products button",() => {
    cy.get(`a[href='/products']`).click();  

});


Then("User will be navigated to all products page successfully",() => {
    cy.get(`h2:contains('All Products')`).scrollIntoView().should('be.visible');

});


When("User clicks on view product of the '{}'",(product_no) => {
    switch(product_no.toLowerCase()){
        case 'first':
            cy.get(`a[href='/product_details/1']`).click();  
            break;
        default :
            throw new Error(product + ' product number not defined.');

    }

});

Then("User is landed to product detail page",() => {
    cy.get(`div[class='product-details']`).find(`h2:contains('Blue Top')`)
      .next(`p:contains('Category')`)
    cy.get(`div[class='product-details']`).find(`b:contains('Availability')`)
    cy.get(`div[class='product-details']`).find(`b:contains('Condition')`)
    cy.get(`div[class='product-details']`).find(`b:contains('Brand')`)

});



When("User enter a product in the search input",() => {
    cy.get(`input[name='search']`).type('T-Shirt')
    cy.get(`[class='features_items']`).find(`*:contains('T-Shirt')`)

});

Then("seached product is visible",() => {
    cy.get(`[class='features_items']`).find(`*:contains('T-Shirt')`)

});

When("User hover over first product and click add to cart",() => {
    cy.get(`a[data-product-id='1']`).eq(0).click()
    cy.get(`button:contains('Continue Shopping')`).click()
});


When("User hover over second product and click add to cart",() => {
    cy.get(`a[data-product-id='2']`).eq(0).click()
    cy.get(`button:contains('Continue Shopping')`).click()
});



When("User clicks on view cart",() => {
    cy.get(`a[href='/view_cart']`).eq(0).click();  
});


Then("prices, quantity and total prices are matching",() => {
    cy.get(`tr[id='product-1']`).find(`td[class='cart_description']:contains('Tops')`)
      .next(`td[class='cart_price']:contains('500')`)
      .next(`td[class='cart_quantity']:contains('1')`)
      .next(`td[class='cart_total']:contains('500')`)
    cy.get(`tr[id='product-2']`).find(`td[class='cart_description']:contains('Tshirt')`)
      .next(`td[class='cart_price']:contains('400')`)
      .next(`td[class='cart_quantity']:contains('1')`)
      .next(`td[class='cart_total']:contains('400')`)
});

Then("Quantity is matching",() => {
    cy.get(`tr[id='product-1']`).find(`td[class='cart_description']:contains('Tops')`)
      .next(`td[class='cart_price']:contains('500')`)
      .next(`td[class='cart_quantity']:contains('4')`)
      .next(`td[class='cart_total']:contains('2000')`)
});


When("User increase quantity to '{}'",(quantity) => {
    cy.get(`input[name='quantity']`).clear().type(quantity)
    cy.get(`button:contains('Add to cart')`).click()
    cy.get(`button:contains('Continue Shopping')`).click()

});

When("User clicks on '{}'",(brand) => {
    cy.get(`a[href='/brand_products/${brand}']`).eq(0).click();  

});

Then("User is navigated to the '{}' page",(brand) => {
    cy.get(`h2:contains('${brand}')`)
});



