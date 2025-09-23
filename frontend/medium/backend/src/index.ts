import { Hono } from 'hono'
import { userRoute } from './routes/userRoute/user'
import { blogRoute } from './routes/blogRoute/blog'
import {cors} from 'hono/cors'

const app = new Hono()
const version = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.use('/*', cors())
app.route('/api/v1/user', userRoute);
app.route('/api/v1/blog', blogRoute);



export default app


