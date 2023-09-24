const config = {
  singleQuote: true,
  printWidth: 80,
  bracketSameLine: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
  endOfLine: 'lf',
  // order import plugin
  importOrder: [
    '^react',
    '',
    '<BUILT_IN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@)(/.*)$',
    '',
    '^[.]',
  ],
  importOrderTypeScriptVersion: '5.2.2',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

export default config;
