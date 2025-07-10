"use client";

import { Alert, AlertTitle, Typography } from "@mui/material";

export default function BackendNotice() {
  return (
    <Alert severity="error" variant="filled" sx={{ borderRadius: 0 }}>
      <AlertTitle>Backend Notice</AlertTitle>
      <Typography>
        {
          " We're currently facing backend issues. Some features like sign up & login may not work temporarily."
        }
      </Typography>
    </Alert>
  );
}
