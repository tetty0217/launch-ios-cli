/**
 * @type {import('@commitlint/cli')}
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "always",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
};
