import Intent from './intent.js'

/**
 *
 */
class Response {
  /**
   * @param {any} raw
   */
  constructor (raw) {
    this.raw = raw
  }

  /**
   * @abstract
   * @returns {string | undefined}
   */
  get responseText () {
    throw new Error('Must be implemented')
  }
}

export default Response
