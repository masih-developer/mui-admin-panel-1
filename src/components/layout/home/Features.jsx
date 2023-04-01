import { Box, Typography } from "@mui/material";
import React from "react";

const Features = ({ title, price, swell, icon }) => {
    return (
        <Box
            sx={{
                p: 3,
                borderRadius: "10px",
                boxShadow: 25,
            }}
        >
            <Typography component="h5" variant="h5" fontWeight="normal">
                {title}
            </Typography>
            <Box display="flex" alignItems="center" my="15px">
                <Typography component="h2" variant="h2" mr="20px">
                    ${price}
                </Typography>
                <Box display="flex" alignItems="center">
                    <Typography component="h6" variant="h6" mr="5px">
                        {swell >= 0 ? `+${swell}` : swell}
                    </Typography>
                    {icon}
                </Box>
            </Box>
            <Typography>Compared to last month</Typography>
        </Box>
    );
};

export default Features;
