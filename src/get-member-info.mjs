import { parseSafe } from "./utils.mjs"
import { urlPathJoin } from "@jrc03c/js-text-tools"

async function getMemberInfo(listId, member) {
  if (!listId || typeof listId !== "string") {
    throw new Error(
      "The first value passed into the `getMemberInfo` method must be a string representing a list ID!",
    )
  }

  if (!member || typeof member !== "string") {
    throw new Error(
      "The second value passed into the `getMemberInfo` method must be a string representing an email address!",
    )
  }

  const response = await this.sendRequest(
    urlPathJoin(this.baseUrl, "lists", listId, "members", member),
  )

  const raw = await response.text()
  const data = parseSafe(raw)

  if (response.status < 300) {
    return data
  } else {
    throw new Error(data)
  }
}

export { getMemberInfo }
