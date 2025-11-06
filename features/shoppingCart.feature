Feature: Shopping Cart
  
    Scenario: Placing Order
        Given I can see Shopping cart home screen
        And I can see Catalog
        When I select category "Laptops"
        Then I can see category "Laptops" screen

    Scenario: Placing Order
        Given I can see Shopping cart home screen
        And I can see Catalog
        When I select category "Mice"
        And I select item 5
        And I add product to cart from the detailed view
        And I open shopping cart
        And I proceed to checkout
        And I review order details and proceed
        And I choose Payment method and proceed
        And I enter credit card details and proceed
        And I enter invoice address and proceed
        And I choose delivery type and proceed
        And I submit order
        Then I can see order confirmation

        


