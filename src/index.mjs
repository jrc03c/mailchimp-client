import { getMemberInfo } from "./get-member-info.mjs"

class MailchimpClient {
  apiKey = ""
  serverPrefix = ""

  constructor(options) {
    options = options || {}
    this.apiKey = options.apiKey || this.apiKey
    this.getMemberInfo = getMemberInfo.bind(this)
    this.serverPrefix = options.serverPrefix || this.serverPrefix
  }

  get baseUrl() {
    return `https://${this.serverPrefix}.api.mailchimp.com/3.0`
  }

  async sendRequest(url, options) {
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
