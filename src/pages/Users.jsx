import React, { useState } from "react";
import { Avatar, Box, Typography, Link as MuiLink, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { usersRow } from "../data/ListOfUsers";
import { Link as RouterLink } from "react-router-dom";
import {
    ModeEditOutlineOutlined as ModeEditOutlineOutlinedIcon,
    DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
} from "@mui/icons-material";

const Users = () => {
    const [usersListRow, setUsersListRow] = useState(usersRow);

    const removeUserHandler = (userId) => {
        setUsersListRow(usersListRow.filter((user) => user.id !== userId));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "userName",
            headerName: "User",
            width: 250,
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
                            <Typography color="text.primary">{params.row.userName}</Typography>
                        </Box>
                    </MuiLink>
                );
            },
        },
        { field: "status", headerName: "status", width: 150 },
        { field: "transaction", headerName: "transAction", width: 150 },
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
                            size="small"
                            component={RouterLink}
                            to={`/users/${params.row.id}`}
                            sx={{ color: "info.light" }}
                        >
                            <ModeEditOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            size="small"
                            onClick={() => removeUserHandler(params.row.id)}
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
                rows={usersListRow}
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

export default Users;
