import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useSearch } from '../../context/SearchContext'
import { useAuth } from '../../context/AuthContext'
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomInput from '../input/Input';



const Header = () => {

  const { searchQuery, setSearchQuery } = useSearch() 

  const {logout} = useAuth()
  

  return (
      <>
   <AppBar position="static" sx={{ backgroundColor: "#1976d2", p: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <Typography variant="h6">My App</Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 2, px: 1 }}>
          <SearchIcon color="action" />
          <CustomInput
            label=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Number (eg.1)"
          />
        </Box>

        {/* Logout Button */}
        <Button variant="contained" color="error" startIcon={<LogoutIcon />} onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header