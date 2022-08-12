import IntentRequest from "../intent-request"

class DialogflowAdapter {
  /**
   * 
   * @param {any} request 
   * @returns {IntentRequest}
   */
  transform (request) {
    if (request.intent === 'WellBeingIntent') {

    }
  }
}

module.exports = DialogflowAdapter