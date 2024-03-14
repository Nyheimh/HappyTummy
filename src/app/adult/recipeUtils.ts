import { Recipe } from './AdultRecipeData'; 

export function filterRecipes(recipes: Recipe[], filter: string): Recipe[] {
  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(filter.toLowerCase())
  );
}

export default filterRecipes;