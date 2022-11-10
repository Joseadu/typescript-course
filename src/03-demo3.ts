// TS al leer todos los archivos al mismo tiempo en tiempo real, si en distintos archivos tenemos variables con el mismo nombre dentro del mismo scope nos va a dar error. Para evitar eso a partir de ahora vamos a trabajar dentro de funciones anónimas autoejecutables. Esto sirve para encapsular las variables dentro de un scope y no tener conflictos entre archivos.

// Estas variables de abajo están declaradas también en el archivo 03-typing.ts pero en este caso al estar dentro de una función tiene un scope diferente por lo tanto no hay conflictos.
(() => {
  let myProductName = 'Producto 1';
  let myProductPrice = 50;
})();
