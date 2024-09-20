const express = requiere('express')
const cors = requiere('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Olá, Mundo')
})

app.listen