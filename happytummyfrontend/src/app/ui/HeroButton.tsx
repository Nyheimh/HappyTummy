import React from 'react';
import { Button, Stack } from '@chakra-ui/react';

const HeroButton = ({ colorScheme = 'black', size = 'md', text = 'Button' }) => {
  return (
    <Stack spacing={4} direction='row' align='center'>
            <Button colorScheme={colorScheme} size={size}>
                {text}
            </Button>
    </Stack>
  );
};

export default HeroButton;
