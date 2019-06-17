const express = require ('express')
const karyawanRouter = require('./routers/karyawanRouter')

const vya = express()
const port = 1995

vya.use (express.json())
vya.use (karyawanRouter)

vya.listen(port, () => {
    console.log("Running at", port);
})
