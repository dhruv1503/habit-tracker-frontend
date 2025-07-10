"use client";

import { Card, CardContent, Typography, Grid, Box, Chip, Divider, Stack } from "@mui/material";
import data from "@/data/progress.json";

const statusColors = {
  done: { bg: "#e8f5e9", color: "#2e7d32" },
  "in progress": { bg: "#fff3e0", color: "#ef6c00" },
  todo: { bg: "#ede7f6", color: "#6a1b9a" },
};

export default function ProgressPage() {
  return (
    <Box px={4} py={6}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        FitMentor Build Progress
      </Typography>
      <Grid direction="column" alignItems="center" container spacing={4}>
        {data.data.map((release) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={release.version}>
            <Card elevation={4} sx={{ maxWidth: "400px" }}>
              <Box
                sx={{
                  background: "linear-gradient(to right, #8e2de2, #4a00e0)",
                  color: "#fff",
                  px: 2,
                  py: 2,
                  maxWidth: "400px",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {release.version.toUpperCase()}
                </Typography>
                <Typography variant="subtitle2">{release.title}</Typography>
              </Box>

              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="body1" color="text.secondary" component="div">
                    {release.summary}
                  </Typography>
                  <Chip
                    label={release.status}
                    sx={{
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      backgroundColor: statusColors[release.status].bg,
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      color: statusColors[release.status].color,
                      textTransform: "capitalize",
                    }}
                    size="small"
                  />
                </Stack>

                <Divider sx={{ my: 1 }} />

                <Stack spacing={2}>
                  {release.changes.map((change, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: 2,
                        p: 2,
                        borderLeft: `4px solid ${
                          change.type === "feature"
                            ? "#4caf50"
                            : change.type === "fix"
                              ? "#f44336"
                              : change.type === "improvement"
                                ? "#2196f3"
                                : "#9c27b0"
                        }`,
                      }}
                    >
                      <Typography fontWeight={600} component="div">
                        {change.title}{" "}
                        <Chip label={change.type} size="small" sx={{ ml: 1, fontSize: "0.7rem" }} />
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {change.description}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
