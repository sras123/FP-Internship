import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
    return (
        <div>
            <form onSubmit={(e) =>{handleAdd(e)}}>
                <input type='input' 
                    value={todo}
                    onChange={
                        (e) => setTodo(e.target.value)
                    }
                    placeholder='Enter the task'


                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default InputField;