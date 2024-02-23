/**Es para exportar la interfaz y que se pueda usar en app.component
 * las interfaces sirven para definir variables y metodos que se usaran en un componente
*/
export interface Product {
  name:string;
  price:number;
  image:string;
  //el ? sirve para decir que este dato es opcional
  category?:string;
}
