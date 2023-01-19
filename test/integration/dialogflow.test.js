import ava from 'ava'
import DialogflowAdapter from '../../lib/helper/dialogflow-adapter.js'
import dotenv from 'dotenv'

dotenv.config()

ava('greeting test', async (test) => {
  test.timeout(60000)
  const adapter = new DialogflowAdapter()
  const response = await adapter.invoke('hi')
  test.is(response.responseText, 'Howdy!')
})

ava('wellbeing test', async (test) => {
  test.timeout(60000)
  const adapter = new DialogflowAdapter()
  const response = await adapter.invoke('how are you')
  // Check that the response text value is define
  // We do not need to check the actual value - we do this in our unit-test
  test.assert(response.responseText)
})
