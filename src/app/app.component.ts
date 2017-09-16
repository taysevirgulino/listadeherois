import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    description: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador = new Vingador(0, '', '', '', '', '');
    novo: Vingador = new Vingador(0, '', '', '', '', '');
    vingadorEditar: any = new Vingador(0, '', '', '', '', '');

    constructor() {
        this.title = 'Lista de heróis';
        this.description = 'Os Vingadores (Avengers no original em inglês) são um grupo de super-heróis de história em quadrinhos publicados nos Estados Unidos pela editora Marvel Comics. O grupo também aparece em adaptações da Marvel para cinema, desenho animado e videogames.(Wikipedia)';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
            new Vingador(4, 'Deadpool', 'Wade Wilson'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton'),
            new Vingador(6, 'Homem Aranha', 'Peter Parker', 'Stan Lee e Steve Ditko', 'O Homem-Aranha é um dos super-heróis mais populares e mais bem sucedidos comercialmente.')
        ];
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrarHeroi(): void {
        

    }
    
    removerHeroi(): void{ 
        var posicao = this.vingadores.indexOf(this.selecionado);
        this.vingadores.splice(posicao, 1);
        this.selecionado = new Vingador(0, '', '', '', '', '');
    }

    editarHeroi(){
        this.vingadorEditar = this.selecionado;     
    }

    onSubmit(){
        if(this.selecionado.id != 0){
            var posicao = this.vingadores.indexOf(this.selecionado);
            this.vingadores[posicao] = this.vingadorEditar;
            this.vingadorEditar = new Vingador(0, '', '', '', '', '');
        }
        else{
            const novoId: number = this.vingadores.length + 1;
            this.vingadores.push(new Vingador(novoId, this.vingadorEditar.nome, this.vingadorEditar.pessoa, this.vingadorEditar.criador, this.vingadorEditar.descricao, this.vingadorEditar.foto));
            this.vingadorEditar = new Vingador(0, '', '', '', '', '');
        }        
        
    }

    onClear(){
        this.vingadorEditar = new Vingador(0, '', '', '', '', '');
        this.novo = new Vingador(0, '', '', '', '', '');
    }
}
