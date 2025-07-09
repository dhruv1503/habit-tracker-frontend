"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "@/lib/theme";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = getTheme("light");

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
