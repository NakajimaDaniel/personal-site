import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Box } from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param { TextBlockProps }
 */
const Text = ({ slice }) => (
  <section>
    {
      slice?.items?.map((item, i) =>
      <Box key={i} textAlign="left">
        <PrismicRichText field={item.text}  />
      </Box>
      )
    }

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default Text