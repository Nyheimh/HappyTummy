import { Badge, Stack } from "@chakra-ui/react";

export default function RecipeBadge({colorScheme = 'gray', text = 'Badge'}) {
  return (
    <Stack direction="row">
      <Badge colorScheme={colorScheme}>{text}</Badge>
    </Stack>
  );
}
