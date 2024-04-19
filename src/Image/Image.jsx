/* eslint-disable react/prop-types */
import "react";

export default function Image({ href, imageId, imageSource }) {
  return (
    <a href={href} target="_blank">
      <img id={imageId} src={imageSource} />
    </a>
  );
}
