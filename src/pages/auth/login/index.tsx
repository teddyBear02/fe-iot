import React from "react";
import HeadAppTitle from "@/components/HeadAppTitle";
import AuthComponent from "@/components/Auth/AuthComponent";

const LoginPage = () => {
  return (
    <>
      <HeadAppTitle title="Login" />
      <AuthComponent />
    </>
  );
};

export default LoginPage;
