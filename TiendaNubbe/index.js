const id_store = "3493766";
const apiUrl = `https://api.tiendanube.com/v1/${id_store}/products`;
const apiKey = "9eb5777d8e936c9b1341e07d40f576cc58a53e9c";

const productData = [
  {
    images: [
      {
        src: "https://http2.mlstatic.com/D_NQ_NP_823713-MLA46192402341_052021-O.webp",
      },
    ],
    name: {
      en: "Termo Stanley Green en",
      es: "Termo Stanley Verde es",
      pt: "Termo Stanley Verde pt",
    },
    video_url: "",
    variants: [
      {
        price: "8000.00",
        stock_management: true,
        stock: 12,
        weight: "",
        cost: "2000.00",
      },
    ],
    categories: [19920558],
  },
  {
    images: [
      {
        src: "https://matekaa.com/wp-content/uploads/2023/02/termo-stanley-naranja-1-litro.jpg",
      },
    ],
    name: {
      en: "Termo Stanley Orange en",
      es: "Termo Stanley Naranja es",
      pt: "Termo Stanley Naranja pt",
    },
    video_url: "",
    variants: [
      {
        price: "8000.00",
        stock_management: true,
        stock: 12,
        weight: "",
        cost: "2000.00",
      },
    ],
    categories: [19920558],
  }
];

const getAll = async () => {
  await fetch(apiUrl, {
    headers: {
      Authentication: `bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent":
        "Usando La API (sincronizacion.de.datos.del.norte@gmail.com)",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

const Create = async (producto) => {
  await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authentication: `bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent":
        "Usando La API (sincronizacion.de.datos.del.norte@gmail.com)",
    },
    body: JSON.stringify(producto),
  })
    .then((response) => response.json())
    .then((data) => console.log(true))
    .catch((error) => console.error(error));
};

const CretaeMany = async (productos) => {
  await Promise.all(productos.map((producto) => Create(producto)));
};

//Create();
//getAll();
CretaeMany(productData);
