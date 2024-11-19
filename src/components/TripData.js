import { Link } from 'react-router-dom';
import "./TripStyles.css";

function TripData(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <Link to={props.link}>
                    <img alt="img" src={props.imgs}></img>
                </Link>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default TripData;
