import React from 'react';
import {
  Container,
  VStack,
  Input,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'6'}
          w={['full', '96']}
          m={'auto'}
          my={'10'}
        >
          <Heading>Welcome Back!</Heading>
          <Input
            type="email"
            placeholder="Email"
            focusBorderColor={'purple.500'}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            focusBorderColor={'purple.500'}
            required
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgotPassword'}>Forgot Password?</Link>
          </Button>
          <Button colorScheme={'purple'} type="submit">
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button colorScheme={'purple'} variant={'outline'}>
              <Link to={'/signUp'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
