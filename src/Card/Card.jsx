/* eslint-disable react/prop-types */
import "react";
import "./Card.css";
import Image from "../Image/Image";

export default function Card({ href, imageSource, header, text }) {
  return (
    <>
      <div className="card">
        <Image href={href} imageSource={imageSource} />
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
