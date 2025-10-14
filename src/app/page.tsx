"use client"
import TimeSince from "./components/TimeSince";

export default function Home() {
  const kh4RevealEvent = "2022-04-10T17:00:00+09:00";
  const mostRecentKH4News = "2025-05-14T21:00:00-04:00";

  return (
    <div
      className="flex flex-col justify-center items-center py-[5vh] px-[6vh] text-center"
    >
      <h2 className="text-3xl py-3 sm:text-3xl font-medium">How Long We&apos;ve Been Waiting</h2>
      <span className="text-[18px] sm:text-[20px]">Time since Most Recent Kingdom Hearts 4 News/Update: <TimeSince time={mostRecentKH4News} /></span>
      <span className="text-[18px] sm:text-[20px]">Time since Kingdom Hearts 4 Reveal: <TimeSince time={kh4RevealEvent} /></span>
    </div>
  );
}