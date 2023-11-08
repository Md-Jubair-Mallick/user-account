import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
// import cors from 'cors'

const app = express()
const port = process.env.PORT || 8080

/** middlewares */
app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.disable('x-powered-by') //less hacker know about our stack

/** CRUD Request */
app.get('/', (req, res)=> res.send('welcome'))

/** server & database */
async function main() {
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database is connected')
    app.listen(port, () => {
        console.log(`server is runing at http://localhost:${port}`)
      })
} catch (error) {
    console.log(error)
}
}
main()

