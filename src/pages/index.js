import React from "react"
import { Link } from "gatsby"
import Wave from "../components/Wave"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./css/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image />
    <Wave />
  </Layout>
)

export default IndexPage
