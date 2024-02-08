import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Cities(){
  return (
    <Box component="main" flexGrow={1}>
      <section className="main_content">
      <Container>
        {/* Main content goes here */}
        <Typography variant="h2">Cities</Typography>
        {/* Add more content */}
      </Container>
      </section>
    </Box>
  )
}
export default Cities;
