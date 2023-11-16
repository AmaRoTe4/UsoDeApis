const Main = async () => {
  const path = "https://apis.datos.gob.ar/georef/api/provincias";
  let datos = [];

  const cargarDatos = async () => {
    await fetch(path)
      .then((response) => response.json())
      .then((data) => {
        if (data == null) return;
        data?.provincias?.map((n) => datos.push(n));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  await cargarDatos();

  if (datos == null) return;

  const provincias = datos?.map((n) => {
    return {
      id: n.id,
      nombre: n.nombre,
    };
  });

  console.log(provincias);
};

Main();
