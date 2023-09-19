import { CodegenConfig } from '@graphql-codegen/cli';
// config file for graphql-codegen

const config = {
    // where our graphqlServer is running
    schema: "http://localhost:4000",
    // which frontend files it should scan to find gQL operations used
    documents: ["src/**/*.tsx"],
    // where it should put generated code
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
};

export default config;

