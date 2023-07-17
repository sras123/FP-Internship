import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface address {
    street: string;
    suite: string;
    city: string;
}
export interface userType {
    id: Number;
    name: string;
    username: String;
    email: String;
    address: address;
    phone: String;
    children?: React.ReactNode
}
const Main = () => {

    const [users, setUsers] = useState<userType[]>([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data)
                // console.log(response)
            })
            .catch((error) => {
                alert(error)
            })
    })




    return (
        <div>
            <section>
                <h1>Users Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>

                    {
                        users.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email} </td>
                                <td>{user.address.suite}, {user.address.street}{user.address.city} </td>
                                <td>{user.phone} </td>
                            </tr>
                        })
                    }
                </table>
            </section>
            <section>
                <h1>Users Name Only</h1>
                <table>
                   <h3><strong>Names</strong></h3>
                    {users.map((user, index) =>{
                        return <tr key= {index}>
                            <td>{user.name}</td>
                        </tr>
                    })}
                </table>
            </section>


        </div>
    )
}

export default Main;