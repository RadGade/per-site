import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import "./wave.css"

const Background = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "download.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <>
          <h1 className="hero-title">Building cool things on the Internet</h1>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          />
        </>
      )
    }}
  />
)

const Image = styled(Background)`
  width: 100%;
  height: 500px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: 100% 100%;
`

export default Image
