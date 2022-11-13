// Este archivo es la continuación del archivo 14-objects.ts
import { Product } from "./product.model";

export const products: Product[] = [];
export const addProduct = (data: Product) => {
  products.push(data);
};
