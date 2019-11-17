import React from "react"
import "../stylesheets/albumChoice.css"

const AlbumChoice = (props) => {

    

    const generateAlbumLength = (length) => {
        return `${Math.floor(length/60)}:${length % 60 < 10 ? `0${length%60}` : length%60}`
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
            <img src={props.albumArt(`./${props.data.title.toLowerCase().split(" ").join("_")}.jpg`)} alt="albumArt" id="albumArt" />
            <p>Length - {generateAlbumLength(props.data.length)}</p>
            <p>{props.data.genre}</p>
            <div className="tracks">
               {generateTrackItems(props.data.trackData)} 
            </div>
        </div>
    )
} 

export default AlbumChoice