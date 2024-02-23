import { Component } from '@angular/core';
//importamos la interfaz que creamos
import {Product} from './product.model';
import {Registro} from './register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//variables en el componente
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  //en la carpeta assets se coloca la carpeta de imagenes
  //aqui usamos el tipado de product de nuestra interfaz
  //solamente se pueden iterar arrays no objetos
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];
  names:string[]= ["otamendi","julian","di maria","messi"];
  emojis:string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newEmoji:string="";
  newName="";
  //para cualquier valor
  cualquier:any[] = [];
  public name = 'Nicolas';
  //public por defecto si es private nos salta el error en nuestro html
  age = 18;
  img = "https://source.unsplash.com/random";
  btnDisabled = true;
  //es lo mismo pero con objectos
  public person = {
    name : 'Nicolas',
    //public por defecto si es private nos salta el error en nuestro html
    age : 18,
    avatar : "https://source.unsplash.com/random"
  }
  box = {
    width:100,
    height:100,
    background : 'red'
  }
  pais = {
    nombre : "Bolivia",
    continente : "Sudamerica"
  }
  register:Registro={
    name:'',
    email:'',
    password:''
  }
  public toggleButton():boolean {
    this.btnDisabled = !this.btnDisabled;
    return this.btnDisabled;
  }
  increaseAge() {
    this.person.age += 2;
  }
  //capturamos el evento
  onScroll(event:Event) {
    console.log(event);
    //as  : convierte un objeto a otro
    const element = event.target as HTMLElement;
    //desde la punta del elemento hasta donde se hace scroll
    console.log(element.scrollTop);
  }
  seleccionado(event:Event) {
    console.log(event);
    const elemento = event.target as HTMLInputElement;
    const seleccion = elemento.value.substring(2, 7);
    console.log(seleccion);
  }
  keyUp(event:Event) {
    console.log(event);
  }
  addName(event:Event) {
    this.names.push(this.newName);
    this.newName='';
  }
  removeE(index:number) {
    this.names.splice(index,1);
  }
  delete(index:number) {
    this.emojis.splice(index,1);
    console.log(this.emojis);
  }
  agregar() {
    this.emojis.push(this.newEmoji);
  }
  onRegister():void {
    console.log(this.register);
  }
  widthImg = 10;

  mostrar(e : string) {
    console.log(e);
  }
}
