import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
const DashboardComponent = () => {
  return (
    <Box m={1} display="flex" justifyContent="flex-left">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back
      </Typography>
    </Box>
  );
};

export default DashboardComponent;
