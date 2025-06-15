import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-cadastro-tarefas',
  imports: [
    CommonModule
  ],
  templateUrl: './cadastro-tarefas.html',
  styleUrl: './cadastro-tarefas.css'
})
export class CadastroTarefasComponent {




  //Atributos da classe
 categorias : any[] = []; //array de objetos vazio


  //injeção de dependência do HttpClient
  http = inject(HttpClient);


  //função executada quando o componente é inicializado
  ngOnInit() {
    //fazendo uma requisição HTTP GET para consultar as categorias
    this.http.get('http://localhost:8081/api/v1/categorias')
      .subscribe((response) => { //capturando a resposta da API
        //armazenando a resposta obtida da API no atributo da classe
     this.categorias = response as any[];
      });
  }
}
