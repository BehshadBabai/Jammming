import React from 'react';
import {Track} from '../track/track.js';
import './trackList.css';

export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Track />
                <Track />
                <track />
            </div>
            );
    }
}
