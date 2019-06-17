const express = require ('express')
const karyawanRouter = require('./routers/karyawanRouter')

const ex = express()
const port = 1995

ex.use (express.json())
ex.use (karyawanRouter)

ex.listen(port, () => {
    console.log("Running at", port);
})
