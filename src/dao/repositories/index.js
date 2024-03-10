import { Products } from "../factory/productFactory.js";
import { Carts } from "../factory/cartFactory.js";
import ProductRepository from "./products.repository.js";
import CartRepository from "./carts.repository.js";

export const productsServicesRep = new ProductRepository(new Products())
export const cartsServicesRep = new CartRepository(new Carts())