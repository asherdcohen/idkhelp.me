import React from "react";
import './Secondrowleft.css';

const Secondrowleft = () => {
    return (
        <div className="second-row-left">
            <div className="row" style={{ marginBottom: "20px" }}>
                <p>
                    <span className="backgroundColor" style={{ backgroundColor: "#C8C0FD" }}>Never feel embarrassed</span> about asking a question
                </p>
            </div>
            <div className="row" style={{
                paddingTop: "30px"
            }}>
                <p>
                    <span className="backgroundColor" style={{ backgroundColor: "#C0FDEB" }}>
                        Save time and effort
                    </span> while studying
                </p>
            </div>
            <div className="row" style={{
                paddingTop: "30px",
                marginBottom: "50px"
            }}>
                {/* <p>Join 2000+ learners on our waitlist</p> */}
                {/* <div className="signup-form" style={{
                    paddingTop: "30px"
                }}>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Join Waitlist</button>
                </div> */}
            </div>
        </div>
    );
};

export default Secondrowleft;
