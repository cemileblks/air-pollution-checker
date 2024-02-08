import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer(){
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Box component="footer" bgcolor="text.secondary" color="white" p={2}>
        <section className="text-center text-lg-start footer">
        <div className="text-center p-3 footer-title">
          © {currentYear} Team-8
        </div>
        </section>
      </Box>
    </footer>
  )
}
export default Footer;
