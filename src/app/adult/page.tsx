"use client";
import React, { useState } from "react";
import RecipeCard from "../ui/RecipeCard";
import {
  Box,
  Input,
  Stack,
  SimpleGrid,
  Select,
  Badge,
  Button,
} from "@chakra-ui/react";
import useAdultRecipeData from "./AdultRecipeData";

const Page: React.FC = () => {
  const { searchFilter, handleSearchInputChange, filteredRecipes } =
    useAdultRecipeData();

  const [sortOption, setSortOption] = useState("A-Z");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);

  const handelSortChange = (option: any) => {
    setSortOption(option);
  };

  const handleBadgeClick = (badge: string) => {
    setSelectedBadge((prevBadges) =>
      prevBadges.includes(badge)
        ? prevBadges.filter((selectedBadge) => selectedBadge !== badge)
        : [...prevBadges, badge]
    );
  };

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortOption) {
      case "A-Z":
        return a.name.localeCompare(b.name);
      case "Z-A":
        return b.name.localeCompare(a.name);
      case "1-5":
        return b.rating - a.rating;
      case "5-1":
        return a.rating - b.rating;

      default:
        return a.name.localeCompare(b.name);
    }
  });

  const filteredRecipesByBadges =
    selectedBadge.length > 0
      ? sortedRecipes.filter((recipe) =>
          selectedBadge.every((selectedBadge) =>
            recipe.badges.some(
              (badge) =>
                badge.text.toLowerCase() === selectedBadge.toLowerCase()
            )
          )
        )
      : sortedRecipes;

  const availableBadges = Array.from(
    new Set(
      filteredRecipes.flatMap((recipe) =>
        recipe.badges.map((badge) => badge.text)
      )
    )
  );

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
          <option value="5-1">Least Favorite</option>
          <option value="1-5">Favorite 😋</option>
        </Select>
      </Box>

      <Stack
        spacing="3"
        direction="row"
        align="center"
        justifyContent="center"
        mb="20px"
      >
        <Button onClick={() => handleBadgeClick("Breakfast")}>Breakfast</Button>
        <Button onClick={() => handleBadgeClick("Chicken")}>Chicken</Button>
        <Button onClick={() => handleBadgeClick("Dairy")}>Dairy</Button>
        <Button onClick={() => handleBadgeClick("Desserts")}>Desserts</Button>
        <Button onClick={() => handleBadgeClick("Meat")}>Meat</Button>
        <Button onClick={() => handleBadgeClick("Rice")}>Rice</Button>
        <Button onClick={() => handleBadgeClick("Seafood")}>Seafood</Button>
        <Button onClick={() => handleBadgeClick("Veggies")}>Veggies</Button>
      </Stack>

      <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Stack spacing="3" direction="row" align="center">
          <SimpleGrid columns={3} spacing={5}>
            {filteredRecipesByBadges.map((adultRecipe) => (
              <RecipeCard key={adultRecipe.id} recipe={adultRecipe} />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
