import { Ad } from "../pages/pure";
import { utilLog } from "../utils";
import { CustomCardHeader } from "./Custom-card-header";

export const CustomCard = ({ text, link }: Ad) => {
  utilLog("Custom Card");
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <CustomCardHeader {...link} />
      {text}
    </div>
  );
};
