import { CustomButton } from "../components/Custom-button";
import { CustomCard } from "../components/Custom-card";
import { generateRandomAd, utilLog } from "../utils";
import { useSignal } from "@preact/signals-react";

export interface Ad {
  text: string;
  link: AdLink;
}

export interface AdLink {
  label: string;
  url: string;
}

export const Signals = () => {
  utilLog("pure");
  const bannerAd = useSignal<Ad>({
    text: "Welcome to our Signals 101",
    link: {
      label: "CLICK HERE!",
      url: "https://google.com",
    },
  });

  const generateNewAd = () => {
    bannerAd.value = generateRandomAd();
  };

  return (
    <div>
      <CustomButton onClick={generateNewAd}>Re-render</CustomButton>
      <CustomCard {...bannerAd} />
    </div>
  );
};
