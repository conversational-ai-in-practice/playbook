import Action from './action'

class WellBeingAction extends Action {
  /**
   * @param {IntentRequest} request
   * @returns {Promise<string>} 
   */
  async handle(request) {
    const responses = ['I\'m great', 'Things are fine', 'Actually, I\'m a bit tired today']
    const responseIndex = Math.floor(Math.random() * responses.length)
    return responses[responseIndex]
  }

}