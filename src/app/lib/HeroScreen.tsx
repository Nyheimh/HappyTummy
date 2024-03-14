"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import HeroButton from "../ui/HeroButton";
import Link from "next/link";

const HeroScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center object-contain">
      <video
        className=" w-full h-full fixed z-[-1]"
        src="/seasoning.mp4"
        autoPlay
        loop
        muted
      />
      <h1 className="text-9xl font-sans text-white">Happy Tummy</h1>
      <p className="text-5xl font-sans text-white m-4">
        What are you waiting for?
      </p>
      <Stack spacing={4} direction="row" align="center" marginTop={5}>
        <Link href="/infant">
          <HeroButton colorScheme="green" size="md" text="Infant" />
        </Link>
        <Link href="/adult">
          {" "}
          <HeroButton colorScheme="green" size="md" text="Adult" />
        </Link>
      </Stack>
    </div>
  );
};

export default HeroScreen;
