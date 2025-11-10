Feature: Product Catalog
Product catalog allows to select products and add them to the cart

    Scenario: Selecting Products
        Given Home page is open
        When Select category "Mice"
        And Filter by availabilty
        And Add top item from catalog to cart 1 times
        And Go back to home page
        And Search for product "Gladiator MX"
        And Add top item from catalog to cart 3 times
        And View cart
        Then Check products in cart
