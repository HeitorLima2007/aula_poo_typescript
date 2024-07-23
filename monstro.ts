class Monstro{

    public nome: string = ''
    forca: number = 100 
    nivel: number = 1
    fraqueza: string
    raca: string = ''

    constructor( nome: string, forca:number, fraqueza: string, raca:string){

        this.nome = nome
        this.forca = forca
        this.nivel = 10
        this.fraqueza = fraqueza
        this.raca = raca
    }
    olharAssustador(){
        console.log("Olhar Assustador!!!")
    }
}

let monstro1 = new Monstro('Jack',200,'luz','esqueleto')
console.log(monstro1)

let monstro2 = new Monstro('bangon',100,'água','golen')
console.log(monstro2)