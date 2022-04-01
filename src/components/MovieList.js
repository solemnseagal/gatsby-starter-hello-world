import React, { useEffect, useState } from "react"
import { Box, Input, Text, useBreakpointValue, Spacer } from "@chakra-ui/react"
import axios from "axios"
import Movies from "./Movies"

const MovieList = () => {
  const [sWMovies, setSWMovies] = useState([])
  const [aMovies, setAMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request1 = await axios.get(
        "https://www.omdbapi.com/?s=star wars&apikey=dfc79c7"
      )
      setSWMovies(request1.data.Search)

      const request2 = await axios.get(
        "https://www.omdbapi.com/?s=the big bang theory&apikey=dfc79c7"
      )
      setAMovies(request2.data.Search)
    }
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  // custom style
  const marginTop = useBreakpointValue({
    base: "56px",
    md: "63px",
  })
  const spacerMarginTop = useBreakpointValue({
    base: "50px",
    md: "67px",
  })
  const marginLeft = useBreakpointValue({
    base: "28px",
    md: "77px",
  })
  const marginRight = useBreakpointValue({
    base: "28px",
    md: "57px",
  })

  return (
    <>
      <Box ml={marginLeft} mr={marginRight} mt={marginTop}>
        <Text className="searchTitle">Search</Text>
        <div className="inputContainer">
          <Input
            type="search"
            variant="unstyled"
            className="searchInput"
            size="lg"
            padding="0 10px"
          />
        </div>
      </Box>

      <Movies title="Movies" movies={sWMovies} />
      <Movies title="Series" movies={aMovies} />

      <Spacer marginTop={spacerMarginTop} />
    </>
  )
}

export default MovieList
