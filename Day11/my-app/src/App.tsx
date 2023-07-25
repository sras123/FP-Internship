import React, { useEffect, useState } from "react";
import "./App.css";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
  Spinner,
  Input,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { GET_COUNTRIES } from "./graphql/countryQuery";
import { client } from "./graphql/apolloClient";
import {
  setCountries,
  setTotalCount,
  setFetching,
  setSelectedCountry,
  filterCountriesList,
  setError,
} from "./redux/slice/countriesSlice";

interface Languages {
  native: string;
  name: string;
}
interface Continent {
  code: string;
  name: string;
}

interface Country {
  code: string;
  name: string;
  currencies: string[];
  capital: string;
  languages: Languages[];
  continent: Continent;
}

function DisplayCountries() {
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState("");

  const countriesList = useSelector(
    (state: any) => state?.countries?.countriesList
  );
  const filteredCountriesList = useSelector(
    (state: any) => state?.countries?.filteredCountries
  );

  const fetching = useSelector((state: any) => state?.countries?.fetching);
  const error = useSelector((state: any) => state?.countries?.error);
  const selectedCountry = useSelector(
    (state: any) => state?.countries?.selectedCountry
  );

  const getCountriesList = async () => {
    dispatch(setFetching(true));
    const res = await client.query({
      query: GET_COUNTRIES,
    });
    console.log(res);
    if (res.errors) {
      dispatch(setError("Failed"));
    }
    const totalLength = res.data?.countries?.length;
    dispatch(setCountries(res.data.countries));
    dispatch(setTotalCount(totalLength));
    dispatch(setFetching(false));
  };

  useEffect(() => {
    getCountriesList();
  }, []);

  console.log(searchVal);
  if (fetching) return <Spinner />;

  if (error) return <>{error}</>;

  return (
    <TableContainer padding={"40px"}>
      <Box w={400} m={4}>
        <Input
          placeholder="Search Country...."
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            // handle filtering and display
            dispatch(filterCountriesList(searchVal));
          }}
        >
          Search
        </Button>
        <Box>
          {filteredCountriesList?.map((item: any) => item.name)?.join(", ")}
        </Box>
      </Box>
      <Box w={400} m={4}>
        Selected Country :{selectedCountry}
      </Box>
      <Table size="sm" variant="striped" colorScheme="green">
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
          {countriesList.map(
            ({
              code,
              name,
              currencies,
              capital,
              languages,
              continent,
            }: Country) => (
              <Tr
                key={code}
                onClick={() => {
                  dispatch(setSelectedCountry(name));
                }}
              >
                <Td>{name}</Td>
                <Td>{currencies.join(", ")}</Td>
                <Td>{capital}</Td>
                <Td>{languages.map((item) => item.name).join(", ")}</Td>
                <Td>
                  {continent.code}, {continent.name}
                </Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

function App() {
  return (
    <div>
      <Heading padding={"20px"} textAlign={"center"}>
        Table
      </Heading>
      <DisplayCountries />
    </div>
  );
}

export default App;
