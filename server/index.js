const express = require('express')

const router = express()

const openApiRoutes = require('./routes/openApiRoutes')

const PORT = 4000

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

app.use("/api/openai", openApiRoutes)

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`)
})