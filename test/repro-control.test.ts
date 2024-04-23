import { expect, test } from "vitest";

test(`repro`, () => {
    expect(1).toEqual(2); // Only here to make sure non-type-tests still run too
});
