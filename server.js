const axios = require('axios')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/' + req.body.latitude + ',' + req.body.longitude
    axios({
        url: url,
        responseType: 'json'
    }).then(data => res.json(data.data.currently))
})

app.listen(port, () => {
    console.log('Server Started'+port)
})