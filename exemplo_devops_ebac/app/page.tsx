"use client";

import Button from "./components/Button";
import Message from "./components/Message";
import { colors, useStyleSwitcher } from "./hook/useStyleSwitcher";

export default function Home() {
  const { currentStyle, changeStyle } = useStyleSwitcher(colors);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-200 font-sans ">
      <main
        className={`flex gap-3 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm: rounded-lg ${currentStyle.bg}`}
      >
        <Message textColorClass={currentStyle.text} />
        <div className="flex gap-2">
          <Button onClick={changeStyle} text={"Mudar cor"} />
          {/* <Button text={"Mudar posição"} /> */}
        </div>
      </main>
    </div>
  );
}
