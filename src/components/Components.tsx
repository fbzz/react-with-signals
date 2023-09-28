export interface ComponentNumber {
  randomNumber: number;
}

export const Component1 = ({ randomNumber }: ComponentNumber) => {
  console.log("Render Component1");
  return (
    <div>
      <Component2 randomNumber={randomNumber} />
    </div>
  );
};

export const Component2 = ({ randomNumber }: ComponentNumber) => {
  console.log("Render Component2");
  return (
    <div>
      <Component3 randomNumber={randomNumber}></Component3>
    </div>
  );
};

export const Component3 = ({ randomNumber }: ComponentNumber) => {
  console.log("Render Component3");
  console.log("👩‍💻 ----- BOTTOM ----- 👩‍💻");

  return <>Your number is {randomNumber}</>;
};
