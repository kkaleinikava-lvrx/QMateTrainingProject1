Feature: Product Catalog
Product catalog allows to select products and add them to the cart

    Scenario: Selecting Products
        Given Home page is open
        When Select category "Mice"
        And Filter by availabilty status "Available"
        And Add top item from catalog to cart 1 time
        And Go back to home page
        And Search for product "Family PC Basic"
        And Add top item from catalog to cart 3 times
        And View cart
        Then Check products in cart
