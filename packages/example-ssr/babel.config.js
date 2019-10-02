module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        targets: {
          browsers: ['last 2 versions', 'explorer >= 11']
        },
        useBuiltIns: 'entry',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ],
  sourceType: 'unambiguous', // we need to set this, once we define: "useBuiltIns: 'usage'"
  ignore: ['node_modules/**'],
  plugins: ['@babel/plugin-proposal-class-properties']
}
