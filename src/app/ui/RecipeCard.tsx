import React from "react";
import {
  ChakraProvider,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import RecipeBadge from "./RecipeBadge";
import { FaTiktok, FaInstagram } from "react-icons/fa";

interface Recipe {
  id: number;
  imageUrl: string;
  name: string;
  keyIngredients: string;
  tiktokLink?: string | undefined;
  instagramLink?: string | undefined;
  badges: { text: string; colorScheme: string }[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <ChakraProvider>
      <Flex flexWrap="wrap">
        <Card maxW="sm" boxShadow="2xl">
          <Image
            src={recipe.imageUrl}
            alt={recipe.name}
            borderRadius="lg"
            h="350px"
            objectFit="fill"
          />
          <CardBody maxH="491px">
            <Stack spacing="3">
              <Heading size="md">{recipe.name}</Heading>
              <Stack direction="row" align="center">
                {recipe.badges.map((badge, index) => (
                  <RecipeBadge
                    key={index}
                    text={badge.text}
                    colorScheme={badge.colorScheme}
                  />
                ))}
              </Stack>
              <Text>{recipe.keyIngredients}</Text>
              <Stack spacing={4} direction="row" align="center">
                {typeof recipe.tiktokLink === "string" && (
                  <a href={String(recipe.tiktokLink)}>
                    <FaTiktok color="#000" size={24} />
                  </a>
                )}
                {typeof recipe.instagramLink === "string" && (
                  <a href={String(recipe.instagramLink || "/")}>
                    <FaInstagram color="#000" size={24} />
                  </a>
                )}
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </ChakraProvider>
  );
};

export default RecipeCard;
