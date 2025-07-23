async function getAllMembersWithTag(tagId) {
  const segment = await this.createSegmentForTag(tagId)
  const members = await this.getAllMembersInSegment(segment.id)
  await this.deleteSegment(segment.id)
  return members
}

export { getAllMembersWithTag }
