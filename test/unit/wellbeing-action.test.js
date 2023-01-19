import ava from 'ava'
import IntentRequest from '../../lib/helper/intent.js'
import WellbeingAction from '../../lib/action/wellbeing-action.js'

ava('test', async (test) => {
  const request = new IntentRequest('WellBeing')
  const action = new WellbeingAction()
  const response = await action.handle(request)
  test.true(['I\'m great', 'Actually, I\'m a bit tired today'].includes(response))
})
