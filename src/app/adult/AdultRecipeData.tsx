"use client"
import { useState, ChangeEvent } from "react";
import { filterRecipes } from "./recipeUtils";


export interface Recipe {
  id: number;
  imageUrl: string;
  name: string;
  keyIngredients: string;
  tiktokLink: string | false;
  instagramLink: string | false;
  badges: { text: string; colorScheme: string }[];
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
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: 'Lemon Pepper Wings',
      keyIngredients: 'Broccoli, Carrot, Spinach',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C2uysBQuuMi/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Airfryer', colorScheme: 'brown' },
        { text: 'Chicken', colorScheme: 'yellow' }
      ]
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: 'Oatmeal Creme Pies',
      keyIngredients: 'Broccoli, Cheese, Potatoes',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C36PRTRslBZ/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dessert', colorScheme: 'pink' },
        { text: 'Breakfast', colorScheme: 'yellow' }
      ]
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: 'General Tso Chicken',
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C0_-j33upYD/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Chicken', colorScheme: 'yellow' },
        { text: 'Breakfast', colorScheme: 'yellow' }
      ]
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: 'Filet o Fish',
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C33MY8ppxxZ/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Fish', colorScheme: 'cyan' },
        { text: 'Breakfast', colorScheme: 'yellow' }
      ]
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: 'Arroz con pollo',
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C2n-_qyRksj/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Chicken', colorScheme: 'yellow' },
        { text: 'Rice', colorScheme: 'orange' }
      ]
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: 'Red Velvet Marble Loaf',
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C2uo6Xfrnsc/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dessert', colorScheme: 'pink' },
        { text: 'Rice', colorScheme: 'orange' }
      ]
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `King's Hawaiian Cinnamon Rolls`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C3IrTdBO50N/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dessert', colorScheme: 'pink' },
        { text: 'Bread', colorScheme: 'brown' }
      ]
    },
    {
      id: 8,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Cheesy Beef Rollups`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C3dPHS4glua/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    },
    {
      id: 9,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Jerk Chicken Fried Rice`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C3G2PCROF7y/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    },
    {
      id: 10,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Creamy Lemon Shrimp`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C3Q9uwzP108/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    },
    {
      id: 11,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Creamy Lemon Shrimp`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C3Q9uwzP108/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    },
    {
      id: 12,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Al Pastor Chicken`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C22z8ApvFD5/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    },
    {
      id: 13,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Tuscan Salmon Penne`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C23GA9iu0JC/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    },
    {
      id: 14,
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      name: `Chicken Thigh Cajun Pasta`,
      keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
      tiktokLink: false,
      instagramLink: 'https://www.instagram.com/reel/C2h9LU2gcdO/?igsh=ZDE1MWVjZGVmZQ==',
      badges: [
        { text: 'Dairy', colorScheme: 'pink' },
        { text: 'Meat', colorScheme: 'brown' }
      ]
    }
  ]);

  const [searchFilter, setSearchFilter] = useState<string>('');

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const filteredRecipes = filterRecipes(recipes, searchFilter);

  return { searchFilter, handleSearchInputChange, filteredRecipes };
};

export default useAdultRecipeData;