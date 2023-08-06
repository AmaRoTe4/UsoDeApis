import FB from "fb"; // or,
//import { FACEBOOK, FacebookApiException } from "fb";

const pruebaPOST = () => {
  try {
    FB.setAccessToken(ACCESS_TOKEN);

    FB.api(`/${PRODUCT_CATALOG_ID}/product_feeds`, "POST", function (response) {
      if (response && !response.error) {
        console.log(response);
      }
      console.log(response);
    });
  } catch (error) {
    console.error(error);
  }
};

const pruebaGET = () => {
  try {
    FB.api(
      `/${PRODUCT_CATALOG_ID}/check_batch_request_status`,
      function (response) {
        if (response && !response.error) {
        }
        console.log(response);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const ProductoFeedId = () => {
  FB.api(
    `/${PRODUCT_FEED_ID}/uploads`,
    "POST",
    {
      url: "https://sdnsoftware.com.ar",
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
      console.log(response)
    }
  );
};

const probandoGETSimple = async () => {
  const response = await fetch(
    `https://graph.facebook.com/USER-ID?access_token=${ACCESS - TOKEN}`,
    {
      "Content-Type": "JSON",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log(error));
};

ProductoFeedId()
//pruebaPOST();
//probandoGETSimple();
//pruebaGET()
