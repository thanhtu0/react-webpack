import React from "react";

const Card = ({ data }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes} ${day}/${month}/${year} `;
    };

    return (
        <div className="cardContainer">
            {data.map((curItem, index) => {
                if (!curItem.urlToImage) {
                    return null;
                } else {
                    return (
                        <div className="card">
                            <img src={curItem.urlToImage} />
                            <div className="content">
                                <a
                                    className="title"
                                    onClick={() => window.open(curItem.url)}
                                >
                                    {curItem.title}
                                </a>
                                <p className="date">
                                    {formatDate(curItem.publishedAt)}
                                </p>
                                <p>{curItem.description}</p>
                                <button
                                    onClick={() => window.open(curItem.url)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Card;
