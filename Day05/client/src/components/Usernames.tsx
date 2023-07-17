import React, { useState, useEffect } from 'react'
import { userType } from '../Pages/Main'
import axios from 'axios';


const Usernames: React.FC = () => {
    const [users, setUsers] = useState<userType[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<userType[]>('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

  useEffect(() => {
    if (!users.length)
    return;

    let a= Object.assign({}, users);
    console.log(users);
    console.log(a);
    let b= Object.keys(users);
    console.log(b);
    let c= Object.values(users);
    console.log(c);

    users.forEach(user => console.log(user.username));

    if(users.length >= 5 ){
        console.log(users[4].username);   //which is kamren
    }


  },[users]);


    return (
        <div>
            <h1> User Names </h1>


        </div>
    );
};

export default Usernames;