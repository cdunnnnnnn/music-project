import React from "react"
import { Router, Redirect } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AlbumList from "../components/album-list"

const ArtistPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Router>
        <Redirect from={`/artists`} to={`/artist/251553551`} />
        <AlbumList path={`/artist/:artistId`} />
      </Router>
    </Layout>
  )
}

export default ArtistPage
