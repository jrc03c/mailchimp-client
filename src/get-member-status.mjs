import { parseSafe } from "./utils.mjs"

async function getMemberStatus(listId, emailAddress) {
  const response = await this.sendRequest(
    `/lists/${listId}/members/${emailAddress}`,
  )

  const raw = await response.text()
  const data = parseSafe(raw)

  if (response.status < 300) {
    return data.status
  } else {
    throw new Error(data)
  }
}

export { getMemberStatus }
