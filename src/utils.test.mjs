import { expect, test } from "@jrc03c/fake-jest"
import { isEqual } from "@jrc03c/js-math-tools"
import { parseSafe } from "./utils.mjs"

test("parseSafe", () => {
  expect(parseSafe(234)).toBe(234)
  expect(parseSafe("234")).toBe(234)
  expect(parseSafe("")).toBe("")

  expect(isEqual(parseSafe(`{"hello": "world"}`), { hello: "world" })).toBe(
    true,
  )

  expect(parseSafe("sldkfjsdlfj")).toBe("sldkfjsdlfj")
})
