async function deleteSegment(segmentId) {
  await this.send(
    this.baseUrl + "/lists/" + this.listId + "/segments/" + segmentId,
    { method: "DELETE" },
  )

  return true
}

export { deleteSegment }
