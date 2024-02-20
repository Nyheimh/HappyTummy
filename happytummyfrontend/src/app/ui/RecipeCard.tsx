"use client";
import React, { useState } from "react";

import {
  ChakraProvider,
  Box,
  Card,
  CardBody,
  Heading,
  Center,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import RecipeBadge from "./RecipeBadge";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    name: 'Broccoli, Carrot, Spinach Patties',
    keyIngredients: 'Broccoli, Carrot, Spinach',
    tiktokLink: 'https://www.tiktok.com/t/ZT8KW8QL9/',
    instagramLink: false,
    badges: [
      { text: 'Veggies', colorScheme: 'green' },
      { text: 'Breakfast', colorScheme: 'yellow' }
    ]
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    name: 'Fluffy broccoli & cheese fritters',
    keyIngredients: 'Broccoli, Cheese, Potatoes',
    tiktokLink: false,
    instagramLink: 'https://www.instagram.com/reel/C04gjroonhR',
    badges: [
      { text: 'Dairy', colorScheme: 'gray' },
      { text: 'Breakfast', colorScheme: 'yellow' }
    ]
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    name: 'Banana French Toast',
    keyIngredients: 'Banana, Milk/Milk Alternate, Bread',
    tiktokLink: false,
    instagramLink: 'https://www.instagram.com/reel/C1khlIdMqz-',
    badges: [
      { text: 'Sweet', colorScheme: 'pink' },
      { text: 'Breakfast', colorScheme: 'yellow' }
    ]
  }
];

export default function RecipeCard() {

  return (
    <ChakraProvider>
      <Stack spacing={6} direction='row' align='center'>
      {recipes?.map((recipe) => (
        <Card key={recipe.id} maxW="sm">
        <CardBody maxH="491px">
          <Image
            src={recipe.imageUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            />
          <Stack mt="6" spacing="3">
            <Heading size="md">{recipe.name}</Heading>
            <Stack direction='row' align='center'>

            {recipe.badges && recipe.badges.map((badge, index) => (
              <RecipeBadge
              key={index}
              text={badge.text}
              colorScheme={badge.colorScheme}
              />
              ))}
              </Stack>
            <Text>{recipe.keyIngredients}</Text>
        
            <Stack spacing={4} direction='row' align='center'>
            <Stack spacing={4} direction='row' align='center'>
  {(recipe.tiktokLink || recipe.instagramLink) && (
    <>
      {recipe.tiktokLink && (
        <a href={recipe.tiktokLink}><FaTiktok color="#000" size={24} /></a>
      )}
      {recipe.instagramLink && (
        <a href={recipe.instagramLink || '/'}><FaInstagram color="#000" size={24} /></a>
      )}
    </>
  )}
</Stack>

</Stack>
          </Stack>
        </CardBody>
      </Card>
            ))}
            </Stack>
    </ChakraProvider>
  );
}
