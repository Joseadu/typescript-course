// Cuando necesitamos llamar una función con un objeto como argumento, debemos especificar en los parámetros qué tipo de información vamos a recibir. Para ello podemos usar la siguiente sintaxis la cual especifica que recibiremos un objeto al que lo nombraremos 'data:' en este caso y entre llaves se especifica los datos a recibir con su respectivo tipado
(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }

  login({
    email: 'hello@joseadu.com',
    password: 2340942
  })

  // En el siguiente ejemplo por ahora se dejará el array de productos como any
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any = [];
  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }
  addProduct({
    title: 'Producto 1',
    createdAt: new Date(),
    stock: 50
  })
})();
