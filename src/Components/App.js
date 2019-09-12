import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [], responseControl: false };

  handleApiCall = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID b665cc7c1da0189cfb02ee21ee2516ad6cc30d242e03d4c48221240eb5e3a756"
      }
    });
    if (response.data.results.length === 0) {
      this.setState({ responseControl: true });
    } else {
      this.setState({ images: response.data.results, responseControl: false });
    }
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.handleApiCall} />
        <ImageList
          calledImages={this.state.images}
          responseControl={this.state.responseControl}
        />
      </div>
    );
  }
}

export default App;
