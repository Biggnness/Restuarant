const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/Stylesheet/main.css')
})
app.get('/', (request, response) => {
    response.sendFile(__dirname + 'js/main.js')
})
app.get('url', (request, response)=>{
    console.log()
    response.json(data)
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server is running on ${PORT}. You better get that`)
})