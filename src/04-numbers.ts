// Para especificar un tipo número a una variable se le pone ':number' justo después del nombre de dicha variable. En el caso de abajo productPrice tiene un tipo de dato inferido y customerAge lo tiene explícito.
// En ambos casos la variable puede ser reasignada
(() => {
  let productPrice = 100;
  productPrice = 50;

  let customerAge: number = 28;
  customerAge = 22;


  // Cuando queremos iniciar una variable sin asignarle valor pero queremos que tenga un tipo de dato específico hay que especificarlo si o si. En el caso contrario, al no tener valor no se va a inferir uno en específico ya que no se sabe qué tipo de dato va a almacenar (será de tipo 'any').
  // En el ejemplo de abajo no hay valor asignado a ninguna de las dos variables. La diferencia es que en productStock sabemos que sí o sí será de tipo number. En el caso de productColor entendemos que seguramente sea un string pero como no se especifica será tipo 'any';

  let productStock: number;
  let productColor;

})();
