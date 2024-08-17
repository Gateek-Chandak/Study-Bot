// IMPORTS
const express = require('express');
const Configuration = require('openai');
const OpenAIApi = require('openai')
require('dotenv').config();

// ROUTER INIT
const router = express.Router();

// CONSTANTS
const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY

// OPEN AI CONFIG
const configuration = new Configuration({
    apiKey: OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// OPTIMIZE USER QUERY
router.post('/query-optimizer', async (req, res) => {
    const { prompt } = req.body

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "user", content: 
                `give me the best and most optimal search query for ${prompt} on google. only return the query without quotations` }],
            model: "gpt-4o",
        });
        const response = await completion.choices[0].message.content

        res.status(200).json({ response });
    } catch (error) { 
        console.log(error)
        res.status(500).json({ error: "Error generating response" });
    }
});

module.exports = router;
