import React, { useMemo, useEffect, useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { Column } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      currencies
      capital
      emoji
      languages {
        native
        name
      }
      continent {
        code
        name
      }
    }
  }
`;

interface Languages {
  native: string;
  name: string;
}
interface Continent {
  code: string;
  name: string;
}

// type => pascal case
// variable -> camel case
// constants => snake case uppercase

interface Country {
  code: string;
  name?: string;
  currencies?: string[];
  capital?: string;
  emoji?: string;
  languages?: Languages[];
  continent?: Continent;
}

interface CountryState {
  name?: string;
  currencies?: string;
  capital?: string;
  emoji?: string;
  languages?: string;
  continent?: string;
}

function DisplayCountries(): JSX.Element {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES
  );

  const [rowData, setRowData] = useState<CountryState[] | []>([]);

  const [viewListName, setViewListName] = useState<string>("listOne");

  const columnDefs = useMemo<any>(() => {
    const columnDefs = [
      {
        field: "emoji",
        sortable: true,
        headerName: "Emoji",
        maxWidth: 250,
        minWidth: 400,
      },
      {
        field: "capital",
        sortable: true,
        headerName: "Capital",
        maxWidth: 250,
        minWidth: 400,
      },
      {
        field: "currencies",
        sortable: true,
        headerName: "Currency",
        cellStyle: (params: any) => {
          if (params.value === "AUD") {
            return { color: "green", backgroundColor: "black" };
          }
          return null;
        },
        maxWidth: 250,
        minWidth: 400,
      },
      ...(viewListName === "listOne"
        ? [
            {
              field: "name",
              sortable: true,
              headerName: "Country Name",
              cellStyle: { color: "white", backgroundColor: "green" },
              maxWidth: 250,
              minWidth: 400,
            },
            {
              field: "languages",
              sortable: true,
              headerName: "Language",
              maxWidth: 250,
              minWidth: 400,
            },
            {
              field: "continent",
              sortable: true,
              headerName: "Continent",
              maxWidth: 250,
              minWidth: 400,
            },
          ]
        : []),
    ];

    return columnDefs;
  }, [viewListName]);

  console.log({ error, data, loading });

  const gridOptions = {
    getRowStyle: (params: any) => {
      if (params.data.currencies === "USD") {
        return { background: "red" };
      }
    },
  };

  useEffect(() => {
    if (!data) return;
    if (data?.countries) {
      if (viewListName === "listOne") {
        const a: CountryState[] = data?.countries?.map(
          (country) =>
            ({
              capital: country.capital || "",
              currencies: country.currencies?.join(", ") || "",
              continent: country.continent?.name || "",
              name: country.name || "",
              emoji: country.emoji || "",
              languages:
                country.languages
                  ?.map((language) => language.name)
                  .join(", ") || "",
            } || [])
        );
        setRowData(a);
      } else if (viewListName === "listTwo") {
        const a: CountryState[] = data?.countries?.map(
          (country) =>
            ({
              emoji: country.emoji || "",
              capital: country.capital || "",
              currencies: country.currencies?.join(", ") || "",
            } || [])
        );
        setRowData(a);
      }
    }
  }, [data, viewListName]);

  const handleTableSwitch = (tableName: string) => {
    setViewListName(tableName);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Box
      style={{ width: "100%", height: 800 }}
      className="ag-theme-alpine-dark"
    >
      <Flex gap={"10px"} marginLeft={"20px"} marginBottom={"10px"}>
        <Button
          onClick={() => handleTableSwitch("listOne")}
          background={"green.200"}
          width={"200px"}
        >
          List 1
        </Button>

        <Button
          onClick={() => handleTableSwitch("listTwo")}
          background={"green.200"}
          width={"200px"}
        >
          List 2
        </Button>
      </Flex>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        gridOptions={gridOptions}
      />
    </Box>
  );
}

function App() {
  return (
    <Container padding={10} margin={10} border={"2px solid gray"}>
      <ChakraProvider>
        <Heading padding={"20px"} textAlign={"center"}>
          Table
        </Heading>

        <DisplayCountries />
      </ChakraProvider>
    </Container>
  );
}

export default App;
