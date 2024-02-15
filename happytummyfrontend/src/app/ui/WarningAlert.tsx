import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

<Alert
  status="success"
  variant="subtle"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  textAlign="center"
  height="200px"
>
  <AlertIcon boxSize="40px" mr={0} />
  <AlertTitle mt={4} mb={1} fontSize="lg">
    Warning
  </AlertTitle>
  <AlertDescription maxWidth="sm">
    I would consult a doctor since all these recipes are based off of my family.
  </AlertDescription>
</Alert>;
