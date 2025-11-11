Feature: Product Catalog
Product catalog allows to select products and add them to the cart

    Scenario Outline: Selecting Products
        Given Home page is open
        When Select category <category_name>
        And Filter by availabilty status "Available"
        And Add top item from catalog to cart 1 time
        And Go back to home page
        And Search for product <product_name>
        And Add top item from catalog to cart <quantity> times
        And Display cart
        Then Verify products in cart

    Examples:
        | category_name       | product_name            | quantity |
        | "Mice"              | "Smart Games"           |       13 |
        | "Desktop Computers" | "Jet Scan Professional" |        4 |
        | "Laptops"           | "Astro Laptop 1516"     |        2 |
