class IntentRequest {
  /**
   * @param {string} intent 
   * @param {Object<string, string>} [entities]
   */
  constructor(intent, entities) {
    this.intentName = intent
    this.entities = entities || {}
  }
}

export default IntentRequest