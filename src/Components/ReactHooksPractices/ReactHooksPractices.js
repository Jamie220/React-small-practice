import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';



const ReactHooksPractice = () => {

    const [values, handleChange] = useForm({ email: "", password: "" })

    // useEffect(() => {
    //     const onMouseMove = e => {
    //         console.log(e)
    //     }
    //     window.addEventListener("mousemove", onMouseMove)
    //     return () => {
    //         window.removeEventListener("mousemove", onMouseMove)
    //     };
    // }, [])

    const [count, setCount] = useState(()=> JSON.parse(localStorage.getItem("count")));
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)


    //update the data in local storage when it is reflesh will do const [count, setCount] = useState(()=> JSON.parse(localStorage.getItem("count")));
    useEffect(()=>{
        localStorage.setItem("count", JSON.stringify(count))
    })
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Practical React hooks</h3>
            <input
                name="email"
                value={values.email}
                onChange={handleChange} />
            <input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange} />
            <div>{!data ? "loading..." : data}</div>
            <button onClick={() => setCount(c => c + 1)}>increase</button>
        </div>
    )
}
export default ReactHooksPractice;