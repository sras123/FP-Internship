import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { userType } from '../Pages/Main'


const Phonenumber: React.FC = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>('');
  const [matchingUser, setMatchingUser] = useState<userType | null>(null);
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhoneNumber(e.target.value);
  };

  const handleSearch = () => {
    const foundUser = users.find((user) => user.phone === inputPhoneNumber);
    setMatchingUser(foundUser || null);
  };

  return (
    <div>
      <input
        type="text"
        value={inputPhoneNumber}
        onChange={handleInputChange}
        placeholder="Enter phone number"
      />
      <button onClick={handleSearch}>Search User</button>
      {matchingUser !== null && (
        <div>
          <h3>Matched With:</h3>
          <p>Name: {matchingUser.name}</p>
          <p>Username: {matchingUser.username}</p>
          <p>Email: {matchingUser.email} </p>
          <p>Address: {matchingUser.address.suite}, {matchingUser.address.street}{matchingUser.address.city} </p>
          <p>Phone: {matchingUser.phone}</p>
        </div>
      )
      }
    </div >
  );
};

export default Phonenumber;
