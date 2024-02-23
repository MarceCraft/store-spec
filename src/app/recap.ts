"use strict";
//obligar el tipo de dato
const userName:string | number =6;
const sum = (a:number,b:number) => a+b;
//se le especifica que retornara
const res = (a:number,b:number):number|string => a - b;
let a:number|string = res(5,7);
sum(2,6);
//lo mismo que en java
class Person {
  private age:number|boolean;
  private lastName:string;
  constructor(age:number|boolean,  lastName:string) {
    this.age = age;
    this.lastName = lastName;
  }
}
class Billete {
  //se ahora lo mismo que el anterior
  constructor(private cantidad:number|Person,public name:String) {}
}
const persona:Person = new Person(true,"Osorio");

