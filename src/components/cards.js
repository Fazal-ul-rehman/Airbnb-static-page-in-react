import React from "react";

export default function Cards(props) {
    return (

        <div className="cards">
            <img src={props.img} className="card-img" />
            <div className="card--stats">
                <img src="./star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewcount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}