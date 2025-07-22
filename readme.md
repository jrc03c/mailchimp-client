# Intro

This is a simple Mailchimp client. It intentionally has a small surface area and is only intended to cater to my particular use cases.

# Installation

```bash
npm install --save-dev https://github.com/jrc03c/mailchimp-client
```

# Usage

```js
import { MailchimpClient } from "@jrc03c/mailchimp-client"

const mc = new MailchimpClient({
  apiKey: "abcdefg1234567...",
  serverPrefix: "us1",
})

const listId = "foobar12345"
const emailAddress = "someone@example.com"
mc.getMemberInfo(listId, emailAddress).then(console.log)
```

# API

## Constructor

The constructor accepts an options object with the following properties:

- `apiKey` = a string representing an API key
- `serverPrefix` = a string representing a data center
- `timeBetweenRequests` = a number representing a time in milliseconds to wait between API calls

## Properties

### `apiKey`

A string representing an API key.

### `lastRequestTime`

A `Date` representing the last time an API call was made.

This value is updated automatically every time the `sendRequest` method is called; and since virtually all of the methods representing API calls (e.g., `getMemberInfo`) rely on the `sendRequest` method, the `lastRequestTime` value is updated automatically whenever any of those methods is called.

### `serverPrefix`

A string representing a data center.

### `timeBetweenRequests`

A number representing a time in milliseconds to wait between API calls.

Note that all methods representing API calls (e.g., `getMemberInfo`) rely on the `sendRequest` method, and the `sendRequest` method honors the `timeBetweenRequests` value.

## Methods

### `getMemberInfo(listId, emailAddress)`

Returns info about a particular member in a particular list.

### `sendRequest(url, options)`

Returns a `Promise` that resolves to a `Response` object. Is just a wrapper around `fetch` that makes sure that the API key is included in an "Authorization" header on the request. Two arguments, `url`, and `options`, get passed directly to `fetch` after the header has added, and the value returned from `fetch` is then returned immediately from the method.
