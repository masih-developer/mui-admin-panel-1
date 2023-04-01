import React from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import SideBarWidth from "../../data/SideBarWidth";
import {
    Home as HomeIcon,
    ShowChart as ShowChartIcon,
    Person2Outlined as Person2OutlinedIcon,
    PersonAddOutlined as PersonAddOutlinedIcon,
    Inventory2Outlined as Inventory2OutlinedIcon,
    AttachMoneyOutlined as AttachMoneyOutlinedIcon,
    ReportGmailerrorredOutlined as ReportGmailerrorredOutlinedIcon,
    EmailOutlined as EmailOutlinedIcon,
    DynamicFeedOutlined as DynamicFeedOutlinedIcon,
    MessageOutlined as MessageOutlinedIcon,
    ManageAccountsOutlined as ManageAccountsOutlinedIcon,
} from "@mui/icons-material";

import { NavLink as RouterNavLink } from "react-router-dom";

const DrawersContent = (
    <>
        <Toolbar>
            <Typography component="h2" variant="h2">
                Cms Panel
            </Typography>
        </Toolbar>
        <Box p="20px">
            <Box>
                <Typography sx={{ color: "grey.500", fontSize: "14px" }}>Dashboard</Typography>
                <List disablePadding sx={{ mb: "20px", ml: "10px" }}>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton
                            component={RouterNavLink}
                            to="/"
                            sx={{
                                borderRadius: "5px",
                                p: "0",
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Analytics" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sales" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Typography sx={{ color: "grey.500", fontSize: "14px" }}>Quick Menu</Typography>
                <List disablePadding sx={{ mb: "20px", ml: "10px" }}>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton
                            component={RouterNavLink}
                            to="/users"
                            sx={{ borderRadius: "5px", p: "0" }}
                        >
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <Person2OutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton
                            component={RouterNavLink}
                            to="/newuser"
                            sx={{ borderRadius: "5px", p: "0" }}
                        >
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <PersonAddOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="New User" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton
                            component={RouterNavLink}
                            to="/products"
                            sx={{ borderRadius: "5px", p: "0" }}
                        >
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <Inventory2OutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Products" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <AttachMoneyOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Transactions" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <ReportGmailerrorredOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Reports" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Typography sx={{ color: "grey.500", fontSize: "14px" }}>Notifications</Typography>
                <List disablePadding sx={{ mb: "20px", ml: "10px" }}>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <EmailOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Mail" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <DynamicFeedOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Feedback" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <MessageOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Message" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <Typography sx={{ color: "grey.500", fontSize: "14px" }}>Staff</Typography>
                <List>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <ManageAccountsOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Analytics" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disableGutters disablePadding>
                        <ListItemButton sx={{ borderRadius: "5px", p: "0" }}>
                            <ListItemIcon sx={{ minWidth: "unset", mr: "10px" }}>
                                <ReportGmailerrorredOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Reports" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    </>
);

const SideBar = (props) => {
    return (
        <Box
            component="nav"
            sx={{ width: { md: SideBarWidth }, flexShrink: { sm: 0 }, borderRight: "none" }}
        >
            <Drawer
                variant="temporary"
                open={props.isOpen}
                onClose={() => props.onCheck()}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: SideBarWidth },
                }}
            >
                {DrawersContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: SideBarWidth },
                    "& .MuiDrawer-paperAnchorLeft": {
                        borderRight: "none",
                    },
                }}
                open
            >
                {DrawersContent}
            </Drawer>
        </Box>
    );
};

export default SideBar;
