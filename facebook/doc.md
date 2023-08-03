claves:
id of catalogo: 801494884793734
access_token:
EAANjiJGTo30BO8pOtkdVFr8goYX8FP3R7ogU0jAHdSmAtPUVOX1HtJ5bycZBsneiALHU5SU0V9Nkr8wFPaeN9ZADZBJGXY0JCM2DSvGJUCiLCVcQ8GM72Ksp7pziZAMBqC4ZAqg9fwt0XB30V4NgVlz1MIn66AEirdkLXT8o5X6x5jCJHnEwaBFZAZAd7hAeCywWYEq9gIlciFvzjA3
id_user: 120040931170057

paginas:
pagina donde consegimos el token: https://developers.facebook.com/tools/explorer/
url donde tenemos las funciones: https://developers.facebook.com/me/
estender el token de accesso: https://developers.facebook.com/tools/debug/accesstoken/
pagina de depuracion: https://developers.facebook.com/tools/debug/accesstoken/?access_token=TOKEN
documentacion: https://developers.facebook.com/docs/marketing-api/catalog-batch

peticiones:
https://graph.facebook.com/<API_VERSION>/<CATALOG_ID>/items_batch?requests=<REQUESTS>
header: {
allow_upsert: boolean (false: desecha , true: hace todo)
item_type: enumeraciones ( DESTINATION, FLIGHT, HOME_LISTING, HOTEL, HOTEL_ROOM, PRODUCT_ITEM, VEHICLE. )
requests: objeto (json con las solicitudes)
requests.data: objeto: este al crear tiene que tener todo, al editar solo los modificados
requests.method: string (CREATE , UPDATE, DELETE)
}
objetos de productos:
{
title: string
"name": string
availability: string types {
in stock
out of stock
}
condition: string types {
new
refurbished
used
}
price: string types {
number.decimal(2) ARG ,(SUPONEMOS)
}
link: string types{
500 x 500
minus of 8mb
types: jpeg png
} exmple:http://www.jaspersmarket.com/products/shirt.jpg
brand: string type:{
max 100 character
name of the company
},
"url": "string",
"category": "Electrónica",
"product_type": "Electrodomésticos"
"description": "Este es un nuevo producto increíble.",
}

videos:
	configurar pagina: https://youtu.be/7GTRZkNjQQI