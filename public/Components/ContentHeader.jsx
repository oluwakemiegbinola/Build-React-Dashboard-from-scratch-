import React from 'react';
import { BiSearch, BiNotification } from 'react-icons/bi'; // Corrected the import here
const ContentHeader = () => {
    return (
        <div className="content--header">
            <h1 className="header--title">Dashboard</h1>
            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder="Search anything here..." />
                    <BiSearch className="icon" /> {/* This should work now */}
                </div>
                <div className="notify">
                    <BiNotification className="icon" />
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
