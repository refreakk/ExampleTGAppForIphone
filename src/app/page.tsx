"use client";

import { useContext } from "react";
import { webAppContext } from "./context";
import Link from "next/link";

export default function Home() {
  const app = useContext(webAppContext);
  
  return (
    <>
      <div className="h-full w-full text-center pt-4">
        <div className="flex flex-col gap-3 text-[14px] text-left">
          <Link href="/hidden" className="underline">Hidden Dynamic Island ( отсутствует островок безопаности )</Link>
          <Link href="/nothidden" className="underline">Dynamic Island Enabled ( присутствует островок безопасности )</Link>
        </div>
      </div>
    </>
  );
}
