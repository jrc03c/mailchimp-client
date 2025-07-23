import { parseSafe } from "./utils.mjs"

async function addMemberToList(listId, emailAddress, otherData) {
  otherData = otherData || {}

  const response = await this.sendRequest(
    `/lists/${listId}/members/${emailAddress}`,
    {
      method: "PUT",
      body: JSON.stringify({
        email_address: emailAddress,
        status_if_new: "subscribed",
        email_type: "html",
        ...otherData,
      }),
    },
  )

  const raw = await response.text()
  const data = parseSafe(raw)

  if (response.status < 300) {
    return data
  } else {
    throw new Error(data)
  }
}

export { addMemberToList }
