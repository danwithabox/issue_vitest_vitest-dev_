import { expectTypeOf, test } from "vitest";

test(`repro, typed test`, () => {
    const output = 1;

    expectTypeOf(output).toEqualTypeOf<string>();
});
