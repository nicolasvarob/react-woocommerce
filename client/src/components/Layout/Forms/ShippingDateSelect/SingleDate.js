import React from 'react';

const SingleDate = (props) => {
    return (
        <button className="single-date">
            <h3>{props.text}</h3>
        </button>
    );
};

export default SingleDate;