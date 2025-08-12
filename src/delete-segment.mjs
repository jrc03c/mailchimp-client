async function deleteSegment(segmentId) {
  await this.sendRequest(
    this.baseUrl + "/lists/" + this.listId + "/segments/" + segmentId,
    { method: "DELETE" },
  )

  return true
}

export { deleteSegment }
