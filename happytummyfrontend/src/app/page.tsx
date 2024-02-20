// import NavBar from "./lib/NavBar";
"use client";
import { Link } from "@chakra-ui/next-js";
import HeroScreen from "./lib/HeroScreen";

export default function Home() {
  return (
    <div>
    <body>
      <div id="section1" className="bg-black text-white h-screen">
        <div className="container mx-auto flex items-center justify-center h-full">
    <HeroScreen />
    </div>
    </div>
    </body>
    </div>
  );
}
