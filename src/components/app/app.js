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
            playlistName: 'Behi\' Playlist',
            playlistTracks: [{ name: 'warriors', artist: 'imagine', album: 'idk3', id: 'whatever3' }, { name: 'perfect', artist: 'ed', album: 'idk4', id: 'whatever4' }]
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }
    render(){
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} />
                    </div>
                </div>
            </div>
        );
    }
    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
        else {
            this.setState(prevState => ({
                playlistTracks: [...prevState.playlistTracks, track]
            }));
        }
    }
    removeTrack(track) {
        let trackToDelete = this.state.playlistTracks.find(selectedTrack => selectedTrack.id === track.id);
        this.state.playlistTracks.splice(this.state.playlistTracks.indexOf(trackToDelete), 1)
        this.setState({ playlistTracks: this.state.playlistTracks });
    }
    updatePlaylistName(name) {
        this.setState({ playlistName: name });
    }
    savePlaylist() {
        let trackURI = [];
        for (let i = 0; i < this.state.playlistTracks; i++) {
            trackURI.push(this.state.playlistTracks[i].uri);
        }
    }
    search(term) {
        console.log(term);
    }
}
