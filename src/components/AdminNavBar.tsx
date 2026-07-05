import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function AdminNavBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#424242' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/admin/add-product">
            Add Product
          </Button>
          <Button color="inherit" component={Link} to="/admin/view-update">
            Stocks
          </Button>
          <Button color="inherit" component={Link} to="/admin/order-details">
            Order Details
          </Button>
          <Button color="inherit" component={Link} to="/">
            shopping
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AdminNavBar