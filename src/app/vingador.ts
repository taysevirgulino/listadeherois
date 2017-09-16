export class Vingador {
    id: number;
    nome: string;
    pessoa: string;
    criador: string;
    descricao: string;
    foto: string;

    constructor(id: number, nome: string, pessoa?: string, criador?: string, descricao?: string, foto?: string) {
        this.id = id;
        this.nome = nome;
        this.pessoa = pessoa;
        this.criador = criador;
        this.descricao = descricao;
        this.foto = foto;
    }
}
