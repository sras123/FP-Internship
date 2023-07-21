import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
});


client
  .query({
    query: gql`
      query GetCountries {
        countries {
          name
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  
);


reportWebVitals();
