"use client";

import {
  Container,
  Stack,
  Box,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import HeroButton from "../ui/HeroButton";
import Link from "next/link";

const HeroScreen = () => {
  return (
    <Box className="relative content-center">
      <video
        className="absolute inset-0 w-full h-full object-cover pb-0"
        src="/seasoning.mp4"
        autoPlay
        loop
        muted
      />
      <Box className="h-screen flex justify-center items-center">
        <Stack direction="column" align="center" justify="center">
          <Stack spacing={4} direction="column" align="center" marginTop={10}>
            <h1 className="text-9xl font-sans text-white z-10">Happy Tummy</h1>
            <p className="text-4xl font-sans text-white m-4 z-10">
              What recipes are we using today?{" "}
            </p>
          </Stack>
          <Stack spacing={4} direction="row" align="center">
            <Link href="/infant">
              <Button colorScheme="blackAlpha">Infant Recipes</Button>
            </Link>
            <Link href="/adult">
              <Button colorScheme="blackAlpha">Adult Recipes</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroScreen;
