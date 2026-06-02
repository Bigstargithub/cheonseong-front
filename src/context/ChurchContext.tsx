"use client";

import { createContext, useContext } from "react";
import type { ChurchConfig } from "@/churches/types";
import churchConfig from "@/churches/config";

const ChurchContext = createContext<ChurchConfig>(churchConfig);

export function ChurchProvider({
  config,
  children,
}: {
  config: ChurchConfig;
  children: React.ReactNode;
}) {
  return (
    <ChurchContext.Provider value={config}>{children}</ChurchContext.Provider>
  );
}

export function useChurch(): ChurchConfig {
  return useContext(ChurchContext);
}
