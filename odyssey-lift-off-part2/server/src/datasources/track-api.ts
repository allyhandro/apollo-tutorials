import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  GetTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }
}
