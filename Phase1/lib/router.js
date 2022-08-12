import DialogflowAdapter from './dialogflow-adapter'
import fs from 'fs'
import IntentRequest from './intent-request'


class Router {
  handle(request) {
    const intentRequest = this._adapter().transform(request)
    const actionName = `./lib/${intentRequest.intent.toLowerCase()}-action.js`
    if (fs.existsSync(actionName)) {
      const Module = require(actionName)
      const instance = new module()
      instance.handle(intentRequest)
    }
  }

  /**
   * 
   * @returns {DialogflowAdapter}
   */
  _adapter () {
    return new DialogflowAdapter()
  }
}