import {useState, useEffect} from 'react'

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador se ha actualizado: ${count}`); 
    } , [count]);
      return (
    <div>
        <p> el contador es: {count} </p>
        <button onClick={() => setCount(count + 1)}> Incrementar </button>
    </div>  )
}


export default CounterWithEffect;