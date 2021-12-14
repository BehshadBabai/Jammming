import React from 'react';
import { TrackList } from '../trackList/trackList.js';
import './playlist.css';

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName} />
                <TrackList tracks={this.props.playlistTracks} isRemoval={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
            );
    }
}