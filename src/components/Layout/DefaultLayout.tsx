import { useEffect } from "react";
import PrivateLayout from "./PrivateLayout";
import { useSelector } from "react-redux";
import { selectAuth } from "@/stores/auth/auth.slice";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/stores";
import { LayoutProps } from "@/models";
import classNames from "classnames/bind";
import { storageGet } from "@/helpers/appStorage";
import { StorageKey } from "@/constants";

const DefaultLayout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const { push, query, pathname } = useRouter();

  const { user } = useSelector(selectAuth);

  useEffect(() => {
    const userStr = storageGet(StorageKey.USER);
    if (!user) {
      if (userStr && userStr.toString() !== "undefined") {
        const userData = JSON.parse(userStr);
        if (!userData) return;
      } else {
        push("/auth/login");
      }
    }
  }, [user]);

  return (
    <>
      <PrivateLayout>{children}</PrivateLayout>
    </>
  );
};

export default DefaultLayout;
