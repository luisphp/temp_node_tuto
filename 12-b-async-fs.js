const {readFile, writeFile} = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async()=> {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME, first: ${first}, second: ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,'utf-8', (error, data) => {
//             if(error){
//                 // console.log(error)
//                 // return
//                 reject(error)
//             }
//             else{
//                 // console.log(data)
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => {console.log(result)})
// .catch((e) => {console.log(e)})


