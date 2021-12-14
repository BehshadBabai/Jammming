import React from 'react';
import {Track} from '../track/track.js';
import './trackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((track) => {
                    return <Track track={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} key={track.id}/>
                })}
            </div>
            );
    }
}
