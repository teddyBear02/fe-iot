import React from "react";
import { Button, Form, Input, Flex, Row, Col, notification } from "antd/lib";
import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import { useAppDispatch } from "@/stores";
import { login } from "@/stores/auth/auth.actions";
import { PayloadLogin } from "@/models";
import { unwrapResult } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

const LoginComponent = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = (payload: PayloadLogin) => {
    dispatch(login(payload))
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: "Login success !!!",
        });
        router.push("/");
      })
      .catch((error) => {
        notification.error({
          message: error.message,
        });
      });
  };
  return (
    <>
      <div className={cx(["login-box"])}>
        <h1>Login</h1>
        <Form layout="vertical" onFinish={(payload) => handleLogin(payload)}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your user name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Flex
            flex={"center"}
            justify="center"
            style={{
              marginTop: 32,
            }}
          >
            <Button
              htmlType="submit"
              type="primary"
              style={{
                width: 240,
              }}
            >
              Login
            </Button>
          </Flex>

          <Row
            gutter={24}
            style={{
              marginTop: 32,
            }}
          >
            <Col span={12}>
              <Link href={"/auth/forgot-pass"} className={cx(["link-login"])}>
                Forgot password ?
              </Link>
            </Col>
            <Col
              span={12}
              style={{
                textAlign: "right",
              }}
            >
              <Link href={"/auth/register"} className={cx(["link-login"])}>
                Register
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default LoginComponent;
