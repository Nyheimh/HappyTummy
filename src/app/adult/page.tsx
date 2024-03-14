"use client"
import React from "react";
import RecipeCard from "../ui/RecipeCard";
import { Box, Input, Stack, SimpleGrid } from "@chakra-ui/react";
import useAdultRecipeData from "./AdultRecipeData"

const Page: React.FC = () => {
  const { searchFilter, handleSearchInputChange, filteredRecipes } = useAdultRecipeData();

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
      {filteredRecipes.map((adultRecipe) => (
        <RecipeCard key={adultRecipe.id}
        recipe={adultRecipe} 
        />
        ))}
        </SimpleGrid>
        </Stack>
        </Box>
    </Box>
  );
};

export default Page;
