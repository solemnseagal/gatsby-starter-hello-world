import React from "react"
import {
  Flex,
  Box,
  Text,
  Center,
  useBreakpointValue,
  extendTheme,
} from "@chakra-ui/react"
// import { color } from "@chakra-ui/react"

const Navbar = () => {
  const justifyContent = useBreakpointValue({
    base: "center",
    lg: "left",
  })

  const marginLeft = useBreakpointValue({
    base: "0",
    lg: "77px",
  })

  const navbarHeight = useBreakpointValue({
    base: "67px",
    md: "140px",
  })

  const logoSize = useBreakpointValue({
    base: "24px",
    md: "32px",
  })

  const logoPadding = useBreakpointValue({
    base: "5px 10px",
    md: "14px 19px",
  })

  return (
    <Flex
      bg="#292929"
      height={navbarHeight}
      alignItems="center"
      justifyContent={justifyContent}
    >
      {/* <Center
        className="logo"
        border="1px solid white"
        width="193px"
        marginLeft="77px"
        height="60px"
        // textAlign="center"
        // justifyContent="center"
        // alignItems="center"
      > */}
      <Box
        marginLeft={marginLeft}
        border="1px solid white"
        padding={logoPadding}
        textAlign="center"
      >
        <Text color="white" fontSize={logoSize}>
          MyTestApp
        </Text>
      </Box>

      {/* </Center> */}
    </Flex>
  )
}

export default Navbar
