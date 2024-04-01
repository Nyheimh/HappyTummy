"use client";
import { useState, ChangeEvent } from "react";

export interface InfantRecipe {
  id: number;
  imageUrl: string;
  name: string;
  keyIngredients: string;
  tiktokLink: string | undefined;
  instagramLink: string | undefined;
  badges: { text: string; colorScheme: string }[];
  rating: number;
}

interface RecipeData {
  searchFilter: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  filteredRecipes: InfantRecipe[];
}

const useInfantRecipeData = (): RecipeData => {
  const [recipes] = useState<InfantRecipe[]>([
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Broccoli, Carrot, Spinach Patties",
      keyIngredients: "Broccoli, Carrot, Spinach",
      tiktokLink: "https://www.tiktok.com/t/ZT8KW8QL9/",
      instagramLink: undefined,
      badges: [
        { text: "Veggies", colorScheme: "green" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Fluffy broccoli & cheese fritters",
      keyIngredients: "Broccoli, Cheese, Potatoes",
      tiktokLink: undefined,
      instagramLink: "https://www.instagram.com/reel/C04gjroonhR",
      badges: [
        { text: "Dairy", colorScheme: "gray" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Banana French Toast",
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink: "https://www.instagram.com/reel/C1khlIdMqz-",
      badges: [
        { text: "Sweet", colorScheme: "pink" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Banana French Toast",
      keyIngredients: "Sweet Potatoe Salmon Cakes",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3n4oYhyc3_/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Sweet Potatoe", colorScheme: "Orange" },
        { text: "Salmon", colorScheme: "pink" },
      ],
      rating: 0,
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Banana French Toast",
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink: "https://www.instagram.com/reel/C1khlIdMqz-",
      badges: [
        { text: "Sweet", colorScheme: "pink" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Banana French Toast",
      keyIngredients: "Yogurt Teething Bites",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3EDvAQOsRf/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Sweet", colorScheme: "pink" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
  ]);

  const [searchFilter, setSearchFilter] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return { searchFilter, handleSearchInputChange, filteredRecipes };
};

export default useInfantRecipeData;
