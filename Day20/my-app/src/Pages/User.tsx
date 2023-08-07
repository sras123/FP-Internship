import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query {
    current {
      user {
        id
        name
      }
    }
  }
`;

const User = () => {
  const { error, loading, data } = useQuery(GET_USER);
  console.log({ error, loading, data });

  return (
    <div>
      <h1>User</h1>
    </div>
  );
};

export default User;
