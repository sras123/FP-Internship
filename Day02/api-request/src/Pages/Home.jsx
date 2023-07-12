import axios from 'axios';
import { useState, useEffect } from 'react';

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
    let myPromise = new Promise(function(myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', "https://jsonplaceholder.typicode.com/users");
        req.onload = function() {
          if (req.status == 200) {
            myResolve(req.response);
            
          } else {
            myReject("File not Found");
          }
        };
        req.send();
      });
     myPromise.then(function(value){
        console.log(value);
        setData(value.data)
        
     });
     

return (
    <div>
        <h1>Users</h1>
        {loading ? (
            <p1> Loading Data.....</p1>
        ) : (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>


                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email} </td>
                        <td>{user.username} </td>
                        <td>{user.address.city} </td>
                        <td>{user.phone} </td>
                    </tr>
                ))}

            </table>
        )}
    </div>
)
}

export default Home;