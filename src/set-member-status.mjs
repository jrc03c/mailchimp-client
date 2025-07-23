import { setMemberInfo } from "./set-member-info.mjs"

async function setMemberStatus(listId, emailAddress, status, otherData) {
  otherData = otherData || {}

  return setMemberInfo(listId, emailAddress, {
    status_if_new: status,
    status,
    ...otherData,
  })
}

export { setMemberStatus }
