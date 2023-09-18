import { AdLink } from "../pages/pure";
import { utilLog } from "../utils";

export const CustomCardHeader = ({ label, url }: AdLink) => {
  utilLog("Custom Card Header");
  return (
    <div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {label}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{url}</p>
    </div>
  );
};
