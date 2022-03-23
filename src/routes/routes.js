const router = require('express').Router()

const productController = require('../controlers/products')
// VERBOS HTTP (4 TIPOS)
//GET - Obter dados
//POST - enviar ou receber dados
//PUT - atualizar dados 
//DELETE - remover dados


router.get('/products', productController.get)
//router.get('/products', productController.post)
//router.get('/products/:id', productController.put)
//router.get('/products/:id', productController.delete)



module.exports = router