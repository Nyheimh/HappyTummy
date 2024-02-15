import { Badge, Stack } from "@chakra-ui/react";

export default function RecipeBadge() {
  return (
    <Stack direction="row">
      <Badge>Chicken</Badge>
      <Badge colorScheme="green">Veggies</Badge>
      <Badge colorScheme="red">Spicy</Badge>
      <Badge colorScheme="purple">New</Badge>
      <Badge colorScheme="gray">Dairy</Badge>
    </Stack>
  );
}
