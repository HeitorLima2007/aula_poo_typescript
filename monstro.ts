class Monstro extends Personagem{


    fraqueza: string

    constructor(
        nome: string,
        vida: number,
        forca: number,
        ataque: number,
        defesa: number,
        agilidade: number,
        magia: number,
        fraqueza: string
    ){
        super(nome, vida, forca, ataque, defesa, agilidade, magia)

        this.fraqueza = fraqueza
    }
    olhar(){
        console.log("Olhar Assustador!!!")
    }
}