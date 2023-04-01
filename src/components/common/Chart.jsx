import React from "react";
import { Box, Typography } from "@mui/material";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";

const Chart = ({ title, data, grid }) => {
    return (
        <Box display="flex" flexDirection="column" gap={2} width="100%">
            {title && (
                <Typography component="h4" variant="h4">
                    {title}
                </Typography>
            )}
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#5550bd" />
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default Chart;
