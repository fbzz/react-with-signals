import { useContext } from "react";
import { SimplestState } from "../main";

export const ComponentSignalsContext1 = () => {
  const { randomNumberOnContextMultipliedBy10 } = useContext(SimplestState);
  console.log("Render Context Signals Component1");
  return (
    <div>
      <div>Computed value {randomNumberOnContextMultipliedBy10.value}</div>
      <ComponentSignalsContext2 />
    </div>
  );
};

export const ComponentSignalsContext2 = () => {
  console.log("Render Context Signals Component2");
  return (
    <div>
      <ComponentSignalsContext3 />
    </div>
  );
};

export const ComponentSignalsContext3 = () => {
  const { randomNumberOnContext } = useContext(SimplestState);
  console.log("Render Context Signals Component3");
  console.log("👩‍💻 ----- BOTTOM ----- 👩‍💻");

  return <>Your number is {randomNumberOnContext}</>;
};
