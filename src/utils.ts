export const utilLog = (componentName: string) => {
  console.group(componentName);
};

export const generateRandomAd = () => {
  const words = ["Rock", "Paper", "Scissors", "Mountains", "Other Things"];
  return {
    text:
      words[Math.floor(Math.random() * words.length)] +
      words[Math.floor(Math.random() * words.length)],
    link: {
      label: words[Math.floor(Math.random() * words.length)],
      url: `https://${words[Math.floor(Math.random() * words.length)]}.com`,
    },
  };
};
