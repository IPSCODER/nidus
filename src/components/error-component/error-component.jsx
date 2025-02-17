import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ErrorComponent = ({ onRetry }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h5" color="error">
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Please try again later.
      </Typography>
      {onRetry && (
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default ErrorComponent;
