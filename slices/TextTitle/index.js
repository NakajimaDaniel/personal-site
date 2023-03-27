import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Box } from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.TextTitleSlice} TextTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextTitleSlice>} TextTitleProps
 * @param { TextTitleProps }
 */
const TextTitle = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
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

export default TextTitle