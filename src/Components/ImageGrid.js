import React from "react";

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.adjustSpan);
  }

  adjustSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 5);
    this.setState({ span });
  };

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <a href={urls.regular} target="_blank" rel="noopener noreferrer">
          <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
        </a>
      </div>
    );
  }
}

export default ImageGrid;
