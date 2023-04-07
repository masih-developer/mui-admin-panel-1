import React from "react";
import {
    Avatar,
    Box,
    Button,
    Grid,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
    TextField,
    MenuItem,
} from "@mui/material";
import Chart from "../components/common/Chart";
import { productChData } from "../data/ChartsData";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";

const Product = () => {
    return (
        <Box pb={3}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography component="h2" variant="h2">
                    Product
                </Typography>
                <Button variant="contained">Create</Button>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <Box boxShadow={25} p={3}>
                        <Chart title="Sale In Month" data={productChData} />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Box boxShadow={25} p={3}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                mb: 2,
                            }}
                        >
                            <Avatar
                                sx={{ width: 200, height: 200 }}
                                src={`/assets/images/products/01.png`}
                            />
                            <Typography component="h4" variant="h4">
                                Dell laptop
                            </Typography>
                        </Box>
                        <List>
                            <ListItem disableGutters disablePadding>
                                <ListItemText primary="ID:" />
                                <ListItemSecondaryAction>
                                    <Typography sx={{ color: "text.disabled" }}>132</Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <ListItemText primary="Name:" />
                                <ListItemSecondaryAction>
                                    <Typography sx={{ color: "text.disabled" }}>
                                        Dell laptop
                                    </Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <ListItemText primary="Sale:" />
                                <ListItemSecondaryAction>
                                    <Typography sx={{ color: "text.disabled" }}>$90000</Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <ListItemText primary="Active:" />
                                <ListItemSecondaryAction>
                                    <Typography sx={{ color: "text.disabled" }}>Yes</Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem disableGutters disablePadding>
                                <ListItemText primary="In Stock:" />
                                <ListItemSecondaryAction>
                                    <Typography sx={{ color: "text.disabled" }}>No</Typography>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        boxShadow={25}
                        p={3}
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", sm: "space-between" },
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Box
                            component="form"
                            sx={{
                                "& > :not(style)": {
                                    m: 1,
                                    width: "30ch",
                                    display: "flex",
                                    flexDirection: "column",
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-basic"
                                label="Standard"
                                variant="standard"
                                size="small"
                            />
                            <TextField
                                select
                                id="standard-basic"
                                label="In Stock"
                                variant="standard"
                                size="small"
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </TextField>
                            <TextField
                                select
                                id="standard-basic"
                                label="Active"
                                variant="standard"
                                size="small"
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </TextField>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <Avatar
                                sx={{ width: 200, height: 200 }}
                                src="/assets/images/products/01.png"
                            />
                            <Box component="input" type="file" display="none" />
                            <Button startIcon={<CloudUploadIcon />} variant="contained">
                                Upload (Edit)
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Product;
