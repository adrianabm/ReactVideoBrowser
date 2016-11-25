import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBEPTtXyhw7NCufGqSlR0f28eO37KpwoSY'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    // Starting with a random YT search so the page won't be empty when first rendered
    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      // this.setState({ videos: videos })
      // When key and value are the same name, it's possible to shorten the syntax
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
