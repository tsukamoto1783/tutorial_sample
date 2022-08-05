import express from 'express'
import { contents } from './constants'

const app: express.Express = express()

// CORSの許可
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// body-parserに基づいた着信リクエストの解析
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Get /contents
const router: express.Router = express.Router()
router.get('/contents', (req: express.Request, res: express.Response) => {
  res.send(contents)
})
app.use(router)

// 3000番ポートでAPIサーバ起動
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
