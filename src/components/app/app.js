import React from 'react';
import {SearchBar} from '../searchBar/searchBar.js';
import {SearchResults} from '../searchResults/searchResults.js';
import {Playlist} from '../playlist/playlist.js';
import './app.css';
import Spotify from '../../util/Spotify';

export class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            playlistName: 'Untitled Playlist',
            playlistTracks: []
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
        Spotify.savePlaylist(this.state.playlistName, trackURI).then(() => {
            this.setState({
                playlistName: 'New Playlist',
                playlistTracks: []
            });
        });
    }
    search(term) {
        Spotify.search(term).then(searchResults => {
            alert(searchResults);//this.setState({ searchResults: searchResults });
        });
    }
}
