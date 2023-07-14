import React from 'react'
import {Istate as Iprops} from "../App"


const List: React.FC<Iprops> = ({ student }) => {

    const renderList = (): JSX.Element[] =>  {
        return student.map((student,index) => {
            return(
                <li className='List'>
                <div className='List-header'>
                    <img className='List-img' src={student.url}  alt="Student"/>
                    <h2>{student.name}</h2>
                </div>
                <p>{student.age} year old</p>
                <p className='List-note'>{student.note}</p>
            </li>
            )
        })
    }



    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}

export default List;