import React from 'react';
import {SearchBar} from '../searchBar/searchBar.js';
import {SearchResults} from '../searchResults/searchResults.js';
import {Playlist} from '../playlist/playlist.js';
import './app.css';

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {searchResults: [{ name: 'havana', artist: 'camila', album: 'idk', id: 'whatever' } , { name: 'stiches', artist: 'shawn', album: 'idk2', id: 'whatever2' }]};
    }
    render(){
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}
