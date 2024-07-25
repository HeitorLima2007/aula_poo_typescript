class Pet extends Personagem{

    public raca: string

    constructor(
        nome: string,
        vida: number,
        forca: number,
        ataque: number,
        defesa: number,
        agilidade: number,
        magia: number,
        raca: string
    ){
        super(nome, vida, forca, ataque, defesa, agilidade, magia)

        this.raca = raca
    }

    olhar(){
        console.log("Olhar alegre")
    }
}