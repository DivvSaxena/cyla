"use client";

import { useEffect } from "react";
import { initDataFast } from "datafast";
import { siteConfig } from "@/src/config/site";

let initialized = false;

export function DataFastAnalytics() {
  useEffect(() => {
    if (initialized) return;
    initialized = true;

    void initDataFast({
      websiteId: siteConfig.dataFastWebsiteId,
      autoCapturePageviews: true,
    });
  }, []);

  return null;
}
