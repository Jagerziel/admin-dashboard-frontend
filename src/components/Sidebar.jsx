import React from 'react'
import { 
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material'
import { 
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined 
} from '@mui/icons-material'
import { useEffect , useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import profileImage from "assets/space_img.jpg"
import { configureStore } from '@reduxjs/toolkit'

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNotMobile
}) => {
    const { pathname } = useLocation()
    const [ active , setActive ] = useState("")
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])


    return (
        <div>Sidebar</div>
    )
}

export default Sidebar