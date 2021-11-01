const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`data received, name: ${name} and id: ${id} nad logical: }`)

})
customEmitter.on('response', ()=> {
    console.log(`some other logic here`)
})
customEmitter.emit('response', 'john', 34, {customId: 25, age: 55}) 
