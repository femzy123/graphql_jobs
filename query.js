import { gql } from "@apollo/client";


export const Jobs = gql`
  query {
        jobs {
          id
          title
          applyUrl
          locationNames
          remotes {
            name
          }
          company {
            name
            logoUrl
          }
          cities {
            name
          }
          commitment {
            title
          }
          tags {
            name
          }
        }
      }
`;