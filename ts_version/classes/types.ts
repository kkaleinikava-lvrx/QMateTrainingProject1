export interface Product {
    name: string,
    price: string,
    quantity: number
}

export enum FilterBy {
  Availability = "Availability",
  Price = "Price",
  Supplier = "Supplier"
};