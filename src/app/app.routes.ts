
import { Routes } from '@angular/router';
import { CadastroTarefas } from './components/pages/cadastro-tarefas/cadastro-tarefas';
import { ConsultaTarefas } from './components/pages/consulta-tarefas/consulta-tarefas';
import { EdicaoTarefas } from './components/pages/edicao-tarefas/edicao-tarefas';


export const routes: Routes = [
    {
        path: 'pages/cadastro-tarefas', //rota
        component: CadastroTarefas //componente
    },
    {
        path: 'pages/consulta-tarefas', //rota
        component: ConsultaTarefas //componente
    },
    {
        path: 'pages/edicao-tarefas', //rota
        component: EdicaoTarefas //componente
    }
];
