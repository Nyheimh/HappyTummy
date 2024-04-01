"use client";
import { useState, ChangeEvent } from "react";
import { filterRecipes } from "./recipeUtils";

export interface Recipe {
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
  filteredRecipes: Recipe[];
}

const useAdultRecipeData = (): RecipeData => {
  const [recipes] = useState<Recipe[]>([
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Lemon Pepper Wings",
      keyIngredients: "Broccoli, Carrot, Spinach",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C2uysBQuuMi/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Airfryer", colorScheme: "brown" },
        { text: "Chicken", colorScheme: "yellow" },
      ],
      rating: 2,
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Oatmeal Creme Pies",
      keyIngredients: "Broccoli, Cheese, Potatoes",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C36PRTRslBZ/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dessert", colorScheme: "pink" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 5,
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "General Tso Chicken",
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C0_-j33upYD/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Chicken", colorScheme: "yellow" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Filet o Fish",
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C33MY8ppxxZ/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Fish", colorScheme: "cyan" },
        { text: "Breakfast", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Arroz con pollo",
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C2n-_qyRksj/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Chicken", colorScheme: "yellow" },
        { text: "Rice", colorScheme: "orange" },
      ],
      rating: 0,
    },
    {
      id: 6,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: "Red Velvet Marble Loaf",
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C2uo6Xfrnsc/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dessert", colorScheme: "pink" },
        { text: "Rice", colorScheme: "orange" },
      ],
      rating: 0,
    },
    {
      id: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `King's Hawaiian Cinnamon Rolls`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3IrTdBO50N/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dessert", colorScheme: "pink" },
        { text: "Bread", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Cheesy Beef Rollups`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3dPHS4glua/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 9,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Jerk Chicken Fried Rice`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3G2PCROF7y/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Creamy Lemon Shrimp`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3Q9uwzP108/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 11,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Creamy Lemon Shrimp`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3Q9uwzP108/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 12,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Al Pastor Chicken`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C22z8ApvFD5/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 13,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Tuscan Salmon Penne`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C23GA9iu0JC/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 14,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Chicken Thigh Cajun Pasta`,
      keyIngredients: "Banana, Milk/Milk Alternate, Bread",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C2h9LU2gcdO/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Dairy", colorScheme: "pink" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 15,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Slow Cooker Beef and Broccoli`,
      keyIngredients: "Beef & Broccoli",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C4_ypRuNKoL/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Slow Cooker", colorScheme: "gray" },
        { text: "Meat", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 16,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Creamy Garlic Herb Cajun Chicken`,
      keyIngredients: "Chicken Thighs",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C4NsREYo0pr/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Chicken", colorScheme: "gray" },
        { text: "Dairy", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 17,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Chocolate Chip Cookies`,
      keyIngredients: "Chocolate Chip Cookies",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C4tRTrRoZjY/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Desserts", colorScheme: "gray" },
        { text: "Chocolate", colorScheme: "brown" },
      ],
      rating: 0,
    },
    {
      id: 18,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Garlic Parmesan Chicken Skewers`,
      keyIngredients: "Garlic, Parm, Chicken",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C4tRTrRoZjY/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [{ text: "Chicken", colorScheme: "gray" }],
      rating: 0,
    },
    {
      id: 19,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Out N In`,
      keyIngredients: "Ground Meat",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C4v449Hv4Oh/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Chicken", colorScheme: "gray" },
        { text: "Fast Food Dupe", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 20,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Chipotle's Cilantro Lime Rice`,
      keyIngredients: "Rice, Cilantro, Lime",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C3vgukPPqXw/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Rice", colorScheme: "gray" },
        { text: "Fast Food Dupe", colorScheme: "yellow" },
      ],
      rating: 0,
    },
    {
      id: 21,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Cajun Shrimp Burger`,
      keyIngredients: "Shrimp",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C30n129pcc_/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [{ text: "Seafood", colorScheme: "blue" }],
      rating: 0,
    },
    {
      id: 22,
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      name: `Creamy Chicken and Spinach Wrap`,
      keyIngredients: "Chicken and Spinach",
      tiktokLink: undefined,
      instagramLink:
        "https://www.instagram.com/reel/C4qVl5COuWx/?igsh=ZDE1MWVjZGVmZQ==",
      badges: [
        { text: "Chicken", colorScheme: "gray" },
        { text: "Veggies", colorScheme: "brown" },
      ],
      rating: 0,
    },
  ]);

  const [searchFilter, setSearchFilter] = useState<string>("");

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const filteredRecipes = filterRecipes(recipes, searchFilter);

  return { searchFilter, handleSearchInputChange, filteredRecipes };
};

export default useAdultRecipeData;
