import "./Image.css";

export default function Image({ href, imageId, imageSource }) {
  return (
    <a href={href} target="_blank">
      <img className="card-image" id={imageId} src={imageSource} />
    </a>
  );
}
