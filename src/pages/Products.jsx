import React, { useState } from "react";
import { Avatar, Box, Typography, Link as MuiLink, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { listOfProducts } from "../data/products";
import { Link as RouterLink } from "react-router-dom";
import {
    ModeEditOutlineOutlined as ModeEditOutlineOutlinedIcon,
    DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
} from "@mui/icons-material";

const Products = () => {
    const [productsItem, setProductsItem] = useState(listOfProducts);

    const removeProductHandler = (productId) => {
        setProductsItem(productsItem.filter((product) => product.id !== productId));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "name",
            headerName: "Name",
            width: 350,
            renderCell: (params) => {
                return (
                    <MuiLink component={RouterLink} to="/" underline="none">
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <Avatar src={params.row.avatar} />
                            <Typography color="text.primary">{params.row.name}</Typography>
                        </Box>
                    </MuiLink>
                );
            },
        },
        {
            field: "price",
            headerName: "Price",
            width: 150,
            renderCell: (params) => {
                return <Typography>${params.row.price}</Typography>;
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <IconButton
                            component={RouterLink}
                            to={`/product/${params.row.id}`}
                            size="small"
                            sx={{ color: "info.light" }}
                        >
                            <ModeEditOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            size="small"
                            onClick={() => removeProductHandler(params.row.id)}
                            sx={{ color: "error.light" }}
                        >
                            <DeleteOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Box>
                );
            },
        },
    ];
    return (
        <Box pb={3} sx={{ height: 394, width: "100%" }}>
            <DataGrid
                rows={productsItem}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};

export default Products;
