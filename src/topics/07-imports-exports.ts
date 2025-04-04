import { Product, taxCalculation } from "./06-funtion-destructuring";
const shoppingCart: Product[] = [
  {
    description: "Nokia A1",
    price: 100.0,
  },
  {
    description: "iPad Air",
    price: 150.0,
  },
  {
    description: "Macbook Pro",
    price: 2000.0,
  },
  {
    description: "Samsung Galaxy S20",
    price: 800.0,
  },
];

const [total, tax] = taxCalculation({
  tax: 0.15,
  products: shoppingCart,
});
console.log("Total: ", total);
console.log("Tax: ", tax);
