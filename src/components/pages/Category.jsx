import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const categoryButton = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          width: 56,
          height: 56,
          margin: '0 25px'
        }
      }
    }
  }
})

const categoryButtons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

function Category(){
  return(
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup size="large" aria-label="Large button group">
          <ThemeProvider theme={categoryButton}>
            {categoryButtons}
          </ThemeProvider>
        </ButtonGroup>
      </Box>
  )
}

export default Category
