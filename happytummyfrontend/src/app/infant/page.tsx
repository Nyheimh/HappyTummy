import React from "react";
// import WarningAlert from "../ui/WarningAlert";
import RecipeCard from "../ui/RecipeCard";
import { Box } from "@chakra-ui/react";

type Props = {};

const page = (props: Props) => {
  return (
    <Box>
      <RecipeCard />
    </Box>
  );
};

export default page;
