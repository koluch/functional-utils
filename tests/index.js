/* eslint-disable no-magic-numbers */
import test from "tape"
import * as utils from "../lib/index"

test("concat", (t) => {
    t.deepEqual(utils.concat([1, 2, 3], [3, 4, 5]), [1, 2, 3, 3, 4, 5])
    t.deepEqual(utils.concat([1, 2, 3]), [1, 2, 3])
    t.deepEqual(utils.concat([]), [])
    //todo: add more tests
    t.end()
})


test("merge", (t) => {
    const a = {
        f1: "str",
        f2: {f2A: "subfield1"},
    }
    const b = {
        f2: {f2B: "subfield2"},
        f3: 42,
    }
    const expected = {
        f1: "str",
        f2: {f2B: "subfield2"},
        f3: 42,
    }
    const result = utils.merge(a, b)
    t.deepEqual(result, expected)

    const aCopy = {
        f1: "str",
        f2: {f2A: "subfield1"},
    }
    t.deepEqual(a, aCopy)
    t.end()
})