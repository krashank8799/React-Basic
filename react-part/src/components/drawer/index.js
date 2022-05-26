import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import ProfileIcon from '@mui/icons-material/Photo';
import LogoutIcon from '@mui/icons-material/Logout';
import OrderIcon from '@mui/icons-material/ListAltSharp';
import PassbookIcon from '@mui/icons-material/BookSharp';





import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return ( <
        Box sx = {
            { display: 'flex' }
        } >
        <
        CssBaseline / >
        <
        AppBar position = "fixed"
        open = { open } >
        <
        Toolbar >
        <
        IconButton color = "inherit"
        aria label = "open drawer"
        onClick = { handleDrawerOpen }
        edge = "start"
        sx = {
            { mr: 2, ...(open && { display: 'none' }) }
        } >
        <
        MenuIcon / >
        <
        /IconButton> <
        Typography variant = "h6"
        noWrap component = "div" >
        Bhukkad 's Place < /
        Typography > < /
        Toolbar > <
        /AppBar> <
        Drawer sx = {
            {
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }
        }
        variant = "persistent"
        anchor = "left"
        open = { open } >
        <
        DrawerHeader >
        <
        IconButton onClick = { handleDrawerClose } > { theme.direction === 'ltr' ? < ChevronLeftIcon / > : < ChevronRightIcon / > } <
        /IconButton> < /
        DrawerHeader > <
        Divider / >
        <
        List >
        <
        Link to = "/" >
        <
        ListItem disablePadding >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        HomeIcon / > <
        /ListItemIcon> <
        ListItemText primary = "Home" /
        >
        <
        /
        ListItemButton > <
        /ListItem>  < /
        Link > < /
        List >
        <
        Divider / >

        <
        List >
        <
        Link to = "/about" >
        <
        ListItem disablePadding >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        AboutIcon / > <
        /ListItemIcon> <
        ListItemText primary = "About" /
        >
        <
        /
        ListItemButton > <
        /ListItem> < /
        Link > < /
        List >
        <
        Divider / >
        <
        List >
        <
        Link to = "/order" >
        <
        ListItem disablePadding >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        OrderIcon / > <
        /ListItemIcon> <
        ListItemText primary = "Orders" /
        >
        <
        /
        ListItemButton > <
        /ListItem> < /
        Link > < /
        List >
        <
        Divider / >
        <
        List >
        <
        Link to = "/passbook" >
        <
        ListItem disablePadding >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        PassbookIcon / > <
        /ListItemIcon> <
        ListItemText primary = "Passbook" /
        >
        <
        /
        ListItemButton > <
        /ListItem> < /
        Link > < /
        List >
        <
        Divider / >
        <
        List >
        <
        Link to = "/profile" >
        <
        ListItem disablePadding >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        ProfileIcon / > <
        /ListItemIcon> <
        ListItemText primary = "Profile" /
        >
        <
        /
        ListItemButton > <
        /ListItem> < /
        Link > < /
        List >
        <
        Divider / >
        <
        List >
        <
        Link to = "/logout" >
        <
        ListItem disablePadding >
        <
        ListItemButton >
        <
        ListItemIcon >
        <
        LogoutIcon / > <
        /ListItemIcon> <
        ListItemText primary = "Logout" /
        >
        <
        /
        ListItemButton > <
        /ListItem> < /
        Link > < /
        List >
        <
        Divider / > < /
        Drawer > <
        Main open = { open } >
        <
        DrawerHeader / > { props.children } <
        /
        Main > <
        /Box>
    );
}