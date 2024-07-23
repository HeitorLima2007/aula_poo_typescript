class Heroi{
    
    public nome: string = ''
    forca: number =100
    nivel: number = 1

    constructor( nome: string, forca: number){

        this.nome = nome
        this.forca = forca
        this.nivel = 1

    }

    olharDestemido(){
        console.log('Olhar Destemido!!!')
    }
}

let heroi1 = new Heroi('Helion',700)
console.log(heroi1)
heroi1.nome = 'Veltron'
console.log(heroi1)

let heroi2 = new Heroi('Galia',600)
console.log(heroi2)
heroi2.nome = 'Belia'
heroi2.nivel = 1000
console.log(heroi2)
