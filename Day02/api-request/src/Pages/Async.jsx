import axios from 'axios';
import { useState } from 'react';

const Async = () => {
    const [data, setData] = useState([])
    const [loading, setLoadingData] = useState([])

    const fetchUsers = () => {
        setLoadingData(true);

        const fectchData = () => {
            return new Promise((myResolve, myReject) => {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        myResolve(response.data);
                    }).catch(error => {
                        myReject(error);
                    });
            });
        };

        fectchData()
            .then(value => {
                setData(value);
                setLoadingData(false);
            }).catch(error => {
                alert('Error');
                setLoadingData(false);
            });
    };
    if (loading) {
        <>Loading...</>
    }


    return (
        <div>
            <button onClick={fetchUsers}>Fetch Users</button>
            <h1>Users</h1>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>


                {data?.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email} </td>
                        <td>{user.username} </td>
                        <td>{user.address.city} </td>
                        <td>{user.phone} </td>
                    </tr>
                ))}

            </table>

        </div>
    )
};

export default Async;