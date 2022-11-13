(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('p1', new Date, 12, 'XL')

  // Las funciones que no retornan nada serán de tipo void
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach ( (item) => {
      total += item;
    });
    return total;
  }
  const resp = calcTotal([1, 2, 3, 4, 5])
  console.log(resp);
})();
