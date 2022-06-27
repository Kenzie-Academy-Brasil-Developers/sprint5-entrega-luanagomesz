import express from 'express';
import routes from './routers';

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3000)


export default app