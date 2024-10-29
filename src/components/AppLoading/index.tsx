import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd/lib";

const AppLoading = () => {
  return (
    <Flex align="center" gap="middle">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
  );
};

export default AppLoading;
