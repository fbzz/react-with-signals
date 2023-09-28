import { Signal } from "@preact/signals-react";

export interface ComponentNumber {
  randomNumber: Signal<number>;
}

export const ComponentSignals1 = ({ randomNumber }: ComponentNumber) => {
  console.log("Render Signals Component1");
  return (
    <div>
      <ComponentSignals2 randomNumber={randomNumber} />
    </div>
  );
};

export const ComponentSignals2 = ({ randomNumber }: ComponentNumber) => {
  console.log("Render Signals Component2");
  return (
    <div>
      <ComponentSignals3 randomNumber={randomNumber} />
    </div>
  );
};

export const ComponentSignals3 = ({ randomNumber }: ComponentNumber) => {
  console.log("Render Signals Component3");
  console.log("👩‍💻 ----- BOTTOM ----- 👩‍💻");
  return <>Your number is {randomNumber}</>;
};
