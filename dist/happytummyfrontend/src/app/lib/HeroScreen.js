"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const HeroButton_1 = require("../ui/HeroButton");
const link_1 = require("next/link");
const HeroScreen = () => {
    return (<react_1.Container maxW={'7xl'}>
      <react_1.Stack align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: 'column', md: 'row' }}>
        <react_1.Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <react_1.Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <react_1.Text as={'span'} position={'relative'} _after={{
            content: "''",
            width: 'full',
            height: '20%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'cyan.400',
            zIndex: -1,
        }}>
              Happy Tummy
            </react_1.Text>
            <br />
            <react_1.Text as={'span'} color={'cyan.400'}>
            Simplicity for Yum
            </react_1.Text>
            <react_1.Stack spacing={4} direction='row' align='center' marginTop={5}>
              <link_1.default href='/infant'>
            <HeroButton_1.default colorScheme="cyan" size="md" text="Infant"/>
              </link_1.default>
              <link_1.default href='/adult'>
            <HeroButton_1.default colorScheme="cyan" size="md" text="Adult"/>
              </link_1.default>
              <link_1.default href='/beverages'>
            <HeroButton_1.default colorScheme="cyan" size="md" text="Beverages"/>
              </link_1.default>
            </react_1.Stack>
          </react_1.Heading>
        </react_1.Stack>
        <react_1.Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
          <react_1.Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
            <react_1.Image alt={'Hero Image'} fit={'cover'} align={'center'} w={'100%'} h={'100%'} src={'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg'}/>
          </react_1.Box>
        </react_1.Flex>
      </react_1.Stack>
    </react_1.Container>);
};
exports.default = HeroScreen;
//# sourceMappingURL=HeroScreen.js.map