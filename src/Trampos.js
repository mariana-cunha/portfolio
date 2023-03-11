import React from "react";
import "./Styles.scss";
import { Card } from "./component/Card";
import {tramposData} from "./data";
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Trampos = () => {
    return (
      <>
        {tramposData.map((data, key) => {
          return (
            <div key={uuid()} className="trampo">
              <Card
                key={key}
                company={data.where}
                title={data.what}
                link={data.link}
                when={data.when}
                image={data.image}
                awards={data.awards === 'yes' ? <FontAwesomeIcon icon="fa-solid fa-award" /> : ''}
                hashtags={data.hashtags}
              />
            </div>
          );
        })}
      </>
    );
  };


