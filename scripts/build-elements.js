const fs = require('fs-extra');
const concat = require('concat');
const path = require('path');
const BASE_PATH = path.resolve(__dirname, '..');
(async () => {
  const files =[
    `${BASE_PATH}/dist/runtime.js`,
    `${BASE_PATH}/dist/polyfills.js`,
    `${BASE_PATH}/dist/styles.js`,
    `${BASE_PATH}/dist/main.js`
  ];
  await fs.ensureDir('dist/custom-element');
  await concat(files, 'dist/custom-element/app-exo-experiment.js');
  console.info('Elements created successfully!');
})();
