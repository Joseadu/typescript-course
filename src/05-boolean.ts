// Al igual que con los números y los strings, si definimos una variable con true o false sin especificar el tipo de dato, TS lo va a inferir como tal.
(() => {
  let isEnable = true;
  // isEnable = 'Hola'; /* Esto daría error */

  //Así se definiría una variable con un tipo de dato boolean esplícito
  let isNew: boolean = true;

  // El tipo de dato no solo interfiere a la hora de hacer una reasignación sino que también tiene en cuenta el retorno de un valor por ejemplo en un condicional. Si definimos una variable como boolean pero el retorno de un condicional no lo es también dará error como por ejemplo:
  // isNew = true ? true : 'false' /* Uno de los posibles retornos es un string por lo tanto dará error */
})();
