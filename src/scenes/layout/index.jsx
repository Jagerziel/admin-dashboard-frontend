import React, { useState } from 'react'
import { Box , useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar"
import { useGetUserQuery } from 'state/api'

const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width: 600px)")
  const [ isSidebarOpen , setIsSidebarOpen ] = useState(true)
  const userId = useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)

  return (
    <Box display={ isNotMobile ? "flex" : "block" } width="100%" height="100%">
      <Sidebar 
        userData={ data || {} } // data passed with or operator to an object to ensure data is passed as a prop
        isNotMobile={ isNotMobile }
        drawerWidth="250px"
        isSidebarOpen={ isSidebarOpen }
        setIsSidebarOpen={ setIsSidebarOpen }
      />
      <Box flexGrow={1}>
        <Navbar 
          userData={ data || {} } // data passed with or operator to an object to ensure data is passed as a prop
          isSidebarOpen={ isSidebarOpen }
          setIsSidebarOpen={ setIsSidebarOpen }
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout