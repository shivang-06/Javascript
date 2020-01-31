var animals = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

function first(word){
    return word[0]
}
const msg = animals.map(first)
console.log(msg.join(""));
