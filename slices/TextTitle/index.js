import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Box, Text, useColorMode } from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.TextTitleSlice} TextTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextTitleSlice>} TextTitleProps
 * @param { TextTitleProps }
 */


const TextTitle = ({ slice }) => {
  const {colorMode} = useColorMode();

  return (
    <section>
    <span className="title">
    <Text fontSize={20} fontWeight={"bold"} textAlign="left" color={colorMode === "dark" ? "#ffff" : "#0000"} pb="5">
      <PrismicRichText field={slice.primary.title}/>
    </Text>
    </span>
    {
      slice?.items?.map((item, i) =>
      <Box key={i} textAlign="left">
        <PrismicRichText field={item.text}  />
      </Box>
      )
    }
    <style jsx>{`
        section {
          max-width: 800px;
          margin: 4em auto;
          text-align: center;
        }
    `}</style>
    </section>
  )
}

export default TextTitle