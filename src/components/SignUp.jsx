import {
  Container,
  VStack,
  Input,
  Button,
  Heading,
  Avatar,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          m={'auto'}
          spacing={'5'}
          w={['full', '96']}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'98'} />
          <Input
            type={'text'}
            placeholder={'Name'}
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type={'email'}
            placeholder={'Email'}
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            focusBorderColor={'purple.500'}
            required
          />
          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?{'  '}
            <Button colorScheme={'purple'} variant={'outline'} type={'submit'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
