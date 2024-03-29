import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', marginTop: 'auto', backgroundColor: '#4E4F50'}}>
      <Typography variant="body2" color="white" align="center">
        &copy; {new Date().getFullYear()} Libreria Online - Fatto col ❤️ da Filippo Neri. - <a style={{color: 'blue'}} href='/more'>ALTRO</a>
      </Typography>
    </footer>
  );
};

export default Footer;
