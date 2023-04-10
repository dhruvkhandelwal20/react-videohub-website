import React from 'react';
import {
  Box,
  Button,
  Stack,
  HStack,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} px={'4'} width={'full'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe Us for more Updates!
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              type={'email'}
              placeholder={'Enter your Email Id...'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              borderRadius={'0 20px 20px 0'}
              colorScheme={'purple'}
              variant={'ghost'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a
              href="https://www.linkedin.com/in/dhruv-khandelwal-73b8a419a/"
              target="blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://twitter.com/khDhruv" target="blank">
              Twitter
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a href="https://github.com/dhruvkhandelwal20" target="blank">
              GitHub
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
