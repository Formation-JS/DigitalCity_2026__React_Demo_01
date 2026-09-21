import { useState } from "react";

const INITIAL_COUNT = 0;

export default function Counter({ step = 1 }) {
    const [count, setCount] = useState(INITIAL_COUNT);

    const handleIncr = () =>{
        // Modification d'une valeur sur base de l'etat précédent
        setCount(prevCount => prevCount + step);
    };

    const handleReset = () => {
        // Affectation d'une nouvelle valeur
        setCount(INITIAL_COUNT);
    }

    return (
        <div>
            <p>{count}</p> 
            <button onClick={handleIncr}>+ {step}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}