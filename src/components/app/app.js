import React from 'react';
import {SearchBar} from '../searchBar/searchBar.js';
import {SearchResults} from '../searchResults/searchResults.js';
import {Playlist} from '../playlist/playlist.js';
import './app.css';

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{ name: 'havana', artist: 'camila', album: 'idk', id: 'whatever' }, { name: 'stiches', artist: 'shawn', album: 'idk2', id: 'whatever2' }],
            playlistName: 'Behi',
            playlistTracks: [{ name: 'warriors', artist: 'imagine', album: 'idk3', id: 'whatever3' }, { name: 'perfect', artist: 'ed', album: 'idk4', id: 'whatever4' }]
        };
    }
    render(){
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} />
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
                    </div>
                </div>
            </div>
        );
    }
}
