import React from "react";
import "./App.css";
import { tramposData } from "./data";

export const Trampos = () => { 
    return (
        <>
        {tramposData.map((data, key) => {
            return (
                <div key={key} className="trampo">
                <Trampo
                    key={key}
                    company={data.where}
                    title={data.what}
                    link={data.link}
                    when={data.when}
                    image={data.image}  
                    awards={data.awards}                            
                 />
                 
            </div> 
            );
        })}
        </>     
    );
};

const Trampo = ({link,company,title,when,image,awards}) => {

    return (
        <div>
            <h3>{when}</h3>
            <h4>{company}</h4>
            <a target="_blank" rel="noopener noreferrer" href={link}><h2>{title}<br></br></h2></a>
            <h4>{awards}</h4>
        </div>
    );
};



