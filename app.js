const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORT = 3000

app.listen(PORT, function()
    {console.log(`O express esta rodadndo na porta ${PORT}`)
})

app.use(bodyParser.urlencoded({extends: false}))

// db connection
db.authenticate().then(() => {
    console.log('conectou ao banco com sucesso')
}).catch(err => {
    console.log("ocorreu um erro ao conectar", err)
})
app.get('/', (req,res) => {
    res.send('Está funcionando')
})

// jobs routes
app.use("/jobs", require('./routers/jobs'))


