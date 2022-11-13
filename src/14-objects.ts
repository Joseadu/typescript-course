// TS también es muy útil para definir una estructura para los objetos. También usa la palabra reservada 'type' y el objetivo es el mismo, reutilizar código. PAra este ejemplo usaremos el código del archivo 13-function-objects.ts
(() => {
  // En el siguiente ejemplo por ahora se dejará el array de productos como any
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };
  // En este caso podemos usar Product como tipo de dato. Por ejemplo en el array de products podemos especificar que almacenará un array compuesto por un array de Product y solo podrá contener atributos que hayamos definido en el tipo de objeto
  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  };
  addProduct({
    title: 'Producto 1',
    createdAt: new Date(),
    stock: 50
  })
})();
