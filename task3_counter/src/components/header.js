import React from 'react';
import './header.css'

const Header = () => {

    var today = new Date(),

    date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

    

    return (
        <div className="header">
            <h1>Task 3: Like counter</h1>
            <p>{date}</p>
        </div>
    );
};

export default Header;