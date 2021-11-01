//GLOBAL - NO WINDOW

// __dirname    - path to current directory
// __filename   - filename
// require      - function to use modules (commonjs)
// module       - info about current module
// process      - info about env where the program is beign executed

console.log("El directorio es: ", __dirname)

setInterval(() => {
    console.log('Se ejecuto el intervalo')
}, 2000)