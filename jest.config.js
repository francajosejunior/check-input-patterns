module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
    },
  },
};
