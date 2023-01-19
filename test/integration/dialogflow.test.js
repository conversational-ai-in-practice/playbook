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
