import IntentRequest from "../intent-request"
class Action {
  /**
   * Top-level interface to handle fulfillment actions
   * Receives an intent and entity data
   * Replies with a string response
   * @abstract
   * @param {IntentRequest} request
   * @returns {Promise<string>} 
   */
  async handle(request) {
    return ''
  }
}

module.exports = Action