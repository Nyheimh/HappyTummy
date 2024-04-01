"use client";
import React, { useState } from "react";
import RecipeCard from "../ui/RecipeCard";
import { Box, Input, Stack, SimpleGrid, Select, Badge } from "@chakra-ui/react";
import useAdultRecipeData from "./AdultRecipeData";

const Page: React.FC = () => {
  const { searchFilter, handleSearchInputChange, filteredRecipes } =
    useAdultRecipeData();

  const [sortOption, setSortOption] = useState("A-Z");

  const handelSortChange = (option: any) => {
    setSortOption(option);
  };

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortOption) {
      case "A-Z":
        return a.name.localeCompare(b.name);
      case "1-5":
        return b.rating - a.rating;
      case "5-1":
        return a.rating - b.rating;

      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <Box>
      <Box
        display="flex"
        margin={10}
        justifyContent="center"
        justifyItems="space-evenly"
        alignItems="space-evenly"
        alignContent="space-evenly"
      >
        <Input
          type="text"
          placeholder="Search recipes..."
          value={searchFilter}
          onChange={handleSearchInputChange}
          style={{
            display: "flex",
            borderRadius: 100,
            width: 600,

            marginRight: 10,
          }}
        />
        <Select
          width={200}
          value={sortOption}
          onChange={(e) => handelSortChange(e.target.value)}
        >
          <option value="A-Z"> Alphabetical (A-Z)</option>
          <option value="Z-A">Alphabetical (Z-A)</option>
          <option value="5-1">Least Favorite 🥱</option>
          <option value="1-5">Favorite 😋</option>
        </Select>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Stack spacing="3" direction="row" align="center">
          <SimpleGrid columns={3} spacing={5}>
            {sortedRecipes.map((adultRecipe) => (
              <RecipeCard key={adultRecipe.id} recipe={adultRecipe} />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
