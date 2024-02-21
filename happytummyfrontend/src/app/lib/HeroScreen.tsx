import { Container, Stack, Flex, Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import HeroButton from "../ui/HeroButton";
import Link from "next/link";


const HeroScreen = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={ { base: 8, md: 10 } }
        py={ { base: 20, md: 28 } }
        direction={ { base: 'column', md: 'row' } }>
        <Stack flex={1} spacing={ { base: 5, md: 10 } }>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={ { base: '3xl', sm: '4xl', lg: '6xl' } }>
            <Text
              as={'span'}
              position={'relative'}
              _after={ {
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'cyan.400',
                zIndex: -1,
              } }>
              Happy Tummy
            </Text>
            <br />
            <Text as={'span'} color={'cyan.400'}>
            Simplicity for Yum
            </Text>
            <Stack spacing={4} direction='row' align='center' marginTop={5}>
              <Link href='/infant' >
            <HeroButton colorScheme="cyan" size="md" text="Infant" />
              </Link>
              <Link href='/adult'>
            <HeroButton  colorScheme="cyan" size="md" text="Adult" />
              </Link>
              <Link href='/beverages'>
            <HeroButton  colorScheme="cyan" size="md" text="Beverages" />
              </Link>
            </Stack>
          </Heading>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export default HeroScreen;