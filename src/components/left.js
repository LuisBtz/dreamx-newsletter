import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const getImages = graphql`
  {
    left: file(relativePath: { eq: "bg-left.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    right: file(relativePath: { eq: "bg-right.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export const LeftContainer = styled.div`
  background-color: #30e9ff;
  width: 50%;
  height: 100vh;
  color: orange;
  font-size: 2rem;
`

const Left = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <LeftContainer>
      <h1>Hello from left</h1>
    </LeftContainer>
  )
}

export default Left
