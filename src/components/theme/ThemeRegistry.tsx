"use client";

import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "@/lib/emotionCache";
import { useServerInsertedHTML } from "next/navigation";
import React from "react";
import { getTheme } from "@/lib/theme";

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [emotionCache] = React.useState(() => clientSideEmotionCache);
  const theme = getTheme("light");

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`css ${Object.keys(emotionCache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(emotionCache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
