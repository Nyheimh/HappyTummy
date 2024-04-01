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
import { StarIcon } from "@chakra-ui/icons";
import { property } from "lodash";

interface Recipe {
  id: number;
  imageUrl: string;
  name: string;
  keyIngredients: string;
  tiktokLink?: string | undefined;
  instagramLink?: string | undefined;
  badges: { text: string; colorScheme: string }[];
  rating: number;
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
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Heading size="md">{recipe.name}</Heading>
                {typeof recipe.tiktokLink === "string" && (
                  <a
                    href={String(recipe.tiktokLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok color="#000" size={24} />
                  </a>
                )}
                {typeof recipe.instagramLink === "string" && (
                  <a
                    href={String(recipe.instagramLink || "/")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram color="#000" size={24} />
                  </a>
                )}
              </Box>
              <Text>{recipe.keyIngredients}</Text>
              <Box>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < recipe.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
              </Box>
              <Stack direction="row" align="center">
                {recipe.badges.map((badge, index) => (
                  <RecipeBadge
                    key={index}
                    text={badge.text}
                    colorScheme={badge.colorScheme}
                  />
                ))}
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </ChakraProvider>
  );
};

export default RecipeCard;
