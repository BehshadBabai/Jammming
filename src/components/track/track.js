import React from 'react';
import './track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.renderAction = this.renderAction.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action" onClick={this.addTrack}>{this.renderAction()}</button>
            </div>
        );
    }
    addTrack() {
        if (!this.props.isRemoval) {
            this.props.onAdd(this.props.track);
        }
        else {
            this.removeTrack();
        }
    }
    renderAction() {
        if (this.props.isRemoval) {
            return '-';
        }
        return '+';
    }
    removeTrack() {
        this.props.onRemove(this.props.track);
    }
}
