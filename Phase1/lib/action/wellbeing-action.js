import Action from './action.js'
import Intent from '../helper/intent.js'

/**
 * Handles the WellbeingIntent
 */
class WellBeingAction extends Action {
  /**
   * @param {Intent} request
   * @returns {Promise<string>}
   */
  async handle (request) {
    const responses = ['I\'m great', 'Things are fine', 'Actually, I\'m a bit tired today']
    const responseIndex = Math.floor(Math.random() * responses.length)
    return responses[responseIndex]
  }
}

export default WellBeingAction
