import DefaultLayout from "@/components/Layout/DefaultLayout";
import HeadAppTitle from "@/components/HeadAppTitle";
import { NextPageWithLayout } from "@/models";
import RealTimeComponent from "@/components/Home";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <HeadAppTitle title="Home" />
      <RealTimeComponent />
    </>
  );
};

// HomePage.Layout = DefaultLayout;

export default HomePage;
