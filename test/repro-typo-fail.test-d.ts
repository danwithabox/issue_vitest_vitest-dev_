import { expectTypeOf, test } from "vitest";

test(`repro, typed test`, () => {
    const output = 1;
    // @ts-expect-error
    expectTypeOf(outputx).toEqualTypeOf<string>();
});
