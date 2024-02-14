import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import { useNavigate, useLocation } from 'react-router-dom';

function handleClick(event) {
  const navigate = useNavigate();
  event.preventDefault();
  navigate('/home')
}

function Breadcrumb(){
  let cityName = ''
  const location = useLocation();
  // Convert the empty space
  const decodedPath = decodeURIComponent(location.pathname);
  if (decodedPath.includes('/city/')){
    cityName = decodedPath.split('/city/' || '')
  } else{
    cityName = decodedPath.split('/' || '')
  }
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/home" onClick={handleClick}>
      HOME
    </Link>,
    <Typography key="2" color="text.primary">
      {cityName}
    </Typography>,
  ];
  return(
    <Stack spacing={2}>
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{margin: '20px ! important'}}
    >
      {breadcrumbs}
    </Breadcrumbs>
  </Stack>
  )
}

export default Breadcrumb
