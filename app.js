const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const views = require('koa-views')
const convert = require('koa-convert')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')()
const logger = require('koa-logger')
const session = require('koa-session')
const koaStatic = require('koa-static')

const SESSION_CONF = require('./middlewares/session-conf')

const index = require('./routes/index')
const users = require('./routes/users')
const sign = require('./routes/sign')

// middlewares
app.keys = ['some secret hurr'];
app.use(session(SESSION_CONF, app));
app.use(convert(bodyparser))
app.use(convert(json()))
app.use(convert(logger()))
app.use(convert(koaStatic(__dirname + '/public')))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

router.use('/users', users.routes(), users.allowedMethods())
router.use('/sign', sign.routes(), sign.allowedMethods())
router.use('/', index.routes(), index.allowedMethods())

app.use(router.routes(), router.allowedMethods())

app.on('error', function (err, ctx) {
  console.log(err)
  log.error('server error', err, ctx)
})

module.exports = app
