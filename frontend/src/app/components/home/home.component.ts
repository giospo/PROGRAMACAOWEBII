import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public não é necessariio
  public nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção `;
  idProduto: number = 123;
  precoProduto: number = 1.25;
  promocao: boolean = true;

  constructor() {
    /*this.anuncio = 'O' + this.nomeProduto + 'está em promoção';
    console.log('Nome do Produto: ', this.nomeProduto);
    console.log('Anuncio: ', this.anuncio);
    console.log('id ', this.idProduto);
    console.log('preço ', this.precoProduto);
    console.log('promoção ', this.promocao);
    var variavel1;
    let variavel2;
    const variavel3: number = 10;

    var idade = 15;
    console.log('Minha idade é', idade);

    const idade3 = 30;
    console.log('Minha idade é', idade3);

    função
    function imprimeIdade(){
    let idade2 = 20;
    console.log('Minha idade é', idade2);
    }

    imprimeIdade();

    function imprimeIdade2(){
    var idade2 = 25;
    console.log('Minha idade é', idade2);
    }

    //imprimeIdade2();

    function for2() {
       for(var x = 30 ; x <= 40; x++){
       console.log('Minha idade é dentro: ', x);
       }
       console.log('Minha idade é fora: ', x);
     }

     for2();

    let x = 12;
    function for4() {
      for(let x = 30 ; x <= 40; x++)  {
      console.log('Minha idade é dentro: ', x);
      }
      console.log('Minha idade é fora: ', x);
    }

    for4();*/





    // TAREFA AULA 11 - VARIÁVEIS

    //EXERCÍCIO 1
    /*
    var variavel = 0;
    var variavel = 10;
    console.log('Variável:', variavel);
    function funcao() {
      var outra_Variavel = 20;
      var outra_Variavel = 30;
      console.log('Outra variável:', outra_Variavel);
    }
    funcao()
    */

    //EXERCÍCIO 2
    /*
    let variavel = 0;
    let variavel1 = 10;
    console.log('Variável:', variavel);
    function funcao() {
      let outra_Variavel = 20;
      let outra_Variavel1 = 30;
      console.log('Outra variável:', outra_Variavel);
    }
    funcao()
    */

    //EXERCÍCIO 3
    /*
    var a = 10;
    let b = 20;
    function bar() {
      var a = 30;
      let b = 40;
      if (true) {
        var a = 50;
        let b = 60;
        console.log('Variável a dentro do if:', a);
        console.log('Variável b dentro do if:', b);
      }
      console.log('Variável a dentro da função:', a);
      console.log('Variável b dentro da função:', b);
    }
    bar();
    console.log('Variável a fora da função:', a);
    console.log('Variável b fora da função:', b);
    */

    //EXERCÍCIO 4
    /*
    let a = 1;
    function bar() {
      console.log('Variável a:', a);
      let b = 2;
      if (true) {
        var c = 3;
        let a = 4;
        console.log('Variável a dentro do if:', a);
        console.log('Variável b dentro do if:', b);
        console.log('Variável c dentro do if:', c);
      }
      console.log('Variável a fora da função:', a);
      console.log('Variável b fora da função:', b);
      console.log('Variável c fora da função:', c);
    }
    bar();
    */


    //EXERCÍCIO 5
    /*
    var a = 5;
    var b = 10;
    if (a = 5) {
      let a = 4;
      var b = 1;
      console.log('Variável a dentro do if: ', a);
      console.log('Variável b dentro do if: ', b);
    }
    console.log('Variável a fora do if:', a);
    console.log('variável b fora do if:', b);
    */

  }
  ngOnInit(): void {
  }

}
