import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import { useRouter } from "next/router";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ForgotComponent from "./ForgotComponent";

const cx = classNames.bind(styles);

const AuthComponent = () => {
  const router = useRouter();
  return (
    <>
      <div className={cx(["layout-wrapper"])}>
        {router.pathname === "/auth/login" ? (
          <LoginComponent />
        ) : router.pathname === "/auth/register" ? (
          <RegisterComponent />
        ) : (
          <ForgotComponent />
        )}
      </div>
    </>
  );
};

export default AuthComponent;
