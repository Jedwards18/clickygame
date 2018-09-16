import React from "react";
import "./Title.css";

const Title = props => (
    <div className="title" id="myHeader">{props.children}
        <h1 className="text">Clicky Game!</h1>
        <h1 className="score">Score: 0</h1>
    </div>
);

export default Title;