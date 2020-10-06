import React, { useState, useEffect } from "react"
import axios from "axios"

import AlbumCard from "./album-card"

function AlbumList(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [albums, setAlbums] = useState([])

  console.log(props)
  // The Beatles 136975
  // Outkast 289550
  // MGMT 251553551

  useEffect(() => {
    axios
      .get(
        `https://itunes.apple.com/lookup?id=${props.artistId}&entity=album&limit=50`
      )
      .then(response => setAlbums(response.data.results))
      .catch(error => console.error(error))
      .finally(
        setTimeout(() => {
          setIsLoading(false)
        }, 250)
      )
  }, [props.artistId])

  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {console.log(albums)}
          <div className="album-list">
            {albums
              .filter(album => album.wrapperType === "collection")
              .map((album, index) => (
                <AlbumCard album={album} key={index} />
              ))}
          </div>
        </>
      )}
    </div>
  )
}

export default AlbumList
