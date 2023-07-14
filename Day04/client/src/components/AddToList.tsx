import React, { useState } from 'react'
import {Istate as Props} from "../App";

interface IProps{
    student: Props["student"]
    setStudent:React.Dispatch<React.SetStateAction<Props['student']>>
}
const AddToList: React.FC<IProps> = ({student, setStudent}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick=(): void =>{
        if(
            !input.name ||
            !input.age ||
            !input.img 
        ){
            return
        }

        setStudent([
            ...student,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }

        ])
        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }
    

    return (
        <div className='AddToList'>
            <input
                type="text"
                placeholder='Full Name'
                className='AddToList-input'
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="number"
                placeholder='Age'
                className='AddToList-input'
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder='Image Url'
                className='AddToList-input'
                value={input.img}
                onChange={handleChange}
                name="img"
            />
            <textarea
                placeholder='Notes'
                className='AddToList-input'
                value={input.note}
                onChange={handleChange}
                name="note"
            />

            <button
            className='AddToList-btn'
            onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default AddToList;