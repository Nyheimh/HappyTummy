"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const RecipeBadge_1 = require("./RecipeBadge");
const fa_1 = require("react-icons/fa");
const RecipeCard = ({ recipes }) => {
    return (<react_2.ChakraProvider>
      <react_2.Stack spacing={6} direction="row" align="center">
        {recipes.map((recipe) => (<react_2.Card key={recipe.id} maxW="sm">
            <react_2.CardBody maxH="491px">
              <react_2.Image src={recipe.imageUrl} alt={recipe.name} borderRadius="lg"/>
              <react_2.Stack mt="6" spacing="3">
                <react_2.Heading size="md">{recipe.name}</react_2.Heading>
                <react_2.Stack direction="row" align="center">
                  {recipe.badges.map((badge, index) => (<RecipeBadge_1.default key={index} text={badge.text} colorScheme={badge.colorScheme}/>))}
                </react_2.Stack>
                <react_2.Text>{recipe.keyIngredients}</react_2.Text>
                <react_2.Stack spacing={4} direction="row" align="center">
                  {recipe.tiktokLink && (<a href={String(recipe.tiktokLink)}>
                      <fa_1.FaTiktok color="#000" size={24}/>
                    </a>)}
                  {recipe.instagramLink && (<a href={String(recipe.instagramLink || "/")}>
                      <fa_1.FaInstagram color="#000" size={24}/>
                    </a>)}
                </react_2.Stack>
              </react_2.Stack>
            </react_2.CardBody>
          </react_2.Card>))}
      </react_2.Stack>
    </react_2.ChakraProvider>);
};
exports.default = RecipeCard;
//# sourceMappingURL=RecipeCard.js.map