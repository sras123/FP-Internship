import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoadingData] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(resolve => {
    //             console.log(resolve.data)
    //             setData(resolve.data)
    //             setLoadingData(false)
    //         }).catch(err => {
    //             alert('Error')
    //             setLoadingData(false)
    //         })

    // }, [])

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

    const fetchUsersAsync = async () => {
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
            <button onClick={fetchUsers}>Fetch Users with Promise</button>
            <button onClick={fetchUsersAsync}>Fetch Users with Async/Await</button>
            <h1>Users</h1>

            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Phone</th>
                    </tr>
                </thead>


                {data?.map(user => (
                    <tbody key={user.id}>
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.email} </td>
                        <td>{user.username} </td>
                        <td>{user.address.city} </td>
                        <td>{user.phone} </td>
                        </tr>
                    </tbody>
                ))}

            </table>

        </div>
    )
};

export default Home;