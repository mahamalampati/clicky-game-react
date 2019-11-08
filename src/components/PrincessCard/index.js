import React from "react";

function PrincessCard(props) {
    return (
        <div className="image-card">
            <img src={props.image} alt={props.name} className="img-thumbnail" onClick={props.imageClick}></img>
        </div>
    );
}

export default PrincessCard;