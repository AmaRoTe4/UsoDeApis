openssl genrsa -out privada.key 2048
openssl req -new -key privada.key -subj "/C=AR/O=GASTON TORRES/CN=GETSOFT/serialNumber=CUIT 24456570387" -out pedido.csr
pause
