// Firstrow.js
import React from "react";
import './Firstrow.css';

const Firstrow = () => {
    return (
        <div className="first-row">
            <h1 className="header">Learn Everything and Anything...Easily</h1>
            <h2 className="subheader">
                AI-powered learning companion that simplifies{" "}
                <span className="strikethrough">involuted text</span> complicated wording
            </h2>
        </div>
    );
};

export default Firstrow;
