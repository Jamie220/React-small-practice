import { useState } from 'react';

export const useForm = (initialState) => {
    const [values, setValue] = useState(initialState);

    return [
        values,
        e => {
            setValue({
                ...setValue,
                [e.target.name]: e.target.value
            })
        }
    ]
};