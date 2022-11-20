import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.item.location === "Online") badgeText = "Online";

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="card_img1" className="card--image" />
      <div className="card--stats">
        <img src="./img/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}).</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price"> From ${props.item.price} / person</p>
    </div>
  );
}
