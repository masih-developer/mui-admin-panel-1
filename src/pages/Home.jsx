import React from "react";
import {
    Avatar,
    Box,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Features from "../components/layout/home/Features";
import Chart from "../components/common/Chart";
import { homeChData } from "../data/ChartsData";
import {
    ArrowUpward as ArrowUpwardIcon,
    ArrowDownward as ArrowDownwardIcon,
    RemoveRedEye as RemoveRedEyeIcon,
} from "@mui/icons-material";
import { usersList } from "../data/ListOfUsers";

const Home = () => {
    return (
        <Box pb={3}>
            <Box component="section">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Features
                            title="Revanue"
                            price={2415}
                            swell={-11.4}
                            icon={<ArrowDownwardIcon sx={{ color: "error.light" }} />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Features
                            title="Sales"
                            price={3100}
                            swell={-5.2}
                            icon={<ArrowDownwardIcon sx={{ color: "error.light" }} />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Features
                            title="Cost"
                            price={1800}
                            swell={2.4}
                            icon={<ArrowUpwardIcon sx={{ color: "success.light" }} />}
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box
                component="section"
                my={3}
                sx={{
                    boxShadow: 25,
                    p: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "10px",
                }}
            >
                <Chart title="User Analytics" data={homeChData} grid />
            </Box>
            <Box component="section">
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={4}>
                        <Box p={3} boxShadow={25} borderRadius="10px">
                            <Typography component="h4" variant="h4" mb={3}>
                                New Joins Members
                            </Typography>
                            <List
                                disablePadding
                                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                            >
                                {usersList.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        sx={{
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                        disableGutters
                                        disablePadding
                                    >
                                        <ListItemText
                                            primary={<Avatar src="./assets/images/person/01.jpg" />}
                                        />
                                        <ListItemText
                                            sx={{ textAlign: "center" }}
                                            primary={item.name}
                                            secondary={item.job}
                                        />
                                        <ListItemText
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                alignItems: "center",
                                            }}
                                        >
                                            <IconButton color="info">
                                                <RemoveRedEyeIcon fontSize="small" />
                                            </IconButton>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Box p={3} boxShadow={25} borderRadius="10px">
                            <Typography component="h4" variant="h4" mb={3}>
                                Last TransActions
                            </Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                Customer
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                Date
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                Amount
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none" }}>
                                                Status
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {usersList.map((cell) => (
                                            <TableRow key={cell.id}>
                                                <TableCell
                                                    sx={{ py: 3, px: 2, borderBottom: "none" }}
                                                >
                                                    <Box
                                                        display="flex"
                                                        justifyContent="flex-start"
                                                        alignItems="center"
                                                        gap={2}
                                                    >
                                                        <Avatar src="./assets/images/person/01.jpg" />
                                                        <Typography>{cell.name}</Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell
                                                    sx={{ py: 3, px: 2, borderBottom: "none" }}
                                                >
                                                    {cell.job}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ py: 3, px: 2, borderBottom: "none" }}
                                                >
                                                    {cell.registerDate}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ py: 3, px: 2, borderBottom: "none" }}
                                                >
                                                    {cell.status === "Approved" ? (
                                                        <Typography
                                                            sx={{
                                                                bgcolor: "rgba( 76 , 175 , 80,.1 )",
                                                                color: "success.light",
                                                                width: "fit-content",
                                                                p: 1,
                                                                fontSize: "14px",
                                                                borderRadius: "10px",
                                                            }}
                                                        >
                                                            Approved
                                                        </Typography>
                                                    ) : cell.status === "Declined" ? (
                                                        <Typography
                                                            sx={{
                                                                bgcolor: "rgba( 239 , 83 , 80,.1 )",
                                                                color: "error.light",
                                                                width: "fit-content",
                                                                p: 1,
                                                                fontSize: "14px",
                                                                borderRadius: "10px",
                                                            }}
                                                        >
                                                            Declined
                                                        </Typography>
                                                    ) : cell.status === "Pending" ? (
                                                        <Typography
                                                            sx={{
                                                                bgcolor: "rgba( 3 , 169 , 244,.1)",
                                                                color: "info.light",
                                                                width: "fit-content",
                                                                p: 1,
                                                                fontSize: "14px",
                                                                borderRadius: "10px",
                                                            }}
                                                        >
                                                            Pending
                                                        </Typography>
                                                    ) : (
                                                        <Typography>{undefined}</Typography>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
