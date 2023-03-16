import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param { ImageProps }
 */
const Image = ({ slice }) => (
  <section>


    {
      slice.primary.image ?
      <PrismicNextImage field={slice.primary.image} />
      : <p>Image</p>
    }
    {
      slice.primary.caption ?
      <PrismicRichText field={slice.primary.caption}/>
      : <p>No Caption</p>
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

export default Image