
import express from 'express'
import authorRoute from './routes/authorRoute.js'
import "dotenv/config"
import db from './db.js'
// export default authorRoute


const app = express()

app.use(express.json())

db()

app.get ('/', (req, res)=> {
    res.send("Ciao Mondo!")
})

app.use ('/authors', authorRoute)


app.listen(process.env.PORT, ()=> {
    console.log (`Server is running on port ${process.env.PORT}`)
})