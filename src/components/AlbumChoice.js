import React from "react"
import "../stylesheets/albumChoice.css"

const AlbumChoice = (props) => {

    const generateAlbumLength = (length) => {
        console.log(length)
        return `${Math.floor(length/60)}:${length % 60}`
    }

    const generateTrackItems = (tracks) => {
        return tracks.map(track => {
            return <div key={track.title}>{track.trackNumber}. {track.title} - {track.length}</div>
        })
    }

    return (
        <div className="albumChoice">
            <h1>Album Choice Component</h1>
            <h2>{props.data.title}</h2>
            <p>Length - {generateAlbumLength(props.data.length)}</p>
            <p>{props.data.genre}</p>
            <div className="tracks">
               {generateTrackItems(props.data.trackData)} 
            </div>
        </div>
    )
} 

export default AlbumChoice