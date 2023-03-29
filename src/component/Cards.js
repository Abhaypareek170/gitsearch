import React from "react";

const Cards = (props) => {
  return (
    <>
      <div
        className="card-deck mx-2 mt-4 card_style"
        style={{ width: "22rem", border: "none" }}
      >
        <div className="card">
          <img
            className="card-img-top"
            src={props.ele.owner.avatar_url}
            style={{ height: "16rem", cursor: "pointer" }}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Repo:{props.ele.name}</h5>
            <span>
              <p className="card-text">Stars: {props.ele.stargazers_count}</p>
            </span>
            <span>
              <p className="card-text">{props.ele.description}</p>
            </span>
            <p className="card-text">Language: {props.ele.language}</p>
            <p className="title">username: {props.ele.owner.login}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
