import React from "react";
import anime from "animejs";
import { delay } from "q";

class SearchBar extends React.Component {
  state = { term: "" };
  myRef = React.createRef();

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  focusAnime = () => {
    const tl = anime.timeline({
      easing: "easeInQuad",
      duration: 200
    });
    tl.add({
      targets: this.myRef.current,
      borderLeftColor: "#4267b2"
    })
      .add({
        targets: this.myRef.current,
        borderTopColor: "#4267b2"
      })
      .add({
        targets: this.myRef.current,
        borderRightColor: "#4267b2"
      })
      .add({
        targets: this.myRef.current,
        borderBottomColor: "#4267b2"
      })
      .add({
        targets: this.myRef.current,
        borderLeftColor: "#ffffff"
      })
      .add({
        targets: this.myRef.current,
        borderTopColor: "#ffffff"
      })
      .add({
        targets: this.myRef.current,
        borderRightColor: "#ffffff"
      })
      .add({
        targets: this.myRef.current,
        delay: 200,
        duration: 300,
        borderBottomWidth: 2
      })
      .add({
        targets: this.myRef.current,
        duration: 1000,
        borderBottomColor: "#000000"
      });
  };

  blurAnime = () => {
    const tl = anime.timeline({
      easing: "easeInQuad",
      duration: 200
    });
    tl.add({
      targets: this.myRef.current,
      borderRightColor: "#000000"
    })
      .add({
        targets: this.myRef.current,
        borderTopColor: "#000000"
      })
      .add({
        targets: this.myRef.current,
        borderLeftColor: "#000000"
      })
      .add({
        targets: this.myRef.current,
        delay: 100,
        borderBottomWidth: 1
      });
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onFormSubmit}>
          <input
            onFocus={this.focusAnime}
            onBlur={this.blurAnime}
            ref={this.myRef}
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
