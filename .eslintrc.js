module.exports = {
  root: true,
  extends: ['./node_modules/gts/'],
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    react: {
      /**
       * "detect" automatically picks the version you have installed.
       * You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
       * default to latest and warns if missing
       */

      version: '999.999.999', // It will default to "detect" in the future

      // "version": "detect"
      // "version": "16.12.0"
    },
  },
};
