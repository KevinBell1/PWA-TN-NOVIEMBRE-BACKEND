import express from 'express'
import statusRouter from './routes/states.routes.js'
import authRouter from './routes/auth.route.js'
import cors from 'cors'
import productRouter from './routes/product.route.js'
import errorHandlerMiddelware from './middlewares/errorHandler.middleware.js'
import pool from './config/dbMysql.config.js'
import ProductRepostory from './repositories/product.repository.js'
import mongoose from './config/db.config.js'
import { customCorsMiddleware } from './middlewares/cors.middleware.js'

const PORT=3000
const app = express()

app.use(customCorsMiddleware)

app.use(cors())
app.use(express.json({limit: '3mb'})) //si no configuramos esto express va a recibir mas informacion de la necesaria y en ciertas imagenes las rechazara


app.use('/api/status', statusRouter)
app.use('/api/auth', authRouter)
app.use('/api/products', productRouter)

app.use(errorHandlerMiddelware)
//aa
app.listen(PORT, () =>{
    console.log(`el servidor se esta ejecutando en http://localhost:${PORT}`)
})

/* en caso de error de CORS instalar la libreria de cors y en la app

import cors from 'cors'
app.use(cors())
*/


/* ProductRepostory.createProduct({
    title: 'Producto 1', 
    price: 100, 
    stock: 10, 
    description: 'Descripcion del producto 1', 
    category: 'Categoria 1', 
    seller_id: 1, 
    image_base64: 'base64data'
}) */
