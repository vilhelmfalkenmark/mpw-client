import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getTokenCookie } from "utils/helpers/cookies";

const HTTP_END_POINT = process.env.HTTP_END_POINT || "http://localhost:5000";
const cache = new InMemoryCache();

// Create an http link:
const httpLink = new HttpLink({
  uri: `${HTTP_END_POINT}/api`,
  useGETForQueries: true,
  headers: {
    token: getTokenCookie() || "Ingen token"
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

export default client;
