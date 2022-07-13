module.exports = {
  presets: [
    [
      '@sweetheart-design/script/preset',
      {
        loose: process.env.NODE_ENV === 'compile',
      },
    ],
  ],
}
