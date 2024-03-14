import React from "react";
interface Recipe {
    id: number;
    imageUrl: string;
    name: string;
    keyIngredients: string;
    tiktokLink?: string;
    instagramLink?: string;
    badges: {
        text: string;
        colorScheme: string;
    }[];
}
interface RecipeCardProps {
    recipes: Recipe[];
}
declare const RecipeCard: React.FC<RecipeCardProps>;
export default RecipeCard;
