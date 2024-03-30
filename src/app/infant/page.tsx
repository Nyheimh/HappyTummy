"use client";
import React, { useState } from "react";
import RecipeCard from "../ui/RecipeCard";
import { Box, Input, Stack, SimpleGrid, Select } from "@chakra-ui/react";
import useInfantRecipeData from "./InfantRecipeData";

const Page: React.FC = () => {
  const { searchFilter, handleSearchInputChange, filteredRecipes } =
    useInfantRecipeData();

  const [sortOption, setSortOption] = useState("A-Z");

  const handelSortChange = (option: any) => {
    setSortOption(option);
  };

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortOption === "A-Z") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return (
    <Box>
      <Input
        type="text"
        placeholder="Search recipes..."
        value={searchFilter}
        onChange={handleSearchInputChange}
        style={{
          display: "flex",
          borderRadius: 100,
          width: 600,
          left: 400,
          margin: 10,
        }}
      />
      <Select
        value={sortOption}
        onChange={(e) => handelSortChange(e.target.value)}
        style={{ width: 200, margin: 10 }}
      >
        <option value="A-Z"> Alphabetical (A-Z)</option>
        <option value="Z-A">Alphabetical (Z-A)</option>
      </Select>

      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Stack spacing="3" direction="row" align="center">
          <SimpleGrid columns={3} spacing={5}>
            {sortedRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
