const Main = async () => {
  const id_provincia = "82";
  const id_departamento = "82049";
  const path = `https://apis.datos.gob.ar/georef/api/localidades?provincia=${id_provincia}&departamento=${id_departamento}&max=23`;
  let datos = [];

  const cargarDatos = async () => {
    await fetch(path)
      .then((response) => response.json())
      .then((data) => {
        if (data == null) return;
        data?.localidades?.map((n) => datos.push(n));
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
