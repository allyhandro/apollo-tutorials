import { TrackAPI } from './datasources/track-api';
export const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
  }, 

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
        return dataSources.TrackAPI.getAuthor(authorId);
    }
  }
};
