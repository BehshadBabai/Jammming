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
      connected: false,
      alertShown: false,
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.connect = this.connect.bind(this);
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          {this.state.connected && (
            <Alert
              onClose={() => {
                this.setState({ connected: false });
              }}
              variant='filled'
              color='success'
            >
              Successfully Connected To Your Spotify Account.
            </Alert>
          )}
          {!this.state.connected && !this.state.alertShown && (
            <>
              <div id='preconnect-info'>
                <br />
                <p>
                  Welcome to Jammming by{' '}
                  <a
                    href='https://linkedin.com/in/behshadbabai'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Behshad Babai
                  </a>
                  . Here, you can search for songs in Spotify's library, create
                  and name a playlist and then save your playlist to your
                  Spotify account. Note that even if you successfully connect to
                  your spotify account through this app, you still need my
                  approval to be able to use this app. If you want to start
                  using Jammming, please let me know via{' '}
                  <a
                    href='mailto:behshad.babai@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Email
                  </a>{' '}
                  or{' '}
                  <a
                    href='https://linkedin.com/in/behshadbabai'
                    target='_blank'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>{' '}
                  so that I can add you as a user.
                </p>
                <button id='s-connect' onClick={this.connect}>
                  Connect to Spotify <i className='fa-brands fa-spotify'></i>
                </button>
              </div>
              <br />
            </>
          )}
          {(this.state.connected || this.state.alertShown) && (
            <SearchBar onSearch={this.search} />
          )}
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
  connect(e) {
    Spotify.getAccessToken();
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
    } else {
      alert('Something Went Wrong');
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
      this.setState({ connected: true });
      this.setState({ alertShown: true });
    } else {
      this.setState({ connected: false });
    }
  }
}

export default App;
