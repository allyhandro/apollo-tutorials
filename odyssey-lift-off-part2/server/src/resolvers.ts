import { TrackAPI } from './datasources/track-api';
// import generated resolver types from generated types.ts
import { Resolvers } from "./types"

export const resolvers: Resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  }, 

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
        return dataSources.trackAPI.getAuthor(authorId);
    }
  }
};
