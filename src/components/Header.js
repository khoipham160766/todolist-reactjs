import React from "react";

const Header = () => {
    const HeaderStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
    }
    return (
        <header style={HeaderStyle}>
            <h1>TO DO LIST</h1>
        </header>
    )
}

export default Header