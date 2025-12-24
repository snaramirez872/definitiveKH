"use client"
import TimeSince from "./components/TimeSince";

export default function Home() {
  const kh4RevealEvent = "2022-04-10T17:00:00+09:00";
  const mostRecentKH4News = "2025-05-14T21:00:00-04:00";

  return (
    <div
      className="flex flex-col justify-center items-center py-[5vh] px-[6vh] text-center"
    >
      <h1 className="text-3xl py-3 sm:text-3xl font-medium">
        Welcome to DefinitiveKH!
      </h1>
      <p className="pt-1 pb-2">
        This is a fan-made, non-commercial guide created to help newcomers and returning players navigate the complex world of Kingdom Hearts. 
      </p>
      <p>
        <i>This project is intended for educational purposes only.
        Kingdom Hearts is intellectual property owned by Disney and developed by Square Enix. 
        All characters, imagery, and related materials belong to their respective owners.</i>
      </p>
      <h2 className="text-2xl py-3 pt-7 sm:text-2xl font-medium">How Long We&apos;ve Been Waiting</h2>
      <span className="text-[18px] sm:text-[20px]">Time since Most Recent Kingdom Hearts 4 News/Update: <TimeSince time={mostRecentKH4News} /></span>
      <span className="text-[18px] sm:text-[20px]">Time since Kingdom Hearts 4 Reveal: <TimeSince time={kh4RevealEvent} /></span>
    </div>
  );
}