// import React, { useState, ChangeEvent } from 'react'

// const UserMatch = () => {

//     const [inputText, setInputText] = useState("");
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setInputText(e.target.value);

//     }

//     return (
//         <div>
//             <h1>UserMatch</h1>
//             <input type='text' onChange={handleChange} value={inputText} />
//             {/* {inputText} */}
//         </div>
//     )
// }

// export default UserMatch;


import Phonenumber from '../components/Phonenumber';
import Usernames from '../components/Usernames';

import React from 'react'

const UserMatch : React.FC = () => {
  return (
    <div>
        <h1>Search User through Phone number</h1>
      <Phonenumber/>
      <div>
        <Usernames/>
      </div>
    </div>
  )
}

export default UserMatch;