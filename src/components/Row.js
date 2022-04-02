import React from "react"
import { Box, Center, Text } from "@chakra-ui/react"

const Row = ({ movie }) => {
  return (
    <>
      <Box
        justifyContent="center"
        className="poster"
        w={[200, 300, 300]}
        h={[200, 300, 300]}
        rounded="12px"
        background={movie.Poster === "N/A" ? "black" : `url("${movie.Poster}")`}
      >
        <Center
          className="textBg"
          padding="30px"
          flexWrap="wrap"
          width="100%"
          height="100%"
          textAlign="center"
        >
          <Text color="white" className="searchTitle">
            {movie.Title}
          </Text>
        </Center>
      </Box>
    </>
  )
}

export default Row
