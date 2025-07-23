async function createSegmentForTag(tagId, segmentName) {
  segmentName = segmentName || makeKey(32).toUpperCase()

  return await this.send(this.baseUrl + "/lists/" + this.listId + "/segments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: segmentName,
      is_tags: true,
      options: {
        match: "all",
        conditions: [
          {
            field: "static_segment",
            op: "static_is",
            value: tagId,
          },
        ],
      },
    }),
  })
}

export { createSegmentForTag }
