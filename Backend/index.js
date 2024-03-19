const express = require('express')
const app = express()
const cors = require('cors')
const connectDatabase = require('./db/Databse')
app.use(cors())
app.use(express.json())
const  productRoutes  = require('./routes/product.routes')
const userRoutes = require('./routes/user.routes')

app.use('/api', productRoutes)
app.use('/api/users', userRoutes);

connectDatabase()

app.listen(3001, () => {
    console.log("Server started on http://localhost:3001")
})

