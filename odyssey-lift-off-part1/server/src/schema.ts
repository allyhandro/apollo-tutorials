import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Get the tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  """
  A Track is a learning course with a group of Modules
  that teaches about a specific topic
  """
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "the Author of a complete Track or Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
