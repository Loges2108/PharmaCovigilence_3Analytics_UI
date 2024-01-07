// Import necessary components and interfaces

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Box,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavBarState, NavbarMenu } from '../interface/interface';


// Class component for the navigation bar
class NavBar extends Component<{}, NavBarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

   // Function to toggle the drawer open and close
  toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    this.setState({ drawerOpen: open });
  };

  render() {
    // Array of menu items with their respective names and URLs
    const menus: NavbarMenu[] = [
      {
        name: 'Home',
        url: '/home',
      },
      {
        name: 'Products',
        url: '/products',
      },
      {
        name: 'About Us',
        url: '/aboutus',
      },
      {
        name: 'Services',
        url: '/services',
      },
      {
        name: 'Contact Us',
        url: '/contactus',
      },
    ];

    return (
      <Box paddingBottom={4}>
        {/* AppBar containing the navigation */}
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center">
              <Box padding={1}>
                <img
                  src="https://5.imimg.com/data5/AJ/RY/ND/SELLER-3092624/aavit-mulivitamins-tablets.png"
                  alt="Logo"
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              </Box>
              <Typography variant="h4" style={{ margin: '0' }}>
                PharmaCovigilence
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              '& .desktop': {
                display: 'flex',
                '& > *': {
                  marginLeft: '10px',
                },
              },
              '& .mobile': {
                display: 'none',
              },
              '@media (max-width: 960px)': {
                '& .desktop': {
                  display: 'none',
                },
                '& .mobile': {
                  display: 'flex',
                },
              },
            }}>
              <Box className="desktop">
                {menus.map((menu, index) => (
                  <NavLink
                    key={index}
                    to={menu.url}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <Button color="inherit">
                      {menu.name}
                    </Button>
                  </NavLink>
                ))}
              </Box>
               {/* Icon for opening the mobile drawer */}
              <Box className="mobile">
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={this.toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                 {/* Drawer component for mobile view */}
                <Drawer anchor="right" open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
              paddingTop: 2,
            }}
            role="presentation"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List>
              {menus.map((menu, index) => (
                <NavLink key={index} to={menu.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton onClick={() => this.setState({ drawerOpen: false })}>
                    <ListItemText primary={menu.name} />
                  </ListItemButton>
                </NavLink>
              ))}
            </List>
          </Box>
        </Drawer>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
         {/* Extra toolbar for space after the AppBar */}
        <Toolbar />
      </Box>
    );
  }
}

export default NavBar;
