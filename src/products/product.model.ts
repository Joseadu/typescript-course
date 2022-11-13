// Este archivo es la continuación del archivo 14-objects.ts
// Aquí vamos a definir todos los modelos que tengamos en el proyecto para que todo esté más claro y limpio
// Para que algo sea exportable se usa la palabra reservada 'export'. Luego en el archivo que queramos usarlo usamos la palabra reservada 'import'. De esta forma el código es mucho más reutilizable
export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
};
