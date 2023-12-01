class pessoaCurrent {
constructor(nomePessoa, idade, email){
    this.nome = nomePessoa;
    this.idade = idade;
    this.email = email;
}
mensagemDeOla(){
    console.log(`nome : ${this.nome}`);
    console.log(`idade : ${this.idade}`);
    console.log(`email : ${this.email}`);
};

};

const pessoa1 = new pessoaCurrent("aaaaa", 12, "aaaa@gmail.com");
pessoa1.mensagemDeOla();