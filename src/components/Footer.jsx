import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer(){
  const currentYear = new Date().getFullYear();
  return (
      <Box component="footer" bgcolor="text.secondary" color="white" className="footer" p={2} sx={{background: '#1a1c21'}}>
        <section className="text-center text-lg-start">
        <div className="text-center p-3 footer-title">
          © {currentYear} Team-8
        </div>
        </section>
      </Box>
  )
}
export default Footer;
