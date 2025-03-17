module.exports = {
  preset: "ts-jest", // Usar ts-jest para TypeScript
  testEnvironment: "jsdom", // Entorno de pruebas para el navegador
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mapear archivos de estilo
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Archivo de configuración adicional
  collectCoverage: true, // Habilitar code coverage
  coverageDirectory: "coverage", // Carpeta donde se guardará el reporte de coverage
  coverageReporters: ["text", "lcov"], // Formatos del reporte (texto y lcov)
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // Ignorar estas carpetas en las pruebas
  coverageThreshold: {
    global: {
      branches: 80, // 80% de cobertura en branches
      functions: 80, // 80% de cobertura en funciones
      lines: 80, // 80% de cobertura en líneas
      statements: 80, // 80% de cobertura en declaraciones
    },
  },
};
