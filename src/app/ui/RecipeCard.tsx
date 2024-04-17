import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
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
  const [showFullText, setShowFullText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const truncatedName =
    recipe.name.length > 20 ? `${recipe.name.slice(0, 20)}...` : recipe.name;
  const truncatedKeyIngredients =
    recipe.keyIngredients.length > 40
      ? `${recipe.keyIngredients.slice(0, 40)}...`
      : recipe.keyIngredients;

  return (
    <ChakraProvider>
      <Card boxShadow="2xl" marginBottom="20px">
        <Image
          src="/jg.jpg"
          alt={recipe.name}
          height="350px"
          objectFit="fill"
        />
        <CardBody>
          <Stack spacing="3">
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Heading size="md">
                {showFullText ? recipe.name : truncatedName}
              </Heading>
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
            <Text>
              {showFullText ? recipe.keyIngredients : truncatedKeyIngredients}
            </Text>
            <Box>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < recipe.rating ? "yellow.500" : "gray.300"}
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
            {recipe.name.length > 20 || recipe.keyIngredients.length > 41 ? (
              <Button colorScheme="gray" onClick={openModal} size="md">
                {showFullText ? "Show Less" : "Show More"}
              </Button>
            ) : null}
            <Modal isOpen={isModalOpen} onClose={closeModal} size="lg">
              <ModalOverlay />
              <ModalContent width="400px" height="200px">
                <ModalHeader>{recipe.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{recipe.keyIngredients}</ModalBody>
              </ModalContent>
            </Modal>
          </Stack>
        </CardBody>
      </Card>
    </ChakraProvider>
  );
};

export default RecipeCard;
