const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/Stylesheet/main.css')
})
app.get('url', (request, response)=>{
    console.log()
    response.json(data)
})

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}. You better get that`)
})