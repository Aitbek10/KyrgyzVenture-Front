import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
    render() {

        console.log("Image 1 URL:", this.props.img1);
        console.log("Image 2 URL:", this.props.img2);

        return (
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        );
    }
}

export default DestinationData;
