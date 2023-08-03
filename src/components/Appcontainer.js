import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import icon from '../images/IDKHelp.me.png';
import './Appcontainer.css';

const AppContainer = ({ children }) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <div className="app-container">
            {/* Show message if not a desktop */}
            {!isDesktop && (
                <div className="desktop-only-message">
                    <img src={icon} alt="Logo" className="app-icon" />
                    <p>
                        This website is best viewed on a desktop device.<br />
                        Please switch to a desktop for the best experience.
                    </p>
                </div>
            )}

            {/* Render children only when it's a desktop */}
            {isDesktop && children}
        </div>
    );
};

export default AppContainer;
