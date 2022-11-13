// Los union types nos permite decirle a un elemento que podrá recibir diferentes tipos de datos
(() => {
  let myDynamicVar: string | number;
  myDynamicVar = 'Jose';
  myDynamicVar = 8;

  function myFunction (myVar: string | boolean) {

  }
  myFunction('Díaz');
  myFunction(true);
})();
