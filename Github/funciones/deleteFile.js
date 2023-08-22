import { ACCESS_TOKEN, REPOOWNER, REPONAME } from "../const.js";
import fetch from "node-fetch";

export const deleteFile = async (filePath) => {
  const url = `https://api.github.com/repos/${REPOOWNER}/${REPONAME}/contents/${filePath}`;

  await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((fileData) => {
      const deletePayload = {
        message: "Eliminando archivo",
        sha: fileData.sha,
      };

      return fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deletePayload),
      });
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("Archivo eliminado.");
      } else {
        console.error("Error al eliminar el archivo:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error al eliminar el archivo:", error);
    });
};
