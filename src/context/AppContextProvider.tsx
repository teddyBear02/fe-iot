import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ContextProvider } from ".";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const valueContext = {
    loading,
    setLoading,
  };

  return <ContextProvider value={valueContext}>{children}</ContextProvider>;
};
