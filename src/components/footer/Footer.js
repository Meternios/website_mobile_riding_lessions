import React from 'react';
import './Footer.css';

import Container from '@material-ui/core/Container';

function Footer() {
    return (
        <footer className="fh-footer">
            <Container fixed>
                <p>All about me, myself and I.</p>
            </Container>
        </footer>
    );
}

export default Footer;