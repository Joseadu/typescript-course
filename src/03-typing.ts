// El tipo inferido es el tipo de dato que TS asigna por defecto a una variable si no especificamos se especifica. En el caso de abajo no se especifica el tipo de dato pero si intentamos reasignar (por ejemplo myProductName a un número) a un valor con un tipo de dato distinto nos saldrá una alerta diciendo que el ripo de dato original era otro.
let myProductName = 'Producto 1';
let myProductPrice = 50;

// myProductName = 25;   /* Esto dará error  */


// En el caso de las constantes si no especificamos el tipo de dato TS tampoco se lo va a inferir por nosotros, ya que al ser una constante no va a poder ser reasignada
const myProductstock = 1000;
