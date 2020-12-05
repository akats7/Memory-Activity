import {useState} from 'react'

export default function CountState(init) {
    let [count, setCount] = useState(init)

    return {
        count,
        increment(){
            setTimeout(() =>{
                setCount(count + 5)
                console.log(count)
            },5000)
        }
    }
}