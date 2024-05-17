const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --max-warnings=0 --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx,md,html,css,scss}': 'prettier --write',
  '*.{svg}': 'prettier --write --parser html',
  '!(.lintstagedrc)*.{js,jsx,ts,tsx}': [buildEslintCommand]
}
