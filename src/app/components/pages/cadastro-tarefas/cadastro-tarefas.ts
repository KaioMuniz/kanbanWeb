import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.html',
  styleUrls: ['./cadastro-tarefas.css']
})
export class CadastroTarefas implements OnInit {

  // Variáveis para armazenar as categorias e a tarefa
  categorias: any[] = [];
  task = {
    titulo: '',
    dataHora: '',
    finalizado: false,
    categoria: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Consultar as categorias na API
    this.http.get('http://localhost:8081/api/v1/categorias')
      .subscribe((response) => {
        this.categorias = response as any[];
      });
  }

  onSubmit() {
    // Enviar a tarefa para a API
    this.http.post('http://localhost:8081/api/v1/tarefas-kanban', this.task)
      .subscribe(
        (response) => {
          console.log('Tarefa cadastrada com sucesso', response);
        },
        (error) => {
          console.error('Erro ao cadastrar tarefa', error);
        }
      );
  }
}
