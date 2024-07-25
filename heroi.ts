class Heroi extends Personagem{
    
    comportamento: string

    constructor(
        nome: string,
        vida: number,
        forca: number,
        ataque: number,
        defesa: number,
        agilidade: number,
        magia: number,
        comportamento: string
    ){
        super(nome,vida, forca, ataque, defesa, agilidade, magia,)

        this.comportamento = comportamento
        
    }
    olhar(){
        console.log('Olhar Destemido!!!')

}
}