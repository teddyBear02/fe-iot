import { CookiesKey, StorageKey } from "@/constants";
import { cookieGet, storageGet } from "@/helpers/appStorage";
import { LayoutProps } from "@/models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrivateLayout = ({ children }: LayoutProps) => {
  const { replace, locale, asPath } = useRouter();

  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const tokenStorage = storageGet(StorageKey.TOKEN);
    const tokenCookie = cookieGet(CookiesKey.TOKEN);

    if (!tokenStorage && !tokenCookie) {
      setAuthenticated(false);
      if (!asPath.includes("auth"))
        replace("/auth/login", "/auth/login", { locale });
    } else {
      setAuthenticated(true);
    }
  }, [authenticated]);

  if (!authenticated) return <div />;

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PrivateLayout;
