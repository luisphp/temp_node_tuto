const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')

console.log(first)

writeFileSync('./content/makeNewFile.txt',`Here are the result ${first}`)