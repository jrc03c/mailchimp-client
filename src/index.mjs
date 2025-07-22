import { getMemberInfo } from "./get-member-info.mjs"
import { pause } from "@jrc03c/pause"

class MailchimpClient {
  apiKey = ""
  lastRequestTime = new Date(0)
  serverPrefix = ""
  timeBetweenRequests = 1000

  constructor(options) {
    options = options || {}
    this.apiKey = options.apiKey || this.apiKey
    this.getMemberInfo = getMemberInfo.bind(this)
    this.serverPrefix = options.serverPrefix || this.serverPrefix
    this.timeBetweenRequests =
      options.timeBetweenRequests || this.timeBetweenRequests
  }

  get baseUrl() {
    return `https://${this.serverPrefix}.api.mailchimp.com/3.0`
  }

  async sendRequest(url, options) {
    while (new Date() - this.lastRequestTime < this.timeBetweenRequests) {
      await pause(this.timeBetweenRequests / 10)
    }

    this.lastRequestTime = new Date()
    options = options || {}

    if (!options.headers) {
      options.headers = {}
    }

    if (!options.headers.Authorization) {
      options.headers.Authorization = `Bearer ${this.apiKey}`
    }

    return fetch(url, options)
  }
}

export { MailchimpClient }
