"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const RecipeCard_1 = require("../ui/RecipeCard");
const react_2 = require("@chakra-ui/react");
const Page = () => {
    const [searchFilter, setSearchFilter] = (0, react_1.useState)('');
    const handleSearchInputChange = (event) => {
        setSearchFilter(event.target.value);
    };
    const recipes = [];
    const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchFilter.toLowerCase()));
    return (<react_2.Box>
      
      <react_2.Input type="text" placeholder="Search recipes..." value={searchFilter} onChange={handleSearchInputChange}/>

      
      <RecipeCard_1.default recipes={filteredRecipes}/>
    </react_2.Box>);
};
exports.default = Page;
//# sourceMappingURL=page.js.map