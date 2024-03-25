import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{backgroundColor: '#4E4F50'}}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <a href="/">Libreria Online</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
