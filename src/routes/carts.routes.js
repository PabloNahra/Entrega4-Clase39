import { Router } from "express";
import { getCarts, getCartsById, 
  postCart,deleteCartById, 
  putCartById, putProductsInCart, 
  deleteProductsInCart, postProductsInCart, confirmCart } from "../controllers/carts.controller.js";
import { applyPolicies, checkRolUser } from "../middlewares/auth.js";

const cartsRoutes = Router()

cartsRoutes.get('/', getCarts) // Doc 

cartsRoutes.get('/:cId', getCartsById) // Doc

// El premium NO puede agregar productos que le pertenecen
cartsRoutes.post('/', postCart) // Doc


// Borrar un producto de un carrito puntual
cartsRoutes.delete('/:cId/products/:pId', deleteCartById) // Doc

// Modificar un carrito solo USER Y PREMIUM
cartsRoutes.put('/:cId', applyPolicies(['USER', 'PREMIUM']), putCartById) // Doc

// Modificar productos del carrito
cartsRoutes.put('/:cId/products/:pId', applyPolicies(['USER', 'PREMIUM']), putProductsInCart) // Doc

cartsRoutes.delete('/:cId', deleteProductsInCart) // Doc

cartsRoutes.post("/:cId/product/:pId",  checkRolUser, postProductsInCart) // Doc

// Finalizar el proceso de compra
cartsRoutes.post('/:cId/purchase',  confirmCart) // Doc

export default cartsRoutes