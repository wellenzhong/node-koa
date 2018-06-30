const router = require('koa-router')()
const controller = require('../app/controller/index')
router
  .get('/', async (ctx, next) => {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
  })

  .get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
  })

  .get('/json', async (ctx, next) => {
    ctx.body = {
      title: 'koa2 json'
    }
  })
  .get('/wellen', controller.getusers)


module.exports = router
