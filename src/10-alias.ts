// Cuando tenemos una variable o elemento que puede recibir varios tipos de datos (union types) y dicho elemento lo vamos a usar varias veces en el código, es un poco tedioso escribir los union types todo el rato, además que si en algún momento necesitamos cambiar esos tipos de datos que puede recibir hay que cambiarlo en todas las líneas que lo hayamos usado. Para eso existen los alias, con ellos se puede reusar todo ese código. En este caso creamos userID y lo reutilizamos todas las veces que hagan falta, y empieza con la palabra reservada de TS 'type'.
(() => {
  type UserID = number | string | boolean;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  // Literal types. Con esto podemos crear nuestros propios tipos de datos. En el caso de abajo shirtSizes solo podrá recibir los valores S, M, L y XL.
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSizes: Sizes;
  shirtSizes = 'M';
  shirtSizes = 'L';
  shirtSizes = 'XL';
  // shirtSizes = 'XXL'; /* Esto daría error porque no está dentro de 'Sizes' */
})();
