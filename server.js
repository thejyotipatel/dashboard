import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

// db
import connectDB from './controllers/connect.js'
// import dashboard from './controllers/model.js'
// import { readFile } from 'fs/promises'

// // routers
const router = express.Router()
import { getAllData } from './controllers/controller.js'
router.route('/').get(getAllData)

// // middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use('/api/v1/data', router)

app.use(express.json())
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
  try {
<<<<<<< HEAD
    await connectDB(process.env.MONGO_URL1)
=======
    await connectDB(process.env.MONGO_URL)
>>>>>>> ea482491f416450130f6bfd949e48d13508eb192
    // const jsonPro = JSON.parse(
    // await readFile(new URL('./jsondata.json', import.meta.url))
    // )

    // await dashboard.create(jsonPro)
    // console.log('Success!!!')
    // process.emit(0)
    app.listen(port, () => {
      console.log(`server is listening at port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
