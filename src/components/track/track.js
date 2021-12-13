import React from 'react';
import './track.css';
let isRemoval = true;

export class Track extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track Name</h3>
                    <p>Artist | Album</p>
                </div>
                <button class="Track-action">{renderAction()}</button>
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
