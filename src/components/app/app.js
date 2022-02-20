import React from 'react';
import SearchBar from '../searchBar/searchBar';
import SearchResults from '../searchResults/searchResults';
import Playlist from '../playlist/playlist';
import './app.css';
import Spotify from '../../util/Spotify';
import { Alert } from '@mui/material';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'Untitled Playlist',
      playlistTracks: [],
      showConnected: false,
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          {this.state.showConnected && (
            <Alert
              onClose={() => {
                this.setState({ showConnected: false });
              }}
              variant='filled'
              color='success'
            >
              Successfully Connected To Your Spotify Account.
            </Alert>
          )}
          <SearchBar onSearch={this.search} />
          <div className='App-playlist'>
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.setState((prevState) => ({
        playlistTracks: [...prevState.playlistTracks, track],
      }));
    }
  }
  removeTrack(track) {
    let trackToDelete = this.state.playlistTracks.find(
      (selectedTrack) => selectedTrack.id === track.id
    );
    this.state.playlistTracks.splice(
      this.state.playlistTracks.indexOf(trackToDelete),
      1
    );
    this.setState({ playlistTracks: this.state.playlistTracks });
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }
  savePlaylist() {
    const trackURI = [];
    for (let i = 0; i < this.state.playlistTracks.length; i++) {
      trackURI.push('spotify:track:' + this.state.playlistTracks[i].id);
    }
    if (Spotify.savePlaylist(this.state.playlistName, trackURI)) {
      this.setState({
        playlistName: 'Untitled Playlist',
        playlistTracks: [],
      });
    }
  }
  search(term) {
    Spotify.search(term).then((spotifyResults) => {
      this.setState({ searchResults: spotifyResults });
    });
  }
  componentDidMount() {
    if (
      window.location.href.match(/access_token=([^&]*)/) &&
      window.location.href.match(/expires_in=([^&]*)/)
    ) {
      this.setState({ showConnected: true });
    } else {
      this.setState({ showConnected: false });
    }
  }
}

export default App;
