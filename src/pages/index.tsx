import React from 'react';

import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Flex } from '@chakra-ui/react';
import SEO from '../components/seo.component';
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks';
import { NonNullableFields } from '../common/types/types';

const IndexPage: React.FC<PageProps<Queries.MaxImageQuery>> = props => {
  console.log({ props });

  const {
    data: { file },
  } = props;

  const image = getImage(file as NonNullableFields<typeof file>);

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
        gatsbyImageData(
          placeholder: NONE
          formats: [AUTO, WEBP]
          backgroundColor: "rgba(0, 0, 0, 0.2)"
        )
      }
    }
  }
`;

export const Head: HeadFC = () => {
  return <SEO title='Welcome to the Blog!' />;
};
