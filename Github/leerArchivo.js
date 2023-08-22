//import { subirFile } from "./funciones/subirFile.js";

const fileInput = document.getElementById("fileInput");
const resultDiv = document.getElementById("result");

fileInput.addEventListener("change", (e) => {
  const selectedFile = fileInput.files[0];

  if (selectedFile) {
    if (selectedFile.type === "application/json") {
      const fileReader = new FileReader();

      fileReader.onload = async function (event) {
        const fileContent = event.target.result;
        const fileName = selectedFile.name;

        //await subirFile(
        //fileContent,
        //fileName
        //)
      };

      fileReader.readAsText(selectedFile);
    } else {
      resultDiv.innerHTML =
        "El archivo seleccionado no es un archivo JSON válido.";
    }
  } else {
    resultDiv.innerHTML = "No se seleccionó ningún archivo.";
  }
});
