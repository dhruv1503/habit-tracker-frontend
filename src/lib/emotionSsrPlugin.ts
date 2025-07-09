"use server";

import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./emotionCache";
import { cache } from "react";

export const getSsrStyles = cache(() => {
  const cacheInstance = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cacheInstance);
  return { extractCriticalToChunks, constructStyleTagsFromChunks, cache: cacheInstance };
});
