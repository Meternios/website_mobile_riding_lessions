import React, { useState } from 'react';
import './Header.css';
import Nav from '../nav/Nav'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

function Header() {
     // Declare a new state variable, which triggers the Drawner
    const [isDrawnerVisible, setIsDrawnerVisible] = useState(false);
    
    return (
        <AppBar position="static" className="fh-header">
            <Container fixed>
                <Toolbar variant="dense">
                    <Nav></Nav>
                    <IconButton className="fh-navMenuDrawner" edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawnerVisible(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={isDrawnerVisible} onClose={() => setIsDrawnerVisible(false)} className="fh-drawner">
                        <Nav></Nav>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
