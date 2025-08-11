import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import zenlogo from "../assets/zenlogo.png";
import { Paper, Stack } from '@mui/material';

function NavbarComponent() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#EFF9F9', px: 4 }}>
      <Toolbar disableGutters>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
          <img src={zenlogo} alt="logo" width="30" height="30" />
          <Typography variant="h6" component="div" sx={{ ml: 2, fontWeight: 'bold', color: 'black' }}>
            ZEN MERAKI
          </Typography>
        </Box>

        {/* Center Navigation */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <Button href="#home" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'black' }}>
            Home
          </Button>

          {/* Dropdown  */}
          <Box
            sx={{
              position: 'relative',
              mx: 2,
              '&:focus-within .dropdown-content': {
                display: 'block'
              }
            }}
          >
            {/* Expertise */}
            <Button
              endIcon={<ExpandMoreIcon />}
              sx={{
                fontWeight: 'bold',
                fontSize: '1.25rem',
                color: 'black',
                textTransform: 'none'
              }}
            >
              Expertise
            </Button>

            {/* Dropdown Content */}
            <Paper
              className="dropdown-content"
              elevation={3}
              sx={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                mt: 1,
                minWidth: 250,
                zIndex: 10,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                p: 1
              }}
            >
              <Stack spacing={1}>
                <MenuItem sx={{ borderTop: '1px solid black', borderBottom: '1px solid black' }} component="a" href="#design">
                  Shopify App Development
                </MenuItem>
                <Button href="#development" sx={{ justifyContent: 'flex-start', color: 'black' }}>
                  Custom Shopify App Development
                </Button>
                <Button href="#custom" sx={{ justifyContent: 'flex-start', color: 'black' }}>
                  Custom App Development
                </Button>
                <Button href="#website" sx={{ justifyContent: 'flex-start', color: 'black' }}>
                  Website Development
                </Button>
                <Button href="#digital" sx={{ justifyContent: 'flex-start', color: 'black' }}>
                  Digital Marketing
                </Button>
                <Button href="#ecom" sx={{ justifyContent: 'flex-start', color: 'black' }}>
                  E-Commerce Account Management
                </Button>
              </Stack>
            </Paper>
          </Box>

          <Button href="#about" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'black' }}>
            About Us
          </Button>
          <Button href="#apps" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'black' }}>
            Apps
          </Button>
          <Button href="#projects" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'black' }}>
            Projects
          </Button>
          <Button href="#careers" sx={{ fontWeight: 'bold', fontSize: '1.25rem', color: 'black' }}>
            Careers
          </Button>
        </Box>

        {/* Contact Button */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: '#16726d', ml: 2 }}>
          <Button
            href="#contact"
            variant="contained"
            sx={{
              fontWeight: 'bold',
              px: 4,
              boxShadow: 'none',
              backgroundColor: '#16726d',
              '&:hover': {
                backgroundColor: '#145c58',
                boxShadow: 'none',
              },
            }}
          >
            CONTACT US
          </Button>
        </Box>


      </Toolbar>
    </AppBar>
  );
}

export default NavbarComponent;



