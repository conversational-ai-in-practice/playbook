import Environment from './environment.js'
import Intent from './intent.js'
import Response from './response.js'
import { SessionsClient } from '@google-cloud/dialogflow-cx'

/** @typedef {import('@google-cloud/dialogflow-cx').protos.google.cloud.dialogflow.cx.v3.IDetectIntentResponse} IDetectIntentResponse */

/**
 * Handles interacting with Dialogflow
 */
class DialogflowAdapter {
  /**
   * @param {string} utterance
   * @param {string} [languageCode = 'en']
   * @returns {Promise<Response>}
   */
  async invoke (utterance, languageCode = 'en') {
    const client = new SessionsClient({
      apiEndpoint: `${Environment.variable('DIALOGFLOW_LOCATION')}-dialogflow.googleapis.com`
    })

    // Generate a random session ID for this invocation
    const sessionId = Math.random().toString(36).substring(7)
    const sessionPath = client.projectLocationAgentSessionPath(
      Environment.variable('DIALOGFLOW_PROJECT_ID'),
      Environment.variable('DIALOGFLOW_LOCATION'),
      Environment.variable('DIALOGFLOW_AGENT_ID'),
      sessionId
    )

    const request = {
      queryInput: {
        languageCode,
        text: {
          text: utterance
        }
      },
      session: sessionPath
    }
    const [response] = await client.detectIntent(request)
    return new DialogflowResponse(response)
  }

  /**
   *
   * @param {any} request
   * @returns {Intent}
   */
  toIntent (request) {
    return new DialogflowIntent(request)
  }

  /**
   *
   * @param {string} responseMessage
   * @returns {any}
   */
  toFulfillmentResponse (responseMessage) {
    return {
      fulfillmentResponse: {
        messages: [{
          text: {
            text: [responseMessage]
          }
        }]
      }
    }
  }
}

/**
 *
 */
class DialogflowIntent extends Intent {
  /**
   * @override
   * @returns {string}
   */
  get name () {
    return this.raw.intentInfo.displayName
  }
}

/**
 *
 */
class DialogflowResponse extends Response {
  /**
   * @private
   * @returns {IDetectIntentResponse}
   */
  get detectIntentResponse () {
    return /** @type {IDetectIntentResponse} */ (this.raw)
  }

  /**
   * @override
   * @returns {string | undefined}
   */
  get responseText () {
    return this.detectIntentResponse.queryResult?.responseMessages?.[0].text?.text?.[0]
  }
}

export default DialogflowAdapter
