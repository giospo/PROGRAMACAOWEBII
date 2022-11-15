import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratis',
  templateUrl: './gratis.component.html',
  styleUrls: ['./gratis.component.css']
})
export class GratisComponent implements OnInit {

  email: string = '';
  mensagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensagem(): void {
    console.log('E-mail: ', this.email);
    console.log('E-mail: ', this.mensagem);
    alert('Enviado com Sucesso!')
  }
}
