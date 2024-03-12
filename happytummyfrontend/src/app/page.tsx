"use client";
import React from "react";
import HeroScreen from "./lib/HeroScreen";
import Header from "./lib/Header";

export default function Home() {
  return (
    <div>
  
      <div id="section1" className="bg-black text-white h-screen">
        <div className="container mx-auto flex items-center justify-center h-full">

    <HeroScreen />
    </div>
    </div>
   
    </div>
  );
}
