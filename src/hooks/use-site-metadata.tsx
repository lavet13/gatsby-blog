import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query Layout {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const data = useStaticQuery<Queries.LayoutQuery>(query);

  const siteMetadata = data.site!.siteMetadata!;

  return siteMetadata;
};
