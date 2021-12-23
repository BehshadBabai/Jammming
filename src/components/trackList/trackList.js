import React from 'react';
import Track from '../track/track';
import './trackList.css';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map((track) => {
                    return <Track track={track} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} key={track.id} onRemove={this.props.onRemove} />
                    })
                }
            </div>
            );
    }
}

export default TrackList;