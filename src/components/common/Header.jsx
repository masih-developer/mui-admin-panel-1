import React from "react";
import { AppBar, Toolbar, IconButton, Box, Avatar, Badge } from "@mui/material";
import {
    Menu as MenuIcon,
    NotificationsNone as NotificationsNoneIcon,
    Language as LanguageIcon,
    Settings as SettingsIcon,
} from "@mui/icons-material";
import SideBarWidth from "../../data/SideBarWidth";
import theme from "../../theme";

const Header = (props) => {
    const showSidebar = () => {
        props.onShow();
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${SideBarWidth}px)` },
                bgcolor: theme.palette.background.default,
                boxShadow: "unset",
                ml: { md: `${SideBarWidth}px` },
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box>
                    <IconButton
                        onClick={showSidebar}
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Box display="flex" gap="15px">
                    <Box display="flex" gap="5px">
                        <IconButton size="small">
                            <Badge badgeContent={5} color="error">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="small">
                            <Badge badgeContent={2} color="error">
                                <LanguageIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="small">
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                    <Avatar src="/assets/images/person/01.jpg" />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
