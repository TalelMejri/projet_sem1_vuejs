module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/multi-word-component-names": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
