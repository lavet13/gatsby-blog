import React from 'react';

import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Flex } from '@chakra-ui/react';

const IndexPage: React.FC<PageProps<Queries.MaxImageQuery>> = ({ data }) => {
  const image = getImage(data);

  return (
    <Flex justify='center'>
      {image && <GatsbyImage image={image} alt='' />}
    </Flex>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MaxImage {
    file(relativePath: { eq: "max.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
