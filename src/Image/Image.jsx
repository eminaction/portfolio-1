/* eslint-disable react/prop-types */
import "react";

export default function Image({ imageId, imageSource }) {
  return <img id={imageId} src={imageSource} />;
}
