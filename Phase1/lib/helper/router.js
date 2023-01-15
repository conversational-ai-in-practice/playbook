import DialogflowAdapter from './dialogflow-adapter.js'
import express from 'express'
import http from 'http'
import WellBeingAction from '../action/wellbeing-action.js'

/**
 * Handles incoming fulfillment requests from the conversational AI platform
 * Automatically calls the correct action to then handle them based on the intent name
 */
class Router {
  constructor () {
    /** @type {http.Server | undefined} */
    this.server = undefined
  }

  /**
   * @param {any} requestBody
   * @returns {Promise<any | undefined>}
   */
  async handle (requestBody) {
    console.info('request body: ' + JSON.stringify(requestBody, null, 2))
    const intent = this._adapter().toIntent(requestBody)
    let action
    if (intent.name === 'WellbeingIntent') {
      action = new WellBeingAction()
    }

    if (!action) {
      return undefined
    }

    console.info('invoking action: ' + typeof action)
    const responseMessage = await action.handle(intent)
    if (responseMessage) {
      return this._adapter().toFulfillmentResponse(responseMessage)
    } else {
      return undefined
    }
  }

  /**
   * @returns {Promise<void>}
   */
  async start () {
    const application = express()
    application.use(express.json())
    this.server = application.listen(8080)
    application.post('/handle', async (request, response) => {
      const actionResponse = await this.handle(request.body)
      if (actionResponse) {
        response.contentType('application/json').send(actionResponse)
      } else {
        response.statusCode = 200
        response.send()
      }
    })
  }

  /**
   *
   * @returns {DialogflowAdapter}
   */
  _adapter () {
    return new DialogflowAdapter()
  }
}

export default Router
