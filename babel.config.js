export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' }, // ensures Jest uses current Node version
      },
    ],
  ],
};
