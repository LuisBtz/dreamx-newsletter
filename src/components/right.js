import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        right: file(relativePath: { eq: "bg-right.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        face: file(relativePath: { eq: "facebook.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        insta: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.right.childImageSharp.fluid
      const logoIconData = data.logo.childImageSharp.fluid
      const iconFace = data.face.childImageSharp.fluid
      const iconInsta = data.insta.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="text-t">
            <h1>
              Desarrollamos estrategias de <b>marketing</b> con el objetivo de
              que tu <b>marca</b> llegue a más <b>personas.</b>
            </h1>
          </div>
          <Image className="logo" fluid={logoIconData} alt="DreaMx Mail Icon" />
          <div className="social">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/dreamx.mx"
            >
              <Image
                className="face icon"
                fluid={iconFace}
                alt="DreaMx Facebook Link"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/dreamx.mx/"
            >
              <Image
                className="insta icon"
                fluid={iconInsta}
                alt="DreaMx Mail Icon"
              />
            </a>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledRightBg = styled(BackgroundSection)`
  width: 50%;
  float: right;
  height: 100vh;
  background-color: white;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .text-t {
    margin-top: 100px;
    width: 50%;
    text-align: center;
  }
  .text-t h1 {
    font-size: 1rem;
  }
  .logo {
    width: 150px;
  }
  .social {
    display: flex;
    margin-bottom: 100px;
  }
  .face {
    width: 10px;
    margin-right: 50px;
  }
  .insta {
    width: 20px;
  }
  @media (max-width: 700px) {
    .text-t {
      width: 80%;
    }
  }
  @media (max-width: 650px) {
    width: 100%;
    float: none;
    height: auto;
    .text-t {
      margin-top: 100px;
      margin-bottom: 100px;
    }
    .logo {
      margin-bottom: 100px;
    }
  }
`

export default StyledRightBg
