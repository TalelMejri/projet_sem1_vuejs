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
    "no-mixed-spaces-and-tabs": 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
