import React from "react";
import "./Images.css";

const Image = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} id={props.id} state={props.state} />
            <br></br>
            {/* <button onClick={() => props.setClicked(props.id)} className="btn btn-primary"> */}
            <button onClick={() => props.setState({ state: "clicked"})} className="btn btn-primary">
            Select
            </button>
        </div>
    </div>
);

export default Image;