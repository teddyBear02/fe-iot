import React from "react";
import classNames from "classnames/bind";
import { GetStaticProps } from "next";
import { Button, Result } from "antd/lib";

import styles from "@/styles/404.module.scss";

const cx = classNames.bind(styles);

const NotFoundPage = () => {
  return (
    <div className={cx("page-404")}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => (window.location.href = "/")}>
            {"back_home"}
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;
