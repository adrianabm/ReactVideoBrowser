import React, { Component } from 'react'

class SearchBar extends Component {
  // This is how we initialize state in class-based components. Functional components do not have state.
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          // controlled component: has its value set by state; it's value only changes when the state changes
          value = { this.state.term }
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
