// import React from "react";
// import backgroundImage from "../images/Simplify.png";

// const Secondrowright = () => {
//     return (
//         <div className="second-row-right">
//             <img src={backgroundImage} alt="Simplify" className="simplify-image" />
//         </div>
//     );
// };

// export default Secondrowright;

import React from "react";
import gifBackground from "../images/gif.gif";
import "./Secondrowright.css"; // You may need to adjust the path based on your project structure

const Secondrowright = () => {
    return (
        <div className="second-row-right">
            <img src={gifBackground} alt="Simplify GIF" className="simplify-gif" />
        </div>
    );
};

export default Secondrowright;
