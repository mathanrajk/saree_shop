import React from 'react'
import { Box } from '@mui/material'
import AdminNavBar from '../components/AdminNavBar'
import { Outlet } from 'react-router-dom'

function AdmiPage() {
  return (
    <Box>
      <AdminNavBar />
      {/* The main content area for admin pages */}
      <Box component="main" sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default AdmiPage