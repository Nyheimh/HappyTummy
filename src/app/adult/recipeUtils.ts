import { Recipe } from "./AdultRecipeData";

export function filterRecipes(recipes: Recipe[], filter: string): Recipe[] {
  return recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(filter.toLowerCase());

    const badgesMatch = recipe.badges.some((badge) =>
      badge.text.toLowerCase().includes(filter.toLowerCase())
    );

    return nameMatch || badgesMatch;
  });
}

export default filterRecipes;
