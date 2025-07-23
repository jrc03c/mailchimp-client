import { setMemberStatus } from "./set-member-status.mjs"

async function addMemberToList(listId, emailAddress, otherData) {
  return setMemberStatus(listId, emailAddress, "subscribed", otherData || {})
}

export { addMemberToList }
