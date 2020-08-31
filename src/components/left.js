import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import Newsletter from "./Newsletter"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        left: file(relativePath: { eq: "bg-left.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mail: file(relativePath: { eq: "mail.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const bgLeftData = data.left.childImageSharp.fluid
      const mailIconData = data.mail.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={bgLeftData}
          backgroundColor={`#30E9FF`}
        >
          <div className="form-container">
            <div className="top">
              <div className="border-top">
                <Image
                  className="mail"
                  fluid={mailIconData}
                  alt="DreaMx Mail Icon"
                />
                <div className="border"></div>
              </div>
              <div className="center">
                <h2>
                  <strong>
                    Suscríbete a nuestro Newsletter y recibe noticias y
                    promociones de nuestros servicios!
                  </strong>
                </h2>
              </div>
              <div className="border-top">
                <div className="border"></div>
                <Image
                  className="mail"
                  fluid={mailIconData}
                  alt="DreaMx Mail Icon"
                />
              </div>
              <Newsletter />
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledLeftBg = styled(BackgroundSection)`
  width: 50%;
  float: left;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: white;
    width: 70%;
    padding: 20px;
  }
  .mail {
    width: 25px;
  }
  .border-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .border-top .border {
    height: 1px;
    width: calc(100% - 45px);
    background-color: black;
  }
  .center {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .center h2 {
    font-size: 2vw;
  }
  p {
    font-size: 1.5rem;
    margin-top: 20px;
    text-align: center;
    color: #30e9ff;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    padding: 5px;
  }
  @media (max-width: 650px) {
    width: 100%;
    float: none;
    height: auto;
    .form-container {
      margin-top: 50px;
      margin-bottom: 50px;
      padding: 20px;
      width: 85%;
    }
    .center h2 {
      font-size: 1.2rem;
    }
  }
`

export default StyledLeftBg
