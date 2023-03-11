import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ link, company, title, when, awards, hashtags }) => {
  return (
    <div className="card_component">
      <div className="header">
        <div className="year-company">
          <h3>{when}</h3>
          <h4>{company}</h4>
        </div>
        <div>
          {awards ? (
            <FontAwesomeIcon
              size="2x"
              alt="ícone de premiação pois ganhei três prêmios por esse especial"
              icon={faAward}
            />
          ) : (
            ""
          )}
        </div>
      </div>
        <h2>
          <a href={link} rel="noopener noreferrer" target="_blank">{title}</a>
          <br></br>
          <p className="hashtags">{hashtags}</p>
        </h2>
    </div>
  );
};
