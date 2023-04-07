import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import SideBar from "./components/common/SideBar";
import SideBarWidth from "./data/SideBarWidth";
import Header from "./components/common/Header";

const App = () => {
    const router = useRoutes(routes);

    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    const navShowHandler = () => {
        setNavbarIsOpen((prev) => {
            return !prev;
        });
    };

    const closeSidBareHandler = () => {
        setNavbarIsOpen((prev) => {
            return !prev;
        });
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header onShow={navShowHandler} />
                <Box display="flex">
                    <SideBar isOpen={navbarIsOpen} onCheck={closeSidBareHandler} />
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            width: `calc(100% - ${SideBarWidth}px)`,
                            mt: "10px",
                        }}
                    >
                        <Toolbar />
                        <Container>{router}</Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
