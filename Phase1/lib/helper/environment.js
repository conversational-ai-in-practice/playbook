/**
 *
 */
class Environment {
  /**
   * @param {string} variableName
   * @returns {string}
   */
  static variable (variableName) {
    const value = process.env[variableName]
    if (!value) {
      throw new Error(`Environment variable: ${variableName} not set. Must be set in .env file - see example.env for help`)
    }
    return value
  }
}

export default Environment
