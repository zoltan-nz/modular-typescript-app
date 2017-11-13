module.exports = {
  mapCoverage: true,
  moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json" ],
  testRegex: "(^__tests__/.*|(\\.|/)(test|spec))\\.(ts)$",
  transform: { "^.+\\.tsx?$": "ts-jest" },
  verbose: true,
};
