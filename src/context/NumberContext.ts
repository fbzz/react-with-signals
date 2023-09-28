import { computed, signal } from "@preact/signals-react";

export interface Todo {
  label: string;
  done: boolean;
}

export const createSimpleState = () => {
  const randomNumberOnContext = signal(0);

  const randomNumberOnContextMultipliedBy10 = computed(() => {
    return randomNumberOnContext.value * 10;
  });

  return { randomNumberOnContext, randomNumberOnContextMultipliedBy10 };
};
