async function findTags(query) {
  const out = []
  let count = 1000
  let offset = 0
  let isStillFetching = true

  while (isStillFetching) {
    const data = await this.send(
      `${this.baseUrl}/lists/${
        this.listId
      }/tag-search?name=${encodeURIComponent(
        query,
      )}&count=${count}&offset=${offset}`,
    )

    out.push(...data.tags)
    offset += data.tags.length

    if (data.tags.length === 0) {
      isStillFetching = false
    }
  }

  return out
}

export { findTags }
