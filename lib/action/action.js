import IntentRequest from '../helper/intent.js'

/**
 *
 */
class Action {
  /**
   * Top-level interface to handle fulfillment actions
   * Receives an intent and entity data
   * Replies with a string response
   * @abstract
   * @param {IntentRequest} request
   * @returns {Promise<string>}
   */
  async handle (request) {
    throw new Error('Must be implemented')
  }
}

export default Action
