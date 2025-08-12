async function getAllMembersInSegment(segmentId) {
  const out = []
  let isStillFetching = true
  let offset = 0
  let count = 1000

  while (isStillFetching) {
    const data = await this.sendRequest(
      `${this.baseUrl}/lists/${this.listId}/segments/${segmentId}/members?count=${count}&offset=${offset}`,
    )

    out.push(...data.members)
    offset += data.members.length

    if (data.members.length === 0) {
      isStillFetching = false
    }
  }

  return out
}

export { getAllMembersInSegment }
