import jest from "eslint-plugin-jest";

export default [
  // ... outras configurações que você já tem

  {
    // Aplica as regras de teste apenas em arquivos de teste
    files: ["**/*.test.js", "**/*.test.ts", "**/*.spec.js", "**/*.spec.ts"],
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/prefer-expect-assertions": "off", // Opcional: ajusta regras conforme seu gosto
    },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },
    },
  },
];
