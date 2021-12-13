import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from '../searchBar/searchBar.js';
import {SearchResults} from '../searchResults/searchResults.js';
import {Playlist} from './playlist/playlist.js';
import './app.css';

export class App extends React.Component{
    render(){
        return (
                <div>
                  <h1>Ja<span class="highlight">mmm</span>ing</h1>
                  <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                      <SearchResults />
                      <Playlist />
                    </div>
                  </div>
                </div>

                );
    }
}
