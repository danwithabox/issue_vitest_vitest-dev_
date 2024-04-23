import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: [
            `**/*.{test,spec}.?(c|m)[jt]s?(x)`, // default value of `test.include`
            `**/*.{test,spec}-d.?(c|m)[jt]s?(x)`, // default value of `test.typecheck.include`, added because of the tip mentioned in README.md
        ],
    },
});
