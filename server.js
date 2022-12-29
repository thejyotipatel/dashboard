import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

// db
import connectDB from './controllers/connect.js'

// routers
const router = express.Router()
import { getAllData } from './controllers/controller.js'
router.route('/').get(getAllData)

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use('/api/v1/data', router)

app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is listening at port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
