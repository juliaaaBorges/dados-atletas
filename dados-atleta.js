class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
      if (this.idade > 8 && this.idade < 12)
       return "Infantil"
      if (this.idade > 11 && this.idade < 13)
      return "Juvenil" 
      if (this.idade > 13 && this.idade < 16)
      return "Intermediário"
      if (this.idade > 15 && this.idade < 31) 
      return "Adulto"
      else return "Sem categoria"
    }

    calculaIMC(){
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida(){
        let total = 0
        this.notas.forEach(function(nota){
            total = total + nota
        })
        return total / this.notas.length
    }

    obtemNomeAtleta(){
        return this.nome
    }

    obtemIdadeAtleta(){
        return this.idade
    }

    obtemPesoAtleta(){
        return this.peso
    }

    obtemNotasAtleta(){
        return this.notas
    }

    obtemCategoria(){
        return this.calculaCategoria()
    }

    obtemIMC(){
        return this.calculaIMC()
    }

    obtemMediaValida(){
        return this.calculaMediaValida()
    }
}