import { Link } from "react-router-dom";

function StarshipLink(props) {

  let extension = `starships/${props.shipId}`

  return (
    <div>
      <li>
        <Link to={extension}>{props.name}</Link>
      </li>
    </div>
  );
}

export default StarshipLink;
