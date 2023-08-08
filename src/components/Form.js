import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from "../store";

function Form({ initialValue }) {
    const [inputValue, setInputValue] = useState(initialValue);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        if(inputValue.length > 3) {
            dispatch(addTask(inputValue));
            setInputValue('');
        }
        e.preventDefault();
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    className="form-input border border-sky-500 rounded p-2"
                    placeholder="To do..."
                />
                <button className="bg-blue-500 border border-blue-500 rounded text-white p-2 font-bold">+</button>
            </form>
        </div>
    );
}

export default Form;