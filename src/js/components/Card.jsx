import React from "react";

const Card = ({ title, text, img, buttonText }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="Card" />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
