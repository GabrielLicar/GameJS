import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.get('/', serveStatic({ path: "./src/static/html/index.html" }))
app.use('/static/css/*', serveStatic({ path: './src/static/css/style.css' }))
app.use('/static/js/*', serveStatic({ path: './src/static/js/script.js' }))

app.get('*', serveStatic({ path: './src/static/fallback.txt' }))

export default {
    port: 3000,
    fetch: app.fetch
}