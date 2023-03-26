import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getbaseCurrency } from 'Redux/selectors';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Divider, Tooltip } from '@mui/material';

export const Layout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const baseCurrency = useSelector(getbaseCurrency);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <CurrencyExchangeIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Currency converter
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem key="Home" onClick={handleCloseNavMenu} sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  }}>
                  <Typography textAlign="center" >Home</Typography>
                </MenuItem>
                <MenuItem key="Rates" onClick={handleCloseNavMenu} sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  }}>
                  <Typography textAlign="center">Rates</Typography>
                </MenuItem>
              </Menu>

            </Box>
            <CurrencyExchangeIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Cc
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to="/">Home</NavLink>
              </Button>
              <Button
                key="Rates"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <NavLink to="/rates">Rates</NavLink>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Your base currency">
                
                <Typography
              variant="h5"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              YBC: {baseCurrency}
            </Typography>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Your base currency">
              <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Your base currency: {baseCurrency}
            </Typography>
              
            </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Suspense fallback={<p>......</p>}>
        <Box component="main"  sx={{ backgroundColor: '#1A2027', margin: 0, height: '100%', maxWidth: '100%'}}>
          <Outlet />
        </Box>
      </Suspense>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography level="body3" sx={{ ml: 'auto', mr: 'auto', backgroundColor: 'inherit' }}>
        by Shlov ʕ·͡ᴥ·ʔ 2023
        </Typography>
      </Box>
    </>
  );
};
