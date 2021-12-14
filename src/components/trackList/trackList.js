import React from 'react';
import {Track} from '../track/track.js';
import './trackList.css';

export class TrackList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.tracks);
    }
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((track) => {
                    return <Track track={track} />
                })}
            </div>
            );
    }
}
