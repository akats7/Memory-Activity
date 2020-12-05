export default function random(arr){
    let random = []
    let val = 0
    while(arr.length){
        let index = Math.floor(Math.random() * arr.length)
        val = arr.splice(index,1)
        random.push(...val)
    }
    return random
  }