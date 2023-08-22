import { octokit_funcion } from "../api/index.js";
import { REPOOWNER } from "../const.js"

export const getDataForContent = async (repo) => {
  await octokit_funcion
    .request("GET /repos/{owner}/{repo}/contents", {
      owner: REPOOWNER,
      repo,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
