async function getAllMembersInSegment(segmentId) {
  const out = []
  let isStillFetching = true
  let offset = 0
  let count = 1000

  while (isStillFetching) {
    const data = await this.sendRequest(
      `${this.baseUrl}/lists/${this.listId}/segments/${segmentId}/members?count=${count}&offset=${offset}`,
    )

    const members = data.members || []
    out.push(...members)
    offset += members.length

    if (members.length === 0) {
      isStillFetching = false
    }
  }

  return out
}

export { getAllMembersInSegment }
