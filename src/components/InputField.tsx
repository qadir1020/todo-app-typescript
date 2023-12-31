import React from 'react'
import "./styles.css";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd:() => void;
}

const InputField = ({ todo, setTodo,handleAdd }: Props) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input type='input' placeholder='Enter a task'
                className='input__box'
                value={todo}
                onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="input_submit">
                GO
            </button>
        </form>

    )
}

export default InputField;