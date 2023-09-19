// TODO: create a GraphQL server that can:
//  - Receive an incoming GraphQL query from our client
//  - Validate that query against our newly created schema
//  - Populate the queried schema fields with mocked data
//  - Return the populated fields as a response

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

// mocked data we are instructing Apollo server to populate as placeholders 
// in every queried schema field returned by our server
const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
        id: () => "abc-uuid-12tc",
        title: () => "To Apollo, and Beyond!", 
        author: () => {
            return {
                name: "Buzz WhiteEar",
                photo:
                    "https://i.pinimg.com/1200x/a5/27/03/a527035cd5afd7d366f30ddef3510fa2.jpg"
            };
        },
        thumbnail: () =>
            "https://bdc2020.o0bc.com/wp-content/uploads/2022/10/slide6-6342be793a8c7-500x432.jpg",
        length: () => 1210,
        modulesCount: () => 6,
    })
}

async function startApolloServer() {
  const server = new ApolloServer({ 
    schema: addMocksToSchema({
        schema: makeExecutableSchema({ typeDefs }),
        mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
        Server is running!
        Query at ${url}
    `);
}

startApolloServer();
