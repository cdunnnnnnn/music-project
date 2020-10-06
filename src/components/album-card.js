import React from "react"
import { usePalette } from "react-palette"

export default function AlbumCard({ album }) {
  const { data } = usePalette(album.artworkUrl100)

  return (
    <div className="album-card">
      <div className="album-card__inner">
        <div
          className="album-card__glow"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: `0 0 15px 7px #fff, 0 0 30px 15px ${data.darkVibrant}, 0 0 60px 30px ${data.vibrant}`,
          }}
        />
        <div className="album-card__body">
          <div className="album-card__img-wrap">
            <img
              className="album-card__img"
              src={album.artworkUrl100}
              alt={`${album.collectionName} by ${album.artistName}`}
            />
          </div>
          <h2 className="album-card__artisit-name">
            <a href={album.artistViewUrl} target="_blank" rel="noreferrer">
              {album.artistName}
            </a>
          </h2>
          <h3 className="album-card__album-title">
            <a href={album.collectionViewUrl} target="_blank" rel="noreferrer">
              {album.collectionName}
            </a>
          </h3>
          <p className="album-card__meta">{`${new Date(
            album.releaseDate
          ).getFullYear()} • ${album.trackCount} tracks`}</p>
        </div>
      </div>
    </div>
  )
}
