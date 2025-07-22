function parseSafe(x) {
  try {
    return JSON.parse(x)
  } catch (e) {
    return x
  }
}

export { parseSafe }
