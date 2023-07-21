import React from 'react';
import './App.css';
import { useQuery, gql } from '@apollo/client';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ChakraProvider,
  Heading
} from '@chakra-ui/react'


const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      currencies
      capital
      languages{
        native
        name
      }
      continent{
        code
        name
      }
    }
  }
`;
interface Languages {
  native: string;
  name: string
}
interface Continent {
  code: string;
  name: string
}

interface Country {
  code: string;
  name: string;
  currencies: string[];
  capital: string;
  languages: Languages;
  continent: Continent
}

function DisplayCountries() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  console.log({ error, data, loading })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <TableContainer padding={'40px'}>
      <Table size='sm' variant='striped' colorScheme='green'>
        <Thead>
          <Tr>
            <Th>Country Name</Th>
            <Th>Currency</Th>
            <Th>Capital</Th>
            <Th>Languages</Th>
            <Th>Continent</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.countries.map(({ code, name, currencies, capital, languages, continent }: Country) => (
            <Tr key={code}>
              <Td>{name}</Td>
              <Td>{currencies.join(', ')}</Td>
              <Td>{capital}</Td>
              <Td>{languages.native},{languages.name}</Td>
              <Td>{continent.code}, {continent.name}</Td>

            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}



function App() {
  return (
    <div>
      <ChakraProvider>
      
        <Heading padding={'20px'} textAlign={'center'}> Table </Heading>
        <DisplayCountries />
      </ChakraProvider>
    </div>
  );
}

export default App;
