// En los arrays también existe la inferencia de datos. En el caso de abajo al no especificar el tipo de dato, TS nos lo pondrá automáticamente como un array de números. Si intentamos hacer un push de cualquier otro tipo de dato nos dará error.

(() => {
  let prices = [50, 100, 150];
  // prices.push('Bicicleta'); /* Daría error */
  // prices.push(false); /* Daría error */

  // Para darle un tipo de dato explícito (de números en este caso) a un array se haría así:
  let productPrices: number[] = [50, 100, 150];
  // Un array puede contener distintos tipos de datos, lo cual quedaría así:
  let newArray: (number | string | boolean)[] = [50, 'Hola'] /* No tiene que contener obligatoriamente todos los tipos de datos que se especifica sino que cabe la posibilidad de que esto ocurra */
})();
