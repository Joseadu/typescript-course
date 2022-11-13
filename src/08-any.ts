// También existe la posibilidad de decirle a TS que un elemento podrá contener un dato de cualquier tipo diciéndole que dicho elemento será de tipo 'any'. De esta forma estamos 'quitando' a TS el poder tipar un dato, es por decir de alguna forma que ese elemento trabajará como si lo hiciésemos en JS Vanilla.
(() => {
  let myDynamicVar: any;
  myDynamicVar = 'Jose';
  myDynamicVar = 5;
  myDynamicVar = true;
  myDynamicVar = null;
  myDynamicVar = {};
})();

// Por norma general no se aconseja usar el tipo any ya que le estamos quitando a un elemento el superpoder que da TS de tiparle los datos
// any puede ser muy útil a la hora de migrar un proyecto desde JS Vanilla a TS ya que en el proceso de migración pueden haber partes del proyecto que den error y que sea estrictamente necesario que funcione. Luego de migrar el proyecto lo aconsejable es tipar todos esos datos a los que le hayamos aplicado el any durante el proceso.
