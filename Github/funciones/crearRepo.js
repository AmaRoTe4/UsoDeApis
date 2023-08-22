import { octokit_funcion } from "../api/index.js";
import { adaptador_text } from "../text.js";

export const CrearRepo = async (name, description = "", privacidad = false) => {
  await octokit_funcion.request("POST /user/repos", {
    name: adaptador_text(name),
    description,
    homepage: "https://github.com",
    'private': privacidad,
    is_template: true,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};
