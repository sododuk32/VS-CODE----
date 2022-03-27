import Nav from './Nav';
import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Nav />
            <header>헤더</header>
            <body>바디</body>
            <footer>푸터</footer>

            <div>{children}</div>
        </>
    );
};

export default Layout;
