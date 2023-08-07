import React, { useState } from "react";
import "./App.css";
import { Box, Input, Heading, Text, Image } from "@chakra-ui/react";
import axios from "axios";

import useDebounce from "./hook/useDebounce";

function App() {
  const [data, setData] = useState({
    longitude: 20,
    latitude: 20,
    icon: "",
    Temperature: 10,
    name: "",
    humidity: 10,
    speed: 2,
    description: "",
  });
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounce<string>(location, 500);
  console.log(debouncedValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setLocation(e.target.value);

    if (location !== "") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5a77ceec453603c42e196734682e72f3&units=metric`;
      axios
        .get(url)
        .then((response) => {
          setLoading(false);

          setData({
            ...data,
            Temperature: response.data.main.temp,
            name: response.data.name,
            humidity: response.data.main.humidity,
            speed: response.data.wind.speed,
            longitude: response.data.coord.lon,
            latitude: response.data.coord.lat,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
          });
        })

        .catch((err) => {
          if (err.response.status === 404) {
            setError("Invalid city name");
          } else {
            setError("");
          }
          console.log(err);
        });
    }
  };
  if (loading) {
    <>Loading...</>;
  }

  return (
    <div className="App">
      <Box
        backgroundImage={
          "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        w={"100vw"}
        h={"100vh"}
      >
        {error}
        <Box
          width={"100%"}
          height={"750px"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={50}
          marginLeft={"20px"}
          marginRight={"30px"}
        >
          <Box
            border={"1px solid #f0f0f0"}
            w={"50%"}
            background={"#AEAEAE"}
            opacity={0.7}
            minH={"100px"}
          >
            <Heading as={"u"}>Weather App</Heading>
            <br />
            <Text fontSize={"50px"} as="i">
              {data.name}
            </Text>
            <br />
            <Text fontSize={"34px"} as="i">
              {data.Temperature}°C
            </Text>
            <br />
            <Text fontSize={"34px"} as="i">
              {data.description}
            </Text>
            <br />
            <Text fontSize={"34px"} as="i">
              <Image
                alt="weather"
                src={`icons/${data.icon}.png`}
                marginLeft={"350px"}
              />
            </Text>
            <br />
            <Box marginRight={"500px"}>
              <Text fontSize={"34px"} as="i">
                Longitute: {data.longitude}
              </Text>
              <br />
              <Text fontSize={"34px"} as="i">
                Lalitute: {data.latitude}
              </Text>
              <br />
            </Box>
            <Box
              marginLeft={"500px"}
              marginTop={"-100px"}
              marginBottom={"20px"}
            >
              <Text fontSize={"34px"} as="i">
                Humidity: {data.humidity}%
              </Text>
              <br />
              <Text fontSize={"34px"} as="i">
                Speed: {data.speed}meter/sec
              </Text>
              <br />
            </Box>
          </Box>

          <Box
            // border={"1px solid #f0f0f0"}
            w={"50%"}
            // background={"blue.100"}
            opacity={0.7}
            minH={"100px"}
          >
            <Box>
              <Heading color={"yellow.200"}>Search City</Heading>
              <Input
                value={location}
                width={"400px"}
                color={"yellow"}
                focusBorderColor="pink.400"
                placeholder="Enter location"
                _placeholder={{ color: "yellow.500" }}
                variant="flushed"
                type="text"
                onChange={handleChange}
                mt={"30px"}
              />
              {/* <Button width={"200px"} bgColor={"#9EC378"} onClick={handleClick}>
                Search
              </Button> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
export default App;
