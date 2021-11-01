
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(error, result) => {
    if(error){
        console.log('No se logro hacer la lectura')
        return;
    }
        // console.log(result);


const first = result;

readFile('./content/second.txt', 'utf-8',(error, result) => {
    if(error){
        console.log('No se logro hacer la lectura')
        return;
    }
    const second = result;

    writeFile(
        './content/result-async.txt',
        `here is the result: ${first}, ${second}`, (error, result)=> {
            if(error){
                console.log('Error creando el texto.txt',error)
                return
            }

    })
})



})