const Main = async () => {
  const id_provincia = "82";
  const path = `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${id_provincia}&max=19`;
  let datos = [];

  const cargarDatos = async () => {
    await fetch(path)
      .then((response) => response.json())
      .then((data) => {
        if (data == null) return;
        data?.departamentos?.map((n) => datos.push(n));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  await cargarDatos();

  if (datos == null) return;

  const departamentos = datos?.map((n) => {
    return {
      id: n.id,
      nombre: n.nombre,
    };
  });

  console.log(departamentos);
};

Main();
