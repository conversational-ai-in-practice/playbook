/**
 * Generic intent request object - allows us to work with multiple conversational AI platforms
 */
class Intent {
  /**
   * @param {any} raw
   */
  constructor (raw) {
    this.raw = raw
  }

  /**
   * @abstract
   * @returns {string}
   */
  get name () {
    throw new Error('Must be implemented')
  }

  /**
   * @abstract
   * @param {string} name
   * @returns {string | undefined}
   */
  slotValue (name) {
    throw new Error('Must be implemented')
  }
}

export default Intent
