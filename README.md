Issue:

There's a "tip" over at https://vitest.dev/guide/testing-types.html#run-typechecking, saying:
> When using @ts-expect-error syntax, you might want to make sure that you didn't make a typo. You can do that by including your type files in test.include config option, so Vitest will also actually run these tests and fail with ReferenceError.

After adjusting the `test.include` array in `vitest.config.ts`, I cannot make all my tests work.

There are 3 test files to present the issue:
- test/repro-control.test.ts
    - this is a non-type test, to make sure normal tests still report issues
- test/repro-legit-fail.test-d.ts
    - this is a legitimate type issue, Vite type testing should report this
- test/repro-typo-fail.test-d.ts
    - this is the mentioned "typo" issue, according to the tip Vite should report this as producing a `ReferenceError`

There are 2 npm scripts
- `npm run test`
    - this is what I believe I should write, utilizing `--typecheck`, after reading the docs
- `npm run test-no-typecheck`
    - but to make sure the issue is not the `--typecheck` flag, there's also this script

Upon running `npm run test`, the results are:
- ❌ (FAIL) test/repro-control.test.ts
- ❌ (FAIL) test/repro-legit-fail.test-d.ts
- ✅ (PASS) test/repro-typo-fail.test-d.ts

Upon running `npm run test-no-typecheck`, the results are:
- ❌ (FAIL) test/repro-control.test.ts
- ✅ (PASS) test/repro-legit-fail.test-d.ts
- ❌ (FAIL) test/repro-typo-fail.test-d.ts

What I would expect, is for at least one of the npm scripts to result in every test failing.
