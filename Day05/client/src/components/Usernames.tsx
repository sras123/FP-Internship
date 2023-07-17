import React, { useState, useEffect } from 'react'
import { userType } from '../Pages/Main'
import axios from 'axios';

const UserDetails = {
    users: {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        address: ""
    }
}
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

  


    return (
        <div>
            <h1> User Names </h1>


        </div>
    );
};

export default Usernames;