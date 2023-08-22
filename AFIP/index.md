# Conceptos basicos:

```
dependiendo que estamos vendiendo el iva puede variar, pero en la mayoria es del 21%. 
---en si el precio mas el iva es el precio de facturaciones---
```

## Tipos de contribuyentes:
    `Responsable inscripto`       -> mayores ingresos 
    `monotributista`              -> menores ingresos (menos tramites)
    `exentos y no responsables`   -> no declaran casi, pero se el combra el iva al comprar

## Tipos de facturas: 
    `A`     ->  De responsable inscripto a responsable inscripto (el iva separa, para liquidacion inpositiva)
    `B`     ->  De responsable inscripto a otros contribuyentes 
                (no discrimina iva, va todo junto , valor final = valor + iva)
    `C`     ->  Monotributista a todos 
                (no discrimina iva, va todo junto , valor final = valor + iva)

### Siempre se emiten 2 facturas:
    La factura original es para el comprador
    La factura duplicada para el vendedor

## Partes de una factura: en orden ⬇️
    Encabezado: Datos del vendedor
    Fechas
    Datos del comprador, incluyendo su categoria
    
    Productos:
    Tipo (A)        Código | Descripción | Cantidad | P. Unitario (sin iva) | Iva | Importe (cantidad * p. uni)
    <!-- ver esta (B) -->
    Tipo (B)        Código | Descripción | Cantidad | P. Unitario (con iva) | Iva | Importe (cantidad * p. uni)
    
    Totales:
    Importe neto gravado:   $ (sumario de todos los importes)
    IVA 21%:                $ (el porcentaje del iva 21%)
    IVA 10.5%:              $ (el porcentaje del iva 10.5%)
    Importe otros tributos: $ (?)
    Total:                  $ (Sumatoria de importe neto mas iva 21 mas iva 10.5)

## Factura tipo C (casi ticket):
    Nombre y apellido o razón social
    CUIT:       (clave unica de identificacion tributaria)
    ING. BR:    (Numero de ingresos brutos)
    Domicilio comercial
    P.V.        (codigo asignado a cada punto de venta)
    NO. T. num  (Numero de ticket, num consecutiva y progresica de cada operacion)
    Fecha y hora de emisióń
    Productos (codigo, nombre, unidad, precio) (lo que pinte)
    Detalle de la operación (importe total y parcial)
    logotipo fiscal. numero de registro del controlado fiscal (3 primeros caracteres identificatorios del fabricante marca y modelo del C.F el numero de serie de no mas de 7 digitos es asignado por el fabricante)

## Remito:
    Es la factura que acompaña a la mercaderia en el momento del vieja, se hace por triplicado, este es firmado por el comprador y registrado por el vendedor

### Facturas por cada grupo:
    `Responsable inscripto`       ->  A -> A , B -> !A
    `monotributista`              ->  C -> Cualquiera
    `exentos y no responsables`   -> 


## Nota de débito y de crédito
    video: https://youtu.be/bL0lVqDDWIA
    `Nota de débito: `
        se usa para agregar deuda al cliente
        se usa para:    
            Error en menos en la facturación
            Intereses por pago fuera de término
            gastos de fletes
            gestos bancarios, etc
            correciones en general
        siempre las dos emisiones 
    `Nota de credito: `
        se usa para restar deuda al cliente
        se emite por:
            error en mas en la facturacion
            devolucion de mercaderia parcial o total
            diferencia en menos de la cantidad
            otorgamiento de bonificaciones o descuentos
        siempre las dos emisiones
    `Nota de credito bancaria: `

## Categorias de IVA:
    video: https://youtu.be/tKXHTX9pOzA
    `Responsable inscripto`       ->  
    `monotributista`              ->  
    `exentos y no responsables`   -> 