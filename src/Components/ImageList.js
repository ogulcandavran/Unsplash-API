import React from "react";
import ImageGrid from "./ImageGrid";

class ImageList extends React.Component {
  render() {
    if (this.props.responseControl) {
      return <div className="err">No images found! Please enter a valid search term.</div>;
    }
    const images = this.props.calledImages.map(img => {
      return <ImageGrid key={img.id} image={img} />;
    });

    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
