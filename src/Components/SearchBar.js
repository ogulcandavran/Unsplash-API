import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Search for images..."
            onChange={event =>
              this.setState({ term: event.target.value.toUpperCase() })
            }
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
