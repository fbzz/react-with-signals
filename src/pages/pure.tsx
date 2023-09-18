import { useState } from "react";
import { CustomButton } from "../components/Custom-button";
import { CustomCard } from "../components/Custom-card";
import { generateRandomAd, utilLog } from "../utils";

export interface Ad {
  text: string;
  link: AdLink;
}

export interface AdLink {
  label: string;
  url: string;
}

export const Pure = () => {
  utilLog("pure");
  const [bannerAd, setBannerAd] = useState<Ad>({
    text: "Welcome to our Signals 101",
    link: {
      label: "CLICK HERE!",
      url: "https://google.com",
    },
  });

  const generateNewAd = () => {
    setBannerAd(generateRandomAd());
  };

  return (
    <div>
      <CustomButton onClick={generateNewAd}>Re-render</CustomButton>
      <CustomCard {...bannerAd} />
    </div>
  );
};
