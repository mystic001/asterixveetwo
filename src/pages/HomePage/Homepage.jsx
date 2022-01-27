import React from 'react'
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider , useTheme } from '@mui/material/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

function Homepage() {
    const tim = useTheme();
    const matches = useMediaQuery(tim.breakpoints.up("md"));


    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" elevation={0}
        color={"transparent"}>
        <Toolbar>
          
          <Typography variant="h6"
            color="#00B9FF"
            noWrap
            sx={{
              fontWeight: "bold",
              fontSize: 26,
              flexWrap: "wrap",
              flexGrow: 1,
            }}>
            Asterix
          </Typography>

          {matches ? <> </> : <></>}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
}

export default Homepage
