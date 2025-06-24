module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
   "^@/app/(.*)$": "<rootDir>/app/$1", // optional alias support
  },
};
