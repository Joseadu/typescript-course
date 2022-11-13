// La inferencia de datos funciona distinto con null y undefined. Si a un elemento le damos un valor null o undefined la inferencia de datos nos lo pondrá como tipo any. Para que un null o undefined tenga el mismo tipo de dato hay que especificarlo.
(() => {
  // myNull es tipo any y myNull2 es tipo null. Lo mismo pasaría con undefined
  let myNull = null;
  let myNull2: null = null;
})
