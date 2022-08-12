class IntentRequest {
  /**
   * @param {string} intentName 
   * @param {Object<string, string>} entities
   */
  constructor(intent, entities) {
    this.intentName = intent
    this.entities = entities
  }
}

module.exports = IntentRequest