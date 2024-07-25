abstract class Personagem{

    public nome: string
    public vida: number
    public nivel: number
    public forca: number
    public ataque: number
    public defesa: number
    public agilidade: number
    public magia: number

    constructor(
        nome: string,
        vida: number,
        forca: number,
        ataque: number,
        defesa: number,
        agilidade: number,
        magia: number
    ){

        this.nome = nome
        this.vida = vida
        this.nivel = 1
        this.forca = forca
        this.ataque = ataque
        this.defesa = defesa
        this.agilidade = agilidade
        this.magia = magia

    }

    abstract olhar():void

    public atacar():void{
        console.log('Atacando')
    }
    
}