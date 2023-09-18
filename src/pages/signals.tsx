import { CustomButton } from "../components/Custom-button";
import { CustomCard } from "../components/Custom-card";
import { bannerAd } from "../state";
import { generateRandomAd, utilLog } from "../utils";

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

  const generateNewText = () => {
    const { text, link } = generateRandomAd();
    bannerAd.text.value = text;
    bannerAd.link.label.value = link.label;
    bannerAd.link.url.value = link.url;
  };

  return (
    <div>
      <CustomButton onClick={generateNewText}>Re-render</CustomButton>
      <CustomCard />
    </div>
  );
};
