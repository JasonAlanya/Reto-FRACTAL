import { Router } from "express";
import {getOrder, getOrders, createOrder, updateOrder, deleteOrder} from  '../controllers/orders.controllers.js'
import {getProducts,getProduct, createProducts, updateProducts, deleteProducts} from  '../controllers/products.controllers.js'

const router = Router();

//Routes for orders
router.get('/orders',getOrders)

router.get('/orders/:id', getOrder)

router.post('/orders', createOrder)

router.put('/orders/:id',updateOrder)

router.delete('/orders/:id', deleteOrder)

//Routes for products
router.get('/products',getProducts)

router.get('/products/:id', getProduct)

router.post('/products', createProducts)

router.put('/products/:id',updateProducts)

router.delete('/products/:id', deleteProducts)

export default router;