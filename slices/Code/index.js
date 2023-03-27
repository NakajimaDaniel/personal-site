
import { Box, useColorMode } from '@chakra-ui/react'
import React from 'react'


import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark, oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism'


/**
 * @typedef {import("@prismicio/client").Content.CodeSlice} CodeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CodeSlice>} CodeProps
 * @param { CodeProps }
 */

const Code = ({ slice }) => {

  const { colorMode } = useColorMode();
  const text = slice.primary.code[0].text;

  return (
    (
      <section>
        <ReactMarkdown 
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <Box>
              <Box w="100px" bg={colorMode === "dark"?  '#282c34' : '#fafafa'} borderTopRadius="8" >
                {match[1].toUpperCase()}
              </Box>
              
              <SyntaxHighlighter
              style={colorMode ==="dark" ? oneDark : oneLight}
              customStyle={{margin: 'none', borderTopLeftRadius: '0'}}
              language={match[1]}
              PreTag="div"
                {...props}
              > 
              {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
              </Box>
            ) : (
              <SyntaxHighlighter language={match[1]}>
              {children}
            </SyntaxHighlighter>
            )
          }
        }}
        >
          {text}
        </ReactMarkdown>

    
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
  )

}

export default Code