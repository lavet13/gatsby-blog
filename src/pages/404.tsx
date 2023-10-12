import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import type { RouteComponentProps } from '@reach/router';
import {
  Box,
  Code,
  Heading,
  Link as ChakraLink,
  Text,
  Button,
} from '@chakra-ui/react';

const NotFoundPage: React.FC<Partial<PageProps & RouteComponentProps>> = () => {
  return (
    <Box p={24} fontFamily='-apple-system, Roboto, sans-serif, serif'>
      <Heading as='h1' mt={0} mb={16} maxW='container.sm'>
        Page not found
      </Heading>
      <Text mb={12}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in{' '}
            <Code colorScheme='yellow' p={1} fontSize='lg' borderRadius='base'>
              src/pages/
            </Code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Button>
          <ChakraLink as={Link} to='/'>
            Go home
          </ChakraLink>
        </Button>
      </Text>
    </Box>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
