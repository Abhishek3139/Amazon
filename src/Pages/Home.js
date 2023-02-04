import { useContext } from "react";
import Box from "../Components/Box/Box";
import HoodiesList from "../Components/HoodiesList/HoodiesList";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import LocalShopCollection from "../Components/Local shops collection/LocalShopCollection";
import SignIn from "../Components/SignIn/SignIn";
import SingleBoxBanner from "../Components/SingleBoxBanner/SingleBoxBanner";
import TreandingList from "../Components/TreandingList/TreandingList";
import {
  BeautyCare,
  birthday,
  BOX_DATA,
  BOX_DATA_2,
  electronicsDevices,
  hoodiesData,
  LocalShopsCollectionData,
} from "../shared/constants";
import { focusContext } from "../context";
import Footer from "../Components/Footer/Footer";
import BackToTopBtn from "../Buttons/BackToTopBtn";
export const Home = () => {
  const { focusFn } = useContext(focusContext);
  return (
    <div onClick={focusFn}>
      <TreandingList />
      <ImageSlider />
      <div className="flexbox">
        <div className="subbox1">
          <Box data={BOX_DATA} />
          <SignIn />
        </div>
        <div className="subbox2">
          <Box data={BOX_DATA_2} />
        </div>
        <LocalShopCollection
          heading={"Refresh your home ambiance | Local shops collection"}
          link={"See all offers"}
          img={LocalShopsCollectionData}
        />
        <div style={{ display: "flex" }}>
          <SingleBoxBanner bd={birthday} />
          <Box data={electronicsDevices} />
        </div>
        <LocalShopCollection
          heading={"Frequently repurchased in Beauty & Personal Care"}
          img={BeautyCare}
        />
        <HoodiesList hd={hoodiesData} />
        <BackToTopBtn />
        <Footer />
      </div>
    </div>
  );
};
