/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
}
