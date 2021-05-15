import fs from 'fs/promises';

const data = await fs.readFile('./package.json')
console.log(data)

const files = await fs.readdir('.')
console.log(files)
