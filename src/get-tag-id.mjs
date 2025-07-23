async function getTagId(tagName) {
  const data = await this.send(
    this.baseUrl + "/lists/" + this.listId + "/tag-search?name=" + tagName,
  )

  const match = data.tags.find(t => t.name === tagName)
  return match ? match.id : null
}

export { getTagId }
