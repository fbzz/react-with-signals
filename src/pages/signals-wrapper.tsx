import { useState } from "react";
import { Component1 } from "../components/Components";
import { useSignal } from "@preact/signals-react";
import { ComponentSignals1 } from "../components/Components-signals";
import { SimplestState } from "../main";
import { useContext } from "react";
import { ComponentSignalsContext1 } from "../components/Component-signals-context";

const logFunction = () => {
  console.log("👩‍💻 ----- TOP ----- 👩‍💻");
  console.log("Render Signals Wrapper");
};

export const SignalsWrapper = () => {
  logFunction();
  const { randomNumberOnContext } = useContext(SimplestState);
  const [randomNumber, setRandomNumber] = useState(0);
  const randomNumberSignal = useSignal(0);

  const incrementSetState = () => {
    setRandomNumber(randomNumber + 1);
  };

  const incrementSignal = () => {
    randomNumberSignal.value++;
  };

  const incremenetSignalOnContext = () => {
    randomNumberOnContext.value++;
  };

  return (
    <>
      <div className="flex flex-row ">
        <div className="flex flex-col flex-1 items-center m-5">
          <h1 className="font-semibold text-center">
            Component with{" "}
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              useState 👻
            </span>
          </h1>
          <div className="p-5 p-5 flex items-center flex-col">
            <Component1 randomNumber={randomNumber} />
            <button
              className="m-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={incrementSetState}
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center m-5">
          <h1 className="font-semibold  text-center">
            Component with{" "}
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-100 to-blue-900">
              Signals 🧌
            </span>
          </h1>
          <div className="p-5 flex items-center flex-col">
            <ComponentSignals1 randomNumber={randomNumberSignal} />
            <button
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
              onClick={incrementSignal}
            >
              Add
            </button>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center m-5">
          <h1 className="font-semibold  text-center">
            Component with{" "}
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-200 to-orange-800">
              Signals Context 🧚🏼‍♂️
            </span>
          </h1>
          <div className="p-5 flex items-center flex-col">
            <ComponentSignalsContext1 />
            <button
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
              onClick={incremenetSignalOnContext}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
