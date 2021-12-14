import React from 'react';
import './track.css';
let isRemoval = true;

export class Track extends React.Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{renderAction()}</button>
            </div>
        );
    }
}

function renderAction() {
    if (isRemoval) {
        return '-';
    }
    return '+';
}
