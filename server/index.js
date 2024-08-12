// IMPORTS
const express = require('express')
const cors = require('cors');

const app = express()

// ROUTES
const openApiRoutes = require('./routes/openApiRoutes')

// GLOBAL CONSTANTS
const PORT = 4000

// MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000', //frontend origin
    methods: 'GET,POST', // allowed methods
    allowedHeaders: 'Content-Type,Authorization', //allowed headers
}));

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

// API ROUTES
app.use("/api/openai", openApiRoutes)

// INITIALIZATION
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`)
})