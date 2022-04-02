import React from "react"

import RectangleD from "../assets/images/RectangleD.jpg"
import Rectangle5min from "../assets/images/Rectangle5min.jpg"
import Rectanglesm from "../assets/images/Rectanglesm.jpg"
import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  const customBg = useBreakpointValue({
    base: Rectanglesm,
    md: Rectangle5min,
    lg: RectangleD,
  })

  const marginLeft = useBreakpointValue({
    base: "0",
    lg: "77px",
  })
  const marginTop = useBreakpointValue({
    base: "0",

    lg: "109px",
  })

  const justifyContent = useBreakpointValue({
    base: "center",
    lg: "left",
  })

  const textAlign = useBreakpointValue({
    base: "center",
    md: "center",
    lg: "left",
  })

  const heightSize = useBreakpointValue({
    base: "257",
    md: "550px",
    lg: "550px",
  })

  const headerWidth = useBreakpointValue({
    base: "300px",
    md: "282px",
  })

  return (
    <div className="hero">
      <Flex
        backgroundImage={customBg}
        backgroundRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h={heightSize}
        justifyContent={justifyContent}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          width={headerWidth}
          alignItems="center"
          marginTop={marginTop}
          marginLeft={marginLeft}
        >
          <Heading
            as="h1"
            size="2xl"
            color="white"
            lineHeight="1.2"
            textAlign={textAlign}
          >
            Watch Something incredible
          </Heading>
        </Box>
      </Flex>

      {/* <StaticImage src={customBg} /> */}
    </div>
  )
}

export default Hero
