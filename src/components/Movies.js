import React from "react"
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import Row from "./Row"

const Movies = ({ title, movies }) => {
  const gridMarginTop = useBreakpointValue({
    base: "33px",
    md: "48px",
  })
  const marginTop = useBreakpointValue({
    base: "26px",
    md: "18px",
  })
  const marginLeft = useBreakpointValue({
    base: "28px",
    md: "77px",
  })
  return (
    <>
      <Flex
        flexDirection="column"
        className="row-container"
        mt={gridMarginTop}
        marginLeft={marginLeft}
      >
        <Text className="searchTitle">{title}</Text>

        <Flex className="row" mt={marginTop}>
          {movies?.map(movie => (
            <Row key={movie.imdbID} movie={movie} />
          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default Movies
