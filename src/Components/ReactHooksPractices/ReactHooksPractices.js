import React from 'react';
import { useForm } from './useForm';



const ReactHooksPractice = () => {

    const [value, handleChange] = useForm({email: "", password:""})

    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Practical React hooks</h3>
            <input name="email" type="email" value ={value.email} onChange={handleChange}/>
            <input name="password" type="password" value={value.password} onChange ={handleChange}/>
        </div>
    )
}
export default ReactHooksPractice;