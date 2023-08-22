import { Octokit } from "octokit";
import fetch from "node-fetch";
import { ACCESS_TOKEN } from "../const.js";

export const octokit_funcion = new Octokit({
  auth: ACCESS_TOKEN,
  request: {
    fetch: fetch,
  },
});
