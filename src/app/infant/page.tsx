// Page.tsx
"use client"
import React from "react";
import RecipeCard from "../ui/RecipeCard";
import { Box, Input, Stack, SimpleGrid } from "@chakra-ui/react";
import useRecipeData from "./RecipeData";

const Page: React.FC = () => {
  const { searchFilter, handleSearchInputChange, filteredRecipes } = useRecipeData();

  return (
    <Box>
      <Input
        type="text"
        placeholder="Search recipes..."
        value={searchFilter}
        onChange={handleSearchInputChange}
        style={{ display: 'flex', borderRadius: 100, width: 600, left: 400, margin: 10}}
      />
<Box style={{ display: 'flex', justifyContent: 'space-evenly',  }}>
  <Stack spacing="3" direction="row" align="center">
  <SimpleGrid columns={3} spacing={5}>
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
         </SimpleGrid>
        </Stack>
        </Box>
    </Box>
  );
};

export default Page;
