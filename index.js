import { App } from '@tinyhttp/app'
import sirv from 'sirv'

const app = new App()

app.use('/', sirv('src')).listen(3000)
