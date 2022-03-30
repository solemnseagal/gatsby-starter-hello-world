import React, { useState } from "react"
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
        background="black"
      >
        <Center padding="20px" flexWrap="wrap" width="100%" height="100%">
          <Text color="white">{movie.Title}</Text>
        </Center>
      </Box>
    </>
  )
}

export default Row
