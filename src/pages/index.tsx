import React from 'react';

import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Flex } from '@chakra-ui/react';
import SEO from '../components/seo.component';

const IndexPage: React.FC<PageProps<Queries.MaxImageQuery>> = ({ data }) => {
  const image = getImage(data.file!.childImageSharp);

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
          formats: [AUTO, WEBP, AVIF]
          backgroundColor: "rgba(0, 0, 0, 0.2)"
        )
      }
    }
  }
`;

export const Head: HeadFC = () => {
  return <SEO title='Welcome to the Blog!' />;
};
