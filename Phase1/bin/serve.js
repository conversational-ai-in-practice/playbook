import Router from '../lib/helper/router.js'

const router = new Router()
router.start().then(() => {
  console.info('Server started on port 8080')
})
