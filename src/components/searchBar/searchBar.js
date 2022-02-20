import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Enter A Song, Album, or Artist'
          onChange={this.handleTermChange}
        />
        <button
          className='SearchButton'
          onClick={this.search}
          onSubmit={this.search}
          type='submit'
        >
          SEARCH
        </button>
      </div>
    );
  }
  search(e) {
    this.props.onSearch(this.state.term);
  }
  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }
}

export default SearchBar;
