import { Signal, useSignal } from "@preact/signals-react";
import { memo } from "react";

export default function Example() {
  console.log("<Counter/>");
  const countA = useSignal(0);
  const countB = useSignal(0);
  return (
    <div>
      <button onClick={() => countA.value++}>A</button>
      <button onClick={() => countB.value++}>B</button>
      <MemoDisplay count={countA} />
      <MemoDisplay count={countB} />
    </div>
  );
}

export const MemoDisplay = memo(Display);

export function Display({ count }: { count: Signal<number> }) {
  console.log(`<Display count={${count}}/>`);
  return <div>{count}!</div>;
}
